import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/**
 * Slovenská stránka 404 (11. 11. 2026). Predtým sa zobrazovala predvolená
 * anglická stránka Next.js bez hlavičky a pätičky.
 * Je v koreni `app`, lebo neexistujúce adresy nepatria do skupiny (marketing) –
 * hlavičku a pätičku si preto vykresľuje sama.
 */
export const metadata: Metadata = {
    title: "Stránka sa nenašla",
    description: "Táto adresa na mediconect.sk neexistuje. Pokračujte na úvod, služby alebo bezplatnú konzultáciu.",
    robots: { index: false, follow: true },
};

const odkazy = [
    { href: "/business-partner", label: "Založenie a rast praxe" },
    { href: "/sluzby", label: "Pacienti a marketing" },
    { href: "/sluzby/crm-a-automatizacie", label: "Automatizácie a AI" },
    { href: "/sprava-a-ochrana-majetku", label: "Správa a ochrana majetku" },
    { href: "/vysledky", label: "Výsledky" },
    { href: "/blog", label: "Blog" },
];

export default function NotFound() {
    return (
        <>
            <SiteHeader />
            <main id="obsah" className="flex-grow">
                <section className="min-h-[70vh] flex items-center pt-40 pb-24">
                    <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
                        <span className="text-[#1F6F78] text-xs font-medium font-stolzl uppercase tracking-[0.15em]">
                            Chyba 404
                        </span>
                        <h1 className="mt-4 text-4xl lg:text-6xl font-light leading-tight font-kanit">
                            Túto stránku sme nenašli
                        </h1>
                        <p className="mt-6 text-lg text-white/65 font-stolzl">
                            Adresa sa mohla zmeniť alebo v nej je preklep. Vyberte si, kam chcete pokračovať.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-navy-dark font-medium rounded-2xl hover:bg-teal/90 transition-colors"
                            >
                                Na úvodnú stránku
                            </Link>
                            <Link
                                href="/konzultacia"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-teal text-teal hover:bg-teal/5 transition-colors"
                            >
                                Bezplatná konzultácia
                            </Link>
                        </div>
                        <ul className="mt-12 flex flex-wrap justify-center gap-2">
                            {odkazy.map((o) => (
                                <li key={o.href}>
                                    <Link
                                        href={o.href}
                                        className="inline-block rounded-full border border-[#041D2C]/25 px-4 py-1.5 text-sm font-stolzl text-[#041D2C] hover:bg-[#041D2C]/5 transition-colors"
                                    >
                                        {o.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
