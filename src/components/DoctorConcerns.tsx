'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const concerns = [
    { label: "SEO / PPC", fear: "Budu sa vnucovať ľuďom", solution: "Dostupnosť — Pacient vás nájde vtedy, keď vás hľadá a potrebuje pomoc." },
    { label: "Sociálne siete", fear: "Nechcem byť influencer", solution: "Dôvera — Ukazujete odbornosť a prostredie, čím odbúravate strach z návštevy." },
    { label: "Email Marketing", fear: "Budem spamovať ľudí", solution: "Starostlivosť — Posielate rady a pripomienky, ktoré pacientovi reálne pomôžu." },
    { label: "Content Marketing", fear: "Nemám čas písať články", solution: "Autorita — My tvoríme obsah za vás na základe vašej odbornosti, vy len schválite." }
];

export default function DoctorConcerns() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-bold uppercase tracking-widest mb-4">
                        <HelpCircle size={14} />
                        Časté otázky lekárov
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Máte obavy z <span className="text-gradient">marketingu?</span></h2>
                    <p className="text-white/50 font-stolzl max-w-2xl mx-auto">Rozumieme špecifikám zdravotníctva. Marketing v našom podaní nie je nátlak, ale služba pacientovi.</p>
                </div>

                <div className="space-y-4">
                    {concerns.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-6 lg:p-8 rounded-2xl border border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
                        >
                            <div className="text-teal font-bold font-kanit text-lg">{item.label}</div>
                            <div className="flex items-center gap-3 text-white/40 italic font-stolzl text-sm">
                                <ArrowRight size={16} className="text-red-400" />
                                „{item.fear}“
                            </div>
                            <div className="flex items-start gap-3">
                                <ShieldCheck size={20} className="text-teal flex-shrink-0 mt-1" />
                                <div className="text-white/80 font-stolzl text-sm leading-relaxed">
                                    {item.solution}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
