'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { trail, ORDEVIA } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import { Layers, Settings, Bell, Users, Zap, Check, CalendarCheck, Stethoscope, MessageSquareHeart, ExternalLink, ArrowRight } from 'lucide-react';
import FlowDiagram from '@/components/FlowDiagram';
import { motion } from 'framer-motion';
import Image from 'next/image';
import OrdeviaCrmPhones from '@/components/OrdeviaCrmPhones';


export default function CrmAndAutomationPage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail("/sluzby/crm-a-automatizacie")}
                title="CRM a automatizácie" 
                subtitle="Zmeňte spôsob, akým manažujete vzťahy s pacientmi. Prepojíme vašu databázu s inteligentným systémom, ktorý pracuje za vás."
                badge="Efektivita"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Viac času na medicínu, <span className="text-gradient">menej na papierovačky</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Marketing v zdravotníctve nie je len o reklame, ale o celom workflow. CRM (Customer Relationship Management) je mozgom vašej komunikácie. Umožňuje vám riadiť nákupné správanie, lojalitu a cirkuláciu pacientov bez námahy.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Prepojenie databázy s evidenčným systémom",
                                    "Automatizované pripomienky termínov",
                                    "Segmentácia podľa potrieb pacientov",
                                    "Reporting a sledovanie KPI v reálnom čase"
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
                            <OrdeviaCrmPhones />
                            <p className="text-center text-white/55 text-sm font-stolzl mt-2">Obrazovky CRM Ordevia na ukážkovej klinike.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Funkcie, ktoré <span className="text-gradient">odľahčia recepciu</span></h2>
                        <p className="text-white/50 max-w-2xl mx-auto font-stolzl">Nástroje, ktoré premenia vašu administratívu na dobre naolejovaný stroj.</p>
                    </div>
                    <figure>
                        <Image
                            src="/images/ordevia/crm-styri-veci-recepcia.webp"
                            alt="Štyri veci, ktoré CRM robí za recepciu: komunikácia len s pacientmi so súhlasom, automatické e-mailové pripomienky termínov, web, sociálne siete, emailing a objednanie v jednom prostredí a prehľad dňa na jednom mieste."
                            width={1920}
                            height={940}
                            sizes="(min-width: 1280px) 1200px, 95vw"
                            className="w-full h-auto rounded-3xl border border-white/5"
                        />
                    </figure>
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
