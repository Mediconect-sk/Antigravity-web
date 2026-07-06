'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Stethoscope, Building2, FlaskConical, Sparkles, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const segments = [
    {
        title: 'Ambulancie',
        desc: 'Pre samostatných lekárov a malé ambulancie, ktorí chcú stabilný kmeň pacientov a profesionálny imidž.',
        icon: <Stethoscope size={28} />,
        href: '/pre-koho/pre-ambulancie',
    },
    {
        title: 'Kliniky a polikliniky',
        desc: 'Pre väčšie zariadenia s viacerými oddeleniami, ktoré potrebujú koordinovaný marketing naprieč špecializáciami.',
        icon: <Building2 size={28} />,
        href: '/pre-koho/pre-kliniky-a-polikliniky',
    },
    {
        title: 'Diagnostické centrá a laboratóriá',
        desc: 'Pre špecializované pracoviská, kde je kľúčová komunikácia odbornosti a presnosti.',
        icon: <FlaskConical size={28} />,
        href: '/pre-koho/pre-diagnosticke-centra-a-laboratoria',
    },
    {
        title: 'Kúpele a wellness',
        desc: 'Pre zariadenia, ktoré kombinujú zdravotnú starostlivosť s wellnessom a chcú osloviť nových klientov.',
        icon: <Sparkles size={28} />,
        href: '/pre-koho/pre-kupele-a-wellness',
    },
    {
        title: 'Osobné značky lekárov',
        desc: 'Pre lekárov, ktorí chcú vybudovať si meno a autoritu vo svojom odbore.',
        icon: <UserCircle size={28} />,
        href: '/pre-koho/pre-osobne-znacky-lekarov',
    },
];

export default function PreKohoPage() {
    return (
        <div className="min-h-screen">
            <PageHero
                title="Pre koho pracujeme"
                subtitle="Špecializujeme sa na zdravotnícky marketing. Každý typ zariadenia má iné potreby — a my vieme, ako na ne."
                badge="Naše segmenty"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {segments.map((seg, i) => (
                            <motion.div
                                key={seg.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                            >
                                <Link
                                    href={seg.href}
                                    className="group block glass-strong rounded-2xl p-8 h-full border border-white/5 hover:border-teal/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal/5"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:bg-teal/20 transition-colors">
                                        {seg.icon}
                                    </div>
                                    <h3 className="text-lg font-bold font-kanit text-white mb-3 group-hover:text-teal transition-colors">
                                        {seg.title}
                                    </h3>
                                    <p className="text-white/50 text-sm font-stolzl leading-relaxed">
                                        {seg.desc}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
