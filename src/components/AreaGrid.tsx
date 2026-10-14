'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export type Area = {
    href: string;
    label: string;
    claim: string;
    text: string;
    image: string;
    alt: string;
    icon: React.ReactNode;
};

/**
 * Mriežka podsekcií piliera – karta s fotkou, ikonou, poradovým číslom a odkazom.
 * Používa ju prehľad Business partner aj Správa a ochrana majetku.
 * Pri nepárnom počte sa posledná karta roztiahne na celú šírku.
 */
export default function AreaGrid({ eyebrow, title, text, areas }: { eyebrow: string; title: React.ReactNode; text?: string; areas: Area[] }) {
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">{eyebrow}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">{title}</h2>
                    {text && <p className="text-white/55 max-w-2xl mx-auto font-stolzl">{text}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {areas.map((a, i) => {
                        const wide = areas.length % 2 === 1 && i === areas.length - 1;
                        return (
                            <motion.div
                                key={a.href}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                                className={wide ? 'md:col-span-2' : ''}
                            >
                                <Link
                                    href={a.href}
                                    className={`group h-full glass rounded-3xl overflow-hidden border border-white/5 hover:border-teal/30 transition-all ${wide ? 'md:grid md:grid-cols-2' : 'block'}`}
                                >
                                    <div className={`relative overflow-hidden ${wide ? 'aspect-[16/9] md:aspect-auto md:min-h-[300px]' : 'aspect-[16/9]'}`}>
                                        <Image
                                            src={a.image}
                                            alt={a.alt}
                                            fill
                                            sizes="(min-width: 768px) 50vw, 100vw"
                                            className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className={`absolute inset-0 ${wide ? 'bg-gradient-to-t md:bg-gradient-to-l' : 'bg-gradient-to-t'} from-navy-dark via-navy-dark/30 to-transparent`} />
                                        <span className="absolute top-4 left-4 inline-flex w-12 h-12 rounded-2xl bg-navy-dark/80 backdrop-blur border border-teal/30 text-teal items-center justify-center">
                                            {a.icon}
                                        </span>
                                        <span className="absolute top-5 right-5 text-white/50 text-xs font-bold font-kanit tracking-widest">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className={`p-6 lg:p-8 relative ${wide ? 'md:flex md:flex-col md:justify-center' : '-mt-10'}`}>
                                        <h3 className="text-2xl font-bold font-kanit text-white mb-1">{a.label}</h3>
                                        <p className="text-teal font-kanit mb-3">{a.claim}</p>
                                        <p className="text-white/60 text-sm font-stolzl leading-relaxed mb-5">{a.text}</p>
                                        <span className="inline-flex items-center gap-2 text-teal font-semibold font-kanit text-sm group-hover:gap-3 transition-all">
                                            Viac o oblasti <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
