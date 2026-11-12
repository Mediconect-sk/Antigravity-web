import React from 'react';
import Image from 'next/image';
import {
    Flag, Building2, Stethoscope, Tag, Megaphone, CalendarCheck, Users, BarChart3,
    Coins, TrendingUp, House, ShieldCheck, ChevronRight, ChevronDown,
} from 'lucide-react';

/**
 * Štyri príbehy z praxe: ako sa oblasti Ordinačného indexu vťahujú jedna na druhú.
 * Fotografie sú ilustračné (vytvorené AI) a pod príbehmi je to uvedené.
 * Texty sú bez prísľubov výsledku (pravidlo z ORDEVIA.md / definície produktu).
 */

type K = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L';

const AREA: Record<K, { name: string; tone: string; Icon: React.ComponentType<{ size?: number; 'aria-hidden'?: boolean | 'true' | 'false' }>; critical?: boolean }> = {
    A: { name: 'Vízia a ciele', tone: '#0A2B40', Icon: Flag },
    B: { name: 'Firma a vlastníctvo', tone: '#0A2B40', Icon: Building2 },
    C: { name: 'Ambulancie a kapacita', tone: '#0A2B40', Icon: Stethoscope },
    D: { name: 'Služby a samoplatcovia', tone: '#1D6B78', Icon: Tag },
    G: { name: 'Značka, web a marketing', tone: '#1D6B78', Icon: Megaphone },
    E: { name: 'Objednávanie a IT', tone: '#3A5A7A', Icon: CalendarCheck },
    F: { name: 'Personál a zastupovanie', tone: '#3A5A7A', Icon: Users, critical: true },
    H: { name: 'Ekonomika firmy', tone: '#3A5A7A', Icon: BarChart3 },
    I: { name: 'Výber zisku a voľné prostriedky', tone: '#8A5A2B', Icon: Coins },
    J: { name: 'Osobný majetok a investície', tone: '#8A5A2B', Icon: TrendingUp },
    K: { name: 'Dôchodok, nástupníctvo a rodina', tone: '#8A5A2B', Icon: House, critical: true },
    L: { name: 'Poistenie a riziká', tone: '#8A5A2B', Icon: ShieldCheck, critical: true },
};

const STORIES: {
    n: number;
    img: string;
    pos: string;
    alt: string;
    title: string;
    sub: string;
    steps: [K, string][];
    lead: string;
    text: string;
}[] = [
    {
        n: 1,
        img: '/images/ordinacny-index/pribeh-1.webp',
        pos: '50% 50%',
        alt: 'Prázdna čakáreň ambulancie so zatvorenými dverami ordinácie',
        title: 'Lekár ochorie na niekoľko mesiacov',
        sub: 'Čo sa stane, ak ambulancia nemá zástupcu?',
        steps: [
            ['F', 'Nie je určený zástupca ani postup, kto čo preberie.'],
            ['C', 'Ordinačné hodiny sa rušia, pacienti odchádzajú inam.'],
            ['H', 'Tržby klesajú, nájom a mzdy bežia ďalej.'],
            ['I', 'Majiteľ nemá z čoho vyberať a rezerva sa míňa.'],
            ['L', 'Ak je výpadok príjmu poistený, reťaz sa tu zastaví.'],
        ],
        lead: 'Kde sa dá reťaz prerušiť:',
        text: 'zástupca na začiatku a krytie výpadku príjmu na konci.',
    },
    {
        n: 2,
        img: '/images/ordinacny-index/pribeh-2.webp',
        pos: '50% 25%',
        alt: 'Skúsenejší lekár odovzdáva kľúče mladšej kolegyni',
        title: 'Chcem ambulanciu raz odovzdať alebo predať',
        sub: 'Čo musí byť pripravené vopred?',
        steps: [
            ['A', 'Majiteľ vie, kedy a komu chce ambulanciu odovzdať.'],
            ['B', 'Podiely, zmluvy a priestory sú usporiadané na firme.'],
            ['H', 'Čísla sú čitateľné pre kupca alebo nástupcu.'],
            ['J', 'Majetok mimo firmy kryje život po odovzdaní.'],
            ['K', 'Plán odovzdania, závet a vyčíslený dôchodkový cieľ.'],
        ],
        lead: 'Čo si z toho odniesť:',
        text: 'nástupníctvo sa nedá doriešiť za pár týždňov. Stojí na vlastníctve, ekonomike aj osobnom majetku.',
    },
    {
        n: 3,
        img: '/images/ordinacny-index/pribeh-3.webp',
        pos: '50% 35%',
        alt: 'Pacientka si objednáva termín cez telefón v moderne vyzerajúcej čakárni',
        title: 'Chcem viac samoplatcov',
        sub: 'Prečo nestačí len pridať novú službu?',
        steps: [
            ['G', 'Pacienti vás nájdu a vidia, čo ponúkate.'],
            ['E', 'Termín si vedia rezervovať bez telefonovania.'],
            ['D', 'Ponuka a cenník dávajú zmysel a sú vyčíslené.'],
            ['C', 'Je dosť času a priestoru na nové služby.'],
            ['H', 'Služba prináša zisk, nielen tržby.'],
        ],
        lead: 'Na poradí záleží:',
        text: 'služba bez objednávania a voľnej kapacity zostane nevyužitá, aj keď je výborná.',
    },
    {
        n: 4,
        img: '/images/ordinacny-index/pribeh-4.webp',
        pos: '50% 60%',
        alt: 'Stetoskop, prázdna pokladnička, mince a kalkulačka na tmavom stole',
        title: 'Firma zarába, ale peniaze „nie sú“',
        sub: 'Kam sa strácajú peniaze na ceste od tržieb k majiteľovi?',
        steps: [
            ['B', 'Forma firmy určuje odvody a spôsob výberu.'],
            ['H', 'Poznáte zisk a marže, nielen obrat.'],
            ['I', 'Plán výberu (mzda, dividenda) a rezerva firmy.'],
            ['J', 'Voľné peniaze majú cieľ a nie sú v jednom produkte.'],
            ['K', 'Z majetku vzniká dôchodok, ktorý sa dá vyčísliť.'],
        ],
        lead: 'Kľúčový článok:',
        text: 'výber zisku spája firmu so súkromným majetkom. Ak chýba plán, peniaze zostanú vo firme alebo sa míňajú bez cieľa.',
    },
];

export default function Stories() {
    return (
        <div className="flex flex-col gap-8">
            {STORIES.map((s) => (
                <article key={s.n} className="rounded-3xl overflow-hidden bg-[#fff] text-[#0A2B40] border border-[#D3D9DE]">
                    <div className="relative h-52 md:h-60 bg-[#0A2B40]">
                        <Image src={s.img} alt={s.alt} fill sizes="(min-width: 1152px) 1088px, 100vw" className="object-cover" style={{ objectPosition: s.pos }} />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#041D2C]/90 via-[#041D2C]/55 to-transparent" aria-hidden="true" />
                        <div className="absolute left-5 right-5 md:left-8 bottom-5 md:bottom-6 flex items-center gap-4 text-[#fff]">
                            <span className="shrink-0 w-11 h-11 rounded-full bg-[#4CADB6] text-[#041D2C] grid place-items-center font-kanit text-xl">{s.n}</span>
                            <div className="flex flex-col gap-0.5">
                                <h3 className="font-kanit font-light text-2xl md:text-3xl leading-tight text-balance !text-[#fff]">{s.title}</h3>
                                <p className="text-sm md:text-base text-[#D5E8EC]">{s.sub}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 md:p-8 flex flex-col gap-5">
                        <ol className="flex flex-col lg:flex-row lg:items-stretch gap-2">
                            {s.steps.map(([k, t], i) => {
                                const a = AREA[k];
                                return (
                                    <React.Fragment key={`${s.n}-${i}`}>
                                        <li className={`flex-1 min-w-0 rounded-2xl bg-[#F4F8FA] p-4 flex flex-col gap-2.5 ${a.critical ? 'border-2 border-[#B45309]' : 'border border-[#D3D9DE]'}`}>
                                            <span className="flex items-center gap-2.5">
                                                <span className="shrink-0 w-9 h-9 rounded-full grid place-items-center text-[#fff]" style={{ background: a.tone }}>
                                                    <a.Icon size={18} aria-hidden="true" />
                                                </span>
                                                {a.critical && <span className="ml-auto rounded-full bg-[#B45309] text-[#fff] text-[11px] font-semibold px-2 py-0.5">kritická</span>}
                                            </span>
                                            <span className="font-medium leading-tight text-[15px]">{a.name}</span>
                                            <span className="text-sm text-[#4B6272] leading-snug">{t}</span>
                                        </li>
                                        {i < s.steps.length - 1 && (
                                            <>
                                                <ChevronRight size={22} className="hidden lg:block shrink-0 self-center text-[#25727C]" aria-hidden="true" />
                                                <ChevronDown size={22} className="lg:hidden self-center text-[#25727C]" aria-hidden="true" />
                                            </>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </ol>
                        <p className="rounded-xl bg-[#E6F3F4] px-5 py-3 text-[15px] leading-relaxed">
                            <strong className="font-medium">{s.lead}</strong> {s.text}
                        </p>
                    </div>
                </article>
            ))}
            <p className="text-sm text-[#0A2B40]/60 leading-relaxed max-w-3xl">
                Fotografie sú ilustračné (vytvorené umelou inteligenciou). Príbehy sú zovšeobecnené a nie sú prísľubom výsledku, výnosu ani úspory.
            </p>
        </div>
    );
}
