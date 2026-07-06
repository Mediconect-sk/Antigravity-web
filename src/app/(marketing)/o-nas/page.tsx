'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import Image from 'next/image';
import { Target, Lightbulb, Shield, Zap, TrendingUp, HeartHandshake, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
    { title: "Medicínska etika", desc: "Nikdy nekomunikujeme spôsobom, ktorý by znižoval dôstojnosť lekárskeho stavu.", icon: <Shield /> },
    { title: "Dátová inteligencia", desc: "Každé naše rozhodnutie je podložené reálnymi číslami z vašej praxe.", icon: <TrendingUp /> },
    { title: "Inovácia", desc: "Hľadáme nové cesty, ako AI a automatizácia môžu zefektívniť chod ambulancie.", icon: <Lightbulb /> },
    { title: "Partnerstvo", desc: "Sme súčasťou vášho tímu. Váš rast je náš úspech.", icon: <HeartHandshake /> }
];

export default function AboutUsPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Sme strategickým partnerom vašej ambulancie" 
                subtitle="Mediconect vznikol s víziou modernizovať komunikáciu v zdravotníctve a priniesť lekárom nástroje, ktoré im uľahčia prácu a zvýšia hodnotu ich praxe."
                badge="O nás"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-8">Náš príbeh <br /><span className="text-white/30">a vízia</span></h2>
                            <p className="text-lg text-white/60 mb-6 font-stolzl leading-relaxed">
                                V roku 2026 už nestačí len „byť na internete“. Zdravotníctvo prechádza digitálnou transformáciou a pacienti očakávajú rovnakú kvalitu komunikácie, akú dostávajú v iných segmentoch.
                            </p>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Mediconect spája svet marketingu a medicíny. Rozumieme špecifickej legislatíve, etike aj psychológii pacienta. Naším cieľom nie je len plná čakáreň, ale vybudovanie dlhodobého vzťahu medzi lekárom a pacientom.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-teal font-kanit">100+</div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest font-stolzl">Spokojných lekárov</div>
                                </div>
                                <div className="w-px h-10 bg-white/10" />
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-teal font-kanit">10+</div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest font-stolzl">Špecializácií</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal/5 blur-[120px] rounded-full" />
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video">
                                <Image 
                                    src="/images/about/team-collaboration.png" 
                                    alt="Mediconect tím pri práci" 
                                    fill 
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="text-white font-bold font-kanit text-xl mb-2">Inovujeme s integritou</div>
                                    <div className="text-white/60 text-sm font-stolzl">Každý projekt začína pochopením potrieb lekára a očakávaní pacienta.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-kanit">{value.title}</h3>
                                <p className="text-white/40 text-sm font-stolzl leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8">Prečo <span className="text-gradient">Mediconect?</span></h2>
                    <div className="space-y-6 text-left">
                        {[
                            "Špecializácia výhradne na segment zdravotníctva",
                            "Vlastné know-how v oblasti spracovania pacientskych dát",
                            "Transparentný reporting a merateľnosť každého eura",
                            "Minimálna časová záťaž pre personál ambulancie",
                            "Vždy aktuálne riešenia využívajúce najnovšie AI technológie"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5">
                                <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center text-teal flex-shrink-0">
                                    <Check size={14} />
                                </div>
                                <span className="text-white/80 font-stolzl">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner 
                title="Budujte s nami budúcnosť vašej praxe"
                description="Sme pripravení stať sa vaším strategickým partnerom v digitálnom svete."
            />
        </div>
    );
}
