'use client';

import { motion } from 'framer-motion';
import PillarPage from '@/components/PillarPage';
import { WealthLevels, WealthPhases, HoldingSection, TopicsSection, ApproachQuote } from './Sections';
import { FINANCE_DISCLOSURE, MYMEDICAL, trail } from '@/lib/seo';

/**
 * Správa a ochrana majetku – pilier 04 Majetok a štruktúra (brožúra v5, strany 9–10)
 * + texty z brožúry „MyMedical koncepcia" v ./Sections.tsx.
 * Obsahuje ilustračnú schému štruktúry majetku a povinnú informáciu
 * o finančnom sprostredkovaní (FINANCE_DISCLOSURE).
 */

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

function StructureSection() {
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

export default function AssetContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/sprava-a-ochrana-majetku')}
            badge="Pilier 04 · Majetok a štruktúra"
            title="Čo zarobíte, má pracovať pre vás a vašu rodinu."
            subtitle="Plán, ochranu, štruktúru a daňovú efektivitu spojíme do jednej architektúry – s jedným osobným partnerom a ročnou revíziou."
            intro={{
                heading: <>Najprv diagnóza, <span className="text-gradient">potom odporúčanie.</span></>,
                text: 'Nepredpíšete terapiu bez vyšetrenia – ani my neodporučíme riešenie bez analýzy. Začíname finančnou diagnózou: príjmy, záväzky, rodina, riziká povolania a ciele. Až potom navrhneme plán, štruktúru a konkrétne riešenia, ktoré raz ročne spolu prejdeme.',
            }}
            audience={[
                ['Majiteľ ambulancie', 'Chce oddeliť riziko praxe od rodiny.'],
                ['Zamestnaný lekár', 'Buduje majetok a rentu popri službách.'],
                ['Pred odovzdaním praxe', 'Plánuje príjem po odchode a dedenie.'],
            ]}
            steps={[
                { title: 'Diagnóza', detail: 'Príjmy, záväzky, riziká.', output: 'Finančná diagnóza', who: 'Osobný partner' },
                { title: 'Plán', detail: 'Ochrana, rast, kontinuita.', output: 'Písomný plán', who: 'Osobný partner' },
                { title: 'Realizácia', detail: 'Štruktúra a produkty.', output: 'Štruktúra a produkty', who: '+ advokát, SKDP' },
                { title: 'Revízia', detail: 'Raz ročne.', output: 'Ročná kontrola', who: 'Osobný partner' },
            ]}
            services={[
                { title: 'Finančná diagnóza', text: 'Príjmy, záväzky, rodina, riziká povolania a ciele.' },
                { title: 'Holdingová štruktúra', text: 'Oddelenie rizika praxe od majetku, s advokátom a SKDP.' },
                { title: 'Plán a investície', text: 'Dlhodobý plán podľa rizikového profilu, ročná revízia.' },
                { title: 'Renta a dôchodok', text: 'Príjem po skončení praxe vrátane dôchodkového sporenia.' },
                { title: 'Poistenie a ochrana', text: 'Zodpovednosť, príjem pri PN, rodina a majetok ambulancie.' },
                { title: 'Úvery a financovanie', text: 'Hypotéky, súkromné aj podnikateľské financovanie.' },
                { title: 'Daňová efektivita', text: 'Vyplácanie zisku a štruktúra v súlade so zákonom, so SKDP.' },
                { title: 'Kontinuita a dedenie', text: 'Odovzdanie praxe a majetku bez fragmentácie.' },
            ]}
            extra={
                <>
                    <WealthLevels />
                    <StructureSection />
                    <HoldingSection />
                    <WealthPhases />
                    <TopicsSection />
                    <ApproachQuote />
                </>
            }
            example={{
                label: 'Modelová situácia',
                text: 'Majiteľ ambulancie má úspory na bežnom účte, prístroje na úver a rodinný dom na svoje meno. Navrhneme oddelenie rizika praxe od rodinného majetku, poistenie zodpovednosti a príjmu, dlhodobý investičný plán a plán renty – s jedným osobným partnerom a ročnou revíziou.',
            }}
            outputs={[
                'Finančná diagnóza a písomný plán',
                'Oddelenie rizika praxe od rodiny',
                'Plán renty a dôchodku',
                'Jeden partner namiesto piatich',
            ]}
            links={[
                { label: 'MyMedical', text: 'Osobný partner pre celý plán.', href: MYMEDICAL.url, external: true },
                { label: 'Business partner', text: 'Založenie, rast a generačná výmena praxe.', href: '/business-partner' },
            ]}
            legal={FINANCE_DISCLOSURE}
            cta={{
                title: 'Prvý krok je rozhovor.',
                description: 'Bezplatne prejdeme vašu situáciu a priority. Potom dostanete písomný plán s konkrétnymi krokmi.',
            }}
        />
    );
}
