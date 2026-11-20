import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { MDXComponents } from "mdx/types";
import { AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";
import { slugify } from "@/lib/blog";
import type { PostFaq, PostMetric } from "@/lib/blog";
import { AuditCheck } from "./AuditCheck";
import { OrdeviaSymbol, ORDEVIA_TEAL_LIGHT } from "@/components/OrdeviaLogo";
import { ORDEVIA } from "@/lib/seo";

/**
 * Komponenty dostupné v článkoch (content/blog/*.mdx).
 *
 * Všetko sú server komponenty bez animácií – obsah článku musí byť v HTML
 * pre vyhľadávače aj AI crawlery a nesmie závisieť od JavaScriptu.
 */

function textOf(children: React.ReactNode): string {
    if (typeof children === "string" || typeof children === "number") return String(children);
    if (Array.isArray(children)) return children.map(textOf).join("");
    if (React.isValidElement<{ children?: React.ReactNode }>(children)) {
        return textOf(children.props.children);
    }
    return "";
}

/** Nadpis s id, aby naň fungoval odkaz z obsahu článku. */
function Heading({ level, children }: { level: 2 | 3; children: React.ReactNode }) {
    const id = slugify(textOf(children));
    const Tag = level === 2 ? "h2" : "h3";
    return (
        <Tag id={id} className="scroll-mt-28">
            {children}
        </Tag>
    );
}

function Anchor({ href = "", children }: { href?: string; children?: React.ReactNode }) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
        return <Link href={href}>{children}</Link>;
    }
    return (
        <a href={href} target="_blank" rel="noopener">
            {children}
        </a>
    );
}

/* ───────────── Vlastné bloky pre články ───────────── */

type CalloutKind = "tip" | "warning" | "answer";

const CALLOUT: Record<CalloutKind, { icon: React.ReactNode; label: string }> = {
    tip: { icon: <Lightbulb size={18} />, label: "Tip" },
    warning: { icon: <AlertCircle size={18} />, label: "Pozor" },
    answer: { icon: <CheckCircle2 size={18} />, label: "Krátka odpoveď" },
};

/** Zvýraznený rámček – tip, upozornenie alebo krátka odpoveď na otázku z titulku. */
export function Callout({
    kind = "tip",
    title,
    children,
}: {
    kind?: CalloutKind;
    title?: string;
    children: React.ReactNode;
}) {
    const preset = CALLOUT[kind];
    return (
        <aside className="not-prose glass rounded-2xl border border-teal/15 p-6 my-8">
            <div className="flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-3">
                {preset.icon}
                {title ?? preset.label}
            </div>
            <div className="text-white/75 leading-relaxed space-y-3 [&_p]:m-0 [&_strong]:text-white">
                {children}
            </div>
        </aside>
    );
}

/**
 * Výrazný odkaz na Ordeviu priamo v článku (20. 11. 2026, článok o recenziách).
 * Tmavá karta: v tomto webe je `white` tmavý atrament, preto text priamo #FAFAF8.
 * Tvrdenia v `children` musia platiť pre nasadenú verziu – pozri ORDEVIA.md.
 */
export function OrdeviaCta({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <aside className="not-prose my-10 rounded-2xl bg-[#041D2C] p-7 md:p-9 text-[#FAFAF8] shadow-xl">
            <div className="flex items-center gap-3">
                <OrdeviaSymbol size={32} />
                <span className="font-kanit text-[22px] leading-none" style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>
                    orde<span style={{ color: ORDEVIA_TEAL_LIGHT }}>via</span>
                </span>
            </div>
            <p className="mt-5 text-2xl leading-snug" style={{ fontWeight: 500 }}>{title}</p>
            <div className="mt-3 text-[#FAFAF8]/80 leading-relaxed space-y-3 [&_p]:m-0 [&_strong]:text-[#FAFAF8]">{children}</div>
            <div className="mt-6 flex flex-wrap gap-3">
                <Link
                    href="/sluzby/webova-aplikacia-ordevia"
                    className="inline-flex items-center rounded-xl bg-[#4CADB6] px-5 py-3 text-sm font-semibold no-underline hover:bg-[#88D5DB] transition-colors"
                    style={{ color: "#041D2C", textDecoration: "none" }}
                >
                    Pozrieť CRM Ordevia →
                </Link>
                <a
                    href={ORDEVIA.demoUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center rounded-xl border border-[#88D5DB]/40 px-5 py-3 text-sm font-semibold no-underline hover:border-[#88D5DB] transition-colors"
                    style={{ color: "#88D5DB", textDecoration: "none" }}
                >
                    Vyžiadať prístup do ukážky
                </a>
            </div>
        </aside>
    );
}

/** Dlaždice s číslami – pre prípadové štúdie a dátové články. */
export function MetricGrid({ items }: { items: PostMetric[] }) {
    // Dve dlaždice ostávajú v dvoch stĺpcoch aj na desktope (inak by tretí stĺpec ostal prázdny).
    const cols = items.length >= 4 ? "lg:grid-cols-4" : items.length === 2 ? "" : "lg:grid-cols-3";
    return (
        <div className={`not-prose grid grid-cols-2 ${cols} gap-4 my-8`}>
            {items.map((m) => (
                <div
                    key={m.label}
                    className="glass rounded-2xl p-5 text-center border border-white/5"
                >
                    <div className="text-2xl font-bold text-teal font-kanit mb-1">{m.value}</div>
                    <div className="text-white/80 text-xs font-semibold">{m.label}</div>
                    {m.description && (
                        <div className="text-white/30 text-[11px] mt-1">{m.description}</div>
                    )}
                </div>
            ))}
        </div>
    );
}

/** Citát s ľavým tealovým pruhom. */
export function Quote({ children, by }: { children: React.ReactNode; by?: string }) {
    return (
        <blockquote className="not-prose glass rounded-2xl p-8 border-l-4 border-teal my-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="text-white/80 text-xl italic leading-relaxed relative z-10 [&_p]:m-0">
                {children}
            </div>
            {by && <footer className="mt-4 text-teal text-sm font-semibold relative z-10">— {by}</footer>}
        </blockquote>
    );
}

/** Číslované kroky pre návody. Každé dieťa = jeden krok (<Step title="…">…</Step>). */
export function Steps({ children }: { children: React.ReactNode }) {
    return <ol className="not-prose my-8 space-y-4 list-none p-0">{children}</ol>;
}

export function Step({ title, children }: { title: string; children?: React.ReactNode }) {
    return (
        <li className="glass rounded-2xl p-6 border border-white/5 flex gap-5 [counter-increment:step]">
            <span
                aria-hidden="true"
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal/10 text-teal font-kanit font-bold flex items-center justify-center before:content-[counter(step)]"
            />
            <div className="min-w-0">
                <strong className="block text-white font-kanit text-lg mb-2">{title}</strong>
                <div className="text-white/60 leading-relaxed [&_p]:m-0 space-y-2">{children}</div>
            </div>
        </li>
    );
}

/**
 * Otázky a odpovede. Odpovede sú vždy v DOM (natívny <details>), takže ich
 * vidí Google aj AI – rovnaké dáta generujú FAQPage schema v page.tsx.
 */
export function FaqBlock({ items, title = "Časté otázky" }: { items: PostFaq[]; title?: string }) {
    return (
        <section className="not-prose my-12">
            <h2 className="text-2xl font-bold font-kanit text-white mb-6">{title}</h2>
            <div className="space-y-3">
                {items.map((item) => (
                    <details
                        key={item.q}
                        className="group glass rounded-2xl border border-white/5 open:border-teal/20 transition-colors"
                    >
                        <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-white font-semibold">
                            {item.q}
                            <span
                                aria-hidden="true"
                                className="text-teal text-xl leading-none transition-transform group-open:rotate-45"
                            >
                                +
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-white/60 leading-relaxed">{item.a}</div>
                    </details>
                ))}
            </div>
        </section>
    );
}

/** Zdroj pod číslom alebo tvrdením – malé písmo, aby nerušil, ale bol dohľadateľný. */
export function Source({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <p className="not-prose -mt-4 mb-6 text-xs text-white/35">
            Zdroj:{" "}
            <a href={href} target="_blank" rel="noopener" className="underline decoration-white/20 hover:text-teal">
                {children}
            </a>
        </p>
    );
}

/**
 * Fotka v článku s popisom. Rozmery (width/height) sú povinné, aby sa stránka
 * pri načítaní neposúvala.
 */
/**
 * Fotka v článku. `zoom` – obrázok je odkaz na súbor v plnom rozlíšení
 * (napr. poster s drobným textom), otvorí sa v novej karte.
 */
export function Figure({ src, alt, caption, width, height, zoom }: { src: string; alt: string; caption?: string; width: number; height: number; zoom?: boolean }) {
    const img = (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full h-auto rounded-2xl border border-white/10"
        />
    );
    return (
        <figure className="not-prose my-8">
            {zoom ? (
                <a href={src} target="_blank" rel="noopener" className="block cursor-zoom-in hover:opacity-90 transition-opacity" aria-label={`${alt} – otvoriť v plnom rozlíšení`}>
                    {img}
                </a>
            ) : img}
            {(caption || zoom) && (
                <figcaption className="mt-3 text-sm text-white/45 text-center">
                    {caption}
                    {zoom && <span className="block text-teal/70 text-xs mt-1">Kliknutím otvoríte v plnom rozlíšení</span>}
                </figcaption>
            )}
        </figure>
    );
}

/** Dve fotky vedľa seba (na mobile pod sebou). */
export function FigureRow({ children }: { children: React.ReactNode }) {
    return <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 [&_figure]:my-0">{children}</div>;
}

export const mdxComponents: MDXComponents = {
    h2: ({ children }) => <Heading level={2}>{children}</Heading>,
    h3: ({ children }) => <Heading level={3}>{children}</Heading>,
    a: Anchor,
    Callout,
    OrdeviaCta,
    MetricGrid,
    Quote,
    Steps,
    Step,
    FaqBlock,
    Source,
    Figure,
    FigureRow,
    AuditCheck,
    // Tabuľka v obale, ktorý sa na mobile posúva vodorovne – tabuľka nesmie pretiecť stránku.
    table: (props) => (
        <div className="article-table-wrap">
            <table {...props} />
        </div>
    ),
};
