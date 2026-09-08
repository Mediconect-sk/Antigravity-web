'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import { Target, Zap, BarChart3, Search, MousePointer2, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Google Ads",
        desc: "Zobrazenie vašej ambulancie presne vo chvíli, keď pacient hľadá pomoc vo vašom okolí.",
        icon: <Search size={24} />
    },
    {
        title: "Meta Ads (FB/IG)",
        desc: "Oslovenie špecifických demografických skupín s ponukou preventívnych prehliadok alebo estetických zákrokov.",
        icon: <MousePointer2 size={24} />
    },
    {
        title: "Lead Generation",
        desc: "Systematické získavanie kontaktov na potenciálnych pacientov so záujmom o vaše služby.",
        icon: <Target size={24} />
    },
    {
        title: "Analýza a meranie",
        desc: "Presne vieme, koľko vás stojí jeden nový pacient a aká je návratnosť každej investovanej eurá.",
        icon: <BarChart3 size={24} />
    }
];

export default function PerformanceMarketingPage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail("/sluzby/akvizicia-a-vykonnostny-marketing")}
                title="Akvizícia a výkonnostný marketing" 
                subtitle="Kupujete si rýchlosť. Precízne cielené kampane nastavíme tak, aby prinášali nových pacientov a merateľnú návratnosť – nie prázdne impresie."
                badge="Výsledky"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Nerobíme marketing pre lajky. Robíme ho pre <span className="text-gradient">vašu prosperitu.</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                V zdravotníctve je čas kritický faktor. Kým budovanie organickej autority trvá mesiace, výkonnostný marketing vám umožní osloviť pacientov okamžite. Zameriavame sa na kvalitu dopytov a reálnu obsadenosť vašich termínov.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Rýchly nástup", text: "Prví noví pacienti už v priebehu 4-8 týždňov od spustenia." },
                                    { title: "Lokalizované cielenie", text: "Zameriavame sa na spádovú oblasť vašej ambulancie." },
                                    { title: "Transparentnosť", text: "Detailný reporting výsledkov, ktorému budete rozumieť." }
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, i) => (
                                <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all">
                                    <div className="text-teal mb-4">{feature.icon}</div>
                                    <h3 className="text-lg font-bold mb-3 font-kanit">{feature.title}</h3>
                                    <p className="text-white/50 text-sm font-stolzl leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <Zap size={48} className="text-teal mx-auto mb-8" />
                    <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-8">Marketing založený na <span className="text-gradient">dátach</span></h2>
                    <p className="text-xl text-white/70 font-stolzl leading-relaxed">
                        Využívame pokročilú analytiku na to, aby sme pochopili správanie pacientov. Každé euro vášho rozpočtu smerujeme tam, kde má najväčší dopad na rast vašej lekárskej praxe.
                    </p>
                </div>
            </section>

            <CTABanner 
                title="Chcete viac pacientov?"
                description="Navrhneme vám akvizičnú stratégiu, ktorá rešpektuje vašu špecializáciu a prinesie vám klientov, ktorých hľadáte."
            />
        </div>
    );
}
