import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { CATEGORIES, FORMATS, formatDate, postPath, type PostMeta } from "@/lib/blog";

/**
 * Karta článku vo výpise blogu. Server komponent bez animácií –
 * celý zoznam článkov je v HTML pre crawlery.
 */
export default function PostCard({ post, featured = false }: { post: PostMeta; featured?: boolean }) {
    const metrics = post.metrics?.slice(0, 3) ?? [];

    return (
        <Link href={postPath(post.slug)} className="group block h-full">
            <article
                className={`h-full glass rounded-3xl border border-white/5 hover:border-teal/20 transition-all duration-500 hover:shadow-xl hover:shadow-teal/5 flex flex-col ${
                    featured ? "p-8 lg:p-12" : "p-7 lg:p-8"
                }`}
            >
                <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-[11px] font-semibold uppercase tracking-wider">
                        {FORMATS[post.format]}
                    </span>
                    <span className="text-white/35 text-xs">{CATEGORIES[post.category].label}</span>
                </div>

                <h2
                    className={`font-bold font-kanit text-white group-hover:text-teal transition-colors duration-300 leading-snug mb-4 ${
                        featured ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"
                    }`}
                >
                    {post.title}
                </h2>

                <p className={`text-white/50 leading-relaxed mb-6 ${featured ? "text-lg max-w-2xl" : ""}`}>
                    {post.description}
                </p>

                {metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {metrics.map((m) => (
                            <div
                                key={m.label}
                                className="rounded-xl bg-white/5 border border-white/5 p-3 text-center"
                            >
                                <div className="text-teal font-bold text-lg font-kanit">{m.value}</div>
                                <div className="text-white/40 text-[11px] mt-0.5 leading-tight">{m.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-5 text-sm">
                    <div className="flex items-center gap-4 text-white/35">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span className="inline-flex items-center gap-1.5">
                            <Clock size={13} />
                            {post.readingMinutes} min
                        </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-teal font-semibold">
                        Čítať
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </article>
        </Link>
    );
}
