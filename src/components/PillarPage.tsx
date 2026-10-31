'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Quote } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import type { Crumb } from '@/lib/seo';

/**
 * Šablóna stránky piliera Medical Business Partner (brožúra v5, strany 6–10).
 *
 * Používajú ju /business-partner (pilier 01 Založenie a rast) a
 * /sprava-a-ochrana-majetku (pilier 04 Majetok a štruktúra). Texty sú
 * v Content.tsx danej stránky, tu je len rozloženie:
 *
 *   hero → [lead] → úvod → komu pomáhame → postup (4 kroky) → čo konkrétne robíme
 *   → [extra sekcia] → modelová situácia + výstupy → prepojenie na piliere
 *   → právna poznámka → CTA
 *
 * Všetok obsah je v HTML hneď (žiadne taby ani accordiony). Animácie sú len
 * `whileInView` na jednotlivých blokoch, nie cez rodičovské `variants`.
 */

export type PillarStep = { title: string; detail: string; output: string; who: string };
export type PillarService = { title: string; text: string; icon?: React.ReactNode };
export type PillarLink = { label: string; text: string; href: string; external?: boolean };

export type PillarPageProps = {
    breadcrumbs: Crumb[];
    badge: string;
    title: string;
    subtitle: string;
    intro: { heading: React.ReactNode; text: string };
    audience: string[][]; // [nadpis, popis]
    steps: PillarStep[];
    services: PillarService[];
    /** Voliteľná sekcia medzi službami a modelovou situáciou (napr. schéma štruktúry). */
    /** Voliteľná sekcia hneď pod hero (napr. diagram pilierov na /business-partner). */
    lead?: React.ReactNode;
    extra?: React.ReactNode;
    example: { label: string; text: string };
    outputs: string[];
    links: PillarLink[];
    legal?: string;
    /** Voliteľná fotografia pod úvodným textom (podsekcie Business partner). */
    image?: { src: string; alt: string };
    cta: { title: string; description: string };
};

const fade = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5 },
};

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
    return (
        <div className="text-center mb-12">
            <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">{eyebrow}</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">{title}</h2>
            {text && <p className="text-white/55 max-w-2xl mx-auto font-stolzl">{text}</p>}
        </div>
    );
}

function PillarLinkCard({ link }: { link: PillarLink }) {
    const inner = (
        <>
            <span className="text-white font-semibold font-kanit">{link.label}</span>
            <span className="text-white/50 text-sm font-stolzl">{link.text}</span>
            <ArrowRight size={16} className="text-teal mt-auto group-hover:translate-x-1 transition-transform" />
        </>
    );
    const cls = 'group glass rounded-2xl p-6 border border-white/5 hover:border-teal/30 transition-all flex flex-col gap-2 min-h-[140px]';
    return link.external ? (
        <a href={link.href} target="_blank" rel="noopener" className={cls}>{inner}</a>
    ) : (
        <Link href={link.href} className={cls}>{inner}</Link>
    );
}

export default function PillarPage(props: PillarPageProps) {
    const { breadcrumbs, badge, title, subtitle, intro, audience, steps, services, lead, extra, example, outputs, links, legal, cta, image } = props;

    return (
        <div className="min-h-screen">
            <PageHero breadcrumbs={breadcrumbs} badge={badge} title={title} subtitle={subtitle} />

            {lead}

            {/* Úvod + komu pomáhame */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <motion.div {...fade}>
                        <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-6 leading-tight">{intro.heading}</h2>
                        <p className="text-lg text-white/60 font-stolzl leading-relaxed">{intro.text}</p>
                        {image && (
                            <div className="relative mt-8 aspect-[3/2] rounded-3xl overflow-hidden border border-white/10">
                                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />
                            </div>
                        )}
                    </motion.div>
                    <motion.div {...fade}>
                        <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-5 font-kanit">Komu pomáhame</span>
                        <ul className="space-y-4">
                            {audience.map(([who, need]) => (
                                <li key={who} className="glass rounded-2xl p-5 border border-white/5 flex gap-4 items-start">
                                    <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-teal/15 text-teal flex items-center justify-center">
                                        <Check size={14} />
                                    </span>
                                    <span>
                                        <span className="block text-white font-semibold font-kanit">{who}</span>
                                        <span className="block text-white/55 text-sm font-stolzl">{need}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Postup */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHead eyebrow="Postup" title={<>Štyri kroky. <span className="text-gradient">Jasný výstup.</span></>} />
                    <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div aria-hidden className="mc-step-line hidden lg:block absolute top-5 left-[8%] right-[8%] h-px" />
                        {steps.map((step, i) => (
                            <motion.li key={step.title} {...fade} className="mc-step relative p-6 pt-16 flex flex-col">
                                <span className="mc-step-no absolute top-3 left-6 w-8 h-8 rounded-full text-sm font-bold font-kanit flex items-center justify-center">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-white font-semibold font-kanit text-lg mb-1">{step.title}</h3>
                                <p className="text-white/50 text-sm font-stolzl mb-5">{step.detail}</p>
                                <dl className="mt-auto space-y-2 text-sm font-stolzl border-t border-white/15 pt-4">
                                    <div>
                                        <dt className="text-white/35 text-xs uppercase tracking-wider">Výstup</dt>
                                        <dd className="text-white/85">{step.output}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-white/35 text-xs uppercase tracking-wider">Kto sa zapojí</dt>
                                        <dd className="text-white/60">{step.who}</dd>
                                    </div>
                                </dl>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Čo konkrétne robíme */}
            <section id="co-robime" className="py-16 relative z-10 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHead eyebrow="Čo konkrétne robíme" title={<>Všetko podstatné <span className="text-gradient">na jednom mieste</span></>} />
                    <div className={`grid grid-cols-1 sm:grid-cols-2 ${services.length % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-5`}>
                        {services.map((s) => (
                            <motion.div key={s.title} {...fade} className="glass rounded-2xl p-6 border border-white/5 hover:border-teal/20 transition-all">
                                {s.icon && (
                                    <span className="inline-flex w-11 h-11 mb-4 rounded-xl bg-teal/10 text-teal items-center justify-center">{s.icon}</span>
                                )}
                                <h3 className="text-white font-semibold font-kanit text-lg mb-2">{s.title}</h3>
                                <p className="text-white/55 text-sm font-stolzl leading-relaxed">{s.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {extra}

            {/* Modelová situácia + výstupy */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <motion.figure {...fade} className="lg:col-span-3 glass rounded-3xl p-8 lg:p-10 border border-teal/20 relative overflow-hidden">
                        <Quote size={40} className="text-teal/30 mb-4" aria-hidden />
                        <span className="text-teal text-xs font-bold uppercase tracking-widest block mb-3 font-kanit">{example.label}</span>
                        <p className="text-white/80 text-lg font-stolzl leading-relaxed">{example.text}</p>
                    </motion.figure>
                    <motion.div {...fade} className="lg:col-span-2 glass rounded-3xl p-8 border border-white/5">
                        <span className="text-teal text-xs font-bold uppercase tracking-widest block mb-5 font-kanit">Čo dostanete</span>
                        <ul className="space-y-3">
                            {outputs.map((o) => (
                                <li key={o} className="flex gap-3 items-start text-white/80 font-stolzl">
                                    <Check size={18} className="text-teal shrink-0 mt-0.5" />
                                    {o}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Prepojenie na ďalšie piliere */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHead
                        eyebrow="Prepojenie"
                        title={<>Súvisí s ďalšími <span className="text-gradient">oblasťami</span></>}
                        text="Založenie, pacienti, prevádzka a majetok sa navzájom ovplyvňujú – preto ich riešime spolu, s jedným osobným partnerom."
                    />
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto ${links.length === 4 ? 'lg:grid-cols-4 max-w-6xl' : links.length === 3 ? 'lg:grid-cols-3 max-w-5xl' : 'max-w-5xl'}`}>
                        {links.map((l) => <PillarLinkCard key={l.href} link={l} />)}
                    </div>
                    {legal && (
                        <p className="mt-12 max-w-4xl mx-auto text-center text-xs text-white/40 font-stolzl leading-relaxed">{legal}</p>
                    )}
                </div>
            </section>

            <CTABanner title={cta.title} description={cta.description} buttonText="Dohodnúť úvodný rozhovor" />
        </div>
    );
}
