'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Banknote, Handshake, KeyRound } from 'lucide-react';

/**
 * Štyri podsekcie piliera Business partner (Viktor 13. 10. 2026).
 * Jeden zdroj pre prehľad na /business-partner, menu a prelinkovanie podstránok.
 * Fotky: Unsplash (licencia Unsplash), zdroj a ID v CHANGELOG.md.
 */
export const BP_AREAS = [
    {
        href: '/business-partner/start-vlastnej-ambulancie',
        label: 'Štart vlastnej ambulancie',
        claim: 'Od rozhodnutia po prvého pacienta.',
        text: 'Lokalita, biznis plán, povolenie VÚC, zmluvy s poisťovňami, priestory a vybavenie v jednom harmonograme.',
        image: '/images/business-partner/start-vlastnej-ambulancie.webp',
        alt: 'Nová, zariadená vyšetrovňa pripravená na prvého pacienta',
        icon: <Rocket size={22} />,
    },
    {
        href: '/business-partner/financovanie-podnikania',
        label: 'Financovanie podnikania',
        claim: 'Prístroje a priestory bez zbytočného čakania.',
        text: 'Úver, lízing alebo prenájom vybavenia – porovnanie ponúk, podklady pre banku a sprostredkovanie.',
        image: '/images/business-partner/financovanie-podnikania.webp',
        alt: 'Podanie rúk nad podpísanými dokumentmi',
        icon: <Banknote size={22} />,
    },
    {
        href: '/business-partner/obchodne-partnerstvo',
        label: 'Obchodné partnerstvo',
        claim: 'Sieť ambulancií Mediconect a program Štart.',
        text: 'Mentor zo siete, regionálna exkluzivita a kapitálový vstup s opciou na odkúpenie podielu.',
        image: '/images/business-partner/obchodne-partnerstvo.webp',
        alt: 'Dvaja zdravotníci konzultujú postup nad dokumentmi',
        icon: <Handshake size={22} />,
    },
    {
        href: '/business-partner/predaj-kmena-a-prevadzky',
        label: 'Predaj kmeňa a prevádzky',
        claim: 'Odovzdanie praxe s rešpektom k pacientom.',
        text: 'Ocenenie ambulancie, nástupca, forma prevodu a citlivé odovzdanie pacientov.',
        image: '/images/business-partner/predaj-kmena-a-prevadzky.webp',
        alt: 'Skúsený lekár v pracovni svojej ambulancie',
        icon: <KeyRound size={22} />,
    },
];

/** Mriežka štyroch podsekcií s fotkou a ikonou (prehľad /business-partner). */
export default function BusinessPartnerAreas() {
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Štyri oblasti</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">
                        S čím vám <span className="text-gradient">pomôžeme</span>
                    </h2>
                    <p className="text-white/55 max-w-2xl mx-auto font-stolzl">
                        Od otvorenia vlastnej ambulancie cez jej financovanie a rast v sieti až po odovzdanie nástupcovi.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {BP_AREAS.map((a, i) => (
                        <motion.div
                            key={a.href}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                        >
                            <Link
                                href={a.href}
                                className="group block h-full glass rounded-3xl overflow-hidden border border-white/5 hover:border-teal/30 transition-all"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <Image
                                        src={a.image}
                                        alt={a.alt}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent" />
                                    <span className="absolute top-4 left-4 inline-flex w-12 h-12 rounded-2xl bg-navy-dark/80 backdrop-blur border border-teal/30 text-teal items-center justify-center">
                                        {a.icon}
                                    </span>
                                    <span className="absolute top-5 right-5 text-white/50 text-xs font-bold font-kanit tracking-widest">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <div className="p-6 lg:p-8 -mt-10 relative">
                                    <h3 className="text-2xl font-bold font-kanit text-white mb-1">{a.label}</h3>
                                    <p className="text-teal font-kanit mb-3">{a.claim}</p>
                                    <p className="text-white/60 text-sm font-stolzl leading-relaxed mb-5">{a.text}</p>
                                    <span className="inline-flex items-center gap-2 text-teal font-semibold font-kanit text-sm group-hover:gap-3 transition-all">
                                        Viac o oblasti <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
