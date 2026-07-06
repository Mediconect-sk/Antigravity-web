'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Waves, Heart, Map, Sun, Users, Check } from 'lucide-react';

const spaBenefits = [
    { title: "Sezónny marketing", desc: "Zabezpečíme naplnenosť kapacít počas celého roka, nielen v hlavnej sezóne.", icon: <Sun size={20} /> },
    { title: "Obsahový marketing", desc: "Tvorba vizuálne atraktívnych príbehov o relaxe, liečbe a lokálnej prírode.", icon: <Map size={20} /> },
    { title: "Influencer marketing", desc: "Spolupráca s relevantnými tvorcami pre budovanie lifestylového brandu.", icon: <Users size={20} /> },
    { title: "Zameranie na prevenciu", desc: "Komunikácia kúpeľov ako miesta pre aktívnu regeneráciu a zdravie.", icon: <Heart size={20} /> }
];

export default function ForSpaPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Kúpele a Wellness" 
                subtitle="Predávame zážitok z regenerácie a zdravia. Budujeme prémiovú značku, ktorá priťahuje hostí hľadajúcich kvalitu a oddych."
                badge="Lifestyle & Health"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Viac než len pobyt — <br /><span className="text-gradient">cesta k zdraviu</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Kúpeľníctvo a wellness spája medicínsku odbornosť s relaxom. Náš marketing tieto dva svety spája do príťažlivého celku, ktorý hosťovi doručuje jasný prísľub oddychu a zlepšenia zdravotného stavu.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Kreatívne kampane zamerané na konkrétne indikačné skupiny",
                                    "Prémiový vizuálny obsah — video a foto produkcia",
                                    "Správa sociálnych sietí s dôrazom na komunitu a relax",
                                    "Automatizovaný retargeting pre opakované pobyty"
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
                                <Waves size={64} className="text-teal mb-6" />
                                <h3 className="text-2xl font-bold mb-4 font-kanit">Marketing s dušou</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed mb-6">
                                    Pomáhame tradičným kúpeľom modernizovať ich komunikáciu tak, aby oslovila aj mladšie generácie, pričom zachovávame úctu k tradícii a medicínskej kvalite.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Vaša cesta k <span className="text-gradient">hosťom</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {spaBenefits.map((benefit, i) => (
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
                title="Naplňte svoje kapacity s prémiovými hosťami"
                description="Navrhneme lifestylovú stratégiu, ktorá podčiarkne jedinečnosť vašich kúpeľov a prinesie merateľný nárast rezervácií."
            />
        </div>
    );
}
