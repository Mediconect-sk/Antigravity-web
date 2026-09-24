'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    CalendarCheck,
    ClipboardList,
    MessageCircle,
    UserRound,
    Home,
    Inbox,
    CalendarDays,
    ListOrdered,
    BellRing,
    Users,
    BarChart3,
    Lock,
    Server,
    ToggleRight,
    Siren,
    PhoneCall,
    HelpCircle,
    FileQuestion,
    Repeat,
    LogIn,
    ExternalLink,
    ArrowRight,
    Check,
    LayoutGrid,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import OrdeviaCrmPhones, { OrdeviaCrmPhone, type CrmScreen } from '@/components/OrdeviaCrmPhones';
import OrdeviaLogo from '@/components/OrdeviaLogo';
import { ORDEVIA, trail } from '@/lib/seo';
import { ORDEVIA_FAQ } from './faq';

/*
 * Každé tvrdenie na tejto stránke musí platiť pre nasadenú verziu Ordevie.
 * Čo sa smie a nesmie písať (a prečo), je v ORDEVIA.md.
 */

const PATH = '/sluzby/webova-aplikacia-ordevia';

const openContact = () => window.dispatchEvent(new Event('open_contact_modal'));

/** Situácie, kvôli ktorým pacient volá na recepciu. */
const problems = [
    {
        title: 'Telefonáty, e-maily a papiere',
        desc: 'Každý kanál má vlastnú pravdu a žiadny nemá spoločný kontext.',
        icon: <PhoneCall size={22} />,
    },
    {
        title: 'Požiadavka bez potvrdenia',
        desc: 'Pacient nevie, či sa jeho vec rieši – tak zavolá znova.',
        icon: <HelpCircle size={22} />,
    },
    {
        title: 'Príprava na zabudnutom papieri',
        desc: 'Pacient nevie, ako sa na vyšetrenie pripraviť, a volá sa to spýtať – alebo príde nepripravený.',
        icon: <FileQuestion size={22} />,
    },
    {
        title: 'Stále odznova',
        desc: 'Pri každom kontakte sa pacient predstavuje od začiatku a údaje sa prepisujú ručne.',
        icon: <Repeat size={22} />,
    },
];

/** Objednanie bez účtu – skutočný tok na app.ordevia.sk/objednavka/{klinika}. */
const bookingSteps = [
    {
        title: 'Výber služby a termínu',
        desc: 'Objednanie začína potrebou pacienta – dôvodom návštevy alebo službou, nie názvom oddelenia. Objednať môže aj dieťa či blízkeho.',
    },
    {
        title: 'Len nevyhnutné údaje',
        desc: 'Meno, e-mail a prípadne telefón. Žiadne heslo, žiadna registrácia pred tým, než má pacient termín.',
    },
    {
        title: 'Potvrdenie rezervácie',
        desc: 'E-mail s potvrdením, odkazom na zmenu či zrušenie termínu a pozvánkou do kalendára. Keď nie je voľný termín, pacient sa zapíše na čakaciu listinu.',
    },
    {
        title: 'Voliteľná aktivácia aplikácie',
        desc: 'Až keď má pacient termín, ponúkneme mu Ordevia Connect – s konkrétnym dôvodom, prečo sa mu oplatí.',
    },
];

/** Obrazovky aplikácie pre pacientov (spodná navigácia v moja.ordevia.sk). */
const patientScreens = [
    {
        title: 'Domov',
        desc: 'Najbližšia návšteva a rýchle akcie – čo treba urobiť teraz.',
        icon: <Home size={22} />,
    },
    {
        title: 'Termíny',
        desc: 'Prehľad objednaných návštev a nové objednanie bez telefonovania.',
        icon: <CalendarCheck size={22} />,
    },
    {
        title: 'Príprava',
        desc: 'Pokyny pred vyšetrením, ktoré schválila klinika – vždy po ruke, nie na papieri.',
        icon: <ClipboardList size={22} />,
    },
    {
        title: 'Správy',
        desc: 'Požiadavka na kliniku s typickým časom odpovede. Pacient vidí stav a či je na rade klinika, alebo on.',
        icon: <MessageCircle size={22} />,
    },
    {
        title: 'Profil',
        desc: 'Súhlasy s komunikáciou, zdravotná poisťovňa a prehľad prístupov. Súhlas sa dá kedykoľvek odvolať.',
        icon: <UserRound size={22} />,
    },
];

/** Čo má tím kliniky v CRM Ordevia. */
const teamFeatures = [
    {
        title: 'Požiadavky s riešiteľom',
        desc: 'Každá požiadavka má zodpovednú osobu, termín odpovede a stav. Nič sa nestratí v schránke.',
        icon: <Inbox size={22} />,
    },
    {
        title: 'Kalendár a kapacita',
        desc: 'Rezervácie a voľná kapacita pracoviska v jednom prehľade.',
        icon: <CalendarDays size={22} />,
    },
    {
        title: 'Čakacia listina',
        desc: 'Pacient, pre ktorého nebol voľný termín, nezmizne – zostane v evidencii.',
        icon: <ListOrdered size={22} />,
    },
    {
        title: 'Pripomienky',
        desc: 'Automatické e-mailové pripomienky termínov, bez práce pre recepciu.',
        icon: <BellRing size={22} />,
    },
    {
        title: 'Databáza pacientov a súhlasy',
        desc: 'Kontakty, história a súhlasy s komunikáciou pod kontrolou.',
        icon: <Users size={22} />,
    },
    {
        title: 'Kampane a reporty',
        desc: 'Komunikácia s pacientmi a prehľad výsledkov – rezervácie, návštevy a návratnosť.',
        icon: <BarChart3 size={22} />,
    },
];

/** CRM na mobile – obrazovky z obrázkov v OrdeviaCrmPhones. */
const teamMobile = [
    {
        title: 'Čo dnes horí, úlohy a program dňa',
        desc: 'Prehľad dňa ukáže, čo vyžaduje pozornosť, koľko je rezervácií a úloh a kto príde ako prvý.',
        icon: <LayoutGrid size={20} />,
    },
    {
        title: 'Rezervácie a potvrdenia jedným ťuknutím',
        desc: 'Dnešné termíny so stavom pri každom pacientovi. Novú rezerváciu recepcia potvrdí priamo zo zoznamu.',
        icon: <CalendarCheck size={20} />,
    },
    {
        title: 'Tímový chat pre celú kliniku',
        desc: 'Skupiny, priame správy aj prílohy – interná komunikácia tímu bez súkromných messengerov.',
        icon: <MessageCircle size={20} />,
    },
];

/** Tri obrazovky CRM samostatne – každé tvrdenie overené v kóde Ordevie (ORDEVIA.md, tabuľka 4). */
const crmScreens: { screen: CrmScreen; eyebrow: string; title: string; desc: string; points: string[] }[] = [
    {
        screen: 'prehlad',
        eyebrow: 'Prehľad dňa',
        title: 'Ráno viete, čo horí',
        desc: 'Po prihlásení tím vidí, čo vyžaduje pozornosť, a hneď sa k tomu preklikne.',
        points: [
            'Dopyty bez odpovede po termíne',
            'Horúce leady bez ďalšieho kroku',
            'Rezervácie a úlohy na dnes, vyťaženosť týždňa',
            'Program dňa s odkazom do kalendára',
        ],
    },
    {
        screen: 'rezervacie',
        eyebrow: 'Rezervácie',
        title: 'Denné operačné centrum recepcie',
        desc: 'Všetky dnešné termíny so stavom pri každom pacientovi. Novú rezerváciu recepcia potvrdí priamo zo zoznamu.',
        points: [
            'Dnešné termíny a rezervácie čakajúce na potvrdenie',
            'Voľné termíny dnes a čakacia listina',
            'Filter podľa pracoviska',
            'Zobrazenie deň, týždeň alebo zoznam',
        ],
    },
    {
        screen: 'chat',
        eyebrow: 'Tímový chat',
        title: 'Informácia sa nestratí',
        desc: 'Recepcia a lekári si odovzdajú informáciu hneď – bez súkromných messengerov a lístočkov.',
        points: [
            'Kanály pre celú kliniku',
            'Skupiny, napríklad pre recepciu jedného pracoviska',
            'Priame správy kolegovi',
            'Prílohy priamo v konverzácii',
        ],
    },
];

const rollout = [
    'Rezervácie',
    'Pripomienky a komunikácia',
    'Príprava pacienta',
    'CRM a marketing',
];

const metrics = [
    'Dokončené rezervácie zo začatých',
    'Telefonáty a opakované kontakty',
    'Čas tímu na vybavenie požiadavky',
    'Nedostavenie sa bez včasného zrušenia',
    'Rezervácie mimo ordinačných hodín',
    'Spokojnosť pacientov a personálu',
];

const trust = [
    {
        title: 'Bezpečné prihlásenie',
        desc: 'Google, e-mail s heslom alebo jednorazový kód. Prihlasovanie zabezpečuje Supabase Auth.',
        icon: <Lock size={20} />,
    },
    {
        title: 'Údaje v Európskej únii',
        desc: 'Databáza aj aplikácia bežia v dátovom centre vo Frankfurte.',
        icon: <Server size={20} />,
    },
    {
        title: 'Súhlasy v rukách pacienta',
        desc: 'Pacient vidí, s čím súhlasil, a súhlas môže kedykoľvek odvolať.',
        icon: <ToggleRight size={20} />,
    },
    {
        title: 'Aplikácia nie je pohotovosť',
        desc: 'Správy slúžia na organizačné veci. V naliehavých prípadoch 155 alebo 112 – aplikácia nepredstiera nepretržitý dohľad.',
        icon: <Siren size={20} />,
    },
];

function CheckItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start gap-3">
            <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                <Check size={12} />
            </span>
            <span className="text-white/80 font-stolzl">{children}</span>
        </li>
    );
}

function SectionHeading({ eyebrow, title, accent, intro }: { eyebrow: string; title: string; accent: string; intro?: string }) {
    return (
        <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-kanit">{eyebrow}</p>
            <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6 leading-tight">
                {title} <span className="text-gradient">{accent}</span>
            </h2>
            {intro && <p className="text-white/50 max-w-2xl mx-auto font-stolzl leading-relaxed">{intro}</p>}
        </div>
    );
}

export default function OrdeviaServicePage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail(PATH)}
                title="Ordevia Connect"
                subtitle="Celá cesta pacienta na jednom bezpečnom mieste. Objednanie, príprava a komunikácia v jednom toku – pre pacienta aj pre celý váš tím."
                badge="Digitálna starostlivosť"
            />

            {/* ═══════════ Úvod + náhľad ═══════════ */}
            <section className="py-16 lg:py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <OrdeviaLogo size={52} tagline className="mb-10" />
                            <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-8 leading-tight">
                                Najprv termín.
                                <br />
                                <span className="text-gradient">Potom aplikácia.</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-6 font-stolzl leading-relaxed">
                                Pacient chce predovšetkým termín. V Ordevii sa objedná bez zakladania účtu a aplikáciu si
                                aktivuje až potom – keď už vie, načo mu je. Klinika tak získa jedno miesto, kde vidí
                                rezerváciu, komunikáciu aj ďalší krok pacienta.
                            </p>
                            <p className="text-lg text-white/60 mb-10 font-stolzl leading-relaxed">
                                Ordevia Connect vyvíja a nasadzuje Mediconect. Postaráme sa o nastavenie aj o to, aby ju
                                vaši pacienti naozaj začali používať.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                                <a
                                    href={ORDEVIA.demoUrl}
                                    target="_blank"
                                    rel="noopener"
                                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 bg-teal text-navy-dark font-semibold rounded-2xl hover:bg-teal/90 transition-all duration-300"
                                >
                                    Vyžiadať prístup do ukážky
                                    <ExternalLink size={16} />
                                </a>
                                <button
                                    onClick={openContact}
                                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 glass rounded-2xl text-white/80 hover:text-teal hover:border-teal/30 transition-all duration-300 cursor-pointer"
                                >
                                    Chcem Ordeviu pre svoju prax
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            <p className="mt-4 text-xs text-white/35 font-stolzl">
                                Ukážka je fiktívna klinika s vymyslenými údajmi – môžete v nej voľne skúšať.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-[10%] bg-teal/15 rounded-full blur-[80px] pointer-events-none" />
                                <OrdeviaCrmPhone
                                    screen="prehlad"
                                    priority
                                    sizes="(min-width: 1024px) 320px, 75vw"
                                    className="relative w-[260px] sm:w-[300px] lg:w-[320px]"
                                />
                            </div>
                            <p className="mt-6 text-xs text-white/30 font-stolzl">Ukážka CRM s ilustračnými údajmi</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ Problém ═══════════ */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Dnešná realita"
                        title="Pacient nechce ďalší portál."
                        accent="Chce mať istotu."
                        intro="Roztrieštená cesta vytvára neistotu pacientovi a zbytočnú záťaž tímu. Tieto situácie poznáte z recepcie:"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {problems.map((item, i) => (
                            <div key={item.title} className="glass p-8 rounded-2xl border border-white/5 relative">
                                <span className="absolute top-6 right-7 text-4xl font-bold font-kanit text-white/5">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div className="text-teal mb-5">{item.icon}</div>
                                <h3 className="text-lg font-bold mb-3 font-kanit">{item.title}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-12 text-center text-white/70 font-stolzl max-w-3xl mx-auto leading-relaxed">
                        Ordevia Connect odpovedá pacientovi na tri otázky: <strong className="text-white">Čo ma čaká?</strong>{' '}
                        <strong className="text-white">Čo mám teraz urobiť?</strong>{' '}
                        <strong className="text-white">Kde dostanem pomoc?</strong> Každá obrazovka vedie k jednému
                        zrozumiteľnému ďalšiemu kroku.
                    </p>
                </div>
            </section>

            {/* ═══════════ Objednanie bez účtu ═══════════ */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Online objednávanie"
                        title="Objednanie nekončí"
                        accent="na zakladaní účtu"
                        intro="Pacient dokončí to, kvôli čomu prišiel – rezerváciu. Aplikáciu mu ponúkneme až vtedy, keď má konkrétny dôvod: termín, prípravu alebo správu od vás."
                    />
                    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bookingSteps.map((step, i) => (
                            <li key={step.title} className="glass p-8 rounded-2xl border border-white/5">
                                <span className="inline-flex w-10 h-10 rounded-xl bg-teal/10 items-center justify-center text-teal font-bold font-kanit mb-6">
                                    {i + 1}
                                </span>
                                <h3 className="text-lg font-bold mb-3 font-kanit">{step.title}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">{step.desc}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ═══════════ Pre pacienta / pre tím ═══════════ */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Jedno miesto pre celú cestu"
                        title="Pacient aj tím"
                        accent="vidia to isté"
                        intro="Čo pacient urobí v aplikácii, vidí tím v CRM – a naopak. Nikto sa nemusí pýtať, v akom stave je vec."
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="glass rounded-3xl border border-white/5 p-8 lg:p-10">
                            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2 font-kanit">Pre pacienta</p>
                            <h3 className="text-2xl font-bold font-kanit mb-2">Aplikácia Ordevia Connect</h3>
                            <p className="text-white/50 text-sm font-stolzl mb-8">
                                V prehliadači na mobile aj v počítači, na mobile sa dá pridať na plochu ako aplikácia.
                            </p>
                            <ul className="space-y-6">
                                {patientScreens.map((item) => (
                                    <li key={item.title} className="flex gap-4">
                                        <span className="w-11 h-11 shrink-0 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                                            {item.icon}
                                        </span>
                                        <span>
                                            <span className="block font-bold font-kanit mb-1">{item.title}</span>
                                            <span className="block text-white/60 text-sm font-stolzl leading-relaxed">{item.desc}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass rounded-3xl border border-white/5 p-8 lg:p-10">
                            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2 font-kanit">Pre váš tím</p>
                            <h3 className="text-2xl font-bold font-kanit mb-2">CRM Ordevia</h3>
                            <p className="text-white/50 text-sm font-stolzl mb-8">
                                Rezervácie, požiadavky, komunikácia a výsledky v jednom pohľade – pre recepciu, lekára aj vedenie.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {teamFeatures.map((item) => (
                                    <li key={item.title}>
                                        <span className="flex items-center gap-2 text-teal mb-2">
                                            {item.icon}
                                            <span className="font-bold font-kanit text-white">{item.title}</span>
                                        </span>
                                        <span className="block text-white/60 text-sm font-stolzl leading-relaxed">{item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ Obrazovky CRM – každá zvlášť ═══════════ */}
            <section id="pre-tim" className="py-24 relative z-10 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Čo uvidí váš tím"
                        title="Tri obrazovky,"
                        accent="ktoré tím otvára každý deň"
                        intro="Skutočné obrazovky CRM Ordevia na mobile. Rovnaké funkcie má tím aj v počítači."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {crmScreens.map((item) => (
                            <article key={item.screen} className="flex flex-col items-center text-center">
                                <div className="relative mb-8">
                                    <div className="absolute inset-[12%] bg-teal/10 rounded-full blur-[60px] pointer-events-none" />
                                    <OrdeviaCrmPhone
                                        screen={item.screen}
                                        sizes="(min-width: 768px) 30vw, 70vw"
                                        className="relative w-[240px] lg:w-[280px]"
                                    />
                                </div>
                                <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2 font-kanit">{item.eyebrow}</p>
                                <h3 className="text-xl font-bold font-kanit mb-3">{item.title}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed mb-5 max-w-sm">{item.desc}</p>
                                <ul className="space-y-2 text-left w-fit mx-auto">
                                    {item.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2.5 text-sm text-white/70 font-stolzl">
                                            <Check size={14} className="mt-1 shrink-0 text-teal" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ Ako začneme ═══════════ */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Ako začneme"
                        title="Jedno pracovisko,"
                        accent="merateľný výsledok"
                        intro="Nenasadzujeme všetko naraz. Začneme jednou službou alebo pracoviskom, odmeriame dohodnuté ukazovatele a rozsah zväčšíme podľa výsledku."
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="glass rounded-3xl border border-white/5 p-8 lg:p-10">
                            <h3 className="text-xl font-bold font-kanit mb-6">Poradie nasadenia</h3>
                            <ol className="space-y-4">
                                {rollout.map((item, i) => (
                                    <li key={item} className="flex items-center gap-4">
                                        <span className="w-9 h-9 shrink-0 rounded-lg bg-teal/10 flex items-center justify-center text-teal text-sm font-bold font-kanit">
                                            {i + 1}
                                        </span>
                                        <span className="text-white/80 font-stolzl">{item}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="glass rounded-3xl border border-white/5 p-8 lg:p-10">
                            <h3 className="text-xl font-bold font-kanit mb-6">Čo spoločne odmeriame</h3>
                            <ul className="space-y-4">
                                {metrics.map((item) => (
                                    <CheckItem key={item}>{item}</CheckItem>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ Dôvera ═══════════ */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Bezpečnosť a hranice"
                        title="Dôvera je"
                        accent="súčasť produktu"
                        intro="Ordevia koordinuje organizáciu starostlivosti, nie liečbu. Klinické rozhodnutia zostávajú vždy na lekárovi."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trust.map((item) => (
                            <div key={item.title} className="glass p-8 rounded-2xl border border-white/5">
                                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-5">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3 font-kanit">{item.title}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ CRM na mobile ═══════════ */}
            <section id="v-mobile" className="py-24 relative z-10 overflow-hidden scroll-mt-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 items-center">
                        <div>
                            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-kanit">
                                Pre personál kliník
                            </p>
                            <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6 leading-tight">
                                Celá klinika
                                <br />
                                <span className="text-gradient">vo vašom mobile.</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-10 font-stolzl leading-relaxed">
                                Prehľad dňa, rezervácie aj tímový chat. Recepcia, lekári aj vedenie majú všetko po ruke,
                                nech sú kdekoľvek.
                            </p>
                            <ul className="space-y-6">
                                {teamMobile.map((item) => (
                                    <li key={item.title} className="flex gap-4">
                                        <span className="w-11 h-11 shrink-0 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                                            {item.icon}
                                        </span>
                                        <span>
                                            <span className="block font-bold font-kanit mb-1">{item.title}</span>
                                            <span className="block text-white/60 text-sm font-stolzl leading-relaxed">{item.desc}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-sm text-white/40 font-stolzl">
                                CRM beží v prehliadači – na mobile aj v počítači, bez inštalácie.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <OrdeviaCrmPhones />
                            <p className="mt-6 text-xs text-white/30 font-stolzl">Ukážka s ilustračnými údajmi</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ Ukážka + prihlásenie pre pacientov ═══════════ */}
            <section className="py-12 relative z-10">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-6">
                    <div className="glass rounded-3xl border border-teal/20 p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Pre kliniky a ambulancie</p>
                            <h2 className="text-2xl lg:text-3xl font-bold font-kanit mb-3">Vyskúšajte si Ordeviu na vlastnej koži</h2>
                            <p className="text-white/60 font-stolzl leading-relaxed max-w-xl">
                                Vyžiadajte si prístup do ukážky s fiktívnou klinikou. Uvidíte, ako tím pracuje s rezerváciami,
                                požiadavkami pacientov a ich komunikáciou.
                            </p>
                        </div>
                        <a
                            href={ORDEVIA.demoUrl}
                            target="_blank"
                            rel="noopener"
                            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-navy-dark font-semibold rounded-2xl hover:bg-teal/90 transition-all duration-300"
                        >
                            Vyžiadať prístup
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    <div className="glass rounded-3xl border border-white/5 p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Ste pacient?</p>
                            <h2 className="text-2xl lg:text-3xl font-bold font-kanit mb-3">Prihláste sa do svojej Ordevie</h2>
                            <p className="text-white/60 font-stolzl leading-relaxed max-w-xl">
                                Cez Google, e-mailom alebo jednorazovým kódom. Ak vás pozvala klinika, môžete použiť aj
                                aktivačný kód, ktorý ste od nej dostali.
                            </p>
                        </div>
                        <a
                            href={ORDEVIA.loginUrl}
                            target="_blank"
                            rel="noopener"
                            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 glass rounded-2xl text-white/80 hover:text-teal hover:border-teal/30 transition-all duration-300"
                        >
                            <LogIn size={18} />
                            Prihlásenie pre pacientov
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════════ Časté otázky – odpovede sú vždy v HTML ═══════════ */}
            <section className="py-24 relative z-10">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-12 text-center">
                        Časté otázky <span className="text-gradient">o Ordevii</span>
                    </h2>
                    <div className="space-y-4">
                        {ORDEVIA_FAQ.map((item) => (
                            <div key={item.question} className="glass rounded-2xl border border-white/5 p-6 lg:p-8">
                                <h3 className="text-lg font-bold font-kanit mb-3">{item.question}</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Pripojme vaše pracovisko k Ordevia Connect"
                description="Jeden bezpečný vstup pre pacienta, jedna koordinovaná cesta pre celý tím. Na bezplatnej konzultácii vyberieme službu, na ktorej začneme."
            />
        </div>
    );
}
