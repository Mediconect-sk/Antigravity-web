'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Ikona from '@/components/Ikona';
import { ORDEVIA } from '@/lib/seo';

/**
 * Diagram „Ako to do seba zapadá" – brožúra pre lekára v5, str. 4 (Canva
 * DAHXUQFH9BU). Lekár a jeho rodina v strede, okolo štyri piliere
 * (bez textu MyMedical – rozhodnutie 13. 10. 2026). Každá položka vedie na podstránku alebo sekciu webu.
 *
 * 18. 11. 2026: tmavý podklad (#041D2C) a ikony z Higgsfield sady. Farby sú
 * zadané priamo (nie cez tokeny), lebo na tomto webe je `white` tmavý atrament
 * a `navy-dark` svetlé pozadie – na tmavom podklade by sa text prevrátil.
 *
 * Desktop: SVG čiary + HTML popisky v percentách (viewBox 1000 × 640).
 * Mobil: štyri karty pod sebou. Obe verzie sú v DOM vždy (vidia ich
 * vyhľadávače aj AI crawlery).
 */

const DARK = '#041D2C';
const PANEL = '#0B2B3D';
const ACCENT = '#4CADB6';
const TEXT = '#FAFAF8';

type Item = { label: string; href: string; external?: boolean };
type Pillar = {
    no: string;
    title: string;
    icon: string;
    href: string;
    x: number; // stred kruhu piliera (viewBox)
    y: number;
    side: 'left' | 'right';
    items: Item[];
};

const PILLARS: Pillar[] = [
    {
        no: '01', title: 'Business partner', icon: 'briefcase', href: '/business-partner#co-robime', x: 330, y: 185, side: 'left',
        items: [
            { label: 'Lokalita a biznis plán', href: '/business-partner/start-vlastnej-ambulancie' },
            { label: 'Povolenia a zmluvy', href: '/business-partner/start-vlastnej-ambulancie' },
            { label: 'Financovanie vybavenia', href: '/business-partner/financovanie-podnikania' },
            { label: 'HR manažment', href: '/business-partner#co-robime' },
        ],
    },
    {
        no: '02', title: 'Healthcare marketing', icon: 'target', href: '/sluzby', x: 670, y: 185, side: 'right',
        items: [
            { label: 'Značka a web', href: '/sluzby/web-a-seo-pre-zdravotnictvo' },
            { label: 'Lokálne SEO a recenzie', href: '/sluzby/web-a-seo-pre-zdravotnictvo' },
            { label: 'Akvizícia pacientov', href: '/sluzby/akvizicia-a-vykonnostny-marketing' },
            { label: 'Osobný brand a autorita', href: '/pre-koho/pre-osobne-znacky-lekarov' },
        ],
    },
    {
        no: '04', title: 'Majetok a štruktúra', icon: 'bank', href: '/sprava-a-ochrana-majetku', x: 330, y: 455, side: 'left',
        items: [
            { label: 'Financovanie a budovanie aktív', href: '/sprava-a-ochrana-majetku' },
            { label: 'Holdingy a nástupníctvo', href: '/sprava-a-ochrana-majetku' },
            { label: 'Ochrana majetku a renta', href: '/sprava-a-ochrana-majetku' },
            { label: 'Daňová efektivita', href: '/sprava-a-ochrana-majetku' },
        ],
    },
    {
        no: '03', title: 'Prevádzka a manažment', icon: 'layers', href: '/sluzby/crm-a-automatizacie', x: 670, y: 455, side: 'right',
        items: [
            { label: 'CRM a automatizácie', href: '/sluzby/crm-a-automatizacie' },
            { label: 'Komunikácia s pacientmi', href: '/sluzby/umela-inteligencia-pre-ambulanciu' },
            { label: 'Procesy a rast príjmov', href: '/sluzby/databaza-pacientov-a-jej-aktivacia' },
            { label: 'Manažérsky prehľad', href: '/sluzby/crm-a-automatizacie' },
        ],
    },
];

/** Spojnice medzi piliermi (štítky na vonkajšom kruhu). */
const CONNECTORS: (Item & { x: number; y: number })[] = [
    { label: 'Štart vlastnej ambulancie', href: '/business-partner/start-vlastnej-ambulancie', x: 500, y: 90 },
    { label: 'Ordevia Conect', href: ORDEVIA.servicePath, x: 790, y: 320 },
    { label: 'Generačný prenos / predaj praxe', href: '/business-partner/predaj-kmena-a-praxe', x: 500, y: 550 },
    { label: 'Partneri a licencie', href: '/sprava-a-ochrana-majetku', x: 210, y: 320 },
];

const PRINCIPLES = [
    { icon: 'users', title: 'Jeden kontakt', text: 'Osobný partner koordinuje všetky štyri piliere. Vy riešite medicínu a rozhodnutia.' },
    { icon: 'stethoscope', title: 'Diagnóza pred odporúčaním', text: 'Najprv analýza situácie, až potom riešenie. Rovnako ako v medicíne.' },
    { icon: 'scales', title: 'Jasné pravidlá', text: 'Žiadne sľuby výnosov ani poplatky navyše. Regulované služby s overeným statusom, transparentná spolupráca.' },
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
    const itemCls = 'block text-[13px] leading-tight text-[#FAFAF8]/70 hover:text-[#4CADB6] transition-colors whitespace-nowrap';
    const pillCls = 'absolute -translate-x-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-full border border-[#4CADB6]/35 bg-[#0B2B3D] text-[12px] text-[#FAFAF8]/85 hover:text-[#4CADB6] hover:border-[#4CADB6] transition-colors whitespace-nowrap';

    return (
        <section
            id="ako-to-zapada"
            className="relative z-10 scroll-mt-24 mx-3 lg:mx-0 rounded-[2rem] overflow-hidden py-16"
            style={{ backgroundColor: DARK, color: TEXT }}
        >
            {/* jemný svetelný záblesk za centrom */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(76,173,182,0.22) 0%, rgba(76,173,182,0) 62%)' }}
            />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mb-12">
                    <span className="text-[#4CADB6] text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Ako to do seba zapadá</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-5 leading-tight" style={{ color: TEXT }}>
                        Vy ovládate medicínu. <span className="text-[#4CADB6]">O všetko ostatné sa postaráme my.</span>
                    </h2>
                    <p className="font-stolzl leading-relaxed" style={{ color: 'rgba(250,250,248,0.65)' }}>
                        Business partner. Healthcare marketing. Prevádzka a manažment. Majetok a jeho ochrana. Štyri oblasti,
                        ktoré sa navzájom ovplyvňujú – preto ich riešime komplexne, s dôrazom na individuálne potreby a špecifiká
                        medicínskej praxe. Pre lekárov pred atestáciou, v zamestnaní aj majiteľov ambulancií či manažérov kliník.
                    </p>
                </div>

                {/* ─── Desktop: kruhový diagram ─── */}
                <div className="hidden lg:block relative w-full max-w-[1000px] mx-auto aspect-[1000/640]">
                    <svg viewBox="0 0 1000 640" className="absolute inset-0 w-full h-full" aria-hidden>
                        {/* vonkajší a vnútorný kruh */}
                        <circle cx="500" cy="320" r="230" fill="none" stroke="rgba(76,173,182,0.4)" strokeDasharray="3 6" />
                        <circle cx="500" cy="320" r="140" fill="none" stroke="rgba(76,173,182,0.22)" />
                        {/* lúče zo stredu k pilierom */}
                        {PILLARS.map((p) => (
                            <line key={p.no} x1="500" y1="320" x2={p.x} y2={p.y} stroke="rgba(76,173,182,0.5)" strokeWidth="1.5" />
                        ))}
                        {/* vodorovná a zvislá os */}
                        <line x1="210" y1="320" x2="790" y2="320" stroke="rgba(76,173,182,0.22)" />
                        <line x1="500" y1="90" x2="500" y2="550" stroke="rgba(76,173,182,0.22)" />
                        {/* krátke čiary k zoznamom položiek */}
                        {PILLARS.map((p) =>
                            p.items.map((_, i) => {
                                const iy = p.y - 54 + i * 36;
                                const x2 = p.side === 'left' ? 215 : 785;
                                const x1 = p.side === 'left' ? p.x - 62 : p.x + 62;
                                return <line key={p.no + i} x1={x1} y1={p.y} x2={x2} y2={iy} stroke="rgba(250,250,248,0.12)" />;
                            })
                        )}
                    </svg>

                    {/* stred */}
                    <div
                        style={{ ...pct(500, 320), backgroundColor: PANEL }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 w-[17%] aspect-square rounded-full border border-[#4CADB6]/60 shadow-[0_0_60px_rgba(76,173,182,0.35)] flex flex-col items-center justify-center text-center"
                    >
                        <span className="font-kanit font-bold text-2xl" style={{ color: TEXT }}>Lekár</span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#4CADB6] mt-1">a jeho rodina</span>
                    </div>

                    {/* piliere */}
                    {PILLARS.map((p) => (
                        <Link
                            key={p.no}
                            href={p.href}
                            style={{ ...pct(p.x, p.y), backgroundColor: PANEL }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 w-[13.5%] aspect-square rounded-full border border-[#4CADB6]/40 flex flex-col items-center justify-center text-center p-2 hover:border-[#4CADB6] hover:shadow-[0_0_34px_rgba(76,173,182,0.4)] transition-all"
                        >
                            <Ikona name={p.icon} size={26} />
                            <span className="font-kanit font-bold text-[#4CADB6] text-sm leading-none mt-1.5">{p.no}</span>
                            <span className="font-kanit font-semibold text-[12px] leading-tight mt-0.5" style={{ color: TEXT }}>{p.title}</span>
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
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CADB6] shrink-0" />
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
                    <div className="sm:col-span-2 rounded-2xl p-5 border border-[#4CADB6]/40 text-center" style={{ backgroundColor: PANEL }}>
                        <span className="block font-kanit font-bold text-xl" style={{ color: TEXT }}>Lekár a jeho rodina</span>
                    </div>
                    {[PILLARS[0], PILLARS[1], PILLARS[3], PILLARS[2]].map((p) => (
                        <div key={p.no} className="rounded-2xl p-5 border border-[#FAFAF8]/10" style={{ backgroundColor: PANEL }}>
                            <Link href={p.href} className="flex items-center gap-3 mb-3">
                                <Ikona name={p.icon} size={24} />
                                <span className="font-kanit font-bold text-[#4CADB6]">{p.no}</span>
                                <span className="font-kanit font-semibold" style={{ color: TEXT }}>{p.title}</span>
                                <ArrowRight size={14} className="text-[#4CADB6] ml-auto" />
                            </Link>
                            <ul className="space-y-2">
                                {p.items.map((item) => (
                                    <li key={item.label} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#4CADB6] shrink-0" />
                                        <NodeLink item={item} className="text-sm text-[#FAFAF8]/70 hover:text-[#4CADB6]" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="sm:col-span-2 flex flex-wrap gap-2 justify-center">
                        {CONNECTORS.map((c) => (
                            <NodeLink key={c.label} item={c} className="px-3 py-1.5 rounded-full border border-[#4CADB6]/35 text-xs text-[#FAFAF8]/80" />
                        ))}
                    </div>
                </div>

                {/* princípy */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 border-t border-[#FAFAF8]/10 pt-10">
                    {PRINCIPLES.map((p) => (
                        <div key={p.title} className="flex gap-4">
                            <Ikona name={p.icon} size={22} />
                            <span>
                                <span className="block font-kanit font-semibold mb-1" style={{ color: TEXT }}>{p.title}</span>
                                <span className="block text-sm font-stolzl leading-relaxed" style={{ color: 'rgba(250,250,248,0.6)' }}>{p.text}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
