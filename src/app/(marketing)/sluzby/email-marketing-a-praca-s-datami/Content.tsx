'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import OrdinacnyIndexHook from '@/components/OrdinacnyIndexHook';
import CaseStudyChart from '@/components/CaseStudyChart';
import { Mail, Shield, KeyRound, CalendarCheck, Check, ArrowRight, ChevronRight, MailOpen, Lock, Clock, BookOpen, TrendingUp } from 'lucide-react';

const IMG = '/images/email-marketing';

// Čísla z prípadovej štúdie (CaseStudyChart.tsx, /vysledky) – jedna meraná kampaň pre ambulanciu.
const stats = [
    { value: '+42 %', label: 'viac rezervácií', desc: 'na preventívne prehliadky po kampani' },
    { value: '99 %', label: 'doručiteľnosť', desc: 'doručených e-mailov v tej istej kampani' },
    { value: '71 %', label: 'otvorenosť', desc: 'pacientov si e-mail od lekára otvorilo' },
];

const benefits = [
    { icon: <Shield size={22} />, img: 'autorita', alt: 'Otvorená kniha, notebook a okuliare na stole', title: 'Edukácia buduje autoritu', desc: 'Hodnotným obsahom si lekár buduje postavenie odborníka, ktorému pacienti dôverujú.' },
    { icon: <Lock size={22} />, img: 'diskretnost', alt: 'Zalepená obálka na tmavom stole', title: 'Diskrétnosť', desc: 'E-mail je súkromný priestor. Témy volíme podľa toho, o čo pacient sám prejavil záujem.' },
    { icon: <KeyRound size={22} />, img: 'vlastnictvo', alt: 'Kľúč na kožennej kľúčenke pri notebooku', title: 'Vlastníctvo dát', desc: 'Databáza e-mailov je váš majetok. Nikto vám ju nezablokuje ani nespoplatní dosah.' },
    { icon: <CalendarCheck size={22} />, img: 'navrat', alt: 'Stolový kalendár so zakrúžkovaným dátumom', title: 'Pacient sa vracia', desc: 'Pripomienky preventívnych prehliadok a očkovaní privedú pacienta späť v správnom čase.' },
];

export default function EmailMarketingPage() {
    return (
        <div className="min-h-screen">
            {/* Úvod: tmavý blok s fotografiou a výsledkami skutočnej kampane */}
            <section className="relative z-10 pt-28 lg:pt-32">
                <nav aria-label="Drobčeková navigácia" className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
                    <ol className="flex flex-wrap items-center gap-x-2 text-xs text-white/60 font-stolzl">
                        {trail("/sluzby/email-marketing-a-praca-s-datami").map((crumb, i, arr) => (
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
                            <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-5">Kľúčová služba</p>
                            <h1 className="font-kanit font-light text-5xl lg:text-7xl leading-[1.02] mb-6">
                                E-mail, ktorý <strong>privedie pacienta späť</strong>
                            </h1>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed mb-8 max-w-xl">
                                Sociálne siete sú námestie. E-mail je ako zatvorené dvere ambulancie: priamy a dlhodobý vzťah s pacientom.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {[
                                    'Správa príde priamo pacientovi, nie do algoritmu',
                                    'Len pacientom, ktorí dali súhlas',
                                    'Výsledok meriame na rezerváciách, nie na lajkoch',
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
                                <Link href="/sluzby/databaza-pacientov-a-jej-aktivacia#pripadova-studia" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#88D5DB]/40 text-[#FAFAF8] font-semibold px-7 py-3.5">
                                    Prípadová štúdia
                                </Link>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-[520px]">
                            <div className="relative aspect-square w-full sm:w-[88%] rounded-3xl overflow-hidden border border-[#88D5DB]/20">
                                <Image src={`${IMG}/uvod-v2.webp`} alt="Pacientka číta v telefóne e-mail od svojho lekára" fill priority sizes="(min-width: 1024px) 460px, 80vw" className="object-cover" />
                            </div>
                            {/* Ukážka e-mailu so skutočným textom */}
                            <div className="relative mt-4 w-full sm:absolute sm:mt-0 sm:right-0 sm:bottom-10 sm:w-[62%] rounded-2xl border border-[#E6E6E6] bg-[#fff] p-5 font-stolzl text-[#041D2C] z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#041D2C] text-[#88D5DB] flex items-center justify-center"><Mail size={16} /></span>
                                    <div className="leading-tight">
                                        <p className="text-xs font-semibold">Vaša ambulancia</p>
                                        <p className="text-[11px] text-[#3F4B54]">Pripomienka preventívnej prehliadky</p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-3">Dobrý deň, od vašej poslednej preventívnej prehliadky uplynul takmer rok. Termín si môžete vybrať online.</p>
                                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#041D2C] text-[#fff] text-sm px-4 py-2">Vybrať termín <ArrowRight size={14} /></span>
                            </div>
                            {[
                                { icon: <Mail size={16} />, text: '99 % doručených', pos: 'left-3 sm:-left-8 top-4 sm:top-8' },
                                { icon: <MailOpen size={16} />, text: '71 % otvorených', pos: 'right-3 sm:right-0 top-16 sm:top-6' },
                                { icon: <CalendarCheck size={16} />, text: '+42 % rezervácií', pos: 'hidden sm:flex left-4 -bottom-5' },
                            ].map((c) => (
                                <div key={c.text} className={`absolute z-20 ${c.pos.includes('hidden') ? c.pos : c.pos + ' flex'} items-center gap-2 rounded-full bg-[#88D5DB] text-[#041D2C] px-4 py-2 text-sm font-semibold font-stolzl`}>{c.icon}{c.text}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="max-w-7xl mx-auto px-6 lg:px-8 mt-3 text-xs text-white/55 font-stolzl">Čísla sú z jednej meranej kampane pre ambulanciu (prípadová štúdia).</p>
            </section>

            {/* Čísla */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((st) => (
                        <div key={st.label} className="glass rounded-3xl p-8">
                            <div className="font-kanit font-semibold text-6xl text-[#041D2C] mb-2">{st.value}</div>
                            <div className="font-kanit font-semibold text-lg mb-1">{st.label}</div>
                            <p className="text-white/70 font-stolzl text-sm">{st.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Prečo e-mail: karty s fotografiami */}
            <section className="pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Prečo e-mail</p>
                        <h2 className="text-4xl lg:text-6xl font-light font-kanit leading-[1.05]">Najsilnejší kanál <span className="text-gradient">pre vzťah s pacientom</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((b) => (
                            <article key={b.title} className="glass rounded-3xl overflow-hidden flex flex-col">
                                <div className="relative aspect-[3/2]">
                                    <Image src={`${IMG}/${b.img}.webp`} alt={b.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 768px) 45vw, 90vw" className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-teal/10 text-teal mb-4">{b.icon}</span>
                                    <h3 className="text-xl font-kanit font-semibold mb-2">{b.title}</h3>
                                    <p className="text-white/70 font-stolzl leading-relaxed text-sm">{b.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Digitálna sestra */}
            <section className="pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Úspora času</p>
                        <h2 className="text-4xl lg:text-5xl font-light font-kanit leading-[1.05] mb-6">Digitálna sestra, ktorá <span className="text-gradient">nikdy nespí</span></h2>
                        <p className="text-lg text-white/70 font-stolzl leading-relaxed">Jeden hromadný e-mail o zmene ordinačných hodín alebo pripomienka preventívky nahradí desiatky telefonátov. Sestra má viac času na pacientov v ambulancii.</p>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            { icon: <Clock size={24} />, title: 'Menej telefonovania', desc: 'Pripomienky preventívnych prehliadok odídu samé.' },
                            { icon: <BookOpen size={24} />, title: 'Poučený pacient', desc: 'Pokyny po návšteve prídu automaticky e-mailom.' },
                            { icon: <CalendarCheck size={24} />, title: 'Plná ambulancia', desc: 'Voľné termíny sa zaplnia pacientmi z vlastnej databázy.' },
                            { icon: <TrendingUp size={24} />, title: 'Rast hodnoty praxe', desc: 'Aktívna databáza zvyšuje cenu vašej ambulancie.' },
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

            <CaseStudyChart />

            <OrdinacnyIndexHook variant="marketing" />
            <CTABanner 
                title="Chcete aktivovať svoju databázu?"
                description="Zistite, aký potenciál sa skrýva vo vašej kartotéke. Navrhneme vám stratégiu, ktorá rešpektuje etiku aj súkromie vašich pacientov."
            />
        </div>
    );
}
