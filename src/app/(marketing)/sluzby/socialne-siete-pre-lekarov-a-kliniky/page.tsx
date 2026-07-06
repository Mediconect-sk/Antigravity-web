'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Users, Heart, Shield, MessageCircle, Instagram, Facebook, Youtube, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const platforms = [
    { name: "Facebook", desc: "Tradičná platforma pre budovanie lojality a komunitu starších pacientov a rodín.", icon: <Facebook size={20} /> },
    { name: "Instagram", desc: "Vizuálna prezentácia kliniky, personálu a výsledkov estetických zákrokov.", icon: <Instagram size={20} /> },
    { name: "YouTube", desc: "Hĺbková edukácia pacienta cez video obsah a budovanie autority experta.", icon: <Youtube size={20} /> },
    { name: "TikTok", desc: "Rýchlo rastúci kanál pre oslovenie mladších generácií a modernú edukáciu.", icon: <MessageCircle size={20} /> }
];

export default function SocialMediaPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Sociálne siete pre lekárov a kliniky" 
                subtitle="Budujeme komunitu a autoritu tam, kde vaši pacienti trávia čas. Ukážeme ľudskú tvár vašej praxe a vzbudíme okamžitú dôveru."
                badge="Komunita"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Viac než len <span className="text-gradient">pekné príspevky</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Zmyslom marketingu nie je zvýšiť počet lajkov. Pekné príspevky neliečia a neplatia faktúry. Naším cieľom je vytvoriť prostredie, kde sa pacient cíti bezpečne a vníma vás ako autoritu ešte skôr, než prekročí prah ambulancie.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Zníženie strachu", text: "Ukazujeme prostredie a personál, čo odbúrava stres pacienta pred návštevou." },
                                    { title: "Edukovaný pacient", text: "Pacienti chodia s reálnejšími očakávaniami a lepším pochopením liečby." },
                                    { title: "Sociálne schválenie", text: "Až 71% pacientov verí online referenciám rovnako ako osobnému odporúčaniu." }
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
                            {platforms.map((platform, i) => (
                                <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-teal mb-4">{platform.icon}</div>
                                    <h3 className="text-lg font-bold mb-3 font-kanit">{platform.name}</h3>
                                    <p className="text-white/50 text-sm font-stolzl leading-relaxed">{platform.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Dôvera je <span className="text-gradient">menou 21. storočia</span></h2>
                        <p className="text-white/50 max-w-2xl mx-auto font-stolzl">Až 52% spotrebiteľov tvrdí, že sociálne siete priamo ovplyvnili ich výber nemocnice alebo lekára.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Budovanie brandu", desc: "Dlhodobá stratégia identity, ktorá vás odlíši od konkurencie.", icon: <Heart size={24} /> },
                            { title: "Krizová komunikácia", desc: "Eliminujeme potenciálne negatívne referencie a budujeme dobré meno.", icon: <Shield size={24} /> },
                            { title: "Edukácia & Prevencia", desc: "Zvyšujeme lojalitu pacientov cez hodnotné rady a tipy.", icon: <Users size={24} /> }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-8">
                                <div className="inline-flex p-4 rounded-2xl bg-teal/10 text-teal mb-6 shadow-inner shadow-teal/20">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-kanit">{item.title}</h3>
                                <p className="text-white/40 text-sm font-stolzl leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner 
                title="Ste pripravení budovať svoju digitálnu komunitu?"
                description="Navrhneme vám autentickú stratégiu pre sociálne siete, ktorá bude rešpektovať váš čas aj medicínsku etiku."
            />
        </div>
    );
}
