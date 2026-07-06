'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Globe, Search, Smartphone, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const seoPoints = [
    { title: "Lokálne SEO", text: "Aby vás pacienti našli vtedy, keď hľadajú lekára vo svojom meste či mestskej časti." },
    { title: "Technická optimalizácia", text: "Bleskurýchle načítanie a bezchybný chod na všetkých mobilných zariadeniach." },
    { title: "Obsahová stratégia", text: "Edukácia pacienta cez odborné články, ktoré budujú vašu autoritu a zlepšujú pozície." },
    { title: "Konverzná optimalizácia", text: "Cesta pacienta od prvého kliku až po odoslanie objednávky je intuitívna a rýchla." }
];

export default function WebAndSeoPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Web a SEO pre zdravotníctvo" 
                subtitle="Váš web je „prvá vyšetrovacia miestnosť“ pacienta. Miesto, kde si s vami vytvára vzťah a dôveru ešte predtým, než vás fyzicky stretne."
                badge="Digitálna autorita"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Digitálny ekosystém, ktorý <span className="text-gradient">buduje dôveru</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Podľa Google sa každé dvadsiate vyhľadávanie týka zdravia. Váš web nie je len vizitka — je to funkčný nástroj, ktorý pacienta informuje, motivuje a znižuje bariéru prvého kontaktu.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Až 71% pacientov si pred výberom lekára skontrolovalo recenzie online",
                                    "Viac než 80% dospelých vyhľadáva informácie o zdraví na internete",
                                    "Design, ktorý pôsobí ako digitálny chirurgický nástroj: čistý a precízny",
                                    "SEO optimalizácia šitá na mieru medicínskym termínom"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                            <Check size={12} />
                                        </div>
                                        <span className="text-white/80 font-stolzl">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal/5 blur-[120px] rounded-full" />
                            <div className="glass rounded-3xl p-8 border border-white/10 relative z-10">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                                        <Search size={32} className="text-teal mb-4" />
                                        <div className="text-xs font-bold uppercase tracking-widest text-white/40 font-kanit">Viditeľnosť</div>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                                        <Smartphone size={32} className="text-teal mb-4" />
                                        <div className="text-xs font-bold uppercase tracking-widest text-white/40 font-kanit">Mobilita</div>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                                        <ShieldCheck size={32} className="text-teal mb-4" />
                                        <div className="text-xs font-bold uppercase tracking-widest text-white/40 font-kanit">Bezpečnosť</div>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                                        <Globe size={32} className="text-teal mb-4" />
                                        <div className="text-xs font-bold uppercase tracking-widest text-white/40 font-kanit">Dosah</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">SEO stratégia pre <span className="text-gradient">medicínsky rast</span></h2>
                        <p className="text-white/50 max-w-2xl mx-auto font-stolzl">Pomôžeme vám predbehnúť konkurenciu tam, kde to pacienti reálne hľadajú.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {seoPoints.map((point, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all group">
                                <h3 className="text-lg font-bold mb-4 font-kanit text-teal">{point.title}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">{point.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner 
                title="Chcete web, ktorý reálne lieči váš biznis?"
                description="Vytvoríme vám moderný, rýchly a bezpečný web, ktorý bude vašou najlepšou vizitkou v digitálnom priestore."
            />
        </div>
    );
}
