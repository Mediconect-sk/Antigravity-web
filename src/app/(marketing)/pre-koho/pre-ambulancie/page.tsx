'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Stethoscope, Users, Zap, Clock, TrendingUp, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const specificBenefits = [
    { title: "Nábor nových pacientov", desc: "Zabezpečíme plynulý prísun nových pacientov presne v čase, keď potrebujete naplniť kapacity.", icon: <Users size={20} /> },
    { title: "Budovanie mena", desc: "Urobíme z vašej ambulancie lokálneho lídra v danej špecializácii.", icon: <TrendingUp size={20} /> },
    { title: "Zníženie administratívy", desc: "Automatizujeme objednávanie a odpovede na bežné otázky.", icon: <Clock size={20} /> },
    { title: "Lojalita kmeňa", desc: "Pravidelná komunikácia, ktorá pacienta udrží práve u vás.", icon: <Zap size={20} /> }
];

export default function ForAmbulanciesPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Marketing pre ambulancie" 
                subtitle="Pomáhame samostatným lekárom a malým ambulanciám vybudovať si stabilný kmeň pacientov a profesionálny imidž, ktorý vzbudzuje dôveru."
                badge="Pre špecialistov"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Ste odborník na medicínu. <br /><span className="text-gradient">My sme odborníci na váš rast.</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Vieme, že ako majiteľ ambulancie máte plné ruky práce s pacientmi. Marketing je často to posledné, na čo máte čas. My preberáme zodpovednosť za vašu digitálnu prítomnosť, aby ste sa vy mohli sústrediť na liečbu.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Profesionálny web, ktorý predáva vašu odbornosť",
                                    "Lokálne SEO — aby vás pacienti v okolí našli ako prvých",
                                    "Efektívna správa sociálnych sietí s medicínskym obsahom",
                                    "Automatizované pripomienky termínov a preventívok"
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
                            <div className="absolute inset-0 bg-teal/5 blur-[100px] rounded-full" />
                            <div className="glass rounded-3xl p-10 border border-white/10 relative z-10">
                                <Stethoscope size={64} className="text-teal mb-6" />
                                <h3 className="text-2xl font-bold mb-4 font-kanit">Šité na mieru malej praxi</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed mb-6">
                                    Nepotrebujete obrovské rozpočty veľkých nemocníc. Potrebujete smart riešenia, ktoré fungujú okamžite a prinášajú merateľný výsledok v podobe objednaných pacientov.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Výhody pre <span className="text-gradient">vašu ambulanciu</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {specificBenefits.map((benefit, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 font-kanit">{benefit.title}</h3>
                                    <p className="text-white/60 font-stolzl leading-relaxed text-sm">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner 
                title="Získajte viac času a spokojnejších pacientov"
                description="Konzultujme možnosti rastu vašej ambulancie bez zbytočného stresu a prehnaných nákladov."
            />
        </div>
    );
}
