'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { UserCircle, Award, Star, Mic, ShieldCheck, Check } from 'lucide-react';

const brandBenefits = [
    { title: "Digitálna stopa", desc: "Zabezpečíme, aby prvý dojem o vás na internete zodpovedal vašej skutočnej odbornosti.", icon: <Star size={20} /> },
    { title: "Public Relations", desc: "Spolupráca s médiami a odbornými portálmi pre zvýšenie vašej viditeľnosti.", icon: <Mic size={20} /> },
    { title: "Autorita na sieťach", desc: "Budovanie komunity okolo vášho mena ako dôveryhodného zdroja informácií.", icon: <ShieldCheck size={20} /> },
    { title: "Management reputácie", desc: "Staráme sa o váš odborný imidž a profesionálnu komunikáciu 24/7.", icon: <Award size={20} /> }
];

export default function ForDoctorBrandsPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Osobné značky lekárov" 
                subtitle="Budujeme meno odborníka. Pretože pacienti sa v prvom rade zverujú do rúk konkrétneho lekára, až potom klinike."
                badge="Personal Branding"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Vaše meno je <br /><span className="text-gradient">vaším najväčším aktívom</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                V modernej medicíne je osobná značka lekára kľúčová. Pacienti hľadajú konkrétnu tvár a odborníka, ktorému môžu veriť. Pomáhame vám komunikovať vašu odbornosť, skúsenosti a ľudský prístup tak, aby vás pacienti vnímali ako jasnú voľbu.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Osobná webová stránka špecialistu",
                                    "Tvorba odborného videoobsahu a podcastov",
                                    "LinkedIn a sociálne siete so strategickým dosahom",
                                    "Ghostwriting odborných článkov a blogov"
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
                            <div className="glass rounded-3xl p-10 border border-white/10 relative z-10 text-center">
                                <UserCircle size={80} className="text-teal mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4 font-kanit">Lekár ako mienkotvorný líder</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed mb-6">
                                    Pomôžeme vám prekonať bariéru medzi medicínskym žargónom a rečou pacienta, čím si vybudujete silnú komunitu a stanete sa autoritou vo svojom odbore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Budujte svoju <span className="text-gradient">budúcnosť</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {brandBenefits.map((benefit, i) => (
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
                title="Staňte sa tvárou svojho odboru"
                description="Navrhneme stratégiu osobnej značky, ktorá posilní vaše meno a otvorí vám nové možnosti v praxi aj mimo nej."
            />
        </div>
    );
}
