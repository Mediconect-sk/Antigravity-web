import { MetadataRoute } from "next";
import { absoluteUrl, indexableRoutes } from "@/lib/seo";
import { getAllPosts, postPath, postRouteMeta } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const pages = indexableRoutes().map(([path, route]) => ({
        url: absoluteUrl(path),
        lastModified,
        changeFrequency: route.changeFrequency ?? "monthly",
        priority: route.priority ?? 0.5,
    }));

    // Články blogu sa načítavajú z content/blog/*.mdx – nie sú v ROUTES.
    const posts = getAllPosts().map((post) => {
        const route = postRouteMeta(post);
        return {
            url: absoluteUrl(postPath(post.slug)),
            lastModified: new Date(`${post.updated}T00:00:00Z`),
            changeFrequency: route.changeFrequency ?? "monthly",
            priority: route.priority ?? 0.5,
        };
    });

    return [...pages, ...posts];
}
