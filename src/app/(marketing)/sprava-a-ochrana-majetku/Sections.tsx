'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, ShieldCheck, Landmark, Globe2, Repeat, Quote, ExternalLink, ArrowRight } from 'lucide-react';

/**
 * Doplnkové sekcie stránky Správa a ochrana majetku – texty z brožúry
 * „MyMedical koncepcia" (Canva DAHXUeLUP4c), str. 6–29.
 *
 * Zámerne vynechané (pravidlá webu, CLAUDE.md + architektúra značky):
 * konkrétne výnosy fondov a nehnuteľností (4–6 %, 7–9 %, 7+ %), investičné
 * certifikáty s „garanciou", mená fondov a partnerov, latinské claimy
 * (patria len MyMedicalu) a sľuby „zníženého úroku" či „výnimiek" v banke.
 */

const fade = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5 },
};

function Head({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
    return (
        <div className="text-center mb-12">
            <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">{eyebrow}</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">{title}</h2>
            {text && <p className="text-white/55 max-w-3xl mx-auto font-stolzl leading-relaxed">{text}</p>}
        </div>
    );
}

function Ticks({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3">
            {items.map((t) => (
                <li key={t} className="flex gap-3 items-start text-white/70 font-stolzl text-sm leading-relaxed">
                    <Check size={16} className="text-teal shrink-0 mt-0.5" />
                    {t}
                </li>
            ))}
        </ul>
    );
}

/* ─── 1. Wealth management – úrovne služieb ─── */
const LEVELS = [
    { name: 'Wealth management', focus: 'Správa majetku (rodina)', note: 'kontinuita a architektúra celého majetku', top: true },
    { name: 'Private banking', focus: 'Správa kapitálu (osobný kapitál)', note: 'investície' },
    { name: 'Affluent', focus: 'Bankové služby', note: 'produkty' },
    { name: 'Retail', focus: 'Bežné bankové služby', note: 'transakcie' },
];

export function WealthLevels() {
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div {...fade}>
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Architektúra majetku</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-6 leading-tight">
                        Nie „lepší podielový fond“. <span className="text-gradient">Integrácia investovania, práva, daní a životného štýlu.</span>
                    </h2>
                    <p className="text-white/60 font-stolzl leading-relaxed mb-5">
                        Wealth management vám umožní venovať sa naplno lekárskej praxi či podnikaniu s vedomím, že zisk, ktorý ste už vytvorili,
                        je v bezpečí, profesionálne spravovaný a pracuje rovnako tvrdo ako vy.
                    </p>
                    <p className="text-white/60 font-stolzl leading-relaxed">
                        Bežné bankovníctvo rieši transakcie. Privátne bankovníctvo rieši investície. Wealth management rieši kontinuitu a architektúru
                        celého majetku – pre vás, vašu rodinu aj ďalšie generácie.
                    </p>
                </motion.div>
                <motion.div {...fade} className="flex flex-col items-center gap-3">
                    {LEVELS.map((l, i) => (
                        <div
                            key={l.name}
                            style={{ width: `${62 + i * 12}%` }}
                            className={`rounded-2xl border px-5 py-4 text-center ${l.top ? 'border-teal/50 bg-teal/10 shadow-[0_0_30px_rgba(76,173,182,0.2)]' : 'glass border-white/10'}`}
                        >
                            <div className={`font-kanit font-semibold ${l.top ? 'text-teal text-lg' : 'text-white'}`}>{l.name}</div>
                            <div className="text-white/55 text-xs font-stolzl">{l.focus} · {l.note}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

/* ─── 2. Štyri fázy budovania majetku ─── */
const PHASES = [
    {
        title: 'Prípravná fáza',
        items: [
            'Zbavíme sa „zlých“ dlhov – kreditná karta, debet či spotrebný úver s vysokým úrokom. Hypotéka sem nepatrí.',
            'Železná rezerva vo výške 3 až 6 mesiacov nevyhnutných nákladov. Jej úlohou nie je zarábať, ale chrániť vás pred ekonomickými šokmi.',
        ],
    },
    {
        title: 'Akumulačná fáza',
        items: [
            'Jednoduchosť a diverzifikácia – široko rozložené indexové fondy (ETF), teda kúsok z celej svetovej ekonomiky.',
            'Daňová efektivita – pri splnení časového testu podľa zákona o dani z príjmov môže byť výnos oslobodený od dane.',
        ],
    },
    {
        title: 'Rastová fáza',
        items: [
            'Ignorovanie šumu – trhy budú kolísať, stratégia ostáva. Pri poklese nakupujete za lepšie ceny.',
            'Reinvestovanie – dividendy a zisky sa vracajú späť do portfólia.',
        ],
    },
    {
        title: 'Ochranná fáza',
        items: [
            'Vybudovaný majetok treba chrániť – do portfólia pribúdajú konzervatívnejšie nástroje, ktoré znižujú výkyvy.',
            'Pripravíme generačný prenos majetku.',
        ],
    },
];

export function WealthPhases() {
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Head
                    eyebrow="Postupne a s plánom"
                    title={<>Ako sa buduje majetok, <span className="text-gradient">aj keď s investovaním začínate</span></>}
                />
                {/* Krivka rastu – ilustračná, bez mierky (žiadne sľuby výnosov) */}
                <div className="hidden lg:block relative h-40 mb-2" aria-hidden>
                    <svg viewBox="0 0 1000 160" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                        <defs>
                            <linearGradient id="rast-fill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgba(76, 173, 182,0.25)" />
                                <stop offset="100%" stopColor="rgba(76, 173, 182,0)" />
                            </linearGradient>
                        </defs>
                        <path d="M0 150 C 120 148, 200 140, 250 132 S 420 105, 500 86 S 700 40, 750 30 S 920 18, 1000 16 L 1000 160 L 0 160 Z" fill="url(#rast-fill)" />
                        <path d="M0 150 C 120 148, 200 140, 250 132 S 420 105, 500 86 S 700 40, 750 30 S 920 18, 1000 16" fill="none" stroke="#4CADB6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                        {[250, 500, 750].map((x) => (
                            <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
                        ))}
                    </svg>
                    {[
                        { x: '12.5%', y: '86%' },
                        { x: '37.5%', y: '68%' },
                        { x: '62.5%', y: '38%' },
                        { x: '87.5%', y: '14%' },
                    ].map((m, i) => (
                        <span key={i} style={{ left: m.x, top: m.y }} className="absolute -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-navy-dark border-2 border-teal" />
                    ))}
                </div>
                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {PHASES.map((p, i) => (
                        <motion.li key={p.title} {...fade} className="glass rounded-2xl p-6 border border-white/5 flex flex-col">
                            <span className="font-kanit font-bold text-teal text-sm mb-1">{String(i + 1).padStart(2, '0')}</span>
                            <h3 className="font-kanit font-semibold text-white text-lg mb-4">{p.title}</h3>
                            <Ticks items={p.items} />
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

/* ─── 3. Holdingová štruktúra ─── */
const HOLDING_WHEN = [
    'Majetok či obrat nakumulovaný v ambulancii nad 100 000 €.',
    'Zdravotníctvo ako odbor so zvýšeným rizikom zodpovednosti.',
    'Rodinná klinika a prax, kde treba riešiť nástupníctvo a ochranu.',
    'Plán exitu – predaj alebo generačná výmena.',
];

const HOLDING_BENEFITS = [
    { title: 'Ochrana majetku', text: 'Cenný majetok oddelíme od prevádzkového rizika. Nárok voči ambulancii sa zastaví pri nej – do materskej spoločnosti, kde je váš kapitál, nedosiahne.' },
    { title: 'Daňová efektivita', text: 'Dividendy medzi dcérskou a materskou spoločnosťou a predaj obchodného podielu po splnení časového testu (§ 13c zákona o dani z príjmov) – vždy posúdené s daňovým poradcom.' },
    { title: 'Nástupníctvo a exit', text: 'Hladké odovzdanie praxe ďalšej generácii alebo predaj bez sporov. Pripravená štruktúra robí z generačnej výmeny príležitosť.' },
];

export function HoldingSection() {
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Head
                    eyebrow="Holdingová štruktúra"
                    title={<>Oddeľte to, čo tvorí váš zisk, <span className="text-gradient">od toho, čo tvorí vašu istotu</span></>}
                    text="Zarábať dokáže mnoho lekárov. Udržať a ochrániť vybudované zvládne ten, kto oddelí prevádzku od majetku. Holding je tichá poistka vašej práce – bez toho, aby ste sa jej museli venovať."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-10">
                    <motion.div {...fade} className="glass rounded-2xl p-7 border border-white/10">
                        <span className="text-white/45 text-xs font-bold uppercase tracking-widest font-kanit">Prevádzka</span>
                        <h3 className="font-kanit font-semibold text-white text-xl mt-1 mb-3">Ambulancia</h3>
                        <p className="text-white/60 text-sm font-stolzl leading-relaxed">
                            Tu liečite, zamestnávate a podpisujete zmluvy. Tu vzniká zisk – ale aj riziko: spory, pokuty, nároky. Ak je tu aj váš majetok,
                            jeden problém ho ohrozí celý.
                        </p>
                    </motion.div>
                    <motion.div {...fade} className="rounded-2xl p-7 border border-teal/40 bg-teal/[0.06]">
                        <span className="text-teal text-xs font-bold uppercase tracking-widest font-kanit">Ochrana</span>
                        <h3 className="font-kanit font-semibold text-white text-xl mt-1 mb-3">Holding</h3>
                        <p className="text-white/60 text-sm font-stolzl leading-relaxed">
                            Materská spoločnosť, ktorej úlohou je vlastniť ambulanciu a strážiť zarobené – mimo dosahu prevádzkových rizík.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <motion.div {...fade} className="glass rounded-2xl p-7 border border-white/5">
                        <h3 className="font-kanit font-semibold text-white text-lg mb-4">Kedy sa holding stáva nevyhnutnosťou?</h3>
                        <Ticks items={HOLDING_WHEN} />
                    </motion.div>
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5">
                        {HOLDING_BENEFITS.map((b, i) => (
                            <motion.div key={b.title} {...fade} className="glass rounded-2xl p-6 border border-white/5">
                                <span className="font-kanit font-bold text-teal text-sm">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="font-kanit font-semibold text-white text-lg mt-1 mb-2">{b.title}</h3>
                                <p className="text-white/55 text-sm font-stolzl leading-relaxed">{b.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <p className="text-center text-white/40 text-xs font-stolzl mt-6">
                    Daňové výhody sa viažu na časový test – štruktúru navrhujeme individuálne s advokátom a daňovým poradcom (člen SKDP).
                </p>
            </div>
        </section>
    );
}

/* ─── 4. Poistenie, financovanie, diverzifikácia, prenos ─── */
const TOPICS = [
    {
        icon: <ShieldCheck size={22} />,
        title: 'Poistenie a ochrana majetku',
        lead: 'Výsledkom nie je poistka. Výsledkom je istota, že v kľúčových momentoch máte priestor rozhodovať sa pokojne.',
        items: [
            'Identifikácia skrytých rizík a medzier, ktoré v kritickej situácii rozhodujú o výsledku.',
            'Nastavenie likvidity, aby kríza z vás neurobila núteného predajcu investícií.',
            'Zastupovanie pri poistných udalostiach v režime plnej diskrétnosti.',
            'Právne nastavenie poistných vzťahov podľa vašej profesijnej aj osobnej situácie.',
        ],
    },
    {
        icon: <Landmark size={22} />,
        title: 'Financovanie a úvery',
        lead: 'Pri financovaní drahých prístrojov (USG, RTG, kreslá) nejde len o úrok. Ide o odpisy a cash-flow.',
        items: [
            'Splátky nastavené tak, aby kopírovali reálne príjmy z výkonov.',
            'Operatívny lízing alebo úver – podľa dopadu na súvahu a bonitu pre budúce hypotéky.',
            'Hypotéky na kliniku či dom – aj malý rozdiel v úroku robí za 20 rokov veľké peniaze.',
            'Porovnanie ponúk namiesto jednej banky, ktorá na vás chce zarobiť.',
        ],
    },
    {
        icon: <Globe2 size={22} />,
        title: 'Geografická diverzifikácia',
        lead: 'Geografická distribúcia je ako karanténa – ak ochorie jedna časť portfólia, tá druhá, zdravá, vás drží nad vodou.',
        items: [
            'Slovenskí investori často preceňujú domáce investície – a viažu majetok na riziko jednej krajiny.',
            'Podnikanie, domov aj príjem máte zväčša na Slovensku – investície nemusia byť.',
            'Rozloženie naprieč aktívami, menami a regiónmi znižuje zraniteľnosť voči lokálnym šokom.',
        ],
    },
    {
        icon: <Repeat size={22} />,
        title: 'Prenos majetku na ďalšie generácie',
        lead: 'Vďaka efektívnej správe sa rodinný majetok nedelí, ale chráni na generácie dopredu.',
        items: [
            'Reštrukturalizácia súkromného aj podnikateľského majetku a nastavenie vnútorných pravidiel.',
            'Zverenecké a nadačné fondy, aj zahraničné alternatívy – s overenými partnermi.',
            'Ako keby ste si do súkromného života najali finančného riaditeľa, ktorý má pod kontrolou celý obraz majetku.',
        ],
    },
];

export function TopicsSection() {
    const [active, setActive] = useState(0);
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <Head eyebrow="Do hĺbky" title={<>Každá časť majetku <span className="text-gradient">má svoju úlohu</span></>} />
                <div role="tablist" aria-label="Oblasti správy majetku" className="flex flex-wrap justify-center gap-2 mb-8">
                    {TOPICS.map((t, i) => (
                        <button
                            key={t.title}
                            type="button"
                            role="tab"
                            aria-selected={active === i}
                            onClick={() => setActive(i)}
                            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold font-kanit transition-all cursor-pointer border ${
                                active === i ? 'bg-teal text-navy-dark border-teal' : 'border-white/10 text-white/65 hover:text-white hover:border-teal/40'
                            }`}
                        >
                            {t.title}
                        </button>
                    ))}
                </div>
                {/* Všetky panely sú v DOM (pravidlo CLAUDE.md) – neaktívne sú len skryté */}
                {TOPICS.map((t, i) => (
                    <div key={t.title} role="tabpanel" className={active === i ? 'block' : 'hidden'}>
                        <div className="glass rounded-3xl p-8 lg:p-10 border border-teal/15 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                            <div className="lg:col-span-2">
                                <span className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-5">{t.icon}</span>
                                <h3 className="font-kanit font-semibold text-white text-2xl mb-4">{t.title}</h3>
                                <p className="text-teal/90 font-kanit text-lg leading-snug">{t.lead}</p>
                            </div>
                            <div className="lg:col-span-3">
                                <Ticks items={t.items} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ─── 5. Citát – medicína a peniaze ─── */
export function ApproachQuote() {
    return (
        <section className="py-12 relative z-10">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.figure {...fade} className="glass rounded-3xl p-8 lg:p-12 border border-teal/20 text-center">
                    <Quote size={36} className="text-teal/40 mx-auto mb-4" aria-hidden />
                    <blockquote className="font-kanit font-semibold text-2xl lg:text-3xl text-white leading-snug mb-6">
                        Diagnostika. Analýza. Plán. Rovnako ako v medicíne. <span className="text-gradient">Aby ste raz mohli odložiť biely plášť bez obáv.</span>
                    </blockquote>
                    <figcaption className="text-white/55 font-stolzl text-sm max-w-2xl mx-auto leading-relaxed">
                        Servis dostupný aj mimo bežných hodín · individuálny prístup · diskrétnosť a profesionalita · osobný poradca, ktorý sa stará
                        o všetky finančné potreby – nie predajca s plánom predajov.
                    </figcaption>
                </motion.figure>
            </div>
        </section>
    );
}

/* ─── 6. Partner MyLife + osobný kontakt (brožúra MyMedical, predposledná strana) ─── */
export const MYLIFE = { name: 'MyLife Slovensko a.s.', url: 'https://www.mylife.sk' };

export function MyLifePartner() {
    return (
        <section id="mylife" className="py-16 relative z-10 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Head
                    eyebrow="Partner pre správu majetku"
                    title={<>V spolupráci so spoločnosťou <span className="text-gradient">MyLife Slovensko a.s.</span></>}
                />

                <motion.div {...fade} className="glass rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-8">
                    <a href={MYLIFE.url} target="_blank" rel="noopener" className="shrink-0" aria-label="MyLife Slovensko – web">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/partneri/mylife-logo.svg" alt="MyLife" width={161} height={40} className="h-10 w-auto" />
                    </a>
                    <p className="text-white/65 font-stolzl leading-relaxed flex-1">
                        Pri správe klientskeho majetku a sprostredkovaní finančných služieb spolupracujeme so spoločnosťou {MYLIFE.name}
                        Pod jej správou je dnes viac ako <strong className="text-white">160 miliónov eur</strong> majetku klientov.
                    </p>
                    <a
                        href={MYLIFE.url}
                        target="_blank"
                        rel="noopener"
                        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-teal/40 text-teal font-kanit font-semibold text-sm hover:bg-teal/10 transition-colors"
                    >
                        www.mylife.sk <ExternalLink size={14} />
                    </a>
                </motion.div>

                <motion.div {...fade} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                    <figure className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/10 min-h-[420px]">
                        <Image
                            src="/images/tim/viktor-struhar-kancelaria.webp"
                            alt="PhDr. Víťazoslav Struhár"
                            fill
                            sizes="(min-width: 1024px) 480px, 100vw"
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-dark/95 to-transparent" />
                        <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="block font-kanit font-semibold text-white text-xl">PhDr. Víťazoslav Struhár</span>
                            <span className="block text-teal text-sm">Head of MyMedical · Managing director, MyLife Slovensko a.s.</span>
                        </figcaption>
                    </figure>

                    <div className="lg:col-span-3 glass rounded-3xl border border-teal/20 p-8 lg:p-10 flex flex-col">
                        <Quote size={32} className="text-teal/40 mb-4" aria-hidden />
                        <h3 className="font-kanit font-bold text-2xl lg:text-3xl text-white leading-tight mb-6">
                            27 rokov skúseností. <span className="text-gradient">Jediný cieľ: rast vášho majetku.</span>
                        </h3>
                        <div className="space-y-4 text-white/65 font-stolzl leading-relaxed">
                            <p>
                                Financie nie sú len o číslach na účte. Sú o príbehoch, ktoré tieto čísla umožňujú žiť. Za štvrťstoročie v biznise som
                                videl trhy rásť aj padať. Kým iní panikárili, my sme s klientmi budovali majetok.
                            </p>
                            <p>
                                Dnes nespravujeme len kapitál v hodnote viac ako 160 miliónov eur. Spravujeme dôveru ľudí, ktorí vedia, že ich majetok
                                je v rukách tímu, ktorý som od základov vybudoval. Moji spolupracovníci nie sú len zamestnanci – sú to experti, ktorých
                                som osobne mentoroval, aby vyznávali rovnaké hodnoty ako ja: diskrétnosť, predvídateľnosť a dlhodobý rast.
                            </p>
                            <p>
                                Klient 21. storočia nepotrebuje ďalší produkt. Potrebuje partnera, ktorý má stratégiu preverenú časom. Ponúkam vám svoje
                                skúsenosti, aby ste vy mohli venovať svoj čas tomu, čo milujete.
                            </p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ─── 7. Sebahodnotenie „Ekonomická imunita ambulancie" (presunuté z menu mymedical.sk) ─── */
const IMMUNITY_AREAS = [
    'Prevádzková rezerva',
    'Prehľad o hospodárení',
    'Úhrady zdravotných poisťovní',
    'Zastupovanie pri neprítomnosti',
    'Ochrana osobného majetku',
    'Daňové nastavenie',
    'Majetok mimo ambulancie',
    'Príjem po odchode z praxe',
];

export function ImmunityCheck({ url }: { url: string }) {
    return (
        <section id="ekonomicka-imunita" className="py-16 relative z-10 scroll-mt-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div {...fade} className="rounded-3xl border border-teal/30 bg-gradient-to-br from-teal/[0.08] via-navy/40 to-navy-dark p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                    <div className="lg:col-span-3">
                        <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Sebahodnotenie · 6 krokov</span>
                        <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-5 leading-tight">
                            Aká odolná je vaša ambulancia <span className="text-gradient">voči výpadku príjmu?</span>
                        </h2>
                        <p className="text-white/65 font-stolzl leading-relaxed mb-7">
                            Orientačné sebahodnotenie <strong className="text-white">Ekonomická imunita ambulancie</strong> ukáže oblasti, ktoré stojí za to si
                            u vás overiť. Nejde o právny ani finančný audit – odpovede sa nikam neposielajú, kým sa pri výsledku sami nerozhodnete.
                        </p>
                        <a
                            href={url}
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal text-navy-dark font-kanit font-semibold hover:bg-teal/90 transition-colors"
                        >
                            Spustiť sebahodnotenie <ArrowRight size={18} />
                        </a>
                    </div>
                    <ul className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                        {IMMUNITY_AREAS.map((a, i) => (
                            <li key={a} className="flex items-center gap-3 glass rounded-xl px-4 py-2.5 border border-white/5">
                                <span className="text-teal font-kanit font-bold text-xs w-5">{String(i + 1).padStart(2, '0')}</span>
                                <span className="text-white/80 text-sm font-stolzl">{a}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

/* ─── Štruktúra majetku (podstránka Architektúra majetku) ─── */
const STRUCTURE = [
    { title: 'Ambulancia', text: 'prevádzka, riziko praxe' },
    { title: 'Investície', text: 'podľa rizikového profilu' },
    { title: 'Nehnuteľnosť', text: 'priestory ambulancie, nájom' },
    { title: 'Renta a dôchodok', text: 'príjem po skončení praxe' },
];

const PRINCIPLES = [
    { n: '01', title: 'Ochrana', text: 'Zodpovednosť, príjem pri PN, rodina, majetok ambulancie. Diverzifikácia naprieč aktívami, menami a regiónmi.' },
    { n: '02', title: 'Rast', text: 'Finančný plán a investície s ročnou revíziou – aj prístup k private equity a nehnuteľnostiam.' },
    { n: '03', title: 'Kontinuita', text: 'Renta, nástupníctvo a dedičské plánovanie, aby váš odkaz pretrval.' },
];

/** Štruktúra majetku – schéma a tri princípy (presunuté z prehľadu na Architektúru majetku). */
export function StructureSection() {
    const box = 'glass rounded-2xl border px-5 py-4 text-center';
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Štruktúra majetku</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">Jedna architektúra <span className="text-gradient">namiesto piatich riešení</span></h2>
                    <p className="text-white/55 max-w-2xl mx-auto font-stolzl">
                        Oddelíme riziko praxe od rodinného majetku a spojíme plán, ochranu a daňovú efektivitu do jedného celku. Pre majiteľov ambulancií aj zamestnaných lekárov.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="rounded-3xl border border-dashed border-teal/30 p-6 sm:p-8">
                        <p className="text-center text-teal/80 text-xs font-bold uppercase tracking-widest font-kanit mb-6">
                            Poistenie a ochrana · zodpovednosť · príjem · rodina
                        </p>
                        <div className="flex flex-col items-center">
                            <div className={`${box} border-teal/40 w-full max-w-xs`}>
                                <div className="text-white font-semibold font-kanit">Lekár a rodina</div>
                                <div className="text-white/50 text-sm font-stolzl">vlastníci, príjemcovia</div>
                            </div>
                            <div aria-hidden className="w-px h-8 bg-teal/40" />
                            <div className={`${box} border-teal/40 w-full max-w-xs`}>
                                <div className="text-white font-semibold font-kanit">Holdingová spoločnosť</div>
                                <div className="text-white/50 text-sm font-stolzl">riadenie a akumulácia zisku</div>
                            </div>
                            <div aria-hidden className="w-px h-8 bg-teal/40" />
                            <div aria-hidden className="hidden lg:block w-3/4 h-px bg-teal/40" />
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:pt-8">
                                {STRUCTURE.map((s) => (
                                    <div key={s.title} className={`${box} border-white/10`}>
                                        <div className="text-white font-semibold font-kanit text-sm sm:text-base">{s.title}</div>
                                        <div className="text-white/50 text-xs sm:text-sm font-stolzl">{s.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-white/40 text-xs font-stolzl mt-4">
                        Schéma je ilustračná. Štruktúru navrhujeme individuálne s advokátom a daňovým expertom (člen SKDP).
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
                    {PRINCIPLES.map((p) => (
                        <div key={p.n} className="glass rounded-2xl p-6 border border-white/5">
                            <span className="text-teal font-kanit font-bold text-sm">{p.n}</span>
                            <h3 className="text-white font-semibold font-kanit text-xl mt-1 mb-2">{p.title}</h3>
                            <p className="text-white/55 text-sm font-stolzl leading-relaxed">{p.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

