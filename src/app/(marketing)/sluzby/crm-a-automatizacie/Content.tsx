'use client';

import React from 'react';
import Link from 'next/link';
import { trail, ORDEVIA } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import { Layers, Bell, Users, Check, CalendarCheck, Stethoscope, MessageSquareHeart, ExternalLink, ArrowRight, Star, Globe, Share2, Mail, ShieldCheck, ChevronRight, ListChecks, AlertCircle } from 'lucide-react';
import FlowDiagram from '@/components/FlowDiagram';
import { OrdeviaCrmPhone } from '@/components/OrdeviaCrmPhones';


export default function CrmAndAutomationPage() {
    return (
        <div className="min-h-screen">
            {/* Úvod: tmavý blok so skutočnými obrazovkami Ordevie a plávajúcimi prvkami */}
            <section className="relative z-10 pt-28 lg:pt-32">
                <nav aria-label="Drobčeková navigácia" className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
                    <ol className="flex flex-wrap items-center gap-x-2 text-xs text-white/60 font-stolzl">
                        {trail("/sluzby/crm-a-automatizacie").map((crumb, i, arr) => (
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
                            <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-5">Efektivita</p>
                            <h1 className="font-kanit font-light text-5xl lg:text-7xl leading-[1.02] mb-6">
                                CRM, ktoré <strong>pracuje za recepciu</strong>
                            </h1>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed mb-8 max-w-xl">
                                Pripomienky, objednávanie a prehľad dňa v jednom prostredí. Váš tím rieši pacientov, nie papierovačky.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {[
                                    'Komunikácia len s pacientmi, ktorí dali súhlas',
                                    'Automatické e-mailové pripomienky termínov',
                                    'Web, sociálne siete a emailing v jednom systéme',
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
                                <a href={ORDEVIA.demoUrl} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#88D5DB]/40 text-[#FAFAF8] font-semibold px-7 py-3.5">
                                    Ukážka CRM Ordevia <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-[560px] h-[480px] sm:h-[560px]">
                            <OrdeviaCrmPhone screen="rezervacie" sizes="(min-width: 1024px) 220px, 40vw" className="absolute left-0 top-[14%] w-[36%] opacity-80" />
                            <OrdeviaCrmPhone screen="prehlad" sizes="(min-width: 1024px) 300px, 50vw" priority className="absolute left-[27%] top-0 z-10 w-[46%]" />
                            <OrdeviaCrmPhone screen="chat" sizes="(min-width: 1024px) 220px, 40vw" className="absolute right-0 top-[18%] w-[36%] opacity-80" />
                            {[
                                { icon: <Bell size={16} />, text: 'Pripomienka odoslaná', pos: 'left-0 top-[6%]' },
                                { icon: <CalendarCheck size={16} />, text: 'Termín potvrdený', pos: 'right-0 top-[48%]' },
                                { icon: <Star size={16} />, text: 'Žiadosť o recenziu', pos: 'left-[2%] bottom-[6%]' },
                            ].map((c) => (
                                <div key={c.text} className={`absolute z-20 ${c.pos} flex items-center gap-2 rounded-full bg-[#fff] text-[#041D2C] px-4 py-2 text-sm font-semibold font-stolzl border border-[#E6E6E6]`}>
                                    <span className="text-[#4CADB6]">{c.icon}</span>{c.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="max-w-7xl mx-auto px-6 lg:px-8 mt-3 text-xs text-white/55 font-stolzl">Obrazovky CRM Ordevia na ukážkovej klinike.</p>
            </section>

            {/* Funkcie: asymetrická mriežka s grafikou namiesto rovnakých ikonových dlaždíc */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Čo CRM robí</p>
                        <h2 className="text-4xl lg:text-6xl font-light font-kanit leading-[1.05]">Štyri veci, ktoré <span className="text-gradient">odľahčia recepciu</span></h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                        {/* Pripomienky */}
                        <article className="glass rounded-3xl p-8 lg:col-span-4 flex flex-col sm:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><Bell size={26} /></span>
                                <h3 className="text-2xl font-kanit font-semibold mb-3">Automatické pripomienky</h3>
                                <p className="text-white/70 font-stolzl leading-relaxed">Termíny a kontroly sa pacientovi pripomenú e-mailom v správnom čase. Recepcia nevolá.</p>
                            </div>
                            <div className="w-full sm:w-72 rounded-2xl border border-[#E6E6E6] bg-[#F6F8F9] p-5">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-9 h-9 rounded-lg bg-[#041D2C] text-[#88D5DB] flex items-center justify-center"><Mail size={18} /></span>
                                    <span className="font-stolzl font-semibold text-sm text-[#041D2C]">Pripomienka termínu</span>
                                </div>
                                <p className="text-sm text-[#041D2C] font-stolzl leading-relaxed mb-4">Dobrý deň, pripomíname Váš termín v ambulancii. Prosíme o potvrdenie.</p>
                                <span className="inline-block rounded-lg bg-[#041D2C] text-[#fff] text-sm px-4 py-2 font-stolzl">Potvrdiť termín</span>
                            </div>
                        </article>
                        {/* Súhlas */}
                        <article className="glass rounded-3xl p-8 lg:col-span-2">
                            <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><ShieldCheck size={26} /></span>
                            <h3 className="text-2xl font-kanit font-semibold mb-3">Len so súhlasom</h3>
                            <p className="text-white/70 font-stolzl leading-relaxed mb-6">Kampaň ide iba na kontakty s platným súhlasom. Kontrola je automatická.</p>
                            <div className="space-y-2 font-stolzl text-sm">
                                <div className="flex items-center gap-2 rounded-xl bg-[#EAF4F5] px-4 py-2.5 text-[#041D2C]"><Check size={16} className="text-[#4CADB6]" /> S platným súhlasom</div>
                                <div className="flex items-center gap-2 rounded-xl bg-[#F1F3F4] px-4 py-2.5 text-[#6B7780]"><Users size={16} /> Bez súhlasu – nekontaktovať</div>
                            </div>
                        </article>
                        {/* Kanály */}
                        <article className="glass rounded-3xl p-8 lg:col-span-2">
                            <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><Layers size={26} /></span>
                            <h3 className="text-2xl font-kanit font-semibold mb-3">Všetky kanály spolu</h3>
                            <p className="text-white/70 font-stolzl leading-relaxed mb-6">Web, sociálne siete, emailing a objednávanie v jednom prostredí.</p>
                            <div className="grid grid-cols-2 gap-2 font-stolzl text-sm text-[#041D2C]">
                                {[[<Globe key="g" size={16} />, 'Web'], [<Share2 key="s" size={16} />, 'Sociálne siete'], [<Mail key="m" size={16} />, 'Emailing'], [<CalendarCheck key="c" size={16} />, 'Objednanie']].map(([ic, t]) => (
                                    <div key={t as string} className="flex items-center gap-2 rounded-xl bg-[#EAF4F5] px-3 py-2.5"><span className="text-[#4CADB6]">{ic}</span>{t}</div>
                                ))}
                            </div>
                        </article>
                        {/* Prehľad dňa */}
                        <article className="glass rounded-3xl p-8 lg:col-span-4 flex flex-col sm:flex-row gap-8 items-center overflow-hidden">
                            <div className="flex-1">
                                <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><ListChecks size={26} /></span>
                                <h3 className="text-2xl font-kanit font-semibold mb-3">Menej administratívy</h3>
                                <p className="text-white/70 font-stolzl leading-relaxed mb-5">Prehľad dňa ukáže, čo vyžaduje pozornosť, aké sú rezervácie a úlohy. Zvyšok beží sám.</p>
                                <p className="inline-flex items-center gap-2 text-sm font-semibold font-stolzl text-[#041D2C]"><AlertCircle size={16} className="text-[#4CADB6]" /> Prehľad dňa na jednom mieste</p>
                            </div>
                            <div className="w-56 shrink-0 h-72 overflow-hidden rounded-2xl">
                                <OrdeviaCrmPhone screen="prehlad" sizes="224px" className="w-full" />
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <FlowDiagram
                eyebrow="Ako to funguje"
                title={<>Automatizácia, ktorá <span className="text-gradient">pracuje za vás</span></>}
                text="Systém sám pripomenie termín, pošle edukačný obsah a pacienta privedie späť – personál rieši len to, čo naozaj potrebuje človeka."
                steps={[
                    { icon: <Users size={26} />, title: 'Pacient v databáze', text: 'Oslovujeme len pacientov s platným súhlasom.' },
                    { icon: <Bell size={26} />, title: 'Automatická pripomienka', text: 'E-mail v správnom čase – pripomienka termínu alebo kontroly.' },
                    { icon: <CalendarCheck size={26} />, title: 'Online objednanie', text: 'Pacient si termín vyberie sám, bez telefonovania.' },
                    { icon: <Stethoscope size={26} />, title: 'Návšteva', text: 'Pripravený pacient, menej neprídených termínov.' },
                    { icon: <MessageSquareHeart size={26} />, title: 'Spätná väzba', text: 'Poďakovanie, recenzia a ďalší krok starostlivosti.' },
                ]}
                loopNote="Cyklus sa opakuje – každá návšteva spúšťa ďalšiu pripomienku."
            >
                {/* Odkaz na ukážku CRM Ordevia (fiktívna klinika) – adresy z ORDEVIA, pravidlá v ORDEVIA.md */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={ORDEVIA.demoUrl}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 rounded-2xl bg-[#4CADB6] text-[#041D2C] font-bold shadow-[0_14px_30px_-12px_rgba(60,151,163,0.7)] hover:bg-[#88D5DB] transition-all duration-300"
                    >
                        Vyžiadať prístup do ukážky CRM Ordevia
                        <ExternalLink size={16} />
                    </a>
                    <Link
                        prefetch={false}
                        href={ORDEVIA.servicePath}
                        className="inline-flex items-center gap-2 font-semibold text-[#041D2C] hover:gap-3 transition-all"
                    >
                        Viac o Ordevii <ArrowRight size={16} />
                    </Link>
                </div>
                <p className="text-center text-white/55 text-sm font-stolzl mt-4">Ukážka beží na fiktívnej klinike.</p>
            </FlowDiagram>

            <section className="pb-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Link href="/business-partner" className="group glass rounded-2xl p-6 border border-white/5 hover:border-teal/30 transition-all flex items-center justify-between gap-4">
                        <span className="flex flex-col gap-1">
                            <span className="text-[#041D2C] font-semibold font-kanit">Pre ambulancie od štartu: Business partner</span>
                            <span className="text-white/55 text-sm font-stolzl">Založenie praxe, financovanie a prevádzka v jednom partnerstve.</span>
                        </span>
                        <ArrowRight size={18} className="text-teal shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <CTABanner 
                title="Pripravení na automatizáciu vašej praxe?"
                description="Navrhneme vám CRM riešenie, ktoré sa integruje do vášho denného režimu a prinesie okamžitú úsporu času a zvýšenie príjmov."
            />
        </div>
    );
}
