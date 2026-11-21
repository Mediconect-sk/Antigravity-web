'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import OrdinacnyIndexHook from '@/components/OrdinacnyIndexHook';
import { Target, BarChart3, Search, Users, Check, ArrowRight, ChevronRight, MapPin, UserPlus, ShieldCheck, Rocket, FileBarChart } from 'lucide-react';

const IMG = '/images/akvizicia';

const channels = [
    { icon: <Search size={22} />, img: 'google', alt: 'Lupa na stole pri zápisníku', title: 'Google Ads', desc: 'Vaša ambulancia sa zobrazí vo chvíli, keď pacient hľadá pomoc vo vašom okolí.' },
    { icon: <Users size={22} />, img: 'meta-v3', alt: 'Žena s telefónom v kaviarni', title: 'Meta Ads (Facebook, Instagram)', desc: 'Oslovíme ľudí vo vašej spádovej oblasti, ktorí ešte nie sú vašimi pacientmi.' },
    { icon: <Target size={22} />, img: 'kontakty', alt: 'Zápis termínu do objednávacej knihy na recepcii', title: 'Získavanie kontaktov', desc: 'Systematicky získavame nových záujemcov a odovzdávame ich do objednávania. Kmeň pacientov rastie.' },
    { icon: <BarChart3 size={22} />, img: 'meranie', alt: 'Kompas na zápisníku s perom', title: 'Analýza a meranie', desc: 'Meriame cenu za nového pacienta a návratnosť investovaných peňazí.' },
];

export default function PerformanceMarketingPage() {
    return (
        <div className="min-h-screen">
            {/* Úvod: tmavý blok s fotografiou a ukážkou reklamy vo vyhľadávaní */}
            <section className="relative z-10 pt-28 lg:pt-32">
                <nav aria-label="Drobčeková navigácia" className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
                    <ol className="flex flex-wrap items-center gap-x-2 text-xs text-white/60 font-stolzl">
                        {trail("/sluzby/akvizicia-a-vykonnostny-marketing").map((crumb, i, arr) => (
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
                            <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-5">Výsledky</p>
                            <h1 className="font-kanit font-light text-5xl lg:text-7xl leading-[1.02] mb-6">
                                Noví pacienti, <strong>nie prázdne impresie</strong>
                            </h1>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed mb-8 max-w-xl">
                                Kupujete si rýchlosť. Cielené kampane nastavíme tak, aby priniesli nových pacientov a merateľnú návratnosť.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {[
                                    'Cielenie na spádovú oblasť vašej ambulancie',
                                    'Každý mesiac vidíte, koľko nových pacientov kampaň priniesla',
                                    'Do reklamných systémov neposielame zdravotné údaje',
                                ].map((item) => (
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
                            <div className="relative aspect-square w-full sm:w-[88%] rounded-3xl overflow-hidden border border-[#88D5DB]/20">
                                <Image src={`${IMG}/uvod-v2.webp`} alt="Čakáreň ambulancie" fill priority sizes="(min-width: 1024px) 460px, 90vw" className="object-cover" />
                            </div>
                            {/* Ukážka reklamy vo vyhľadávaní so skutočným textom */}
                            <div className="relative mt-4 w-full sm:absolute sm:mt-0 sm:right-0 sm:bottom-10 sm:w-[64%] rounded-2xl border border-[#E6E6E6] bg-[#fff] p-5 font-stolzl text-[#041D2C] z-10">
                                <p className="text-[11px] text-[#3F4B54] mb-1"><span className="font-semibold text-[#041D2C]">Sponzorované</span> · Vaša ambulancia</p>
                                <p className="font-kanit font-semibold text-base leading-snug text-[#0A5C66] mb-1.5">Prijímame nových pacientov – objednajte sa online</p>
                                <p className="text-sm leading-relaxed mb-3">Voľné termíny pre nových pacientov ešte tento mesiac. Ambulancia v centre mesta, parkovanie pri vchode.</p>
                                <span className="inline-flex items-center gap-1.5 text-xs text-[#3F4B54]"><MapPin size={13} className="text-[#4CADB6]" /> Vo vašom okolí</span>
                            </div>
                            {[
                                { icon: <MapPin size={16} />, text: 'Spádová oblasť', pos: 'left-3 sm:-left-8 top-4 sm:top-8 flex' },
                                { icon: <UserPlus size={16} />, text: 'Nový pacient', pos: 'right-3 sm:right-0 top-16 sm:top-6 flex' },
                                { icon: <ShieldCheck size={16} />, text: 'Bez zdravotných údajov', pos: 'hidden sm:flex left-4 -bottom-5' },
                            ].map((c) => (
                                <div key={c.text} className={`absolute z-20 ${c.pos} items-center gap-2 rounded-full bg-[#88D5DB] text-[#041D2C] px-4 py-2 text-sm font-semibold font-stolzl`}>{c.icon}{c.text}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Kanály: karty s fotografiami */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Kanály</p>
                        <h2 className="text-4xl lg:text-6xl font-light font-kanit leading-[1.05]">Marketing pre <span className="text-gradient">vašu prosperitu</span>, nie pre lajky</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {channels.map((c) => (
                            <article key={c.title} className="glass rounded-3xl overflow-hidden flex flex-col">
                                <div className="relative aspect-[3/2]">
                                    <Image src={`${IMG}/${c.img}.webp`} alt={c.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 768px) 45vw, 90vw" className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-teal/10 text-teal mb-4">{c.icon}</span>
                                    <h3 className="text-xl font-kanit font-semibold mb-2">{c.title}</h3>
                                    <p className="text-white/70 font-stolzl leading-relaxed text-sm">{c.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ako pracujeme */}
            <section className="pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Ako pracujeme</p>
                        <h2 className="text-4xl lg:text-5xl font-light font-kanit leading-[1.05] mb-6">Marketing založený <span className="text-gradient">na dátach</span></h2>
                        <p className="text-lg text-white/70 font-stolzl leading-relaxed">Budovanie organickej autority trvá mesiace. Výkonnostný marketing osloví pacientov hneď a každé euro rozpočtu smerujeme tam, kde má najväčší dopad.</p>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {[
                            { icon: <Rocket size={24} />, title: 'Rýchly nástup', desc: 'Kampaň spúšťame po úvodnej analýze.' },
                            { icon: <MapPin size={24} />, title: 'Lokálne cielenie', desc: 'Zameriavame sa na spádovú oblasť ambulancie.' },
                            { icon: <FileBarChart size={24} />, title: 'Zrozumiteľný reporting', desc: 'Výsledky, ktorým budete rozumieť.' },
                        ].map((it) => (
                            <article key={it.title} className="glass rounded-3xl p-6">
                                <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-4">{it.icon}</span>
                                <h3 className="text-lg font-kanit font-semibold mb-1">{it.title}</h3>
                                <p className="text-white/70 font-stolzl text-sm leading-relaxed">{it.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <OrdinacnyIndexHook variant="marketing" />
            <CTABanner 
                title="Chcete viac pacientov?"
                description="Navrhneme vám akvizičnú stratégiu, ktorá rešpektuje vašu špecializáciu a prinesie vám klientov, ktorých hľadáte."
            />
        </div>
    );
}
