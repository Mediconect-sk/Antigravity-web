'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import GlowCard from '@/components/GlowCard';

/**
 * „Ako prebieha spolupráca" pri Healthcare marketingu – štyri kroky od
 * konzultácie po reporting. Presunuté z domovskej stránky na /sluzby;
 * domovská stránka má všeobecný postup „Ako spolupracujeme" podľa
 * architektúry značky (rozhovor → diagnóza → plán → starostlivosť).
 */

const STEPS = [
    {
        step: '01',
        title: 'Nezáväzná bezplatná konzultácia',
        desc: 'Krátky hovor, kde zistíme, ako vieme zabezpečiť rast vašej lekárskej praxe.',
        image: '/images/proces/01_consultation.png',
    },
    {
        step: '02',
        title: 'Vykonáme prieskum vašej online prítomnosti a identifikujeme príležitosti',
        desc: 'Upgradujeme kontakty, doplníme emaily, otestujeme dostupnosť a vytvoríme „zdroj potenciálu“, cieľové skupiny, tematické okruhy kampaní, tón komunikácie a KPI.',
        image: '/images/proces/02_research.png',
    },
    {
        step: '03',
        title: 'Stratégia na mieru',
        desc: 'Konkrétny plán prispôsobený vašej špecializácii a cieľom: Emailing, web/SEO, sociálne siete, CRM s minimálnym zaťažením vášho tímu.',
        image: '/images/proces/03_strategy.png',
    },
    {
        step: '04',
        title: 'Realizácia a výsledky',
        desc: 'Začneme spoluprácu a pravidelne reportujeme merateľné výsledky. Máte detailný prehľad o efektivite a výstupoch z vášho digitálneho marketingu.',
        image: '/images/proces/04_results.png',
    },
];

export default function MarketingProcess() {
    return (
        <section id="proces" className="py-24 relative z-10 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-teal text-sm font-semibold uppercase tracking-widest">Proces</span>
                    <h2 className="text-3xl lg:text-5xl font-bold mt-4">
                        Ako prebieha <span className="text-gradient">spolupráca</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STEPS.map((item, i) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="relative group"
                        >
                            <GlowCard className="h-full">
                                <div className="glass rounded-2xl p-8 h-full transition-all duration-500 relative overflow-hidden flex flex-col justify-end">
                                    <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                                        <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 300px, 90vw" className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0C141A] to-transparent opacity-80" />
                                    </div>
                                    <div className="relative z-10 pt-16">
                                        <div className="text-5xl font-black text-teal/15 group-hover:text-teal/30 transition-colors duration-300 mb-4 inline-block">
                                            {item.step}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-3 group-hover:text-teal transition-colors duration-300">{item.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </GlowCard>
                            {i < STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-teal/30 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
