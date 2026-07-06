'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, ShieldOff, MegaphoneOff, Ghost } from 'lucide-react';

const items = [
    { title: "Lacné lajky", desc: "Nerobíme marketing pre prázdne štatistiky. Lajk nie je pacient.", icon: <Ghost /> },
    { title: "Neetický predaj", netlačíme: "Netlačíme pacientov do zbytočných výkonov. Ctíme medicínsku etiku.", icon: <ShieldOff /> },
    { title: "Spamovanie", desc: "Nezahlcujeme schránky zbytočným balastom. Doručujeme hodnotu.", icon: <MegaphoneOff /> },
    { title: "Žargón bez výsledkov", desc: "Neschovávame sa za zložité pojmy. Hovoríme rečou dát a zisku.", icon: <XCircle /> }
];

export default function WhatWeDoNot() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-8">Odlíšenie: <br /><span className="text-white/30">Čo pre vás </span> <span className="text-gradient">nerobíme</span></h2>
                        <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                            V Mediconecte si zakladáme na integrite. Vieme, kedy povedať nie, aby sme ochránili meno vašej ambulancie a kvalitu našej práce.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {items.map((item, i) => (
                            <div key={i} className="glass-strong p-8 rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-all group">
                                <div className="text-red-400/50 mb-4 group-hover:text-red-400 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3 font-kanit text-white">{item.title}</h3>
                                <p className="text-white/40 text-sm font-stolzl leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
