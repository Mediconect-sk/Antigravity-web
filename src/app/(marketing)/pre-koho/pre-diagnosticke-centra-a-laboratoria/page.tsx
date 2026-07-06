'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { FlaskConical, Target, Zap, Clock, ShieldCheck, Check } from 'lucide-react';

const labBenefits = [
    { title: "B2B a B2C kampane", desc: "Oslovujeme priamo samoplatcov aj lekárov, ktorí do laboratórií odosielajú vzorky.", icon: <Target size={20} /> },
    { title: "Rýchlosť a prístupnosť", desc: "Zabezpečíme, aby sa pacienti dozvedeli o novinkách a výsledkoch čo najrýchlejšie.", icon: <Zap size={20} /> },
    { title: "Edukačný obsah", desc: "Vysvetľujeme význam diagnostických metód pre včasnú prevenciu.", icon: <ShieldCheck size={20} /> },
    { title: "Booking systémy", desc: "Integrácia s online objednávaním na konkrétne termíny odberov.", icon: <Clock size={20} /> }
];

export default function ForLabsPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Diagnostické centrá a laboratóriá" 
                subtitle="Marketing postavený na presnosti, rýchlosti a dôvere. Zvyšujeme povedomie o dôležitosti včasnej diagnostiky a prevencie."
                badge="Diagnostika"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Diagnostika začína <br /><span className="text-gradient">správnou komunikáciou</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Laboratóriá a diagnostické centrá predávajú istotu a rýchlosť. Naše marketingové riešenia pomáhajú pacientom pochopiť hodnotu vašich testov a lekárom uľahčujú proces odosielania vzoriek.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Kampane zamerané na preventívne balíčky pre samoplatcov",
                                    "Budovanie odborného kreditu medzi odbornou verejnosťou",
                                    "Zrozumiteľná interpretácia výsledkov cez digitálne kanály",
                                    "Optimalizácia online konverzného pomeru pre nákup testov"
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
                                <FlaskConical size={64} className="text-teal mb-6" />
                                <h3 className="text-2xl font-bold mb-4 font-kanit">Dáta v službách zdravia</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed mb-6">
                                    Vďaka presnému cieleniu dokážeme identifikovať skupiny pacientov, pre ktorých sú vaše diagnostické služby v danom momente kľúčové, čím zvyšujeme objem vyšetrení a efektivitu laboratória.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Ako rastieme <span className="text-gradient">spolu</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {labBenefits.map((benefit, i) => (
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
                title="Zvýšte objem diagnostických výkonov"
                description="Navrhneme stratégiu, ktorá prepojí vašu odbornosť s potrebami moderného pacienta a lekára."
            />
        </div>
    );
}
