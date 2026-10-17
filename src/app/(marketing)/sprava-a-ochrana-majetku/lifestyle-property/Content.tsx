'use client';

import { motion } from 'framer-motion';
import PillarPage from '@/components/PillarPage';
import { Globe2, Sun, GraduationCap, Plane, KeyRound, Search, Coins, Users } from 'lucide-react';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';

/**
 * Správa majetku → Lifestyle Property a nehnuteľnosti.
 * Obsah z brožúry MyMedical (str. 30–33: Reality a developerské projekty, Lifestyle Property).
 * Zámerne vynechané (pravidlá webu): výnosy a rast cien v % (2–3 %, 5–8 %, 6–8 %, 7+ %),
 * cenová tabuľka, počty slnečných dní, konkrétne letecké linky a latinské claimy.
 */

const fade = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5 },
};

const COMPARE = [
    ['Koncentrácia rizika', 'Podnikanie, príjem, domov aj väzby sú už na Slovensku – ďalšia nehnuteľnosť doma znásobuje závislosť od jednej ekonomiky.', 'Majetok rozložený mimo slovenskej ekonomiky aj medicínskeho sektora.'],
    ['Výnos a náklady', 'Vysoké ceny voči nájomnému – výnos často nepokryje infláciu ani údržbu.', 'Na vybraných trhoch je pomer ceny a nájmu priaznivejší.'],
    ['Legislatíva', 'Silné postavenie nájomníkov, riziko regulácie nájomného či vyššieho zdanenia.', 'Trhy s dlhou tradíciou ochrany vlastníckeho práva a predvídateľnými zákonmi.'],
    ['Likvidita', 'Pri drahých nehnuteľnostiach je okruh kupcov malý a predaj môže trvať dlho.', 'V metropolách a turistických destináciách prichádzajú kupci z celého sveta.'],
    ['Demografia', 'Starnúca populácia bude dlhodobo tlačiť na ceny v menej atraktívnych lokalitách.', 'Investovať tam, kam ľudia prichádzajú – nie odkiaľ odchádzajú.'],
    ['Mena', 'Všetko v eurách znamená závislosť od ekonomiky EÚ a rozhodnutí ECB.', 'Nehnuteľnosť v inej mene funguje ako prirodzené zaistenie.'],
];

function RealEstateCompare() {
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Nehnuteľnosti</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">
                        Investovať tam, kam ľudia prichádzajú, <span className="text-gradient">nie odkiaľ odchádzajú</span>
                    </h2>
                    <p className="text-white/55 max-w-2xl mx-auto font-stolzl">
                        Investícia do nehnuteľnosti „doma“ je často srdcová záležitosť. Z pohľadu správy majetku je to však stávka na jednu kartu.
                    </p>
                </div>
                <motion.div {...fade} className="glass rounded-3xl border border-white/10 overflow-hidden">
                    <div className="hidden md:grid grid-cols-[1fr_2fr_2fr] text-xs font-bold uppercase tracking-widest font-kanit border-b border-white/10">
                        <div className="p-5 text-white/40">Hľadisko</div>
                        <div className="p-5 text-white/50">Len slovenský realitný trh</div>
                        <div className="p-5 text-teal">Globálne rozložené nehnuteľnosti</div>
                    </div>
                    {COMPARE.map(([k, sk, gl]) => (
                        <div key={k} className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] border-b border-white/5 last:border-b-0">
                            <div className="px-5 pt-5 md:p-5 text-white font-semibold font-kanit">{k}</div>
                            <div className="px-5 pt-2 md:p-5 text-white/55 text-sm font-stolzl leading-relaxed">
                                <span className="md:hidden text-white/35 text-xs uppercase tracking-wider block mb-1">Len Slovensko</span>
                                {sk}
                            </div>
                            <div className="px-5 pt-2 pb-5 md:p-5 text-white/80 text-sm font-stolzl leading-relaxed md:bg-teal/[0.04]">
                                <span className="md:hidden text-teal text-xs uppercase tracking-wider block mb-1">Globálne</span>
                                {gl}
                            </div>
                        </div>
                    ))}
                </motion.div>
                <p className="text-center text-white/40 text-xs font-stolzl mt-4">
                    Ide o všeobecné porovnanie trhov, nie o odporúčanie konkrétnej investície. Vývoj cien a výnosov v minulosti nie je zárukou budúcnosti.
                </p>
            </div>
        </section>
    );
}

function TwoWorlds() {
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Lifestyle Property</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">
                        Dva svety, <span className="text-gradient">jedna investícia</span>
                    </h2>
                    <p className="text-white/55 max-w-3xl mx-auto font-stolzl">
                        Skutočný úspech lekára sa nemeria len počtom zákrokov či obratom kliniky, ale kvalitou života, ktorú si môžete užívať, a trvalou hodnotou majetku, ktorý ste vybudovali.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div {...fade} className="glass rounded-2xl p-8 border border-white/10">
                        <Sun size={26} className="text-teal mb-4" />
                        <span className="text-white/45 text-xs font-bold uppercase tracking-widest font-kanit">Lifestyle</span>
                        <h3 className="font-kanit font-semibold text-white text-2xl mt-1 mb-3">Váš čas na regeneráciu</h3>
                        <p className="text-white/60 text-sm font-stolzl leading-relaxed">
                            Lekárska prax znamená extrémnu vyťaženosť, koncentráciu a psychické vypätie. Najcennejšou komoditou nie sú len zarobené peniaze, ale váš čas a kvalita života. Druhý domov pri mori je prevencia pred vyhorením – na predĺžené víkendy aj dlhšie pobyty.
                        </p>
                    </motion.div>
                    <motion.div {...fade} className="rounded-2xl p-8 border border-teal/40 bg-teal/[0.06]">
                        <KeyRound size={26} className="text-teal mb-4" />
                        <span className="text-teal text-xs font-bold uppercase tracking-widest font-kanit">Property</span>
                        <h3 className="font-kanit font-semibold text-white text-2xl mt-1 mb-3">Bezpečie vášho dedičstva</h3>
                        <p className="text-white/60 text-sm font-stolzl leading-relaxed">
                            Prémiová nehnuteľnosť v žiadanej lokalite je duálne aktívum: chráni a diverzifikuje rodinný majetok mimo slovenskej ekonomiky a zostáva hodnotná pre ďalšie generácie. Keď ju nevyužívate, môže pracovať cez kurátorovaný prenájom.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function LifestyleContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/sprava-a-ochrana-majetku/lifestyle-property')}
            badge="Správa a ochrana majetku · Lifestyle Property"
            title="Nehnuteľnosť, ktorá chráni majetok aj váš čas."
            subtitle="Prémiová nehnuteľnosť na španielskom pobreží Costa del Sol ako duálne aktívum: diverzifikácia rodinného majetku mimo Slovenska a miesto na regeneráciu pre vás a rodinu."
            image={{ src: '/images/sprava-majetku/lifestyle-property.webp', alt: 'Biela vila medzi palmami s horami v pozadí' }}
            intro={{
                heading: <>Nie je to „chata pri mori“. <span className="text-gradient">Je to strategický krok.</span></>,
                text: 'Spojili sme svet investícií do nehnuteľností a starostlivosti o vaše súkromie do jedného celku. Hľadáme riešenia, ktoré chránia a zhodnocujú majetok a zároveň zvyšujú kvalitu vášho života. Pomôžeme s výberom lokality a nehnuteľnosti, financovaním, vlastníckou štruktúrou aj s prenájmom v čase, keď ju nevyužívate.',
            }}
            audience={[
                ['Lekár s majetkom na Slovensku', 'Chce ho rozložiť mimo jednej krajiny a meny.'],
                ['Lekár na hranici vyhorenia', 'Hľadá miesto na regeneráciu, ktoré má zároveň hodnotu.'],
                ['Rodina s deťmi', 'Myslí na budúcnosť, vzdelanie a odkaz pre ďalšie generácie.'],
            ]}
            steps={[
                { title: 'Ciele', detail: 'Investícia, vlastné využitie, rodina.', output: 'Zadanie', who: 'Osobný partner' },
                { title: 'Výber', detail: 'Lokalita, typ nehnuteľnosti, rozpočet.', output: 'Overené ponuky', who: '+ partneri na mieste' },
                { title: 'Kúpa a štruktúra', detail: 'Financovanie, vlastníctvo, dane.', output: 'Bezpečná kúpa', who: '+ advokát, daňový poradca' },
                { title: 'Správa', detail: 'Prenájom, údržba, ročná revízia.', output: 'Nehnuteľnosť bez starostí', who: '+ správca' },
            ]}
            services={[
                { icon: <Globe2 size={22} />, title: 'Diverzifikácia mimo Slovenska', text: 'Majetok rozložený mimo slovenskej ekonomiky, eura aj medicínskeho sektora.' },
                { icon: <Search size={22} />, title: 'Výber lokality a nehnuteľnosti', text: 'Prémiové lokality na pobreží Costa del Sol – Málaga, Estepona, Marbella.' },
                { icon: <Coins size={22} />, title: 'Financovanie a vlastníctvo', text: 'Úver, vlastnícka štruktúra a daňové súvislosti s odborníkmi.' },
                { icon: <KeyRound size={22} />, title: 'Kurátorovaný prenájom', text: 'Keď nehnuteľnosť nevyužívate, môže priniesť bezstarostný príjem.' },
                { icon: <GraduationCap size={22} />, title: 'Generačná kontinuita', text: 'Bezpečný prístav pre rodinu a prístup k medzinárodnému vzdelaniu pre deti.' },
                { icon: <Sun size={22} />, title: 'Celoročný lifestyle', text: 'More, gastronómia, golf a súkromné kliniky – prevencia pred vyhorením.' },
                { icon: <Plane size={22} />, title: 'Dostupnosť', text: 'Pravidelné letecké spojenie zo stredoeurópskych letísk na predĺžené víkendy.' },
                { icon: <Users size={22} />, title: 'Správa na mieste', text: 'Overení partneri pre údržbu, prenájom a služby, keď tam nie ste.' },
            ]}
            extra={
                <>
                    <RealEstateCompare />
                    <TwoWorlds />
                </>
            }
            example={{
                label: 'Modelová situácia',
                text: 'Lekár má ambulanciu, byt aj investičný byt na Slovensku. Namiesto ďalšej nehnuteľnosti doma vyberieme s partnermi apartmán na Costa del Sol, nastavíme financovanie a vlastníctvo s advokátom a daňovým poradcom a v mesiacoch, keď ho rodina nevyužíva, ho spravuje a prenajíma overený správca.',
            }}
            outputs={[
                'Overený výber lokality a nehnuteľnosti',
                'Financovanie a vlastnícka štruktúra',
                'Bezpečná kúpa s advokátom',
                'Správa a prenájom bez starostí',
            ]}
            links={[
                { label: 'Architektúra majetku', text: 'Nehnuteľnosť ako súčasť celého plánu.', href: '/sprava-a-ochrana-majetku/architektura-majetku' },
                { label: 'Nadačné a zverenecké schémy', text: 'Prenos majetku na ďalšie generácie.', href: '/sprava-a-ochrana-majetku/nadacne-a-zverenecke-schemy' },
                { label: 'Efektívna správa daní', text: 'Daňové súvislosti nehnuteľnosti v zahraničí.', href: '/sprava-a-ochrana-majetku/danove-poradenstvo' },
            ]}
            legal={`Výber a kúpu nehnuteľností zabezpečujú overení partneri, právne a daňové otázky advokát a daňový poradca. Výnosy z nehnuteľností nie sú garantované. ${FINANCE_DISCLOSURE}`}
            cta={{
                title: 'Druhý domov, ktorý pracuje pre vás?',
                description: 'Porozprávajme sa o vašich cieľoch – investícia, vlastné využitie aj budúcnosť rodiny.',
            }}
        />
    );
}
