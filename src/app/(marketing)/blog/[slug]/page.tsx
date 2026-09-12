import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import PostCard from "@/components/blog/PostCard";
import AuthorBox from "@/components/blog/AuthorBox";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareLinks from "@/components/blog/ShareLinks";
import { FaqBlock, MetricGrid, mdxComponents } from "@/components/blog/MdxComponents";
import {
    BASE_URL,
    ORG,
    absoluteUrl,
    breadcrumbJsonLdFor,
    faqJsonLd,
    metadataFor,
    webPageJsonLdFor,
} from "@/lib/seo";
import {
    CATEGORIES,
    FORMATS,
    formatDate,
    getAllPosts,
    getPost,
    postCrumbs,
    postPath,
    postRouteMeta,
    relatedPosts,
} from "@/lib/blog";
import { getAuthor } from "../../../../../content/authors";

type Params = { slug: string };

/** Články sa generujú staticky pri builde; neznámy slug = 404. */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return {};

    const path = postPath(slug);
    const author = getAuthor(post.author);

    return metadataFor(path, postRouteMeta(post), {
        authors: [{ name: author.name, url: BASE_URL }],
        openGraph: {
            title: `${post.title} | ${ORG.name}`,
            description: post.description,
            url: absoluteUrl(path),
            siteName: ORG.name,
            locale: "sk_SK",
            type: "article",
            publishedTime: post.date,
            modifiedTime: post.updated,
            authors: [author.name],
            tags: post.tags,
            images: [`${BASE_URL}/og-image.png`],
        },
    });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    const path = postPath(slug);
    const url = absoluteUrl(path);
    const author = getAuthor(post.author);
    const route = postRouteMeta(post);
    const category = CATEGORIES[post.category];
    const related = relatedPosts(post);

    const { content } = await compileMDX({
        source: post.content,
        components: mdxComponents,
        options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
    });

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        datePublished: post.date,
        dateModified: post.updated,
        inLanguage: "sk-SK",
        image: `${BASE_URL}/og-image.png`,
        wordCount: post.wordCount,
        timeRequired: `PT${post.readingMinutes}M`,
        articleSection: category.label,
        keywords: post.tags,
        author: {
            "@type": "Person",
            "@id": author.id,
            name: author.name,
            jobTitle: author.jobTitle,
            image: `${BASE_URL}${author.image}`,
            worksFor: { "@id": `${BASE_URL}/#organization` },
            ...(author.sameAs.length > 0 ? { sameAs: author.sameAs } : {}),
        },
        publisher: { "@id": `${BASE_URL}/#organization` },
        isPartOf: { "@id": `${absoluteUrl("/blog")}#blog` },
    };

    const jsonLd: object[] = [
        webPageJsonLdFor(path, route),
        breadcrumbJsonLdFor(path, postCrumbs(post)),
        articleJsonLd,
    ];
    if (post.faq?.length) {
        jsonLd.push(faqJsonLd(post.faq.map((f) => ({ question: f.q, answer: f.a }))));
    }

    return (
        <div className="min-h-screen">
            <JsonLd data={jsonLd} />

            <PageHero
                breadcrumbs={postCrumbs(post)}
                badge={FORMATS[post.format]}
                title={post.title}
                subtitle={post.description}
            />

            <article className="relative z-10 px-6 lg:px-8 pb-24">
                <div className="max-w-6xl mx-auto">
                    {/* Meta riadok */}
                    <div className="max-w-3xl mx-auto lg:mx-0 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/40 border-b border-white/5 pb-8 mb-10">
                        <span className="text-white/70 font-semibold">{author.name}</span>
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        {post.updated !== post.date && (
                            <span>aktualizované {formatDate(post.updated)}</span>
                        )}
                        <span className="inline-flex items-center gap-1.5">
                            <Clock size={13} />
                            {post.readingMinutes} min čítania
                        </span>
                        <Link href={category.servicePath} className="text-teal/80 hover:text-teal transition-colors">
                            {category.label}
                        </Link>
                    </div>

                    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
                        <div className="max-w-3xl">
                            {post.metrics && post.metrics.length > 0 && <MetricGrid items={post.metrics} />}

                            <TableOfContents headings={post.headings} variant="inline" />

                            <div className="article-prose">{content}</div>

                            {post.faq && post.faq.length > 0 && <FaqBlock items={post.faq} />}

                            <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-white/40 bg-white/5 border border-white/5 rounded-full px-3 py-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <ShareLinks url={url} title={post.title} />
                            </div>

                            <div className="mt-12">
                                <AuthorBox author={author} />
                            </div>
                        </div>

                        <aside className="hidden lg:block">
                            <TableOfContents headings={post.headings} variant="sidebar" />
                        </aside>
                    </div>
                </div>
            </article>

            {related.length > 0 && (
                <section className="relative z-10 px-6 lg:px-8 pb-24">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl lg:text-3xl font-bold font-kanit text-white mb-8">
                            Súvisiace články
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {related.map((p) => (
                                <PostCard key={p.slug} post={p} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTABanner
                title="Chcete to prebrať na vašej ambulancii?"
                description="Bezplatná 30-minútová konzultácia. Bez záväzkov, s konkrétnymi odporúčaniami pre vašu prax."
            />
        </div>
    );
}
