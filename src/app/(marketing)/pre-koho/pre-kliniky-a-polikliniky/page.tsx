'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Building2, Layers, Shield, Database, Users, Check } from 'lucide-react';

const clinicBenefits = [
    { title: "Komplexné kampane", desc: "Riadenie marketingu pre viaceré oddelenia a špecializácie pod jednou strechou.", icon: <Layers size={20} /> },
    { title: "CRM a automatizácia", desc: "Nasadenie robustných systémov pre manažment vzťahov s tisíckami pacientov.", icon: <Database size={20} /> },
    { title: "Employer Branding", desc: "Pomáhame vám stať sa atraktívnym zamestnávateľom pre špičkových lekárov.", icon: <Users size={20} /> },
    { title: "Reputačná bezpečnosť", desc: "Aktívny manažment recenzií a komunikácia krízových situácií.", icon: <Shield size={20} /> }
];

export default function ForClinicsPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Marketing pre kliniky a polikliniky" 
                subtitle="Škálovateľné riešenia pre veľké zdravotnícke zariadenia, ktoré potrebujú systém, dáta a efektívnu správu viacerých špecializácií."
                badge="Pre veľké subjekty"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Integrovaný marketing <br /><span className="text-gradient">pre komplexné systémy</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Veľké kliniky čelia iným výzvam než samostatné ambulancie. Potrebujete zjednotený vizuálny štýl, centrálne riadenú databázu a schopnosť efektívne komunikovať hodnoty celej polikliniky pri zachovaní špecifík jednotlivých oddelení.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Centrálny digitálny ekosystém pre všetky oddelenia",
                                    "Pokročilá analytika a tracking pacientskej cesty",
                                    "Implementácia CRM pre hromadnú a segmentovanú komunikáciu",
                                    "Strategické riadenie brandu a expanzie na trhu"
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
                                <Building2 size={64} className="text-teal mb-6" />
                                <h3 className="text-2xl font-bold mb-4 font-kanit">Efektivita vo veľkom meradle</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed mb-6">
                                    Vďaka našim skúsenostiam s komplexnými systémami dokážeme prepojiť váš marketing s operačnými potrebami kliniky. Výsledkom je nižšia cena za pacienta a vyššia efektivita celého zariadenia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Riešenia pre <span className="text-gradient">veľké výzvy</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {clinicBenefits.map((benefit, i) => (
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
                title="Posuňte vašu kliniku na novú úroveň"
                description="Navrhneme komplexnú stratégiu, ktorá zjednotí vašu komunikáciu a prinesie merateľný rast všetkých oddelení."
            />
        </div>
    );
}
