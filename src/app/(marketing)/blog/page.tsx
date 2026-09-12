import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import PostCard from "@/components/blog/PostCard";
import { BASE_URL, ROUTES, absoluteUrl, pageJsonLd, pageMetadata, trail } from "@/lib/seo";
import { BLOG_PATH, getAllPosts, postPath } from "@/lib/blog";
import { getAuthor } from "../../../../content/authors";

export const metadata: Metadata = pageMetadata(BLOG_PATH);

export default function BlogPage() {
    const posts = getAllPosts();
    const [featured, ...rest] = posts;

    const blogJsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${absoluteUrl(BLOG_PATH)}#blog`,
        url: absoluteUrl(BLOG_PATH),
        name: "Mediconect Blog",
        description: ROUTES[BLOG_PATH].description,
        inLanguage: "sk-SK",
        publisher: { "@id": `${BASE_URL}/#organization` },
        blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            "@id": `${absoluteUrl(postPath(post.slug))}#article`,
            headline: post.title,
            url: absoluteUrl(postPath(post.slug)),
            datePublished: post.date,
            dateModified: post.updated,
            author: { "@id": getAuthor(post.author).id },
        })),
    };

    return (
        <div className="min-h-screen">
            <JsonLd data={[...pageJsonLd(BLOG_PATH), blogJsonLd]} />

            <PageHero
                breadcrumbs={trail(BLOG_PATH)}
                badge="Blog"
                title="Čo v marketingu ambulancií naozaj funguje"
                subtitle="Prípadové štúdie s reálnymi číslami, odpovede na otázky, ktoré nám lekári kladú najčastejšie, a návody, ktoré si viete spraviť sami."
            />

            <section className="relative z-10 pb-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {featured && (
                        <div className="mb-8">
                            <PostCard post={featured} featured />
                        </div>
                    )}

                    {rest.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {rest.map((post) => (
                                <PostCard key={post.slug} post={post} />
                            ))}
                        </div>
                    )}

                    {posts.length === 0 && (
                        <p className="text-center text-white/40 py-20">Prvé články pripravujeme.</p>
                    )}
                </div>
            </section>

            <CTABanner
                title="Chcete vedieť, čo z toho platí pre vašu ambulanciu?"
                description="Bezplatná 30-minútová konzultácia. Prejdeme vašu situáciu a povieme, kde je najrýchlejšia príležitosť."
            />
        </div>
    );
}
