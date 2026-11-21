'use client';

import React from 'react';
import Link from 'next/link';
import { MYMEDICAL, trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import { MessageSquare, Check, ClipboardList, Clock, Lock, ArrowRight, ChevronRight, Search, PenLine, UserRound, BarChart3, FileText, UserCheck, Send } from 'lucide-react';


export default function AiServicePage() {
    return (
        <div className="min-h-screen">
            {/* Úvod: tmavý blok s ukážkou konverzácie a plávajúcimi prvkami */}
            <section className="relative z-10 pt-28 lg:pt-32">
                <nav aria-label="Drobčeková navigácia" className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
                    <ol className="flex flex-wrap items-center gap-x-2 text-xs text-white/60 font-stolzl">
                        {trail("/sluzby/umela-inteligencia-pre-ambulanciu").map((crumb, i, arr) => (
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
                    <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div>
                            <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-5">Inovácia</p>
                            <h1 className="font-kanit font-light text-5xl lg:text-7xl leading-[1.02] mb-6">
                                Umelá inteligencia, ktorá <strong>šetrí čas tímu</strong>
                            </h1>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed mb-8 max-w-xl">
                                Nenahrádza lekára. Odstraňuje opakované úlohy, aby mal tím viac času na pacientov.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {[
                                    'Odpovede na časté otázky pacientov bez čakania',
                                    'Navigácia pri objednávaní a príprave na vyšetrenie',
                                    'O medicínskych otázkach rozhoduje vždy lekár',
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

                        <div className="relative mx-auto w-full max-w-[460px]">
                            <div className="rounded-3xl border border-[#E6E6E6] bg-[#fff] p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-[#041D2C] text-[#88D5DB]"><MessageSquare size={22} /></span>
                                    <div>
                                        <p className="font-kanit font-semibold text-[#041D2C]">Asistent ambulancie</p>
                                        <p className="text-xs text-[#3F4B54] font-stolzl">Ukážka konverzácie</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 font-stolzl text-sm">
                                    <p className="self-end max-w-[80%] rounded-2xl rounded-br-sm bg-[#041D2C] text-[#fff] px-4 py-3">Ako sa mám pripraviť na vyšetrenie?</p>
                                    <p className="max-w-[88%] rounded-2xl rounded-bl-sm bg-[#F6F8F9] border border-[#E6E6E6] text-[#041D2C] px-4 py-3">Pripravili sme pre vás pokyny pred vyšetrením. Ak si nie ste istý, odovzdáme vás kolegom z recepcie.</p>
                                    <p className="self-end max-w-[80%] rounded-2xl rounded-br-sm bg-[#041D2C] text-[#fff] px-4 py-3">Ďakujem, to mi stačí.</p>
                                </div>
                            </div>
                            {[
                                { icon: <Send size={16} />, text: 'Odpoveď pacientovi', pos: '-top-4 right-6' },
                                { icon: <UserCheck size={16} />, text: 'Odovzdané recepcii', pos: '-bottom-4 right-6' },
                                { icon: <Lock size={16} />, text: 'Rozhoduje lekár', pos: '-bottom-4 left-6' },
                            ].map((c) => (
                                <div key={c.text} className={`absolute z-20 ${c.pos} flex items-center gap-2 rounded-full bg-[#88D5DB] text-[#041D2C] px-4 py-2 text-sm font-semibold font-stolzl`}>
                                    {c.icon}{c.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Štyri využitia: asymetrická mriežka s grafikou */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Kde AI pomáha</p>
                        <h2 className="text-4xl lg:text-6xl font-light font-kanit leading-[1.05]">Štyri miesta, kde <span className="text-gradient">AI šetrí čas</span></h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                        <article className="glass rounded-3xl p-8 lg:col-span-4 flex flex-col sm:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><MessageSquare size={26} /></span>
                                <h3 className="text-2xl font-kanit font-semibold mb-3">Asistent pre pacientov</h3>
                                <p className="text-white/70 font-stolzl leading-relaxed">Odpovedá na časté otázky a naviguje pacienta pri objednávaní. Čo vyžaduje človeka, preberá tím.</p>
                            </div>
                            <div className="w-full sm:w-72 flex flex-col gap-2 font-stolzl text-sm">
                                <p className="self-end rounded-2xl rounded-br-sm bg-[#041D2C] text-[#fff] px-4 py-2.5">Ako sa objednám?</p>
                                <p className="rounded-2xl rounded-bl-sm bg-[#F6F8F9] border border-[#E6E6E6] text-[#041D2C] px-4 py-3">Termín si vyberiete online, v kalendári ambulancie.</p>
                                <span className="self-start rounded-full bg-[#EAF4F5] text-[#041D2C] px-3 py-1 text-xs font-semibold">Informácie ambulancie</span>
                            </div>
                        </article>
                        <article className="glass rounded-3xl p-8 lg:col-span-2">
                            <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><PenLine size={26} /></span>
                            <h3 className="text-2xl font-kanit font-semibold mb-3">Podpora tímu</h3>
                            <p className="text-white/70 font-stolzl leading-relaxed mb-6">Vyhľadávanie v postupoch a návrhy správ. Text vždy skontroluje človek.</p>
                            <div className="space-y-2 font-stolzl text-sm text-[#041D2C]">
                                {[[<Search key="a" size={16} />, 'Interné postupy'], [<PenLine key="b" size={16} />, 'Návrh odpovede'], [<UserRound key="c" size={16} />, 'Odovzdanie kolegovi']].map(([ic, t]) => (
                                    <div key={t as string} className="flex items-center gap-2 rounded-xl bg-[#EAF4F5] px-4 py-2.5"><span className="text-[#4CADB6]">{ic}</span>{t}</div>
                                ))}
                            </div>
                        </article>
                        <article className="glass rounded-3xl p-8 lg:col-span-2">
                            <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><BarChart3 size={26} /></span>
                            <h3 className="text-2xl font-kanit font-semibold mb-3">Anonymná analýza</h3>
                            <p className="text-white/70 font-stolzl leading-relaxed mb-6">Trendy v dopytoch a spokojnosti bez údajov o konkrétnych pacientoch.</p>
                            <div className="flex flex-wrap gap-2 font-stolzl text-sm text-[#041D2C]">
                                {['Objednanie', 'Príprava na vyšetrenie', 'Prístup do ambulancie'].map((t) => (<span key={t} className="rounded-full bg-[#EAF4F5] px-3 py-1.5">{t}</span>))}
                            </div>
                            <p className="mt-3 text-xs text-white/55 font-stolzl">Príklady tém, nie skutočné údaje.</p>
                        </article>
                        <article className="glass rounded-3xl p-8 lg:col-span-4 flex flex-col sm:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><FileText size={26} /></span>
                                <h3 className="text-2xl font-kanit font-semibold mb-3">Vzdelávací obsah</h3>
                                <p className="text-white/70 font-stolzl leading-relaxed">Pokyny pre pacientov v zrozumiteľnej podobe. Pred odoslaním ich schváli tím.</p>
                            </div>
                            <div className="w-full sm:w-72 rounded-2xl border border-[#E6E6E6] bg-[#F6F8F9] p-5">
                                <p className="font-stolzl font-semibold text-sm text-[#041D2C] mb-3">Pokyny pred vyšetrením</p>
                                <p className="text-sm text-[#041D2C] font-stolzl leading-relaxed mb-4">Prineste si preukaz poistenca a zoznam liekov. Prosíme, príďte o desať minút skôr.</p>
                                <span className="inline-block rounded-lg bg-[#041D2C] text-[#fff] text-sm px-4 py-2 font-stolzl">Schváliť text</span>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Prieskum beží na mymedical.sk – tu je len pozvánka, tlačidlo presmeruje tam */}
            <section id="prieskum" className="py-24 relative z-10 scroll-mt-24">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="glass rounded-3xl border border-teal/20 p-8 sm:p-12 lg:p-14">
                        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                            <div className="flex-1">
                                <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal font-kanit">
                                    <ClipboardList size={16} />
                                    {MYMEDICAL.name} · Prieskum
                                </p>
                                <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-6 leading-tight">
                                    Čo vám v ambulancii <span className="text-gradient">berie najviac času?</span>
                                </h2>
                                <p className="text-white/60 font-stolzl leading-relaxed mb-4">
                                    Pre USA či Nemecko tvrdé dáta o administratívnej záťaži lekárov existujú. Pre Slovensko nie. Pomôžte nám to zmeniť – výsledky dostanú všetci zapojení a anonymné odpovede použijeme pri vývoji AI asistenta, ktorý má lekárom administratívu reálne odbúrať.
                                </p>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50 font-stolzl">
                                    <span className="inline-flex items-center gap-2"><Clock size={14} className="text-teal" /> do 5 minút</span>
                                    <span className="inline-flex items-center gap-2"><Lock size={14} className="text-teal" /> anonymné, pokiaľ nenecháte kontakt</span>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <a
                                    href={MYMEDICAL.aiSurveyUrl}
                                    className="inline-flex items-center gap-2 rounded-xl bg-teal px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-dark transition-all duration-300 hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/25"
                                >
                                    Vyplniť prieskum
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner
                title="Chcete sa stať ambulanciou budúcnosti?"
                description="Konzultujme možnosti implementácie AI riešení priamo pre vašu špecializáciu a potreby vášho tímu."
            />
        </div>
    );
}
