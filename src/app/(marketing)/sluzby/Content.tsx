'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import GlowCard from '@/components/GlowCard';
import { Target, Globe, Users, Mail, Layers, BrainCircuit, Database, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ORDEVIA } from '@/lib/seo';

const services = [
    {
        title: "Akvizícia a výkonnostný marketing",
        href: "/sluzby/akvizicia-a-vykonnostny-marketing",
        icon: <Target size={32} />,
        desc: "Precízne cielené kampane, ktoré prinášajú nových pacientov a merateľnú návratnosť investície."
    },
    {
        title: "Web a SEO pre zdravotníctvo",
        href: "/sluzby/web-a-seo-pre-zdravotnictvo",
        icon: <Globe size={32} />,
        desc: "Váš web ako prvá vyšetrovacia miestnosť. Budujeme digitálnu autoritu, ktorú pacienti hľadajú."
    },
    {
        title: "Sociálne siete pre lekárov a kliniky",
        href: "/sluzby/socialne-siete-pre-lekarov-a-kliniky",
        icon: <Users size={32} />,
        desc: "Budovanie komunity a dôvery cez autentický obsah a pacientsku edukáciu."
    },
    {
        title: "Email marketing a práca s dátami",
        href: "/sluzby/email-marketing-a-praca-s-datami",
        icon: <Mail size={32} />,
        desc: "Najsilnejší nástroj retencie. Premieňame vašu kartotéku na aktívny generátor príjmov."
    },
    {
        title: "CRM a automatizácie",
        href: "/sluzby/crm-a-automatizacie",
        icon: <Layers size={32} />,
        desc: "Zefektívnenie procesov v ambulancii a automatizovaná komunikácia s pacientom."
    },
    {
        title: "Umelá inteligencia pre ambulanciu",
        href: "/sluzby/umela-inteligencia-pre-ambulanciu",
        icon: <BrainCircuit size={32} />,
        desc: "GPT asistenti na mieru, ktorí šetria čas vášmu personálu a navigujú pacienta."
    },
    {
        title: "Databáza pacientov a jej aktivácia",
        href: "/sluzby/databaza-pacientov-a-jej-aktivacia",
        icon: <Database size={32} />,
        desc: "Získajte maximum z vášho najcennejšieho aktíva — informovanej databázy pacientov."
    },
    {
        title: "Webová aplikácia Ordevia",
        href: ORDEVIA.servicePath,
        icon: <Smartphone size={32} />,
        desc: "Klinika vo vrecku vašich pacientov – termíny, pokyny a komunikácia na jednom bezpečnom mieste."
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail("/sluzby")}
                title="Naše služby" 
                subtitle="Komplexné marketingové riešenia navrhnuté špeciálne pre svet modernej medicíny. Spájame etiku s dátovou inteligenciou."
                badge="Portfólio"
            />

            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <Link key={service.href} href={service.href} className="group">
                                <GlowCard className="h-full">
                                    <div className="glass rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover:border-teal/40">
                                        <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 font-kanit group-hover:text-teal transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow font-stolzl">
                                            {service.desc}
                                        </p>
                                        <div className="flex items-center gap-2 text-teal text-sm font-bold font-kanit">
                                            Viac o službe
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </GlowCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
