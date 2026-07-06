'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import MediconectForm from '@/components/MediconectForm';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
    { label: "E-mail", value: "info@mediconect.sk", icon: <Mail />, href: "mailto:info@mediconect.sk" },
    { label: "Telefón", value: "+421 948 220 845", icon: <Phone />, href: "tel:+421948220845" },
    { label: "Adresa", value: "Lounská 629/2, Liptovský Mikuláš", icon: <MapPin />, href: "#" }
];

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Sme tu pre vás" 
                subtitle="Máte otázky alebo chcete prekonzultovať možnosti rastu vašej ambulancie? Napíšte nám, zavolajte alebo vyplňte formulár nižšie."
                badge="Kontakt"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
                        {/* Left: Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold font-kanit mb-8">Spojme sa</h2>
                                <div className="space-y-6">
                                    {contactInfo.map((item, i) => (
                                        <a 
                                            key={i} 
                                            href={item.href}
                                            className="flex items-center gap-6 p-6 glass rounded-2xl border border-white/5 hover:border-teal/20 transition-all group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="text-white/40 text-xs uppercase tracking-widest font-stolzl mb-1">{item.label}</div>
                                                <div className="text-white font-bold font-kanit text-lg">{item.value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="glass p-8 rounded-2xl border border-white/5 bg-teal/5">
                                <div className="flex items-center gap-3 mb-4 text-teal">
                                    <Clock size={20} />
                                    <h3 className="font-bold font-kanit">Sme k dispozícii</h3>
                                </div>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">
                                    Pracovné dni: 9:00 – 17:00 <br />
                                    Na e-maily odpovedáme spravidla do 24 hodín.
                                </p>
                            </div>

                            <div className="p-8 border border-white/5 rounded-2xl">
                                <h3 className="text-white font-bold font-kanit mb-4">Fakturačné údaje</h3>
                                <p className="text-white/40 text-sm font-stolzl leading-relaxed">
                                    MediConect s.r.o. <br />
                                    Lounská 629/2 <br />
                                    031 04 Liptovský Mikuláš <br />
                                    IČO: 57016615 <br />
                                    IČ DPH: SK2122534216
                                </p>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div id="form-section">
                            <div className="text-center lg:text-left mb-12">
                                <h2 className="text-3xl font-bold font-kanit mb-4">Napíšte nám <span className="text-gradient">priamo sem</span></h2>
                                <p className="text-white/50 font-stolzl">Vyplňte krátky formulár a my sa vám ozveme s návrhom termínu konzultácie.</p>
                            </div>
                            <MediconectForm endpoint="/api/kontakt" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <MessageSquare size={48} className="text-teal mx-auto mb-8 opacity-50" />
                    <h2 className="text-3xl font-bold font-kanit mb-6">Hľadáte niečo konkrétne?</h2>
                    <p className="text-white/60 mb-10 font-stolzl text-lg">
                        Ak potrebujete podrobnú cenovú ponuku alebo máte komplexný projekt, môžete využiť náš podrobný dopytový formulár.
                    </p>
                    <Link 
                        href="/#dopyt" 
                        className="inline-flex items-center gap-3 px-8 py-4 bg-teal text-navy-dark font-bold rounded-2xl hover:bg-teal/90 transition-all hover:scale-105"
                    >
                        Vyplniť podrobný dopyt
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
