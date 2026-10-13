'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { MYMEDICAL, trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import { BrainCircuit, MessageSquare, Bot, Cpu, Sparkles, Check, ClipboardList, Clock, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const aiFeatures = [
    { title: "GPT Asistent pre pacientov", desc: "Odpovedanie na časté otázky, navigácia pacienta a základná triáž cez webové rozhranie.", icon: <MessageSquare size={24} /> },
    { title: "Interná podpora tímu", desc: "Rýchle vyhľadávanie v interných postupoch, pomoc s administratívou a draftovaním správ.", icon: <Bot size={24} /> },
    { title: "Spracovanie dát", desc: "Anonymizovaná analýza pacientskej spokojnosti a trendov v dopytoch.", icon: <Cpu size={24} /> },
    { title: "Personalizácia obsahu", desc: "Generovanie personalizovaných vzdelávacích materiálov pre pacientov v reálnom čase.", icon: <Sparkles size={24} /> }
];

export default function AiServicePage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail("/sluzby/umela-inteligencia-pre-ambulanciu")}
                title="Umelá inteligencia pre ambulanciu" 
                subtitle="Budúcnosť zdravotníctva je tu. Implementujeme nástroje umelej inteligencie, ktoré šetria čas vášmu personálu a zvyšujú komfort pacienta."
                badge="Inovácia"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Menej opakovania, <span className="text-gradient">viac času na medicínu</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Umelá inteligencia nie je o nahradení lekára, ale o odstránení repetitívnych úloh. Naprogramujeme GPT asistenta pre vašu prax, ktorý dokáže spracovať bežné dopyty, čím uvoľní ruky vašej sestre či recepcii.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Odpovede na 80% bežných otázok pacientov okamžite",
                                    "Navigácia pacienta pri objednávaní a príprave na vyšetrenie",
                                    "Inteligentné spracovanie prichádzajúcich správ",
                                    "Vždy aktuálne informácie dostupné 24/7"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                            <Check size={12} />
                                        </div>
                                        <span className="text-white/80 font-stolzl">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal/10 blur-[100px] rounded-full" />
                            <div className="glass rounded-3xl p-10 border border-white/10 relative z-10">
                                <BrainCircuit size={64} className="text-teal mb-6" />
                                <h3 className="text-2xl font-bold mb-4 font-kanit">AI ako strategická výhoda</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed">
                                    V ére digitálnej medicíny vyhrávajú tí, ktorí dokážu komunikovať rýchlo a presne. Naše AI riešenia sú navrhnuté tak, aby rešpektovali bezpečnosť dát a zároveň poskytovali špičkovú používateľskú skúsenosť.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Ako implementujeme <span className="text-gradient">AI do praxe</span></h2>
                        <p className="text-white/50 max-w-2xl mx-auto font-stolzl">Krok za krokom k modernej a inteligentnej ambulancii.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {aiFeatures.map((feature, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all group">
                                <div className="text-teal mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                                <h3 className="text-lg font-bold mb-4 font-kanit">{feature.title}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prieskum beží na mymedical.sk – tu je len pozvánka, tlačidlo presmeruje tam */}
            <section id="prieskum" className="py-24 relative z-10 scroll-mt-24">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="glass rounded-3xl border border-teal/20 p-8 sm:p-12 lg:p-14">
                        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                            <div className="flex-1">
                                <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal font-kanit">
                                    <ClipboardList size={16} />
                                    {MYMEDICAL.name} · Prieskum
                                </p>
                                <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-6 leading-tight">
                                    Čo vám v ambulancii <span className="text-gradient">berie najviac času?</span>
                                </h2>
                                <p className="text-white/60 font-stolzl leading-relaxed mb-4">
                                    Pre USA či Nemecko tvrdé dáta o administratívnej záťaži lekárov existujú. Pre Slovensko nie. Pomôžte nám to zmeniť – výsledky dostanú všetci zapojení a anonymné odpovede použijeme pri vývoji AI asistenta, ktorý má lekárom administratívu reálne odbúrať.
                                </p>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50 font-stolzl">
                                    <span className="inline-flex items-center gap-2"><Clock size={14} className="text-teal" /> do 5 minút</span>
                                    <span className="inline-flex items-center gap-2"><Lock size={14} className="text-teal" /> anonymné, pokiaľ nenecháte kontakt</span>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <a
                                    href={MYMEDICAL.aiSurveyUrl}
                                    className="inline-flex items-center gap-2 rounded-xl bg-teal px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-dark transition-all duration-300 hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/25"
                                >
                                    Vyplniť prieskum
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner
                title="Chcete sa stať ambulanciou budúcnosti?"
                description="Konzultujme možnosti implementácie AI riešení priamo pre vašu špecializáciu a potreby vášho tímu."
            />
        </div>
    );
}
