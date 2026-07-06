'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Building2, FlaskConical, Waves, UserCircle } from 'lucide-react';
import Link from 'next/link';

const items = [
    { label: "Ambulancie", icon: <Stethoscope size={24} />, href: "/pre-koho/pre-ambulancie" },
    { label: "Kliniky a polikliniky", icon: <Building2 size={24} />, href: "/pre-koho/pre-kliniky-a-polikliniky" },
    { label: "Diagnostické centrá", icon: <FlaskConical size={24} />, href: "/pre-koho/pre-diagnosticke-centra-a-laboratoria" },
    { label: "Kúpele a Wellness", icon: <Waves size={24} />, href: "/pre-koho/pre-kupele-a-wellness" },
    { label: "Osobné značky lekárov", icon: <UserCircle size={24} />, href: "/pre-koho/pre-osobne-znacky-lekarov" }
];

export default function ForWhomStrip() {
    return (
        <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Pre koho pracujeme</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit">Špecializované riešenia <span className="text-white/30">pre každý typ praxe</span></h2>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                    {items.map((item, i) => (
                        <Link key={i} href={item.href}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="glass px-6 py-4 rounded-2xl flex items-center gap-4 border border-white/5 hover:border-teal/30 hover:bg-teal/5 transition-all group cursor-pointer"
                            >
                                <div className="text-teal group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-white/80 font-semibold font-kanit whitespace-nowrap">{item.label}</span>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
