'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, ArrowRight, Calculator, Scale, ShieldCheck, Smartphone, Building2, Star, PiggyBank, Stethoscope, Banknote, CalendarCheck, Lock, FileSignature, EyeOff, Cpu, Trash2, HeartPulse, ChevronDown, MessageSquare, ClipboardList, FileCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';
import { ORDINACNY_INDEX_FAQ } from './faq';

type Status = 'Ošetrené' | 'Čiastočne' | 'Otvorené';

const STATUS_STYLE: Record<Status, string> = {
    Ošetrené: 'bg-[#E3F1EA] text-[#1F6B47]',
    Čiastočne: 'bg-[#FBF0D9] text-[#7A5A12]',
    Otvorené: 'bg-[#F9E4E1] text-[#8C3328]',
};

export const PILLARS: { name: string; areas: { key: string; name: string; status: Status; text: string; critical?: boolean }[] }[] = [
    {
        name: 'Založenie a rast',
        areas: [
            { key: 'A', name: 'Vízia a ciele', status: 'Čiastočne', text: 'Smer je daný, ciele na 3 a 5 rokov nie sú spísané.' },
            { key: 'B', name: 'Firma a vlastníctvo', status: 'Čiastočne', text: 'Podiely sú určené, pravidlá pre odchod spoločníka nie sú.' },
            { key: 'C', name: 'Ambulancie a kapacita', status: 'Čiastočne', text: 'Kapacita má rezervu, plán rastu chýba.' },
        ],
    },
    {
        name: 'Pacienti a marketing',
        areas: [
            { key: 'D', name: 'Služby a samoplatcovia', status: 'Otvorené', text: 'Služby nad rámec poisťovne sa neponúkajú, cenník neexistuje.' },
            { key: 'G', name: 'Značka, web a marketing', status: 'Čiastočne', text: 'Web je, no neukazuje služby ani spôsob objednania.' },
        ],
    },
    {
        name: 'Prevádzka a manažment',
        areas: [
            { key: 'E', name: 'Objednávanie a IT', status: 'Otvorené', text: 'Objednávanie len telefonicky, časť hovorov zostáva nezdvihnutá.' },
            { key: 'F', name: 'Personál a zastupovanie', status: 'Otvorené', critical: true, text: 'Písomná dohoda o zastupovaní nie je.' },
            { key: 'H', name: 'Ekonomika firmy', status: 'Ošetrené', text: 'Mesačné prehľady a účtovníctvo fungujú pravidelne.' },
        ],
    },
    {
        name: 'Majetok a štruktúra',
        areas: [
            { key: 'I', name: 'Výber zisku a voľné prostriedky', status: 'Otvorené', text: 'Výplata nepravidelná, prostriedky na účtoch bez určeného účelu.' },
            { key: 'J', name: 'Osobný majetok a investície', status: 'Čiastočne', text: 'Prehľad majetku a cieľ investovania nie sú spísané.' },
            { key: 'K', name: 'Dôchodok, nástupníctvo a rodina', status: 'Otvorené', critical: true, text: 'Plán odovzdania praxe a príjmu na dôchodku nie je pripravený.' },
            { key: 'L', name: 'Poistenie a riziká', status: 'Čiastočne', text: 'Poistenie zodpovednosti je, krytie výpadku príjmu nie je preverené.' },
        ],
    },
];

// Všetkých 14 častí dotazníka. Časti A–L sa hodnotia (mapa), M a N sú pracovné.
const QUESTIONNAIRE: { key: string; name: string; asks: string; acc?: boolean }[] = [
    { key: 'A', name: 'Vízia a ciele', asks: 'Kam má smerovať prax aj osobné financie o 3 a 5 rokov' },
    { key: 'B', name: 'Firma a vlastníctvo', asks: 'Kto čo vlastní, kto rozhoduje, čo ak spoločník odíde, holding' },
    { key: 'C', name: 'Ambulancie a kapacita', asks: 'Pacienti, čakacie lehoty, čo brzdí rast' },
    { key: 'D', name: 'Služby a samoplatcovia', asks: 'Príjmy nad rámec poisťovní, prehliadky pre firmy' },
    { key: 'E', name: 'Objednávanie a IT', asks: 'Ako sa pacient dostane k termínu, softvér, telefóny' },
    { key: 'F', name: 'Personál a zastupovanie', asks: 'Kto prax drží a kto zastupuje pri neprítomnosti' },
    { key: 'G', name: 'Značka, web a marketing', asks: 'Ako prax vystupuje, odkiaľ chodia noví pacienti' },
    { key: 'H', name: 'Ekonomika firmy', asks: 'Príjmy, náklady, úvery, mesačné prehľady', acc: true },
    { key: 'I', name: 'Výber zisku a voľné prostriedky', asks: 'Forma výplaty, rezerva, voľné peniaze vo firme', acc: true },
    { key: 'J', name: 'Osobný majetok a investície', asks: 'Prehľad majetku (stačí rozpätie), prístup k investovaniu' },
    { key: 'K', name: 'Dôchodok, nástupníctvo a rodina', asks: 'Budúcnosť praxe, príjem na dôchodku, ochrana rodiny' },
    { key: 'L', name: 'Poistenie a riziká', asks: 'Zmluvy a krytie výpadku príjmu', acc: true },
    { key: 'M', name: 'Priority spolupráce', asks: 'Čo riešiť hneď, do 6 mesiacov alebo neskôr' },
    { key: 'N', name: 'Podklady', asks: 'Závierka, zmluvy, poistky. Stačia kópie.', acc: true },
];

const FILTERS: ('Všetky' | Status)[] = ['Všetky', 'Otvorené', 'Čiastočne', 'Ošetrené'];

const MATRIX_AREAS = [
    'I · Výber zisku a prostriedky',
    'K · Dôchodok a nástupníctvo',
    'F · Zastupovanie',
    'L · Poistenie a riziká',
    'E · Objednávanie a telefóny',
    'D · Služby pre samoplatcov',
];
// 1 = silná väzba, 2 = slabá väzba (indexy oblastí od 0)
const LINKS: Record<string, 1 | 2> = {
    '0-1': 1, '2-3': 1, '4-5': 1,
    '1-3': 2, '1-5': 2, '2-4': 2,
};
function linkOf(a: number, b: number) {
    return LINKS[`${Math.min(a, b)}-${Math.max(a, b)}`];
}

const PRIORITIES = [
    {
        n: 1,
        pillar: 'Majetok a štruktúra',
        title: 'Výber zisku a voľné prostriedky firmy',
        finding: 'Firma je dlhodobo zisková. Na účtoch sú voľné prostriedky bez určeného účelu a príjem sa vyplácal nepravidelne, podľa aktuálnej potreby.',
        why: 'Spôsob výplaty ovplyvňuje dane, odvody aj budúci dôchodok. Prostriedky bez účelu nikomu nepracujú.',
        step: 'Porovnať formy príjmu (mzda, odmena konateľa, podiely na zisku, doplnkové dôchodkové sporenie cez firmu) a určiť výšku rezervy.',
        who: 'Osobný partner Mediconect spolu s daňovým poradcom, členom Slovenskej komory daňových poradcov.',
        gain: 'Jasné pravidlo, ako a kedy sa peniaze dostávajú z firmy k vám, a prostriedky rozdelené podľa účelu.',
    },
    {
        n: 2,
        pillar: 'Prevádzka a manažment',
        title: 'Zastupovanie a ochrana kľúčovej osoby',
        finding: 'Ordinuje jediný lekár. Písomná dohoda o zastupovaní nie je a krytie dlhodobého výpadku príjmu nie je preverené.',
        why: 'Pri dlhšej práceneschopnosti sa zastaví príjem ambulancie aj rodiny. Pacienti odídu k inému lekárovi skôr, než sa lekár vráti.',
        step: 'Dohodnúť zastupujúceho lekára písomne. Prejsť rozsah a limity poistenia zodpovednosti a krytie výpadku príjmu.',
        who: 'Majiteľ s osobným partnerom Mediconect. Poistné krytie sa rieši v rámci finančného sprostredkovania.',
        gain: 'Prax, ktorá funguje aj bez vás, a poznanie, ako dlho by zvládla výpadok.',
    },
    {
        n: 3,
        pillar: 'Pacienti a marketing',
        title: 'Objednávanie a služby pre samoplatcov',
        finding: 'Pacienti sa objednávajú len telefonicky a časť hovorov zostáva nezdvihnutých. Priame platby tvoria malú časť tržieb.',
        why: 'Telefón viaže sestru a stojí ordinačný čas. Pacient, ktorý sa nedovolá, často hľadá ďalej.',
        step: 'Zaviesť online objednávanie s potvrdením a pripomienkou termínu e-mailom a pridať dve až tri služby nad rámec poisťovne, napríklad preventívne balíky alebo prehliadky pre firmy.',
        who: 'Mediconect: aplikácia Ordevia a marketing ambulancie. Na strane ambulancie sestra.',
        gain: 'Menej telefonátov a nový zdroj príjmu, ktorý nezávisí od poisťovní.',
    },
];

const QUADRANTS = [
    { name: 'Vyšší dopad · začať hneď', items: ['1 · Výber zisku a rezerva firmy', '2 · Dohoda o zastupovaní'], strong: true },
    { name: 'Vyšší dopad · plánovať', items: ['3 · Objednávanie a služby pre samoplatcov', 'Úprava spoločenskej zmluvy', 'Plán odovzdania praxe'], strong: true },
    { name: 'Nižší dopad · pri príležitosti', items: ['Odpovede na recenzie', 'Aktualizácia Google profilu'] },
    { name: 'Nižší dopad · neskôr', items: ['Posúdenie holdingovej štruktúry'] },
];

const OPPORTUNITIES = [
    { pillar: 'Pacienti a marketing', title: 'Prehliadky pre firmy', text: 'Preventívne balíky pre zamestnávateľov v okolí ambulancie.' },
    { pillar: 'Pacienti a marketing', title: 'Cenník pre samoplatcov', text: 'Prehľadný cenník služieb nad rámec poisťovne na webe aj v čakárni.' },
    { pillar: 'Pacienti a marketing', title: 'Google profil a recenzie', text: 'Odpovede na recenzie a aktuálny profil sú prvý dojem nového pacienta.' },
    { pillar: 'Majetok a štruktúra', title: 'Dôchodkové sporenie cez firmu', text: 'Jedna z foriem príjmu, ktorú porovnáme s daňovým poradcom.' },
    { pillar: 'Majetok a štruktúra', title: 'Hodnota ambulancie', text: 'Odhad hodnoty a plán odovzdania praxe, kým je čas.' },
    { pillar: 'Založenie a rast', title: 'Spoločenská zmluva', text: 'Pravidlá pre prípad odchodu spoločníka, spísané s advokátom.' },
];

const STEPS = [
    { when: 'Prvých 30 dní', items: ['Zhromaždiť podklady: účtovnú závierku, spoločenskú zmluvu, poistné zmluvy', 'Stretnutie s daňovým poradcom k forme výplaty', 'Písomná dohoda o zastupovaní'] },
    { when: 'Do 90 dní', items: ['Nastaviť výplatu a výšku rezervy firmy', 'Revízia poistenia zodpovednosti a krytia výpadku príjmu', 'Spustiť online objednávanie a pripomienky termínov'] },
    { when: 'Do 12 mesiacov', items: ['Balíky služieb pre samoplatcov a firmy', 'Úprava spoločenskej zmluvy pre prípad odchodu spoločníka, s advokátom', 'Plán odovzdania praxe a posúdenie holdingovej štruktúry s expertmi'] },
];

const WHO = [
    ['Dane a spôsob výplaty', 'Daňový poradca, člen Slovenskej komory daňových poradcov'],
    ['Spoločenská zmluva, nástupníctvo, holding', 'Advokát, v spolupráci s daňovými expertmi'],
    ['Poistenie a finančné plánovanie', 'Mediconect ako podriadený finančný agent'],
    ['Objednávanie, web, marketing ambulancie', 'Mediconect, aplikácia Ordevia'],
];

const HOOKS = [
    'Čo sa stane s ambulanciou, ak vy nebudete ordinovať tri mesiace?',
    'Komu pracuje zisk, ktorý leží na firemnom účte?',
    'Koľko pacientov sa k vám nedovolá, kým si nájde iného lekára?',
];

const H2 = 'font-kanit font-light text-3xl md:text-5xl text-white tracking-tight text-balance';
const EYEBROW = 'font-stolzl text-xs uppercase tracking-[0.25em] text-teal mb-3';
const CARD = 'bg-[#fff] border border-[#D3D9DE] rounded-3xl text-[#0A2B40]';
const TILE: Record<Status, string> = {
    Ošetrené: 'bg-[#1F8A5B] text-[#fff]',
    Čiastočne: 'bg-[#E9B949] text-[#3B2A05]',
    Otvorené: 'bg-[#D8584A] text-[#fff]',
};
const DOT: Record<Status, string> = { Ošetrené: '#1F8A5B', Čiastočne: '#E9B949', Otvorené: '#D8584A' };

const ALL_AREAS = PILLARS.flatMap((p) => p.areas.map((a) => ({ ...a, pillar: p.name })));
const COUNT = (st: Status) => ALL_AREAS.filter((a) => a.status === st).length;

// Index: Otvorené = 0 bodov, Čiastočne = 1, Ošetrené = 2. Index = získané body / možné body (2 na oblasť), v celých percentách.
const POINTS: Record<Status, number> = { Otvorené: 0, Čiastočne: 1, Ošetrené: 2 };
const indexOf = (areas: { status: Status }[]) => Math.round((areas.reduce((s, a) => s + POINTS[a.status], 0) / (areas.length * 2)) * 100);
const INDEX = indexOf(ALL_AREAS);
const CRITICAL = ALL_AREAS.filter((a) => a.critical && a.status === 'Otvorené').length;

const SHORT = ['Výber zisku', 'Dôchodok', 'Zastupovanie', 'Poistenie', 'Telefóny', 'Samoplatcovia'];
// Sieť vzťahov: 6 uzlov na šesťuholníku
const NODES = MATRIX_AREAS.map((name, i) => {
    const ang = ((i * 60 - 90) * Math.PI) / 180;
    return { name, n: i + 1, x: 300 + 150 * Math.cos(ang), y: 210 + 120 * Math.sin(ang), ang };
});

// Bublinová matica (x = náročnosť, y = dopad, 0–100)
const BUBBLES = [
    { label: '1 · Výber zisku', x: 17, y: 8, strong: true },
    { label: '2 · Zastupovanie', x: 22, y: 42, strong: true },
    { label: '3 · Objednávanie', x: 68, y: 8, strong: true },
    { label: 'Spoločenská zmluva', x: 66, y: 22 },
    { label: 'Odovzdanie praxe', x: 78, y: 44 },
    { label: 'Recenzie', x: 17, y: 70 },
    { label: 'Google profil', x: 34, y: 92 },
    { label: 'Holding', x: 80, y: 78 },
];

const OPP_ICONS = [Stethoscope, Banknote, Star, PiggyBank, Building2, Scale];
const WHO_ICONS = [Calculator, Scale, ShieldCheck, Smartphone];

function Donut() {
    const R = 70;
    const C = 2 * Math.PI * R;
    const parts: Status[] = ['Ošetrené', 'Čiastočne', 'Otvorené'];
    let offset = 0;
    return (
        <svg viewBox="0 0 200 200" className="w-52 h-52 md:w-64 md:h-64" role="img" aria-label={`Ordinačný index ${INDEX} %. Stav oblastí: 1 ošetrená, 6 čiastočne, 5 otvorených`}>
            <circle cx="100" cy="100" r={R} fill="none" stroke="#ECEEF0" strokeWidth="26" />
            {parts.map((st) => {
                const len = (COUNT(st) / 12) * C;
                const el = (
                    <circle
                        key={st}
                        cx="100" cy="100" r={R} fill="none"
                        stroke={DOT[st]} strokeWidth="26"
                        strokeDasharray={`${len - 3} ${C - len + 3}`}
                        strokeDashoffset={-offset}
                        transform="rotate(-90 100 100)"
                    />
                );
                offset += len;
                return el;
            })}
            <text x="100" y="98" textAnchor="middle" className="fill-[#0A2B40]" style={{ fontSize: 40, fontWeight: 300 }}>{INDEX} %</text>
            <text x="100" y="120" textAnchor="middle" className="fill-[#4B6272]" style={{ fontSize: 12, letterSpacing: 1.5 }}>INDEX</text>
        </svg>
    );
}

function Network() {
    return (
        <svg viewBox="-110 0 840 420" className="w-full h-auto" role="img" aria-label="Sieť vzťahov medzi šiestimi oblasťami">
            <title>Silné väzby: 1–2, 3–4, 5–6. Slabé väzby: 2–4, 2–6, 3–5.</title>
            {Object.entries(LINKS).map(([k, v]) => {
                const [a, b] = k.split('-').map(Number);
                return (
                    <line
                        key={k}
                        x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y}
                        stroke="#4CADB6" strokeLinecap="round"
                        strokeWidth={v === 1 ? 7 : 2.5}
                        strokeDasharray={v === 1 ? undefined : '2 8'}
                    />
                );
            })}
            {NODES.map((n) => {
                const tx = n.x + Math.cos(n.ang) * 56;
                const ty = n.y + Math.sin(n.ang) * 50 + 8;
                const anchor = Math.abs(Math.cos(n.ang)) < 0.2 ? 'middle' : Math.cos(n.ang) > 0 ? 'start' : 'end';
                return (
                    <g key={n.n}>
                        <circle cx={n.x} cy={n.y} r="34" fill="#0A2B40" />
                        <text x={n.x} y={n.y + 7} textAnchor="middle" fill="#fff" style={{ fontSize: 26, fontWeight: 500 }}>{n.n}</text>
                        <text x={tx} y={ty} textAnchor={anchor} className="fill-[#0A2B40]" style={{ fontSize: 27, fontWeight: 500 }}>{SHORT[n.n - 1]}</text>
                    </g>
                );
            })}
        </svg>
    );
}

function Pill({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
    return (
        <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm ${dark ? 'bg-[#0A2B40] text-[#fff]' : 'bg-[#E6F3F4] text-[#0A2B40]'}`}>{children}</span>
    );
}

export default function Content() {
    const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Všetky');

    return (
        <>
            <PageHero
                badge="Vzor · fiktívna ambulancia „Klient A“"
                title="Takto vyzerá výstup Ordinačného indexu"
                subtitle="Čo Ordinačný index je, čo sleduje, ako chránime vaše údaje a ako vyzerá výsledok. Údaje vo vzore sú vymyslené."
                breadcrumbs={trail('/ordinacny-index/vzor')}
            />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-24 flex flex-col gap-28 font-stolzl">
                {/* Čo je Ordinačný index */}
                <section aria-labelledby="co-je">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo/ordinacny-index_logo_pozit.svg" alt="Ordinačný index – Mediconect" width={420} height={56} className="h-12 sm:h-14 w-auto mb-8" />
                    <p className={EYEBROW}>Čo je Ordinačný index</p>
                    <h2 id="co-je" className={H2}>Audit ambulancie a vašich financií, nie ponuka</h2>
                    <p className="text-white/70 mt-4 max-w-3xl leading-relaxed">
                        Ordinačný index je úvodný audit. Pozrieme sa na celok: ambulanciu, ekonomiku firmy, spôsob, ako sa zisk dostáva k vám, osobné financie a plány na ďalšie roky.
                        Výsledkom je písomný Implementačný plán s tromi prioritami a poradím krokov. Začíname rozhovorom o vašej situácii, nie ponukou.
                    </p>
                    <ol className="grid md:grid-cols-4 gap-4 mt-10">
                        {[
                            { Icon: MessageSquare, t: 'Úvodný rozhovor', d: 'Zoznámime sa a dohodneme, čo riešite.' },
                            { Icon: FileSignature, t: 'Zmluva o mlčanlivosti', d: 'Pred zdieľaním údajov ju podpíšeme.' },
                            { Icon: ClipboardList, t: 'Dotazník', d: 'Vyplníte ho vo vlastnom tempe, aj s účtovníkom.' },
                            { Icon: FileCheck, t: 'Pracovné stretnutie a plán', d: 'Prejdeme otvorené body a odovzdáme Implementačný plán.' },
                        ].map(({ Icon, t, d }, i) => (
                            <li key={t} className={`${CARD} p-6 flex flex-col gap-3 relative`}>
                                <span className="flex items-center justify-between">
                                    <span className="w-11 h-11 rounded-2xl bg-[#0A2B40] text-[#fff] grid place-items-center"><Icon size={22} aria-hidden="true" /></span>
                                    <span className="font-kanit font-light text-4xl text-[#B3DEE1]">{i + 1}</span>
                                </span>
                                <h3 className="font-kanit text-lg font-normal leading-tight">{t}</h3>
                                <p className="text-sm text-[#4B6272] leading-snug">{d}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Čo Ordinačný index sleduje – 14 častí dotazníka */}
                <section aria-labelledby="co-sleduje">
                    <p className={EYEBROW}>Čo Ordinačný index sleduje</p>
                    <h2 id="co-sleduje" className={H2}>Dvanásť oblastí a dve pracovné časti</h2>
                    <p className="text-white/70 mt-4 max-w-3xl leading-relaxed">
                        Dotazník má 14 častí. Časti A až L mapujú dvanásť oblastí, v ďalších dvoch určíte priority a pošlete podklady.
                        Predvyplníme to, čo je vo verejných registroch, takže stačí overiť a doplniť.
                    </p>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
                        {QUESTIONNAIRE.map((q) => (
                            <li key={q.key} className={`${CARD} p-4 flex gap-3 items-start`}>
                                <span className={`shrink-0 w-9 h-9 rounded-xl grid place-items-center font-kanit text-lg ${q.key === 'M' || q.key === 'N' ? 'bg-[#E6F3F4] text-[#25727C]' : 'bg-[#0A2B40] text-[#fff]'}`}>{q.key}</span>
                                <span className="flex flex-col gap-0.5">
                                    <span className="font-medium leading-tight">{q.name}</span>
                                    <span className="text-xs text-[#4B6272] leading-snug">{q.asks}</span>
                                    {q.acc && <span className="text-[11px] text-[#25727C] mt-1">môže vyplniť účtovník</span>}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Výsledok */}
                <div>
                    <p className={EYEBROW}>Čo je výsledkom</p>
                    <h2 className={H2}>Takto vyzerá výsledok</h2>
                    <p className="text-white/70 mt-4 max-w-3xl leading-relaxed">
                        Index v percentách, mapa oblastí so stavom, tri priority, príležitosti a poradie krokov. Nie je to prísľub výsledku, výnosu ani úspory, ale podklad pre vaše rozhodnutie.
                    </p>
                </div>

                {/* Prehľad: prstenec + piliere */}
                <section aria-label="Prehľad stavu" className={`${CARD} p-6 md:p-10 grid md:grid-cols-[auto_1fr] gap-10 items-center`}>
                    <div className="flex flex-col items-center gap-4">
                        <Donut />
                        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm">
                            {(['Otvorené', 'Čiastočne', 'Ošetrené'] as Status[]).map((st) => (
                                <li key={st} className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full" style={{ background: DOT[st] }} aria-hidden="true" />
                                    {COUNT(st)} {st.toLowerCase()}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="font-kanit font-light text-2xl md:text-3xl leading-snug text-balance">
                            Index ambulancie je {INDEX} %. Päť z dvanástich oblastí je otvorených, z toho {CRITICAL} kritické. Z nich vyberáme <span className="text-[#25727C]">tri priority</span>.
                        </p>
                        <p className="text-sm text-[#4B6272] leading-relaxed -mt-3">
                            Ako sa index počíta: každá oblasť dostane stav Otvorené (0 bodov), Čiastočne (1) alebo Ošetrené (2). Index je podiel získaných bodov z možných, v celých percentách. Nie je to porovnanie s inými ambulanciami, ale váš vlastný stav, ktorý po roku porovnáme s novým auditom.
                        </p>
                        <div className="flex flex-col gap-4">
                            {PILLARS.map((p) => (
                                <div key={p.name} className="flex flex-col gap-1.5">
                                    <span className="text-sm text-[#4B6272] flex justify-between"><span>{p.name}</span><span className="font-medium text-[#0A2B40]">{indexOf(p.areas)} %</span></span>
                                    <div className="flex gap-1.5" aria-hidden="true">
                                        {p.areas.map((a) => (
                                            <span key={a.name} className="h-4 flex-1 rounded-full" style={{ background: DOT[a.status] }} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a
                            href="/Ordinacny_index_vzor_Mediconect.pdf"
                            download
                            className="self-start inline-flex items-center gap-3 rounded-xl bg-[#0A2B40] text-[#fff] px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            <Download size={16} aria-hidden="true" /> Vzor ako PDF (16 strán)
                        </a>
                    </div>
                </section>

                {/* Hooky */}
                <section aria-label="Otázky, ktoré Ordinačný index nastolí" className="grid md:grid-cols-3 gap-4">
                    {HOOKS.map((h, i) => (
                        <figure key={h} className="rounded-3xl bg-[#0A2B40] text-[#F2F6F8] p-7 flex flex-col gap-4 justify-between min-h-[190px]">
                            <span className="font-kanit font-light text-5xl text-[#4CADB6] leading-none">{i + 1}</span>
                            <blockquote className="font-serif italic text-xl leading-snug">{h}</blockquote>
                        </figure>
                    ))}
                    <p className="md:col-span-3 text-center text-white/70">Ordinačný index ich nastolí skôr, než ich nastolí život.</p>
                </section>

                {/* Mapa oblastí – teplotná mapa */}
                <section aria-labelledby="mapa">
                    <p className={EYEBROW}>Mapa oblastí</p>
                    <h2 id="mapa" className={H2}>Dvanásť oblastí na jednom pohľade</h2>
                    <div className="flex flex-wrap gap-2 mt-6" role="group" aria-label="Filter stavu oblasti">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                type="button"
                                onClick={() => setFilter(f)}
                                aria-pressed={filter === f}
                                className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                                    filter === f ? 'bg-teal text-[#fff] border-teal' : 'bg-[#fff] text-[#0A2B40] border-[#D3D9DE] hover:border-teal'
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 mt-8">
                        {PILLARS.map((p) => (
                            <div key={p.name} className="flex flex-col gap-3">
                                <h3 className="font-kanit text-lg font-normal text-white">{p.name}</h3>
                                {p.areas.map((a) => {
                                    const dim = filter !== 'Všetky' && filter !== a.status;
                                    return (
                                        <div
                                            key={a.name}
                                            className={`rounded-2xl p-4 flex flex-col gap-1.5 transition-opacity duration-300 ${TILE[a.status]} ${dim ? 'opacity-20' : 'opacity-100'}`}
                                        >
                                            <span className="font-medium leading-tight"><span className="opacity-70 mr-1.5">{a.key}</span>{a.name}</span>
                                            <span className="text-xs opacity-90 leading-snug">{a.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sieť vzťahov */}
                <section aria-labelledby="vztahy" className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
                    <div>
                        <p className={EYEBROW}>Vzťahy medzi oblasťami</p>
                        <h2 id="vztahy" className={H2}>Čo spolu súvisí</h2>
                        <ul className="mt-6 flex flex-col gap-3 text-[#0A2B40]">
                            <li className="flex items-center gap-3"><span className="w-10 h-[7px] rounded-full bg-[#4CADB6]" aria-hidden="true" /> silná väzba: výber zisku ↔ dôchodok, zastupovanie ↔ poistenie, telefóny ↔ samoplatcovia</li>
                            <li className="flex items-center gap-3"><span className="w-10 border-t-[3px] border-dotted border-[#4CADB6]" aria-hidden="true" /> slabá väzba</li>
                        </ul>
                    </div>
                    <div className={`${CARD} p-4 md:p-6`}>
                        <Network />
                        <table className="sr-only">
                            <caption>Vzťahová matica oblastí</caption>
                            <thead><tr><th scope="col">Oblasť</th>{MATRIX_AREAS.map((m) => <th key={m} scope="col">{m}</th>)}</tr></thead>
                            <tbody>
                                {MATRIX_AREAS.map((row, r) => (
                                    <tr key={row}>
                                        <th scope="row">{row}</th>
                                        {MATRIX_AREAS.map((col, c) => (
                                            <td key={col}>{r === c ? '' : linkOf(r, c) === 1 ? 'silná' : linkOf(r, c) === 2 ? 'slabá' : ''}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Tri priority */}
                <section aria-labelledby="priority">
                    <p className={EYEBROW}>Implementačný plán</p>
                    <h2 id="priority" className={H2}>Tri priority</h2>
                    <div className="flex flex-col gap-6 mt-10">
                        {PRIORITIES.map((p) => (
                            <article key={p.n} className={`${CARD} overflow-hidden grid md:grid-cols-[220px_1fr]`}>
                                <div className="bg-[#0A2B40] text-[#F2F6F8] p-8 flex md:flex-col justify-between items-center md:items-start gap-4">
                                    <span className="font-kanit font-light text-8xl leading-none text-[#4CADB6]">{p.n}</span>
                                    <span className="text-xs uppercase tracking-[0.2em] text-[#A9BFCC] md:text-left text-right">{p.pillar}</span>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col gap-6">
                                    <h3 className="font-kanit text-2xl md:text-3xl font-light text-balance">{p.title}</h3>

                                    {p.n === 1 && (
                                        <div className="flex flex-wrap items-center gap-3" aria-label="Schéma: zisk firmy sa delí na výplatu, rezervu a prostriedky podľa účelu">
                                            <Pill dark>Zisk firmy</Pill>
                                            <ArrowRight size={18} className="text-[#4CADB6]" aria-hidden="true" />
                                            <div className="flex flex-wrap gap-2">
                                                <Pill>Výplata majiteľovi</Pill><Pill>Rezerva firmy</Pill><Pill>Prostriedky podľa účelu</Pill>
                                            </div>
                                        </div>
                                    )}
                                    {p.n === 2 && (
                                        <ol className="grid grid-cols-3 gap-3 text-sm" aria-label="Prvých 30 dní neprítomnosti">
                                            {['Zastupujúci lekár dohodnutý písomne', 'Správa pre pacientov pripravená', 'Krytie výpadku príjmu preverené'].map((t, i) => (
                                                <li key={t} className="rounded-2xl bg-[#E6F3F4] p-4 flex flex-col gap-2">
                                                    <span className="font-kanit text-2xl text-[#25727C]">{i + 1}</span>{t}
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                    {p.n === 3 && (
                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            <div className="rounded-2xl bg-[#F9E4E1] p-4"><b className="block mb-1 text-[#8C3328]">Dnes</b>Len telefón · nezdvihnuté hovory · sestra viazaná na telefón</div>
                                            <div className="rounded-2xl bg-[#E3F1EA] p-4"><b className="block mb-1 text-[#1F6B47]">Cieľ</b>Online termín · pripomienky · nová služba pre samoplatcov</div>
                                        </div>
                                    )}

                                    <dl className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-[15px] leading-relaxed">
                                        <div><dt className="text-xs uppercase tracking-[0.15em] text-[#25727C] mb-1">Zistenie</dt><dd className="text-[#2E4658]">{p.finding}</dd></div>
                                        <div><dt className="text-xs uppercase tracking-[0.15em] text-[#25727C] mb-1">Prečo na tom záleží</dt><dd className="text-[#2E4658]">{p.why}</dd></div>
                                        <div><dt className="text-xs uppercase tracking-[0.15em] text-[#25727C] mb-1">Odporúčaný krok</dt><dd className="text-[#2E4658]">{p.step}</dd></div>
                                        <div><dt className="text-xs uppercase tracking-[0.15em] text-[#25727C] mb-1">Čo získate</dt><dd className="text-[#2E4658]">{p.gain}</dd></div>
                                        <div className="md:col-span-2"><dt className="text-xs uppercase tracking-[0.15em] text-[#25727C] mb-1">Kto to rieši</dt><dd className="text-[#2E4658]">{p.who}</dd></div>
                                    </dl>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Bublinová matica */}
                <section aria-labelledby="matica-priorit">
                    <p className={EYEBROW}>Matica priorít</p>
                    <h2 id="matica-priorit" className={H2}>Dopad a náročnosť</h2>
                    <div className={`${CARD} mt-8 p-4 md:p-6`}>
                        <div className="grid grid-cols-[auto_1fr] gap-3">
                            <div className="text-xs uppercase tracking-[0.2em] text-[#4B6272] [writing-mode:vertical-rl] rotate-180 text-center">Dopad →</div>
                            <div>
                                <div className="relative h-[480px] md:h-[420px] rounded-2xl overflow-hidden bg-[#F4F6F7]">
                                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2" aria-hidden="true">
                                        <div className="bg-[#E3F1EA]/70 border-r border-b border-[#D3D9DE] p-3 text-xs uppercase tracking-wider text-[#1F6B47]">Začať hneď</div>
                                        <div className="bg-[#E6F3F4]/70 border-b border-[#D3D9DE] p-3 text-xs uppercase tracking-wider text-[#25727C] text-right">Plánovať</div>
                                        <div className="border-r border-[#D3D9DE] p-3 text-xs uppercase tracking-wider text-[#4B6272] self-end">Pri príležitosti</div>
                                        <div className="p-3 text-xs uppercase tracking-wider text-[#4B6272] text-right self-end">Neskôr</div>
                                    </div>
                                    <ul>
                                        {BUBBLES.map((b) => (
                                            <li
                                                key={b.label}
                                                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs md:text-sm whitespace-nowrap shadow-sm ${
                                                    b.strong ? 'bg-[#0A2B40] text-[#fff] font-medium' : 'bg-[#fff] text-[#0A2B40] border border-[#C4CDD3]'
                                                }`}
                                                style={{ left: `${b.x * 0.8 + 10}%`, top: `${b.y * 0.72 + 14}%` }}
                                            >
                                                {b.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-xs uppercase tracking-[0.2em] text-[#4B6272] text-center mt-3">Náročnosť →</div>
                            </div>
                        </div>
                        <p className="text-sm text-[#4B6272] mt-4">Tmavé body sú tri priority Implementačného plánu. Zaradenie je orientačné a upresní sa v rozhovore.</p>
                    </div>
                </section>

                {/* Príležitosti */}
                <section aria-labelledby="prilezitosti">
                    <p className={EYEBROW}>Príležitosti</p>
                    <h2 id="prilezitosti" className={H2}>Šesť príležitostí navyše</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                        {OPPORTUNITIES.map((o, i) => {
                            const Icon = OPP_ICONS[i];
                            return (
                                <div key={o.title} className={`${CARD} p-5 md:p-6 flex flex-col gap-3`}>
                                    <span className="w-11 h-11 rounded-2xl bg-[#E6F3F4] text-[#25727C] grid place-items-center"><Icon size={22} aria-hidden="true" /></span>
                                    <h3 className="font-kanit text-lg font-normal leading-tight">{o.title}</h3>
                                    <p className="text-sm text-[#4B6272] leading-snug">{o.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Časová os */}
                <section aria-labelledby="kroky">
                    <p className={EYEBROW}>Poradie krokov</p>
                    <h2 id="kroky" className={H2}>Od podkladov k štruktúre</h2>
                    <div className="mt-10 relative grid md:grid-cols-3 gap-6">
                        <div className="hidden md:block absolute left-0 right-0 top-[22px] h-1 rounded-full bg-gradient-to-r from-[#4CADB6] to-[#B3DEE1]" aria-hidden="true" />
                        {STEPS.map((st, i) => (
                            <div key={st.when} className="relative flex flex-col gap-4">
                                <span className="relative z-10 w-11 h-11 rounded-full bg-[#0A2B40] text-[#fff] grid place-items-center font-kanit text-lg">{i + 1}</span>
                                <div className={`${CARD} p-6 flex flex-col gap-3`}>
                                    <h3 className="font-kanit text-xl font-normal">{st.when}</h3>
                                    <ul className="flex flex-col gap-2 text-[15px] text-[#2E4658]">
                                        {st.items.map((it) => (
                                            <li key={it} className="flex gap-2"><CalendarCheck size={16} className="mt-1 shrink-0 text-[#4CADB6]" aria-hidden="true" />{it}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Kto čo rieši */}
                <section aria-labelledby="kto">
                    <p className={EYEBROW}>Zodpovednosti</p>
                    <h2 id="kto" className={H2}>Kto čo rieši</h2>
                    <p className="font-serif italic text-xl text-white border-l-4 border-teal pl-5 mt-4 max-w-2xl">
                        Mediconect je jeden partner, ktorý poskladá celok. Odborné veci robia odborníci s príslušným oprávnením.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4 mt-8">
                        {WHO.map(([a, b], i) => {
                            const Icon = WHO_ICONS[i];
                            return (
                                <div key={a} className={`${CARD} p-6 flex flex-col gap-3`}>
                                    <span className="w-11 h-11 rounded-2xl bg-[#0A2B40] text-[#fff] grid place-items-center"><Icon size={22} aria-hidden="true" /></span>
                                    <h3 className="font-medium leading-snug">{a}</h3>
                                    <p className="text-sm text-[#4B6272] leading-snug">{b}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Ochrana dát a NDA */}
                <section aria-labelledby="ochrana">
                    <p className={EYEBROW}>Ochrana údajov a mlčanlivosť</p>
                    <h2 id="ochrana" className={H2}>Vaše údaje sú chránené zmluvou, nie sľubom</h2>
                    <p className="text-white/70 mt-4 max-w-3xl leading-relaxed">
                        Pracujeme s informáciami o majetku, firme a osobných financiách, preto pred zdieľaním údajov podpisujeme zmluvu o mlčanlivosti. Zaväzuje iba nás. K spolupráci ani k platbe vás nezaväzuje.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        {[
                            { Icon: Lock, t: 'Prístup len pre konateľa', d: 'Citlivé finančné údaje uvidí výlučne konateľ Mediconect. Ďalšia osoba len s vaším súhlasom, ktorý ju určí menovite.' },
                            { Icon: ShieldCheck, t: 'Nič bez vášho súhlasu', d: 'Údaje nedostane banka, poisťovňa ani iný partner bez výslovného súhlasu pre konkrétny prípad. Žiadna reklama ani profilovanie.' },
                            { Icon: EyeOff, t: 'Bez referencií', d: 'Meno ani ordináciu nezverejníme. Údaje sa nepoužijú v referenciách ani prípadových štúdiách, ani anonymizovane. V podkladoch ste „Klient A“.' },
                            { Icon: Cpu, t: 'Umelá inteligencia s pravidlami', d: 'Len firemný účet s kontrolou prístupov, bez trénovania modelov na vašich údajoch. Verejné a bezplatné nástroje sú zakázané.' },
                            { Icon: HeartPulse, t: 'Žiadne zdravotné údaje pacientov', d: 'Dotazník sa ich netýka a neprijímame ich. Ak by prišli omylom, oznámime vám to, nepoužijeme ich a zlikvidujeme.' },
                            { Icon: Trash2, t: 'Vrátenie a likvidácia', d: 'Na vašu žiadosť do 30 dní od skončenia spolupráce údaje vrátime alebo bezpečne zlikvidujeme. Mlčanlivosť platí aj potom.' },
                        ].map(({ Icon, t, d }) => (
                            <div key={t} className={`${CARD} p-6 flex flex-col gap-3`}>
                                <span className="w-11 h-11 rounded-2xl bg-[#E6F3F4] text-[#25727C] grid place-items-center"><Icon size={22} aria-hidden="true" /></span>
                                <h3 className="font-kanit text-lg font-normal leading-tight">{t}</h3>
                                <p className="text-sm text-[#4B6272] leading-snug">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-white/60 mt-6 max-w-3xl leading-relaxed">
                        Zmluva obsahuje zmluvnú pokutu za porušenie mlčanlivosti a vzťahujú sa na ňu aj zákonné povinnosti pri finančnom sprostredkovaní. Údaje spracúva MediConect s. r. o. výlučne na prípravu návrhu spolupráce.{' '}
                        <Link href="/ochrana-osobnych-udajov" className="underline hover:text-teal">Ochrana osobných údajov</Link>
                    </p>
                </section>

                {/* Obavy */}
                <section aria-labelledby="obavy">
                    <p className={EYEBROW}>Najčastejšie obavy</p>
                    <h2 id="obavy" className={H2}>Čo sa nás lekári pýtajú pred začiatkom</h2>
                    <div className="flex flex-col gap-3 mt-8 max-w-4xl">
                        {ORDINACNY_INDEX_FAQ.map((f) => (
                            <details key={f.question} className={`${CARD} group`}>
                                <summary className="list-none cursor-pointer p-5 flex items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                                    {f.question}
                                    <ChevronDown size={18} className="shrink-0 text-[#25727C] transition-transform group-open:rotate-180" aria-hidden="true" />
                                </summary>
                                <p className="px-5 pb-5 text-[15px] text-[#2E4658] leading-relaxed">{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Výzva */}
                <section className="rounded-3xl bg-[#0A2B40] text-[#F2F6F8] p-8 md:p-14 flex flex-col gap-5">
                    <h2 className="font-kanit font-light text-3xl md:text-5xl text-balance !text-[#F2F6F8]">Takýto výstup vznikne pre vašu ambulanciu</h2>
                    <p className="text-[#A9BFCC] max-w-2xl">
                        Začíname rozhovorom o vašej situácii, nie ponukou. Dotazník vyplníte vo vlastnom tempe a môžete ho kedykoľvek prerušiť.
                    </p>
                    <Link
                        href="/konzultacia"
                        className="self-start inline-flex items-center gap-2 rounded-xl bg-[#4CADB6] text-[#041D2C] px-6 py-4 font-semibold hover:opacity-90 transition-opacity"
                    >
                        Dohodnúť úvodný rozhovor <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                    <p className="text-[#F2F6F8]">+421 948 220 845 · info@mediconect.sk</p>
                </section>

                <footer className="flex flex-col gap-3 text-sm text-white/60 leading-relaxed">
                    <p>
                        Vzorový dokument s vymyslenými údajmi. Skutočný výstup vychádza z údajov klienta a nie je prísľubom výsledku, výnosu ani úspory.
                        Daňové poradenstvo poskytujú členovia Slovenskej komory daňových poradcov, právne služby advokáti.
                    </p>
                    <p>{FINANCE_DISCLOSURE}</p>
                </footer>
            </div>
        </>
    );
}
