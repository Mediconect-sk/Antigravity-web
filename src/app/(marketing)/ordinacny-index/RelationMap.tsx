'use client';

import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Flag, Building2, Stethoscope, Tag, Megaphone, CalendarCheck, Users, BarChart3,
    Coins, TrendingUp, House, ShieldCheck,
} from 'lucide-react';

/**
 * Mapa vzťahov dvanástich oblastí Ordinačného indexu (koncept 12. 11. 2026).
 * Karty sú obyčajné HTML (vždy v DOM, vidia ich aj vyhľadávače). Šípky sú len ozdobná
 * vrstva, ktorá sa dopočíta z reálnych pozícií kariet a zobrazí sa od šírky 1024 px.
 * Kreslí sa len desať najsilnejších väzieb – úplný prehľad je interný odborný odhad.
 */

type AreaKey = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L';

type Area = {
    key: AreaKey;
    /** Stránka služby, na ktorú karta vedie (12. 11. 2026). */
    href: string;
    name: string;
    line: string;
    Icon: React.ComponentType<{ size?: number; 'aria-hidden'?: boolean | 'true' | 'false' }>;
    critical?: boolean;
    hub?: boolean;
    /** Pozícia v mriežke od 1024 px (stĺpec a riadok, riadok 1 = hlavička skupiny). */
    pos: string;
};

const PILLARS: { name: string; tone: string; head: string; areas: Area[] }[] = [
    {
        name: 'Založenie a rast',
        tone: '#0A2B40',
        head: 'lg:col-start-1 lg:row-start-1',
        areas: [
            { key: 'A', href: '/business-partner/start-vlastnej-ambulancie', name: 'Vízia a ciele', line: 'Kam chcem ambulanciu dostať', Icon: Flag, pos: 'lg:col-start-1 lg:row-start-2' },
            { key: 'B', href: '/sprava-a-ochrana-majetku/holdingova-struktura', name: 'Firma a vlastníctvo', line: 'Forma firmy, podiely, zmluvy', Icon: Building2, pos: 'lg:col-start-1 lg:row-start-3' },
            { key: 'C', href: '/business-partner/efektivna-a-ziskova-ambulancia', name: 'Ambulancie a kapacita', line: 'Koľko ambulancií a času mám', Icon: Stethoscope, pos: 'lg:col-start-1 lg:row-start-4' },
        ],
    },
    {
        name: 'Pacienti a marketing',
        tone: '#1D6B78',
        head: 'lg:col-start-2 lg:row-start-1',
        areas: [
            { key: 'G', href: '/sluzby/web-a-seo-pre-zdravotnictvo', name: 'Značka, web a marketing', line: 'Ako ma pacienti nájdu', Icon: Megaphone, pos: 'lg:col-start-2 lg:row-start-2' },
            { key: 'D', href: '/business-partner/financovanie-liecby', name: 'Služby a samoplatcovia', line: 'Čo ponúkam nad rámec poisťovne', Icon: Tag, pos: 'lg:col-start-2 lg:row-start-3' },
        ],
    },
    {
        name: 'Prevádzka a manažment',
        tone: '#3A5A7A',
        head: 'lg:col-start-3 lg:row-start-1',
        areas: [
            { key: 'F', href: '/business-partner/naborovy-management', name: 'Personál a zastupovanie', line: 'Kto ma zastúpi, keď nemôžem', Icon: Users, critical: true, pos: 'lg:col-start-3 lg:row-start-2' },
            { key: 'H', href: '/business-partner/financovanie-podnikania', name: 'Ekonomika firmy', line: 'Sem sa to všetko zbieha', Icon: BarChart3, hub: true, pos: 'lg:col-start-3 lg:row-start-3' },
            { key: 'E', href: '/sluzby/webova-aplikacia-ordevia', name: 'Objednávanie a IT', line: 'Termíny a systémy', Icon: CalendarCheck, pos: 'lg:col-start-3 lg:row-start-4' },
        ],
    },
    {
        name: 'Majetok a štruktúra',
        tone: '#8A5A2B',
        head: 'lg:col-start-4 lg:row-start-1',
        areas: [
            { key: 'I', href: '/sprava-a-ochrana-majetku/danove-poradenstvo', name: 'Výber zisku a voľné prostriedky', line: 'Čo si smiem z firmy vziať', Icon: Coins, pos: 'lg:col-start-4 lg:row-start-2' },
            { key: 'J', href: '/sprava-a-ochrana-majetku/architektura-majetku', name: 'Osobný majetok a investície', line: 'Kam idú voľné peniaze', Icon: TrendingUp, pos: 'lg:col-start-4 lg:row-start-3' },
            { key: 'K', href: '/sprava-a-ochrana-majetku/nadacne-a-zverenecke-schemy', name: 'Dôchodok, nástupníctvo a rodina', line: 'Pokojný odchod, rodina zaistená', Icon: House, critical: true, pos: 'lg:col-start-4 lg:row-start-4' },
            { key: 'L', href: '/business-partner/sprava-podnikatelskych-rizik', name: 'Poistenie a riziká', line: 'Čo sa stane, keď niečo zlyhá', Icon: ShieldCheck, critical: true, pos: 'lg:col-start-4 lg:row-start-5' },
        ],
    },
];

type Kind = 'down' | 'up' | 'right' | 'under' | 'curve' | 'back';
const EDGES: [AreaKey, AreaKey, Kind][] = [
    ['A', 'B', 'down'],
    ['G', 'D', 'down'],
    ['D', 'H', 'right'],
    ['B', 'H', 'under'],
    ['F', 'H', 'down'],
    ['E', 'H', 'up'],
    ['H', 'I', 'curve'],
    ['I', 'J', 'down'],
    ['J', 'K', 'down'],
    ['L', 'H', 'back'],
];

export default function RelationMap() {
    const box = useRef<HTMLDivElement>(null);
    const cards = useRef<Partial<Record<AreaKey, HTMLElement | null>>>({});
    const [paths, setPaths] = useState<string[]>([]);
    const [size, setSize] = useState({ w: 0, h: 0 });

    const compute = useCallback(() => {
        const root = box.current;
        if (!root || !window.matchMedia('(min-width: 1024px)').matches) {
            setPaths([]);
            return;
        }
        const o = root.getBoundingClientRect();
        const R = (k: AreaKey) => {
            const r = cards.current[k]!.getBoundingClientRect();
            return {
                l: r.left - o.left, r: r.right - o.left, t: r.top - o.top, b: r.bottom - o.top,
                cx: (r.left + r.right) / 2 - o.left, cy: (r.top + r.bottom) / 2 - o.top,
            };
        };
        const out = EDGES.map(([from, to, kind]) => {
            const a = R(from);
            const b = R(to);
            const g = 4; // medzera pred hrotom šípky
            switch (kind) {
                case 'down':
                    return `M${a.cx} ${a.b} L${a.cx} ${b.t - g}`;
                case 'up':
                    return `M${a.cx} ${a.t} L${a.cx} ${b.b + g}`;
                case 'right': {
                    const y = (Math.max(a.t, b.t) + Math.min(a.b, b.b)) / 2 - 8;
                    return `M${a.r} ${y} L${b.l - g} ${y}`;
                }
                case 'under': {
                    // Zo „Firma a vlastníctvo“ popod „Služby“ do „Ekonomiky“.
                    const d = R('D');
                    const y1 = a.cy + 14;
                    const y2 = b.cy + 14;
                    const cy = d.b + 70;
                    return `M${a.r} ${y1} C${a.r + 36} ${cy} ${b.l - 36} ${cy} ${b.l - g} ${y2}`;
                }
                case 'curve': {
                    const y1 = a.cy - 14;
                    return `M${a.r} ${y1} C${a.r + 36} ${y1} ${b.l - 36} ${b.cy} ${b.l - g} ${b.cy}`;
                }
                case 'back': {
                    const y2 = b.cy + 14;
                    return `M${a.l} ${a.cy} C${a.l - 36} ${a.cy} ${b.r + 36} ${y2} ${b.r + g} ${y2}`;
                }
            }
        });
        setSize({ w: o.width, h: o.height });
        setPaths(out);
    }, []);

    useLayoutEffect(() => {
        compute();
        const ro = new ResizeObserver(compute);
        if (box.current) ro.observe(box.current);
        window.addEventListener('resize', compute);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', compute);
        };
    }, [compute]);

    return (
        <div>
            <div ref={box} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-14 gap-y-4 lg:gap-y-10">
                {paths.length > 0 && (
                    <svg
                        className="absolute inset-0 pointer-events-none hidden lg:block"
                        width={size.w}
                        height={size.h}
                        viewBox={`0 0 ${size.w} ${size.h}`}
                        aria-hidden="true"
                    >
                        <defs>
                            <marker id="rm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                                <path d="M1 1l8 4-8 4z" fill="#4CADB6" />
                            </marker>
                        </defs>
                        <g fill="none" stroke="#4CADB6" strokeWidth="2.5" strokeLinecap="round">
                            {paths.map((d) => (
                                <path key={d} d={d} markerEnd="url(#rm-arrow)" />
                            ))}
                        </g>
                    </svg>
                )}

                {PILLARS.map((p) => (
                    <React.Fragment key={p.name}>
                        <div
                            className={`${p.head} sm:col-span-2 lg:col-span-1 rounded-xl px-4 py-3.5 text-[#fff] font-kanit text-lg font-normal`}
                            style={{ background: p.tone }}
                        >
                            {p.name}
                        </div>
                        {p.areas.map((a) => (
                            <Link
                                key={a.key}
                                href={a.href}
                                ref={(el) => { cards.current[a.key] = el; }}
                                className={`${a.pos} relative flex items-center gap-3.5 rounded-2xl p-4 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CADB6] ${
                                    a.hub
                                        ? 'bg-[#4CADB6] text-[#041D2C]'
                                        : `bg-[#fff] text-[#0A2B40] ${a.critical ? 'border-2 border-[#B45309]' : 'border border-[#D3D9DE]'}`
                                }`}
                            >
                                <span
                                    className="shrink-0 w-12 h-12 rounded-full grid place-items-center text-[#fff]"
                                    style={{ background: a.hub ? '#0A2B40' : p.tone }}
                                >
                                    <a.Icon size={24} aria-hidden="true" />
                                </span>
                                <span className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium leading-tight">{a.name}</span>
                                    <span className={`text-sm leading-snug ${a.hub ? 'text-[#0A2B40]' : 'text-[#4B6272]'}`}>{a.line}</span>
                                </span>
                                {a.critical && (
                                    <span className="absolute -top-2.5 right-3 rounded-full bg-[#B45309] text-[#fff] text-[11px] font-semibold px-2.5 py-0.5">
                                        kritická
                                    </span>
                                )}
                            </Link>
                        ))}
                    </React.Fragment>
                ))}
            </div>

            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8 text-sm text-[#0A2B40]/75">
                <li className="flex items-center gap-2.5">
                    <svg width="38" height="14" viewBox="0 0 38 14" aria-hidden="true"><path d="M2 7h28" stroke="#4CADB6" strokeWidth="2.5" strokeLinecap="round" /><path d="M29 2l8 5-8 5z" fill="#4CADB6" /></svg>
                    jedno ovplyvňuje druhé (od šírky 1024 px)
                </li>
                <li className="flex items-center gap-2.5">
                    <span className="rounded-full bg-[#B45309] text-[#fff] text-[11px] font-semibold px-2.5 py-0.5">kritická</span>
                    ak je otvorená, ohrozuje celú ambulanciu
                </li>
                <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-[#4CADB6]" aria-hidden="true" />
                    miesto, kde sa väzby zbiehajú
                </li>
            </ul>
        </div>
    );
}
