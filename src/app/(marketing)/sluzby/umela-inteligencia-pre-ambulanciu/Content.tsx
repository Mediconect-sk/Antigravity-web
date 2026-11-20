'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { MYMEDICAL, trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import { MessageSquare, Check, ClipboardList, Clock, Lock, ArrowRight } from 'lucide-react';
import Image from 'next/image';


export default function AiServicePage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail("/sluzby/umela-inteligencia-pre-ambulanciu")}
                title="Umelá inteligencia pre ambulanciu" 
                subtitle="Budúcnosť zdravotníctva je tu. Implementujeme nástroje umelej inteligencie, ktoré šetria čas vášmu personálu a zvyšujú komfort pacienta."
                badge="Inovácia"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Menej opakovania, <span className="text-gradient">viac času na medicínu</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Umelá inteligencia nie je o nahradení lekára, ale o odstránení repetitívnych úloh. Naprogramujeme GPT asistenta pre vašu prax, ktorý dokáže spracovať bežné dopyty, čím uvoľní ruky vašej sestre či recepcii.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Odpovede na časté otázky pacientov bez čakania",
                                    "Navigácia pacienta pri objednávaní a príprave na vyšetrenie",
                                    "Inteligentné spracovanie prichádzajúcich správ",
                                    "Vždy aktuálne informácie dostupné 24/7"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                            <Check size={12} />
                                        </div>
                                        <span className="text-white/80 font-stolzl">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-3xl border border-[#E6E6E6] bg-[#fff] p-6 sm:p-8 max-w-md mx-auto">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-teal/10 text-teal"><MessageSquare size={22} /></span>
                                    <div>
                                        <p className="font-kanit font-semibold text-[#041D2C]">Asistent ambulancie</p>
                                        <p className="text-xs text-white/55 font-stolzl">Ukážka konverzácie</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 font-stolzl text-sm">
                                    <p className="self-end max-w-[80%] rounded-2xl rounded-br-sm bg-[#041D2C] text-[#fff] px-4 py-3">Ako sa mám pripraviť na vyšetrenie?</p>
                                    <p className="max-w-[88%] rounded-2xl rounded-bl-sm bg-[#F6F8F9] border border-[#E6E6E6] text-[#041D2C] px-4 py-3">Pripravili sme pre vás pokyny pred vyšetrením. Ak si nie ste istý, odovzdáme vás kolegom z recepcie.</p>
                                    <p className="self-end max-w-[80%] rounded-2xl rounded-br-sm bg-[#041D2C] text-[#fff] px-4 py-3">Ďakujem, to mi stačí.</p>
                                </div>
                                <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold text-[#041D2C]"><Lock size={12} className="text-teal" /> O medicínskych otázkach rozhoduje lekár</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Ako implementujeme <span className="text-gradient">AI do praxe</span></h2>
                        <p className="text-white/50 max-w-2xl mx-auto font-stolzl">Krok za krokom k modernej a inteligentnej ambulancii.</p>
                    </div>
                    <figure>
                        <Image
                            src="/images/ordevia/ai-styri-miesta.webp"
                            alt="Štyri miesta, kde umelá inteligencia šetrí čas: asistent odpovedá pacientom na časté otázky, podpora tímu pri postupoch a návrhoch správ, anonymná analýza dopytov a vzdelávací obsah pre pacientov, ktorý schvaľuje tím. O medicínskych rozhodnutiach rozhoduje vždy lekár."
                            width={1920}
                            height={820}
                            sizes="(min-width: 1280px) 1200px, 95vw"
                            className="w-full h-auto rounded-3xl border border-white/5"
                        />
                    </figure>
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
