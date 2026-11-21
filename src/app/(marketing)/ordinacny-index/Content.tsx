import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight, Calculator, Scale, ShieldCheck, Smartphone, Lock, EyeOff, Cpu, Trash2,
    HeartPulse, ChevronDown, MessageSquare, ClipboardList, FileCheck,
    ListOrdered, Route, Users, ChevronRight, Check, Flag, Building2, Clock, Megaphone, Tag, BarChart3, CalendarCheck, Coins, TrendingUp, House,
} from 'lucide-react';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';
import { ORDINACNY_INDEX_FAQ } from './faq';
import RelationMap from './RelationMap';
import Stories from './Stories';

/**
 * Stránka Ordinačného indexu (prestavaná 12. 11. 2026): definícia služby, mapa vzťahov
 * dvanástich oblastí, štyri príbehy z praxe, postup, ochrana údajov a otázky.
 * Bez semaforov, percent a tabuliek: výsledky skutočných klientov sa nezverejňujú.
 */

const H2 = 'font-kanit font-light text-3xl md:text-5xl text-white tracking-tight text-balance';
const EYEBROW = 'font-stolzl text-xs uppercase tracking-[0.25em] text-teal mb-3';
const CARD = 'bg-[#fff] border border-[#D3D9DE] rounded-3xl text-[#0A2B40]';

const WHO = [
    ['Dane a spôsob výplaty', 'Partnerská účtovná a daňová kancelária'],
    ['Spoločenská zmluva, nástupníctvo, holding', 'Advokát, v spolupráci s daňovými expertmi'],
    ['Poistenie a finančné plánovanie', 'Mediconect ako podriadený finančný agent'],
    ['Objednávanie, web, marketing ambulancie', 'Mediconect, aplikácia Ordevia'],
];
const WHO_ICONS = [Calculator, Scale, ShieldCheck, Smartphone];

export default function Content() {
    return (
        <>
            {/* Úvod: tmavý blok s modelom ambulancie a označenými oblasťami (21. 11. 2026) */}
            <section className="relative z-10 pt-28 lg:pt-32">
                <nav aria-label="Drobčeková navigácia" className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
                    <ol className="flex flex-wrap items-center gap-x-2 text-xs text-white/60 font-stolzl">
                        {trail('/ordinacny-index').map((crumb, i, arr) => (
                            <li key={crumb.path} className="flex items-center gap-2">
                                {i > 0 && <ChevronRight size={12} aria-hidden="true" />}
                                {i === arr.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link href={crumb.path} className="hover:underline">{crumb.name}</Link>}
                            </li>
                        ))}
                    </ol>
                </nav>
                <div className="mc-dark relative overflow-hidden rounded-[2rem] mx-4 lg:mx-8 lg:min-h-[680px] flex items-center">
                    {/* Abstraktná prémiová grafika na celom bloku (21. 11. 2026) */}
                    <Image src="/images/ordinacny-index/uvod-absB.webp" alt="" fill priority sizes="(min-width: 1024px) 1400px, 100vw" className="object-cover object-[70%_50%] opacity-60 lg:opacity-100" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#061C2C] via-[#061C2C]/70 to-transparent lg:via-[#061C2C]/40" />
                    <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col">
                        <div className="lg:max-w-[48%]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logo/ordinacny-index_logo_negat.svg" alt="Ordinačný index" width={360} height={48} className="h-10 sm:h-12 w-auto mb-8" />
                            <h1 className="font-kanit font-light text-5xl lg:text-6xl leading-[1.05] mb-6">
                                Vaša ambulancia ako celok: <strong>dvanásť oblastí, jedna mapa</strong>
                            </h1>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed mb-8 max-w-lg">
                                Úvodný rozhovor, online dotazník a prehľadný výstup, ktorý ukáže, ako spolu súvisia všetky oblasti vašej ambulancie a v akom poradí ich riešiť.
                            </p>
                            <Link href="/konzultacia" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#88D5DB] text-[#041D2C] font-bold px-7 py-3.5">
                                Dohodnúť úvodný rozhovor <ArrowRight size={16} />
                            </Link>
                            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-[#88D5DB]/25 pt-6">
                                {[['12', 'oblastí ambulancie'], ['1', 'prehľadná mapa'], ['1×', 'ročne aktualizácia']].map(([n, l]) => (
                                    <div key={l}>
                                        <div className="font-kanit font-semibold text-4xl text-[#88D5DB] leading-none">{n}</div>
                                        <div className="mt-2 text-xs text-white/70 font-stolzl leading-snug">{l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-24 flex flex-col gap-28 font-stolzl">
                {/* Definícia služby */}
                <section aria-labelledby="co-je">
                    <p className={EYEBROW}>Čo je Ordinačný index</p>
                    <h2 id="co-je" className={H2}>Holistický pohľad na ambulanciu ako na firmu</h2>
                    <p className="font-serif italic text-xl md:text-2xl text-white border-l-4 border-teal pl-5 mt-6 max-w-3xl leading-snug">
                        Ordinačný index je ucelený pohľad na to, ako vaša ambulancia funguje ako firma, čo ju drží pokope a čo súvisí s čím. Prejdeme všetko od vízie a budovania značky cez zdroje pacientov, ekonomiku a dane až po prípravu na odovzdanie či predaj praxe. Výstupom je váš Ordinačný index s Implementačným plánom: priority a poradie krokov.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        {[
                            { img: 1, t: 'Čo to je', d: 'Rozhovor, online dotazník a detailný obraz vašej ambulancie s Implementačným plánom, ktorý určí priority a poradie krokov.' },
                            { img: 2, t: 'Čo to nie je', d: 'Nikto vás nehodnotí ani neporovnáva s inými ambulanciami. Nie je to ponuka produktu a nič nesľubuje: ukazuje súvislosti a poradie krokov.' },
                            { img: 3, t: 'Pre koho to je', d: 'Pre majiteľa, spoluvlastníka ambulancie alebo kliniky, ktorý chce mať nezávislý a komplexný pohľad na svoju prax ako na firmu a potenciál jej ďalšieho rastu.' },
                        ].map(({ img, t, d }) => (
                            <div key={t} className={`${CARD} p-6 flex flex-col gap-3`}>
                                <Image src={`/images/ordinacny-index/ikona-${img}.webp`} alt="" width={80} height={80} className="w-20 h-20" />
                                <h3 className="font-kanit text-xl font-normal leading-tight">{t}</h3>
                                <p className="text-[15px] text-[#4B6272] leading-snug">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-12 text-center font-kanit font-light text-2xl md:text-3xl text-white/85 text-balance">
                        Vy chránite životy. My váš životný štandard.
                    </p>
                </section>

                {/* Mapa vzťahov */}
                <section aria-labelledby="mapa">
                    <p className={EYEBROW}>Mapa vzťahov</p>
                    <h2 id="mapa" className={H2}>Dvanásť oblastí a čo na čom stojí</h2>
                    <p className="text-white/70 mt-4 mb-10 max-w-3xl leading-relaxed">
                        Oblasti sú v štyroch skupinách. Šípka ukazuje, že jedna oblasť ovplyvňuje druhú. Nakreslené sú len najsilnejšie väzby a všetky vedú k ekonomike firmy.
                        Sila väzieb je náš odborný odhad, nie meranie.
                    </p>
                    <RelationMap />
                    <div className="grid md:grid-cols-3 gap-4 mt-8">
                        {[
                            { e: 'Kde sa začína', t: 'Vízia a ciele ovplyvňujú najviac oblastí', d: 'Sama stojí takmer na ničom, preto začíname otázkou, kam chcete s ambulanciou prísť.', warm: false },
                            { e: 'Kam všetko ústi', t: 'Na ekonomike firmy stojí väčšina oblastí', d: 'Ak je v nej neporiadok, nepomôže nič, čo je pred ňou. Preto jej venujeme viac času ako ostatným oblastiam.', warm: false },
                            { e: 'Kritické oblasti', t: 'Zastupovanie, nástupníctvo a poistenie bolia hneď', d: 'Pri ich výpadku sa problém prenesie do ekonomiky skôr než pri iných oblastiach. Preto sú v mape označené ako kritické.', warm: true },
                        ].map(({ e, t, d, warm }) => (
                            <div key={e} className={`rounded-3xl p-6 flex flex-col gap-3 ${warm ? 'bg-[#fff] border-2 border-[#C0392B] text-[#0A2B40]' : 'bg-[#0A2B40] text-[#fff]'}`}>
                                <p className={`font-stolzl text-xs uppercase tracking-[0.2em] ${warm ? 'text-[#C0392B]' : 'text-[#B3DEE1]'}`}>{e}</p>
                                {/* Globálne pravidlo h3 { color: navy } prebíja farbu zdedenú z karty – na tmavej karte treba farbu určiť priamo. */}
                                <h3 className="font-kanit text-xl font-normal leading-tight text-balance" style={{ color: warm ? '#0A2B40' : '#fff' }}>{t}</h3>
                                <p className={`text-[15px] leading-snug ${warm ? 'text-[#0A2B40]/80' : 'text-[#fff]/80'}`}>{d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Príbehy */}
                <section aria-labelledby="pribehy">
                    <p className={EYEBROW}>Príbehy z praxe</p>
                    <h2 id="pribehy" className={H2}>Ako sa jedno vťahuje na druhé</h2>
                    <p className="text-white/70 mt-4 mb-10 max-w-3xl leading-relaxed">
                        Mapa ukazuje väzby po jednej. Tu je vidieť, ako sa spájajú do reťaze v situáciách, ktoré lekár pozná z praxe. Čítajte zľava doprava.
                    </p>
                    <Stories />
                </section>

                {/* Postup a výstup */}
                <section aria-labelledby="postup">
                    <p className={EYEBROW}>Ako to prebieha</p>
                    <h2 id="postup" className={H2}>Od rozhovoru k Ordinačnému indexu</h2>
                    <ol className="grid md:grid-cols-3 gap-4 mt-10">
                        {[
                            { Icon: MessageSquare, t: 'Rozhovor', d: 'Zoznámime sa a dohodneme, čo riešite. Pred zdieľaním údajov podpíšeme zmluvu o mlčanlivosti.' },
                            { Icon: ClipboardList, t: 'Online dotazník', d: 'Vyplníte ho vo vlastnom tempe, aj s účtovníkom. Vo verejných registroch predvyplníme, čo sa dá.' },
                            { Icon: FileCheck, t: 'Ordinačný index', d: 'Výstupom je mapa vašej ambulancie s Implementačným plánom: prioritami a poradím krokov.' },
                        ].map(({ Icon, t, d }, i) => (
                            <li key={t} className={`${CARD} p-6 flex flex-col gap-3`}>
                                <span className="flex items-center justify-between">
                                    <span className="w-14 h-14 rounded-2xl bg-[#041D2C] text-[#88D5DB] grid place-items-center shadow-[0_10px_24px_-12px_rgba(4,29,44,0.7)]"><Icon size={26} aria-hidden="true" /></span>
                                    <span className="font-kanit font-light text-4xl text-[#B3DEE1]">{i + 1}</span>
                                </span>
                                <h3 className="font-kanit text-lg font-normal leading-tight">{t}</h3>
                                <p className="text-sm text-[#4B6272] leading-snug">{d}</p>
                            </li>
                        ))}
                    </ol>

                    <h3 className="font-kanit font-light text-2xl md:text-3xl text-white mt-16 text-balance">Čo dostanete v Implementačnom pláne</h3>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        {[
                            { Icon: ListOrdered, t: 'Priority', d: 'Čo riešiť ako prvé a prečo, jasne a bez zoznamu štyridsiatich nedostatkov.' },
                            { Icon: Route, t: 'Poradie krokov', d: 'Čo urobiť v najbližších týždňoch a čo neskôr, aby jedno nadväzovalo na druhé.' },
                            { Icon: Users, t: 'Kto čo rieši', d: 'Čo zvládnete vy, účtovník, Mediconect a čo patrí odborníkovi s príslušným oprávnením.' },
                        ].map(({ Icon, t, d }) => (
                            <div key={t} className={`${CARD} p-6 flex flex-col gap-3`}>
                                <span className="w-14 h-14 rounded-2xl bg-[#041D2C] text-[#88D5DB] grid place-items-center shadow-[0_10px_24px_-12px_rgba(4,29,44,0.7)]"><Icon size={26} aria-hidden="true" /></span>
                                <h4 className="font-kanit text-lg font-normal leading-tight">{t}</h4>
                                <p className="text-sm text-[#4B6272] leading-snug">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-white/70 mt-6 max-w-3xl leading-relaxed">
                        Plán patrí vám a môžete ho použiť s kýmkoľvek. Index aktualizujeme najmenej raz ročne, aby ste videli, čo sa zmenilo.
                    </p>
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
                                    <span className="w-14 h-14 rounded-2xl bg-[#041D2C] text-[#88D5DB] grid place-items-center shadow-[0_10px_24px_-12px_rgba(4,29,44,0.7)]"><Icon size={26} aria-hidden="true" /></span>
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
                                <span className="w-14 h-14 rounded-2xl bg-[#041D2C] text-[#88D5DB] grid place-items-center shadow-[0_10px_24px_-12px_rgba(4,29,44,0.7)]"><Icon size={26} aria-hidden="true" /></span>
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
                    <h2 className="font-kanit font-light text-3xl md:text-5xl text-balance !text-[#F2F6F8]">Zmapujte celú ambulanciu skôr, než sa rozhodnete</h2>
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
                        Ordinačný index nie je prísľubom výsledku, výnosu ani úspory. Daňové poradenstvo poskytujú členovia Slovenskej komory daňových poradcov, právne služby advokáti.
                    </p>
                    <p>{FINANCE_DISCLOSURE}</p>
                </footer>
            </div>
        </>
    );
}
