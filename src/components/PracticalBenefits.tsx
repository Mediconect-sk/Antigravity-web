'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, ShieldCheck, HeartPulse, BarChart } from 'lucide-react';

const benefits = [
    { title: "Nárast prevencie", desc: "Zvýšenie počtu preventívnych prehliadok cez automatizované pripomienky.", icon: <HeartPulse /> },
    { title: "Cirkulácia pacientov", desc: "Efektívny manažment termínov a návratnosti pacientov do ambulancie.", icon: <Users /> },
    { title: "Menej administratívy", desc: "Odbremenenie sestry od opakujúcich sa telefonátov a emailov.", icon: <Clock /> },
    { title: "Lojalita a dôvera", desc: "Budovanie komunity, ktorá vníma vašu odbornosť a ľudský prístup.", icon: <ShieldCheck /> },
    { title: "Reputácia praxe", desc: "Systematické získavanie a manažment pozitívnych referencií online.", icon: <BarChart /> },
    { title: "Hodnota databázy", desc: "Rast trhovej ceny vašej lekárskej praxe vďaka aktívnemu kmeňu.", icon: <TrendingUp /> }
];

export default function PracticalBenefits() {
    return (
        <section className="py-24 relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Čo získate <span className="text-gradient">v praxi</span></h2>
                    <p className="text-white/50 max-w-2xl mx-auto font-stolzl">Nejde o pocity, ale o reálny dopad na chod a ekonomiku vašej ambulancie.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-kanit">{benefit.title}</h3>
                            <p className="text-white/40 text-sm font-stolzl leading-relaxed">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
