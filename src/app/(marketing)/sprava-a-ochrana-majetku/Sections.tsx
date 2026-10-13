'use client';

import { motion } from 'framer-motion';
import { Check, ShieldCheck, Landmark, Globe2, Repeat, Quote } from 'lucide-react';

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
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Head eyebrow="Do hĺbky" title={<>Každá časť majetku <span className="text-gradient">má svoju úlohu</span></>} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {TOPICS.map((t) => (
                        <motion.div key={t.title} {...fade} className="glass rounded-2xl p-7 border border-white/5 hover:border-teal/20 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">{t.icon}</span>
                                <h3 className="font-kanit font-semibold text-white text-xl">{t.title}</h3>
                            </div>
                            <p className="text-teal/90 font-kanit mb-5 leading-snug">{t.lead}</p>
                            <Ticks items={t.items} />
                        </motion.div>
                    ))}
                </div>
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
