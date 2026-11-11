import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { OrdinacnyIndexSymbol } from './OrdinacnyIndexLogo';

/**
 * Vložený hook na vzorový výstup Ordinačného indexu (nie popup – pozri CHANGELOG.md).
 * Bez 'use client', bez animácií: text je vždy v HTML. Cena sa neuvádza (neschválená)
 * a text o NBS sem nepatrí (na domovskej stránke sa neuvádza, rozhodnutie 13. 10. 2026).
 */
export type OrdinacnyIndexVariant = 'default' | 'majetok' | 'dane' | 'marketing' | 'rast';

/** Texty hooku podľa miesta, kde je vložený (jeden zdroj pravdy). Bez prísľubov výsledku a bez cien. */
const TEXTY: Record<OrdinacnyIndexVariant, { heading: string; text: string }> = {
    default: {
        heading: 'Čo sa stane s ambulanciou, ak vy nebudete ordinovať tri mesiace?',
        text: 'Pozrite si, ako vyzerá písomný výstup Ordinačného indexu: mapa dvanástich oblastí, tri priority a poradie krokov. Na fiktívnej ambulancii.',
    },
    majetok: {
        heading: 'Majetok lekára začína ambulanciou. Kde sú dnes jej slabé miesta?',
        text: 'Ordinačný index prejde dvanásť oblastí: výber zisku z firmy, dôchodok a nástupníctvo, poistenie aj rodinu. Pozrite si, ako vyzerá výstup na fiktívnej ambulancii.',
    },
    dane: {
        heading: 'Koľko z toho, čo ambulancia zarobí, sa k vám dostane a akou cestou?',
        text: 'Spôsob výplaty z firmy ovplyvňuje dane aj odvody. Ordinačný index ho preverí spolu s ostatnými oblasťami ambulancie. Pozrite si ukážku výstupu.',
    },
    rast: {
        heading: 'Zakladáte, rastiete alebo financujete? Najprv zmapujte celú ambulanciu.',
        text: 'Ordinačný index prejde dvanásť oblastí od vízie a vlastníctva cez kapacitu a personál až po ekonomiku a financovanie. Pozrite si ukážku výstupu.',
    },
    marketing: {
        heading: 'Skôr než investujete do marketingu, zmapujte celú ambulanciu.',
        text: 'Ordinačný index sleduje aj objednávanie, web a značku v súvislosti s ekonomikou a kapacitou ambulancie. Pozrite si ukážku výstupu.',
    },
};

export default function OrdinacnyIndexHook({ className = '', variant = 'default' }: { className?: string; variant?: OrdinacnyIndexVariant }) {
    const t = TEXTY[variant];
    return (
        <section aria-labelledby={`ordinacny-index-hook-${variant}`} className={`relative z-10 py-16 ${className}`}>
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="rounded-3xl bg-[#0A2B40] text-[#F2F6F8] p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
                    <div className="flex flex-col gap-4">
                        <p className="font-stolzl text-xs uppercase tracking-[0.25em] text-[#4CADB6] flex items-center gap-3"><OrdinacnyIndexSymbol size={30} tone="dark" />Ordinačný index ambulancie</p>
                        <h2 id={`ordinacny-index-hook-${variant}`} className="font-kanit font-light text-3xl md:text-4xl text-balance leading-tight !text-[#F2F6F8]">
                            {t.heading}
                        </h2>
                        <p className="font-stolzl text-[#A9BFCC] max-w-xl">
                            {t.text}
                        </p>
                    </div>
                    <Link
                        href="/ordinacny-index/vzor"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#4CADB6] text-[#041D2C] px-6 py-4 font-stolzl font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                        Pozrieť vzorový výstup <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
