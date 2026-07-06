'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { BrainCircuit, MessageSquare, Bot, Cpu, Sparkles, Check } from 'lucide-react';
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

            <CTABanner 
                title="Chcete sa stať ambulanciou budúcnosti?"
                description="Konzultujme možnosti implementácie AI riešení priamo pre vašu špecializáciu a potreby vášho tímu."
            />
        </div>
    );
}
