'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import OrdinacnyIndexHook from '@/components/OrdinacnyIndexHook';
import CaseStudyDashboard from '@/components/CaseStudyDashboard';
import CaseStudyChart from '@/components/CaseStudyChart';
import { Search, ShieldCheck, Mail, TrendingUp, Check, ArrowRight, ChevronRight, Users, Lock, CalendarCheck } from 'lucide-react';

const IMG = '/images/databaza-pacientov';

const steps = [
    { icon: <Search size={22} />, img: 'analyza', alt: 'Prechádzanie kartotéky pacientov pri tablete', title: 'Analýza databázy', desc: 'Zanalyzujeme vašu kartotéku a nájdeme skupiny pacientov s najväčším potenciálom.' },
    { icon: <ShieldCheck size={22} />, img: 'ochrana', alt: 'Zámok na notebooku pri dokumentoch', title: 'Čistenie a súhlasy', desc: 'Zabezpečíme kvalitu údajov a pripravenosť na komunikáciu podľa GDPR.' },
    { icon: <Mail size={22} />, img: 'komunikacia-v2', alt: 'Obálky a zatvorený notebook na stole', title: 'Cielená komunikácia', desc: 'Navrhneme edukačné e-maily, ktoré pacienta privedú na preventívnu prehliadku.' },
    { icon: <TrendingUp size={22} />, img: 'meranie', alt: 'Tablet s grafom rastu na stole', title: 'Meranie a rast', desc: 'Pravidelne vyhodnocujeme kampane a upravujeme ich podľa výsledkov.' },
];

export default function DatabaseActivationPage() {
    return (
        <div className="min-h-screen">
            {/* Úvod: tmavý blok s fotografiou a výsledkami skutočnej kampane */}
            <section className="relative z-10 pt-28 lg:pt-32">
                <nav aria-label="Drobčeková navigácia" className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
                    <ol className="flex flex-wrap items-center gap-x-2 text-xs text-white/60 font-stolzl">
                        {trail("/sluzby/databaza-pacientov-a-jej-aktivacia").map((crumb, i, arr) => (
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
                            <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-5">Strategické aktívum</p>
                            <h1 className="font-kanit font-light text-5xl lg:text-7xl leading-[1.02] mb-6">
                                Kartotéka, ktorá <strong>privádza pacientov späť</strong>
                            </h1>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed mb-8 max-w-xl">
                                Kartotéka je zákonná povinnosť. Aktívna databáza je majetok, ktorý zvyšuje hodnotu vašej praxe.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {[
                                    'Kartotéka je zoznam, databáza je vzťah',
                                    'Komunikácia len so súhlasom pacienta, podľa GDPR',
                                    'Viac preventívnych a nadštandardných výkonov',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 font-stolzl text-white/90">
                                        <span className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center text-teal shrink-0"><Check size={14} /></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/konzultacia" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#88D5DB] text-[#041D2C] font-bold px-7 py-3.5">
                                    Rezervovať konzultáciu <ArrowRight size={16} />
                                </Link>
                                <a href="#pripadova-studia" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#88D5DB]/40 text-[#FAFAF8] font-semibold px-7 py-3.5">
                                    Prípadová štúdia
                                </a>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-[520px]">
                            <div className="relative aspect-square rounded-3xl overflow-hidden border border-[#88D5DB]/20">
                                <Image src={`${IMG}/uvod-v2.webp`} alt="Recepcia ambulancie s usporiadanou kartotékou" fill priority sizes="(min-width: 1024px) 520px, 90vw" className="object-cover" />
                            </div>
                            {[
                                { icon: <Users size={16} />, text: '1 618 odoslaných e-mailov', pos: '-left-3 sm:-left-8 top-8' },
                                { icon: <Lock size={16} />, text: 'Len so súhlasom', pos: '-right-2 sm:-right-6 top-[44%]' },
                                { icon: <CalendarCheck size={16} />, text: '+42 % rezervácií', pos: 'left-6 -bottom-5' },
                            ].map((c) => (
                                <div key={c.text} className={`absolute z-20 ${c.pos} flex items-center gap-2 rounded-full bg-[#88D5DB] text-[#041D2C] px-4 py-2 text-sm font-semibold font-stolzl`}>{c.icon}{c.text}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="max-w-7xl mx-auto px-6 lg:px-8 mt-3 text-xs text-white/55 font-stolzl">Čísla sú z prípadovej štúdie nižšie. Fotografia je ilustračná.</p>
            </section>

            {/* Proces aktivácie: štyri kroky s fotografiami */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Postup</p>
                        <h2 className="text-4xl lg:text-6xl font-light font-kanit leading-[1.05]">Štyri kroky <span className="text-gradient">aktivácie</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((st, i) => (
                            <article key={st.title} className="glass rounded-3xl overflow-hidden flex flex-col">
                                <div className="relative aspect-[3/2]">
                                    <Image src={`${IMG}/${st.img}.webp`} alt={st.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 768px) 45vw, 90vw" className="object-cover" />
                                    <span className="absolute left-4 top-4 rounded-full bg-[#041D2C] text-[#88D5DB] px-3 py-1 font-kanit font-semibold text-sm">0{i + 1}</span>
                                </div>
                                <div className="p-6">
                                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-teal/10 text-teal mb-4">{st.icon}</span>
                                    <h3 className="text-xl font-kanit font-semibold mb-2">{st.title}</h3>
                                    <p className="text-white/70 font-stolzl leading-relaxed text-sm">{st.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-8 relative z-10">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-5xl font-light font-kanit mb-6">Zvýšte <span className="text-gradient">hodnotu svojej praxe</span></h2>
                    <p className="text-lg text-white/70 font-stolzl leading-relaxed">
                        Či prax budujete pre ďalšie generácie, alebo uvažujete o jej predaji, aktívna databáza s históriou komunikácie a lojality je pre kupujúceho silný argument.
                    </p>
                </div>
            </section>

            <CaseStudyChart />

            {/* Prípadová štúdia – presunutá z domovskej stránky (patrí k aktivácii databázy) */}
            <section id="pripadova-studia" className="py-24 relative z-10 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <CaseStudyDashboard />
                </div>
            </section>

            <OrdinacnyIndexHook variant="marketing" />
            <CTABanner 
                title="Chcete vedieť, čo skrýva vaša kartotéka?"
                description="Zrealizujeme bezplatný audit potenciálu vašej databázy a navrhneme kroky k jej bezpečnej aktivácii."
            />
        </div>
    );
}
