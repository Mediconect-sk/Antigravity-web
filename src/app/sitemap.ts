import { MetadataRoute } from "next";
import { absoluteUrl, indexableRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return indexableRoutes().map(([path, route]) => ({
        url: absoluteUrl(path),
        lastModified,
        changeFrequency: route.changeFrequency ?? "monthly",
        priority: route.priority ?? 0.5,
    }));
}
