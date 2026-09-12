import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { trail, type Crumb, type RouteMeta } from "./seo";

/**
 * Načítanie článkov blogu zo súborov content/blog/*.mdx.
 *
 * POZOR: tento modul číta zo súborového systému, preto sa smie importovať
 * len v server komponentoch, route handleroch a sitemap/llms.txt – nikdy
 * v súbore označenom 'use client'. (Preto je oddelený od src/lib/seo.ts,
 * ktorý používa aj hlavička a footer.)
 *
 * Nový článok = nový .mdx súbor s hlavičkou (frontmatter). Všetko ostatné –
 * metadata, canonical, sitemap, llms.txt, drobčeky, BlogPosting schema –
 * sa odvodí automaticky.
 */

export const BLOG_PATH = "/blog";
const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/** Kategórie kopírujú služby, aby mal každý článok kam interne odkazovať. */
export const CATEGORIES = {
    akvizicia: {
        label: "Akvizícia pacientov",
        servicePath: "/sluzby/akvizicia-a-vykonnostny-marketing",
    },
    "web-a-seo": {
        label: "Web a SEO",
        servicePath: "/sluzby/web-a-seo-pre-zdravotnictvo",
    },
    "email-a-databaza": {
        label: "E-mail a databáza pacientov",
        servicePath: "/sluzby/email-marketing-a-praca-s-datami",
    },
    "socialne-siete": {
        label: "Sociálne siete a osobná značka",
        servicePath: "/sluzby/socialne-siete-pre-lekarov-a-kliniky",
    },
    "ai-a-automatizacia": {
        label: "AI a automatizácia",
        servicePath: "/sluzby/umela-inteligencia-pre-ambulanciu",
    },
    "pripadove-studie": {
        label: "Prípadové štúdie",
        servicePath: "/vysledky",
    },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

/** Formát článku – určuje badge a spôsob zobrazenia. */
export const FORMATS = {
    studia: "Prípadová štúdia",
    otazka: "Otázka a odpoveď",
    navod: "Návod",
    data: "Dáta",
} as const;

export type PostFormat = keyof typeof FORMATS;

export type PostMetric = { label: string; value: string; description?: string };
export type PostFaq = { q: string; a: string };

export type PostMeta = {
    slug: string;
    title: string;
    /** 140–160 znakov – meta description aj perex vo výpise. */
    description: string;
    /** ISO dátum publikovania (YYYY-MM-DD). */
    date: string;
    /** ISO dátum poslednej úpravy – ak chýba, použije sa `date`. */
    updated: string;
    /** Kľúč v content/authors.ts. */
    author: string;
    category: CategorySlug;
    format: PostFormat;
    tags: string[];
    /** Metriky pre prípadové štúdie – zobrazia sa vo výpise aj v hlavičke článku. */
    metrics?: PostMetric[];
    /** Otázky a odpovede – vykreslia sa na konci článku a vygenerujú FAQPage schema. */
    faq?: PostFaq[];
    draft: boolean;
    readingMinutes: number;
    wordCount: number;
};

export type PostHeading = { id: string; text: string };

export type Post = PostMeta & {
    /** Surový MDX obsah bez frontmatter. */
    content: string;
    /** Nadpisy druhej úrovne – pre obsah článku. */
    headings: PostHeading[];
};

/** URL slug bez diakritiky – rovnaká funkcia sa používa pre id nadpisov aj obsah článku. */
export function slugify(text: string): string {
    return text
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function extractHeadings(markdown: string): PostHeading[] {
    const headings: PostHeading[] = [];
    let inCodeBlock = false;

    for (const line of markdown.split("\n")) {
        if (line.trim().startsWith("```")) inCodeBlock = !inCodeBlock;
        if (inCodeBlock) continue;
        const match = /^##\s+(.+?)\s*$/.exec(line);
        if (match) {
            const text = match[1].replace(/[*_`]/g, "");
            headings.push({ id: slugify(text), text });
        }
    }

    return headings;
}

function countWords(markdown: string): number {
    return markdown
        .replace(/<[^>]+>/g, " ")
        .replace(/[#*_>`|-]/g, " ")
        .split(/\s+/)
        .filter(Boolean).length;
}

function readPost(fileName: string): Post {
    const slug = fileName.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, fileName), "utf8");
    const { data, content } = matter(raw);

    const required = ["title", "description", "date", "author", "category", "format"];
    for (const key of required) {
        if (!data[key]) {
            throw new Error(`[blog] Článok "${fileName}" nemá vo frontmatter povinné pole "${key}"`);
        }
    }
    if (!(data.category in CATEGORIES)) {
        throw new Error(`[blog] Článok "${fileName}" má neznámu kategóriu "${data.category}"`);
    }
    if (!(data.format in FORMATS)) {
        throw new Error(`[blog] Článok "${fileName}" má neznámy formát "${data.format}"`);
    }

    const wordCount = countWords(content);
    const toIso = (value: unknown) =>
        value instanceof Date ? value.toISOString().slice(0, 10) : String(value);

    return {
        slug,
        title: String(data.title),
        description: String(data.description),
        date: toIso(data.date),
        updated: data.updated ? toIso(data.updated) : toIso(data.date),
        author: String(data.author),
        category: data.category as CategorySlug,
        format: data.format as PostFormat,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        metrics: Array.isArray(data.metrics) ? (data.metrics as PostMetric[]) : undefined,
        faq: Array.isArray(data.faq) ? (data.faq as PostFaq[]) : undefined,
        draft: Boolean(data.draft),
        readingMinutes: Math.max(1, Math.round(wordCount / 200)),
        wordCount,
        content,
        headings: extractHeadings(content),
    };
}

let cache: Post[] | null = null;

/** Všetky publikované články, najnovšie prvé. Koncepty (`draft: true`) sa nezobrazujú v produkcii. */
export function getAllPosts(): Post[] {
    if (cache) return cache;

    if (!fs.existsSync(CONTENT_DIR)) return [];

    const posts = fs
        .readdirSync(CONTENT_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map(readPost)
        .filter((post) => !post.draft || process.env.NODE_ENV !== "production")
        .sort((a, b) => (a.date < b.date ? 1 : -1));

    if (process.env.NODE_ENV === "production") cache = posts;
    return posts;
}

export function getPost(slug: string): Post | undefined {
    return getAllPosts().find((post) => post.slug === slug);
}

export function postPath(slug: string): string {
    return `${BLOG_PATH}/${slug}`;
}

/** RouteMeta v rovnakom tvare ako záznamy v ROUTES – pre metadata, sitemap a llms.txt. */
export function postRouteMeta(post: PostMeta): RouteMeta {
    return {
        label: post.title,
        title: post.title,
        description: post.description,
        parent: BLOG_PATH,
        priority: 0.7,
        changeFrequency: "monthly",
    };
}

/** Drobčeky: Domov → Blog → článok. */
export function postCrumbs(post: PostMeta): Crumb[] {
    return [...trail(BLOG_PATH), { name: post.title, path: postPath(post.slug) }];
}

/** Články z rovnakej kategórie (bez aktuálneho), doplnené najnovšími. */
export function relatedPosts(post: PostMeta, limit = 3): Post[] {
    const others = getAllPosts().filter((p) => p.slug !== post.slug);
    const sameCategory = others.filter((p) => p.category === post.category);
    const rest = others.filter((p) => p.category !== post.category);
    return [...sameCategory, ...rest].slice(0, limit);
}

export function formatDate(iso: string): string {
    return new Intl.DateTimeFormat("sk-SK", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(`${iso}T00:00:00`));
}
