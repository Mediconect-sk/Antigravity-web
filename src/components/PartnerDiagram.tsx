'use client';

import Link from 'next/link';
import { ArrowRight, UserRound, Stethoscope, Scale } from 'lucide-react';
import { MYMEDICAL, ORDEVIA } from '@/lib/seo';

/**
 * Diagram „Ako to do seba zapadá" – brožúra pre lekára v5, str. 4 (Canva
 * DAHXUQFH9BU). Lekár a jeho rodina v strede, okolo štyri piliere, MyMedical
 * ako osobný partner. Každá položka vedie na podstránku alebo sekciu webu.
 *
 * Desktop: SVG čiary + HTML popisky v percentách (viewBox 1000 × 640).
 * Mobil: štyri karty pod sebou. Obe verzie sú v DOM vždy (vidia ich
 * vyhľadávače aj AI crawlery).
 */

type Item = { label: string; href: string; external?: boolean };
type Pillar = {
    no: string;
    title: string;
    href: string;
    x: number; // stred kruhu piliera (viewBox)
    y: number;
    side: 'left' | 'right';
    items: Item[];
};

const PILLARS: Pillar[] = [
    {
        no: '01', title: 'Založenie a rast', href: '/business-partner#co-robime', x: 330, y: 185, side: 'left',
        items: [
            { label: 'Lokalita a biznis plán', href: '/business-partner#co-robime' },
            { label: 'Povolenia a zmluvy', href: '/business-partner#co-robime' },
            { label: 'Financovanie vybavenia', href: '/business-partner#co-robime' },
            { label: 'HR manažment', href: '/business-partner#co-robime' },
        ],
    },
    {
        no: '02', title: 'Pacienti a marketing', href: '/sluzby', x: 670, y: 185, side: 'right',
        items: [
            { label: 'Značka a web', href: '/sluzby/web-a-seo-pre-zdravotnictvo' },
            { label: 'Lokálne SEO a recenzie', href: '/sluzby/web-a-seo-pre-zdravotnictvo' },
            { label: 'Akvizícia pacientov', href: '/sluzby/akvizicia-a-vykonnostny-marketing' },
            { label: 'Osobný brand a autorita', href: '/pre-koho/pre-osobne-znacky-lekarov' },
        ],
    },
    {
        no: '04', title: 'Majetok a štruktúra', href: '/sprava-a-ochrana-majetku', x: 330, y: 455, side: 'left',
        items: [
            { label: 'Financovanie a budovanie aktív', href: '/sprava-a-ochrana-majetku' },
            { label: 'Holdingy a nástupníctvo', href: '/sprava-a-ochrana-majetku' },
            { label: 'Ochrana majetku a renta', href: '/sprava-a-ochrana-majetku' },
            { label: 'Daňová efektivita', href: '/sprava-a-ochrana-majetku' },
        ],
    },
    {
        no: '03', title: 'Prevádzka a manažment', href: '/sluzby/crm-a-automatizacie', x: 670, y: 455, side: 'right',
        items: [
            { label: 'CRM a automatizácie', href: '/sluzby/crm-a-automatizacie' },
            { label: 'Komunikácia s pacientmi', href: '/sluzby/umela-inteligencia-pre-ambulanciu' },
            { label: 'Procesy a rast príjmov', href: '/sluzby/databaza-pacientov-a-jej-aktivacia' },
            { label: 'Manažérsky prehľad', href: '/sluzby/crm-a-automatizacie' },
        ],
    },
];

/** Spojnice medzi piliermi (štítky na kruhu MyMedical). */
const CONNECTORS: (Item & { x: number; y: number })[] = [
    { label: 'Štart · Benefit · Sieť', href: '/business-partner#co-robime', x: 500, y: 90 },
    { label: 'Ordevia Connect', href: ORDEVIA.servicePath, x: 790, y: 320 },
    { label: 'Rodina · nástupca', href: '/sprava-a-ochrana-majetku', x: 500, y: 550 },
    { label: 'Partneri a licencie', href: '/sprava-a-ochrana-majetku', x: 210, y: 320 },
];

const PRINCIPLES = [
    { icon: <UserRound size={20} />, title: 'Jeden kontakt', text: 'Osobný partner koordinuje všetky štyri piliere. Vy riešite medicínu a rozhodnutia.' },
    { icon: <Stethoscope size={20} />, title: 'Diagnóza pred odporúčaním', text: 'Najprv analýza situácie, až potom riešenie. Rovnako ako v medicíne.' },
    { icon: <Scale size={20} />, title: 'Jasné pravidlá', text: 'Žiadne sľuby výnosov ani poplatky navyše. Regulované služby s overeným statusom, transparentná spolupráca.' },
];

const pct = (x: number, y: number) => ({ left: `${x / 10}%`, top: `${(y / 640) * 100}%` });

function NodeLink({ item, className }: { item: Item; className: string }) {
    return item.external ? (
        <a href={item.href} target="_blank" rel="noopener" className={className}>{item.label}</a>
    ) : (
        <Link href={item.href} className={className}>{item.label}</Link>
    );
}

export default function PartnerDiagram() {
    const itemCls = 'block text-[13px] leading-tight text-white/65 hover:text-teal transition-colors whitespace-nowrap';
    const pillCls = 'absolute -translate-x-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-full border border-teal/30 bg-navy-dark text-[12px] text-white/75 hover:text-teal hover:border-teal transition-colors whitespace-nowrap';

    return (
        <section id="ako-to-zapada" className="py-16 relative z-10 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mb-12">
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Ako to do seba zapadá</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-5 leading-tight">
                        Vy ovládate medicínu. <span className="text-gradient">O všetko ostatné sa postaráme my.</span>
                    </h2>
                    <p className="text-white/60 font-stolzl leading-relaxed">
                        Založenie a rast praxe. Pacienti a marketing. Prevádzka a manažment. Majetok a jeho ochrana. Štyri oblasti,
                        ktoré sa navzájom ovplyvňujú – preto ich riešime komplexne, s dôrazom na individuálne potreby a špecifiká
                        medicínskej praxe. Pre lekárov pred atestáciou, v zamestnaní aj majiteľov ambulancií či manažérov kliník.
                    </p>
                </div>

                {/* ─── Desktop: kruhový diagram ─── */}
                <div className="hidden lg:block relative w-full max-w-[1000px] mx-auto aspect-[1000/640]">
                    <svg viewBox="0 0 1000 640" className="absolute inset-0 w-full h-full" aria-hidden>
                        <defs>
                            <path id="mm-ring" d="M 388 320 A 112 112 0 0 1 612 320" />
                        </defs>
                        {/* kruh MyMedical */}
                        <circle cx="500" cy="320" r="230" fill="none" stroke="rgba(76,173,182,0.35)" strokeDasharray="3 6" />
                        <circle cx="500" cy="320" r="140" fill="none" stroke="rgba(76,173,182,0.15)" />
                        <text className="fill-teal/70" fontSize="9" letterSpacing="3">
                            <textPath href="#mm-ring" startOffset="50%" textAnchor="middle">MYMEDICAL · OSOBNÝ PARTNER</textPath>
                        </text>
                        {/* lúče zo stredu k pilierom */}
                        {PILLARS.map((p) => (
                            <line key={p.no} x1="500" y1="320" x2={p.x} y2={p.y} stroke="rgba(76,173,182,0.35)" />
                        ))}
                        {/* vodorovná a zvislá os */}
                        <line x1="210" y1="320" x2="790" y2="320" stroke="rgba(76,173,182,0.18)" />
                        <line x1="500" y1="90" x2="500" y2="550" stroke="rgba(76,173,182,0.18)" />
                        {/* krátke čiary k zoznamom položiek */}
                        {PILLARS.map((p) =>
                            p.items.map((_, i) => {
                                const iy = p.y - 54 + i * 36;
                                const x2 = p.side === 'left' ? 215 : 785;
                                const x1 = p.side === 'left' ? p.x - 62 : p.x + 62;
                                return <line key={p.no + i} x1={x1} y1={p.y} x2={x2} y2={iy} stroke="rgba(255,255,255,0.08)" />;
                            })
                        )}
                    </svg>

                    {/* stred */}
                    <a
                        href={MYMEDICAL.url}
                        target="_blank"
                        rel="noopener"
                        style={pct(500, 320)}
                        className="absolute -translate-x-1/2 -translate-y-1/2 w-[17%] aspect-square rounded-full bg-navy-dark border border-teal/50 shadow-[0_0_40px_rgba(76,173,182,0.25)] flex flex-col items-center justify-center text-center hover:border-teal transition-colors"
                    >
                        <span className="font-kanit font-bold text-2xl text-white">Lekár</span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-teal/80 mt-1">a jeho rodina</span>
                    </a>

                    {/* piliere */}
                    {PILLARS.map((p) => (
                        <Link
                            key={p.no}
                            href={p.href}
                            style={pct(p.x, p.y)}
                            className="absolute -translate-x-1/2 -translate-y-1/2 w-[12.5%] aspect-square rounded-full bg-navy-dark border border-teal/40 flex flex-col items-center justify-center text-center p-2 hover:border-teal hover:shadow-[0_0_30px_rgba(76,173,182,0.3)] transition-all"
                        >
                            <span className="font-kanit font-bold text-teal text-lg leading-none">{p.no}</span>
                            <span className="font-kanit font-semibold text-white text-[13px] leading-tight mt-1">{p.title}</span>
                        </Link>
                    ))}

                    {/* položky pilierov */}
                    {PILLARS.map((p) =>
                        p.items.map((item, i) => {
                            const iy = p.y - 54 + i * 36;
                            const x = p.side === 'left' ? 205 : 795;
                            return (
                                <div
                                    key={p.no + item.label}
                                    style={pct(x, iy)}
                                    className={`absolute -translate-y-1/2 flex items-center gap-2 ${p.side === 'left' ? '-translate-x-full flex-row-reverse' : ''}`}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal/70 shrink-0" />
                                    <NodeLink item={item} className={itemCls} />
                                </div>
                            );
                        })
                    )}

                    {/* spojnice */}
                    {CONNECTORS.map((c) => (
                        <div key={c.label} style={pct(c.x, c.y)} className="absolute">
                            <NodeLink item={c} className={pillCls} />
                        </div>
                    ))}
                </div>

                {/* ─── Mobil: karty ─── */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                        href={MYMEDICAL.url}
                        target="_blank"
                        rel="noopener"
                        className="sm:col-span-2 glass rounded-2xl p-5 border border-teal/30 text-center"
                    >
                        <span className="block font-kanit font-bold text-xl text-white">Lekár a jeho rodina</span>
                        <span className="block text-xs uppercase tracking-[0.2em] text-teal/80 mt-1">MyMedical · osobný partner</span>
                    </a>
                    {[PILLARS[0], PILLARS[1], PILLARS[3], PILLARS[2]].map((p) => (
                        <div key={p.no} className="glass rounded-2xl p-5 border border-white/5">
                            <Link href={p.href} className="flex items-center gap-3 mb-3">
                                <span className="font-kanit font-bold text-teal">{p.no}</span>
                                <span className="font-kanit font-semibold text-white">{p.title}</span>
                                <ArrowRight size={14} className="text-teal ml-auto" />
                            </Link>
                            <ul className="space-y-2">
                                {p.items.map((item) => (
                                    <li key={item.label} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-teal/70 shrink-0" />
                                        <NodeLink item={item} className="text-sm text-white/65 hover:text-teal" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="sm:col-span-2 flex flex-wrap gap-2 justify-center">
                        {CONNECTORS.map((c) => (
                            <NodeLink key={c.label} item={c} className="px-3 py-1.5 rounded-full border border-teal/30 text-xs text-white/75" />
                        ))}
                    </div>
                </div>

                {/* princípy */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 border-t border-white/10 pt-10">
                    {PRINCIPLES.map((p) => (
                        <div key={p.title} className="flex gap-4">
                            <span className="w-10 h-10 shrink-0 rounded-xl bg-teal/10 text-teal flex items-center justify-center">{p.icon}</span>
                            <span>
                                <span className="block font-kanit font-semibold text-white mb-1">{p.title}</span>
                                <span className="block text-sm text-white/55 font-stolzl leading-relaxed">{p.text}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
