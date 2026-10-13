import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import { getAllPosts, postPath, formatDate } from "@/lib/blog";
import Content, { type CollaborationPost } from "./Content";

const PATH = "/o-nas";

export const metadata: Metadata = pageMetadata(PATH);

export default function Page() {
    // Články kategórie „spolupraca" (konferencie, odborné podujatia) – sekcia
    // „Medzinárodná a odborná spolupráca" sa zobrazí, len keď je aspoň jeden.
    const collaboration: CollaborationPost[] = getAllPosts()
        .filter((post) => post.category === "spolupraca")
        .slice(0, 6)
        .map((post) => ({
            href: postPath(post.slug),
            title: post.title,
            description: post.description,
            date: formatDate(post.date),
            cover: post.cover,
        }));

    return (
        <>
            <JsonLd data={pageJsonLd(PATH)} />
            <Content collaboration={collaboration} />
        </>
    );
}
