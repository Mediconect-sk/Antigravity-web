import React from "react";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";
import { slugify } from "@/lib/blog";
import type { PostFaq, PostMetric } from "@/lib/blog";

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

/** Dlaždice s číslami – pre prípadové štúdie a dátové články. */
export function MetricGrid({ items }: { items: PostMetric[] }) {
    const cols = items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
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

export const mdxComponents: MDXComponents = {
    h2: ({ children }) => <Heading level={2}>{children}</Heading>,
    h3: ({ children }) => <Heading level={3}>{children}</Heading>,
    a: Anchor,
    Callout,
    MetricGrid,
    Quote,
    Steps,
    Step,
    FaqBlock,
    Source,
};
