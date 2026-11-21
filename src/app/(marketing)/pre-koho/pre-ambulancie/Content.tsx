'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import { Users, TrendingUp, Clock, Heart, Check, ArrowRight, ChevronRight, MapPin, Globe, Share2, CalendarCheck, UserPlus, Search } from 'lucide-react';

const benefits = [
    { img: '/images/akvizicia/uvod.webp', alt: 'Pacientka vchádza do ambulancie', title: 'Noví pacienti', desc: 'Pomáhame naplniť kapacity novými pacientmi v čase, keď ich potrebujete.', icon: <Users size={22} /> },
    { img: '/images/pre-ambulancie/meno.webp', alt: 'Recepcia malej ambulancie', title: 'Budovanie mena', desc: 'Z vašej ambulancie urobíme známe a dôveryhodné meno vo vašom okolí.', icon: <TrendingUp size={22} /> },
    { img: '/images/pre-ambulancie/administrativa.webp', alt: 'Uprataný pracovný stôl s prázdnym podnosom na papiere', title: 'Menej administratívy', desc: 'Automatizujeme objednávanie a odpovede na bežné otázky.', icon: <Clock size={22} /> },
    { img: '/images/pre-ambulancie/lojalita.webp', alt: 'Podanie rúk pacienta a recepčnej pri pulte', title: 'Lojalita kmeňa', desc: 'Pravidelná komunikácia, ktorá pacienta udrží práve u vás.', icon: <Heart size={22} /> },
];

export default function ForAmbulanciesPage() {
    return (
        <div className="min-h-screen">
            {/* Úvod: tmavý blok s fotografiou ambulancie */}
            <section className="relative z-10 pt-28 lg:pt-32">
                <nav aria-label="Drobčeková navigácia" className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
                    <ol className="flex flex-wrap items-center gap-x-2 text-xs text-white/60 font-stolzl">
                        {trail('/pre-koho/pre-ambulancie').map((crumb, i, arr) => (
                            <li key={crumb.path} className="flex items-center gap-2">
                                {i > 0 && <ChevronRight size={12} aria-hidden="true" />}
                                {i === arr.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link href={crumb.path} className="hover:underline">{crumb.name}</Link>}
                            </li>
                        ))}
                    </ol>
                </nav>
                <div className="mc-dark relative overflow-hidden rounded-[2rem] mx-4 lg:mx-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-60"
                        style={{ backgroundImage: 'linear-gradient(rgba(136,213,219,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(136,213,219,.07) 1px, transparent 1px)', backgroundSize: '56px 56px' }}
                    />
                    <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
                        <div>
                            <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-5">Pre ambulancie</p>
                            <h1 className="font-kanit font-light text-5xl lg:text-7xl leading-[1.02] mb-6">
                                Stabilný kmeň <strong>pacientov</strong>
                            </h1>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed mb-8 max-w-xl">
                                Pomáhame samostatným lekárom a malým ambulanciám získavať nových pacientov a budovať imidž, ktorý vzbudzuje dôveru.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {['Web, ktorý predáva vašu odbornosť', 'Lokálne SEO, aby vás pacienti v okolí našli', 'Automatické pripomienky termínov'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 font-stolzl text-white/90">
                                        <span className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center text-teal shrink-0"><Check size={14} /></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/konzultacia" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#88D5DB] text-[#041D2C] font-bold px-7 py-3.5">
                                Rezervovať konzultáciu <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="relative mx-auto w-full max-w-[520px]">
                            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-[#88D5DB]/20">
                                <Image src="/images/segmenty/ambulancie.webp" alt="Lekár pri práci v ambulancii" fill priority sizes="(min-width: 1024px) 520px, 90vw" className="object-cover" />
                            </div>
                            {[
                                { icon: <Search size={16} />, text: 'Nájdu vás v okolí', pos: 'left-3 sm:-left-8 top-4 sm:top-8' },
                                { icon: <UserPlus size={16} />, text: 'Nový pacient', pos: 'right-3 sm:-right-6 top-[42%]' },
                                { icon: <CalendarCheck size={16} />, text: 'Objednanie online', pos: 'left-6 -bottom-5' },
                            ].map((c) => (
                                <div key={c.text} className={`absolute z-20 ${c.pos} flex items-center gap-2 rounded-full bg-[#88D5DB] text-[#041D2C] px-4 py-2 text-sm font-semibold font-stolzl`}>{c.icon}{c.text}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ste odborník na medicínu */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Čo preberáme</p>
                        <h2 className="text-4xl lg:text-5xl font-light font-kanit leading-[1.05] mb-6">Ste odborník na medicínu. <span className="text-gradient">My na váš rast.</span></h2>
                        <p className="text-lg text-white/70 font-stolzl leading-relaxed">Ako majiteľ ambulancie máte plné ruky práce s pacientmi. Preberáme zodpovednosť za vašu digitálnu prezentáciu a rast, šité na mieru malej praxi, bez rozpočtov veľkých nemocníc.</p>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            { icon: <Globe size={24} />, title: 'Profesionálny web', desc: 'Predáva vašu odbornosť a vedie k objednaniu.' },
                            { icon: <MapPin size={24} />, title: 'Lokálne SEO', desc: 'Aby vás pacienti v okolí našli medzi prvými.' },
                            { icon: <Share2 size={24} />, title: 'Sociálne siete', desc: 'Správa s odborným a zrozumiteľným obsahom.' },
                            { icon: <CalendarCheck size={24} />, title: 'Pripomienky termínov', desc: 'Automaticky, bez telefonovania recepcie.' },
                        ].map((it) => (
                            <article key={it.title} className="glass rounded-3xl p-6 flex items-start gap-5">
                                <span className="inline-flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-teal/10 text-teal">{it.icon}</span>
                                <div>
                                    <h3 className="text-lg font-kanit font-semibold mb-1">{it.title}</h3>
                                    <p className="text-white/70 font-stolzl text-sm leading-relaxed">{it.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Výhody s fotografiami */}
            <section className="pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Výhody</p>
                        <h2 className="text-4xl lg:text-6xl font-light font-kanit leading-[1.05]">Čo to prinesie <span className="text-gradient">vašej ambulancii</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((b) => (
                            <article key={b.title} className="glass rounded-3xl overflow-hidden flex flex-col">
                                <div className="relative aspect-[3/2]">
                                    <Image src={b.img} alt={b.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 768px) 45vw, 90vw" className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-teal/10 text-teal mb-4">{b.icon}</span>
                                    <h3 className="text-xl font-kanit font-semibold mb-2">{b.title}</h3>
                                    <p className="text-white/70 font-stolzl leading-relaxed text-sm">{b.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="mt-4 text-xs text-white/55 font-stolzl">Fotografie v kartách sú ilustračné.</p>
                </div>
            </section>

            <CTABanner 
                title="Získajte viac času a spokojnejších pacientov"
                description="Konzultujme možnosti rastu vašej ambulancie bez zbytočného stresu a prehnaných nákladov."
            />
        </div>
    );
}
