'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import OrdeviaCrmPhones from './OrdeviaCrmPhones';
import OrdeviaLogo from './OrdeviaLogo';
import { ORDEVIA } from '@/lib/seo';

/**
 * Sekcia na homepage, ktorá predstavuje Ordevia Connect (objednávanie,
 * aplikácia pre pacientov a CRM). Tvrdenia musia platiť pre nasadenú verziu – ORDEVIA.md.
 * Vpravo sú skutočné obrazovky CRM na mobile (OrdeviaCrmPhones).
 * Je samostatná (nie vnútri <Section> s variants), takže jej animácie
 * nie sú gatované rodičovským variantom.
 */
export default function OrdeviaShowcase() {
    return (
        <section id="ordevia" className="py-24 lg:py-32 relative z-10 overflow-hidden">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <OrdeviaLogo size={44} connect className="mb-8" />

                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6 leading-tight">
                            Najprv termín. <span className="text-gradient">Potom aplikácia.</span>
                        </h2>
                        <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed max-w-xl">
                            Náš systém Ordevia Connect spája celú cestu pacienta na jednom bezpečnom mieste. Pacient sa objedná
                            online bez zakladania účtu, aplikáciu si aktivuje až potom – a váš tím vidí rezervácie, požiadavky
                            aj tímový chat v jednom prehľade, aj v mobile. Nasadenie aj pozvanie pacientov zabezpečíme za vás.
                        </p>

                        <ul className="space-y-3 mb-10">
                            {[
                                'Online objednávanie bez registrácie',
                                'Termíny, príprava a správy v aplikácii pre pacientov',
                                'Požiadavky, kalendár a čakacia listina pre váš tím',
                                'Prehľad dňa, rezervácie a tímový chat aj v mobile',
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                        <Check size={12} />
                                    </span>
                                    <span className="text-white/80 font-stolzl">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={ORDEVIA.servicePath}
                                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 bg-teal text-navy-dark font-semibold rounded-2xl hover:bg-teal/90 transition-all duration-300"
                            >
                                Viac o Ordevii
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href={ORDEVIA.demoUrl}
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 glass rounded-2xl text-white/80 hover:text-teal hover:border-teal/30 transition-all duration-300"
                            >
                                Vyžiadať prístup do ukážky
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex flex-col items-center"
                    >
                        <OrdeviaCrmPhones />
                        <p className="mt-4 text-xs text-white/30 font-stolzl">Ukážka CRM s ilustračnými údajmi</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
