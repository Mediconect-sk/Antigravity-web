'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Layers, Settings, Bell, Users, Zap, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    { title: "Segmentácia databázy", desc: "Rozdelenie pacientov podľa diagnóz, veku či poslednej návštevy pre vysoko relevantnú komunikáciu.", icon: <Users size={24} /> },
    { title: "Automatizované pripomienky", desc: "SMS a emailové notifikácie na termíny, preventívky či následné vyšetrenia.", icon: <Bell size={24} /> },
    { title: "Workflow marketingu", desc: "Prepojenie všetkých komunikačných kanálov do jedného funkčného celku.", icon: <Layers size={24} /> },
    { title: "Optimalizácia procesov", desc: "Zníženie administratívnej záťaže personálu vďaka inteligentným nástrojom.", icon: <Settings size={24} /> }
];

export default function CrmAndAutomationPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="CRM a automatizácie" 
                subtitle="Zmeňte spôsob, akým manažujete vzťahy s pacientmi. Prepojíme vašu databázu s inteligentným systémom, ktorý pracuje za vás."
                badge="Efektivita"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Viac času na medicínu, <span className="text-gradient">menej na papierovačky</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Marketing v zdravotníctve nie je len o reklame, ale o celom workflow. CRM (Customer Relationship Management) je mozgom vašej komunikácie. Umožňuje vám riadiť nákupné správanie, lojalitu a cirkuláciu pacientov bez námahy.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Prepojenie databázy s evidenčným systémom",
                                    "Automatizované pripomienky termínov",
                                    "Segmentácia podľa potrieb pacientov",
                                    "Reporting a sledovanie KPI v reálnom čase"
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
                            <div className="glass rounded-3xl p-10 border border-white/10 relative z-10 overflow-hidden">
                                <Zap size={48} className="text-teal mb-6" />
                                <h3 className="text-xl font-bold mb-4 font-kanit">Inteligentný workflow</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed mb-6">
                                    Váš personál trávi hodiny telefonovaním, aby preobjednal pacientov alebo pripomenul preventívku. CRM vyrieši tieto úlohy automaticky, čím šetrí mzdové náklady a zvyšuje vyťaženosť praxe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Kľúčové funkcie <span className="text-gradient">pre modernú kliniku</span></h2>
                        <p className="text-white/50 max-w-2xl mx-auto font-stolzl">Nástroje, ktoré premenia vašu administratívu na dobre naolejovaný stroj.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all group">
                                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-kanit">{feature.title}</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner 
                title="Pripravení na automatizáciu vašej praxe?"
                description="Navrhneme vám CRM riešenie, ktoré sa integruje do vášho denného režimu a prinesie okamžitú úsporu času a zvýšenie príjmov."
            />
        </div>
    );
}
