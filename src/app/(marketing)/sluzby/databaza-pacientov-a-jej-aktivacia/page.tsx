'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Database, Search, Shield, Zap, TrendingUp, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    { title: "Audit databázy", desc: "Zanalyzujeme vašu aktuálnu kartotéku a identifikujeme segmenty s najväčším potenciálom." },
    { title: "Čistenie a validácia", desc: "Zabezpečíme technickú kvalitu a legálnu (GDPR) pripravenosť na komunikáciu." },
    { title: "Strategické cielenie", desc: "Navrhneme obsahové toky, ktoré pacienta motivujú k preventívnej starostlivosti." },
    { title: "Meranie a rast", desc: "Pravidelne vyhodnocujeme úspešnosť kampaní a optimalizujeme hodnotu pacienta." }
];

export default function DatabaseActivationPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Databáza pacientov a jej aktivácia" 
                subtitle="Vaša kartotéka je zákonná povinnosť. Ale vaša informovaná databáza je majetok, ktorý zvyšuje hodnotu vašej firmy."
                badge="Strategické aktívum"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Ste majiteľom firmy s <span className="text-gradient">tisíckami klientov</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Ak máte kmeň 2000 a viac pacientov, vlastníte významné aktívum. Otázkou je, či s ním pracujete. Pasívna kartotéka len „leží“ v systéme. Aktívna databáza s vami komunikuje, dôveruje vám a pravidelne sa vracia.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Rozdiel medzi kartotékou a databázou", text: "Kartotéka je zoznam. Databáza je vzťah." },
                                    { title: "GDPR bezpečnosť", text: "Všetky kroky realizujeme v súlade s najprísnejšími pravidlami ochrany údajov." },
                                    { title: "Monetizácia kmeňa", text: "Zvyšovanie počtu výkonov cez preventívne a nadštandardné služby." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                                            <Check size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white mb-1 font-kanit">{item.title}</div>
                                            <div className="text-white/40 text-sm font-stolzl">{item.text}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal/5 blur-[120px] rounded-full" />
                            <div className="glass rounded-3xl p-10 border border-white/10 relative z-10">
                                <Database size={64} className="text-teal mb-6" />
                                <blockquote className="text-xl italic text-white/90 font-stolzl leading-relaxed">
                                    "Najlacnejší pacient je ten, ktorého už máte v kartotéke. Aktivácia existujúceho kmeňa stojí 7x menej než akvizícia nového."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Proces <span className="text-gradient">aktivácie</span></h2>
                        <p className="text-white/50 max-w-2xl mx-auto font-stolzl">Systematický prístup k prebudeniu potenciálu vašej praxe.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all group">
                                <div className="text-2xl font-bold text-teal/40 mb-4 font-kanit">0{i+1}</div>
                                <h3 className="text-lg font-bold mb-4 font-kanit">{step.title}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <TrendingUp size={48} className="text-teal mx-auto mb-8" />
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8">Zvýšte <span className="text-gradient">hodnotu svojej praxe</span></h2>
                    <p className="text-lg text-white/60 max-w-3xl mx-auto font-stolzl leading-relaxed mb-12">
                        Či už plánujete prax budovať pre ďalšie generácie, alebo uvažujete o jej predaji, aktívna databáza s preukázateľnou históriou komunikácie a lojality radikálne zvyšuje cenu vášho podnikania v očiach investorov.
                    </p>
                </div>
            </section>

            <CTABanner 
                title="Chcete vedieť, čo skrýva vaša kartotéka?"
                description="Zrealizujeme bezplatný audit potenciálu vašej databázy a navrhneme kroky k jej bezpečnej aktivácii."
            />
        </div>
    );
}
