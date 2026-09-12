import type { PostHeading } from "@/lib/blog";

/**
 * Obsah článku z nadpisov druhej úrovne.
 * Na desktope prilepený bokom, na mobile zbalený <details> nad textom.
 * Bez JavaScriptu – odkazy na id nadpisov, ktoré nastavuje MdxComponents.
 */
export default function TableOfContents({
    headings,
    variant,
}: {
    headings: PostHeading[];
    /** `inline` = zbalený blok nad textom (mobil), `sidebar` = prilepený bočný panel (desktop). */
    variant: "inline" | "sidebar";
}) {
    if (headings.length < 2) return null;

    const list = (
        <ol className="space-y-2 text-sm">
            {headings.map((h, i) => (
                <li key={h.id} className="flex gap-3">
                    <span className="text-teal/60 font-kanit tabular-nums">{i + 1}.</span>
                    <a href={`#${h.id}`} className="text-white/50 hover:text-teal transition-colors leading-snug">
                        {h.text}
                    </a>
                </li>
            ))}
        </ol>
    );

    if (variant === "inline") {
        return (
            <details className="lg:hidden glass rounded-2xl border border-white/5 px-5 py-4 mb-10">
                <summary className="cursor-pointer text-white font-semibold text-sm list-none flex justify-between">
                    Obsah článku
                    <span aria-hidden="true" className="text-teal">▾</span>
                </summary>
                <div className="pt-4">{list}</div>
            </details>
        );
    }

    return (
        <nav aria-label="Obsah článku" className="sticky top-28">
            <div className="text-xs text-white/35 font-semibold uppercase tracking-wider mb-4">Obsah</div>
            {list}
        </nav>
    );
}
