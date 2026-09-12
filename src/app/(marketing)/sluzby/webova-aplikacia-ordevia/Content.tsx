'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    CalendarCheck,
    ClipboardList,
    MessageCircle,
    ShieldCheck,
    Settings2,
    UserPlus,
    LogIn,
    Check,
    ExternalLink,
    ArrowRight,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import OrdeviaPhoneMockup from '@/components/OrdeviaPhoneMockup';
import { ORDEVIA, trail } from '@/lib/seo';
import { ORDEVIA_FAQ } from './faq';

const PATH = '/sluzby/webova-aplikacia-ordevia';

const features = [
    {
        title: 'Termíny na jednom mieste',
        desc: 'Pacient vidí svoje termíny a môže sa objednať online – bez telefonovania do ambulancie.',
        icon: <CalendarCheck size={24} />,
    },
    {
        title: 'Pokyny pred vyšetrením',
        desc: 'Príprava na vyšetrenie a odporúčania, ktoré má pacient vždy po ruke – nie na zabudnutom papieri.',
        icon: <ClipboardList size={24} />,
    },
    {
        title: 'Komunikácia s klinikou',
        desc: 'Správy medzi pacientom a ambulanciou na jednom bezpečnom mieste namiesto roztrúsených e-mailov a telefonátov.',
        icon: <MessageCircle size={24} />,
    },
    {
        title: 'Bezpečné prihlásenie',
        desc: 'Prihlásenie cez Google alebo e-mail spracúva Supabase Auth. Ordevia prihlasovacie údaje neukladá ani nezobrazuje.',
        icon: <ShieldCheck size={24} />,
    },
];

const steps = [
    {
        title: 'Nastavíme aplikáciu pre vašu prax',
        desc: 'Pripravíme Ordevia Connect podľa toho, ako vaša ambulancia funguje – termíny, typy vyšetrení aj pokyny pre pacientov.',
        icon: <Settings2 size={22} />,
    },
    {
        title: 'Pozvete svojich pacientov',
        desc: 'Pacienti dostanú od kliniky aktivačný kód. Pomôžeme vám s pozvánkou aj s komunikáciou, aby aplikáciu naozaj začali používať.',
        icon: <UserPlus size={22} />,
    },
    {
        title: 'Pacient má kliniku vo vrecku',
        desc: 'Na moja.ordevia.sk sa prihlási cez Google alebo e-mail a termíny, pokyny aj správy má na jednom mieste.',
        icon: <LogIn size={22} />,
    },
];

const clinicBenefits = [
    'Menej telefonátov na recepciu kvôli termínom a bežným otázkam',
    'Pacienti prichádzajú na vyšetrenie pripravení',
    'Moderný dojem z vašej praxe ešte pred prvou návštevou',
    'Priamy digitálny kontakt s pacientmi, ktorý nekončí odchodom z ambulancie',
];

export default function OrdeviaServicePage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail(PATH)}
                title="Webová aplikácia Ordevia"
                subtitle="Vaša klinika vo vrecku pacienta. Termíny, pokyny a komunikácia na jednom bezpečnom mieste – a my sa postaráme o nasadenie vo vašej praxi."
                badge="Nové"
            />

            {/* ═══════════ Úvod + náhľad ═══════════ */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Pacient má všetko <span className="text-gradient">v jednej aplikácii</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-6 font-stolzl leading-relaxed">
                                Ordevia Connect je webová aplikácia, v ktorej majú vaši pacienti na jednom mieste svoje termíny,
                                pokyny pred vyšetrením aj komunikáciu s ambulanciou. Beží priamo v prehliadači na adrese{' '}
                                <a href={ORDEVIA.appUrl} target="_blank" rel="noopener" className="text-teal hover:underline">
                                    moja.ordevia.sk
                                </a>
                                , takže si pacient nemusí nič inštalovať.
                            </p>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Pre vás to znamená menej opakujúcich sa telefonátov a pacientov, ktorí vedia, kedy a ako prísť.
                            </p>
                            <div className="space-y-4 mb-10">
                                {clinicBenefits.map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-5 h-5 shrink-0 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                            <Check size={12} />
                                        </div>
                                        <span className="text-white/80 font-stolzl">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => window.dispatchEvent(new Event('open_contact_modal'))}
                                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-navy-dark font-semibold rounded-2xl hover:bg-teal/90 transition-all duration-300 cursor-pointer"
                                >
                                    Chcem Ordeviu pre svoju prax
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a
                                    href={ORDEVIA.loginUrl}
                                    target="_blank"
                                    rel="noopener"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 glass rounded-2xl text-white/80 hover:text-teal hover:border-teal/30 transition-all duration-300"
                                >
                                    Otvoriť aplikáciu
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <OrdeviaPhoneMockup />
                            <p className="mt-6 text-xs text-white/30 font-stolzl">Ilustračný náhľad aplikácie</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ Funkcie ═══════════ */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">
                            Čo aplikácia <span className="text-gradient">pacientovi dáva</span>
                        </h2>
                        <p className="text-white/50 max-w-2xl mx-auto font-stolzl">
                            Všetko, kvôli čomu by inak volal do ambulancie, nájde na jednom mieste.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <div key={feature.title} className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all group">
                                <div className="text-teal mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                                <h3 className="text-lg font-bold mb-4 font-kanit">{feature.title}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ Ako to funguje ═══════════ */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">
                            Ako Ordeviu <span className="text-gradient">nasadíme</span>
                        </h2>
                        <p className="text-white/50 max-w-2xl mx-auto font-stolzl">
                            Aplikácia sama pacientov nepritiahne. Preto sa nestaráme len o technické nastavenie, ale aj o to, aby ju pacienti začali používať.
                        </p>
                    </div>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map((step, i) => (
                            <li key={step.title} className="glass p-8 rounded-2xl border border-white/5 relative">
                                <span className="absolute top-6 right-7 text-5xl font-bold font-kanit text-white/5">{i + 1}</span>
                                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-4 font-kanit">{step.title}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">{step.desc}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ═══════════ Prihlásenie pre pacientov ═══════════ */}
            <section className="py-12 relative z-10">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="glass rounded-3xl border border-teal/20 p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Ste pacient?</p>
                            <h2 className="text-2xl lg:text-3xl font-bold font-kanit mb-3">Prihláste sa do svojej Ordevie</h2>
                            <p className="text-white/60 font-stolzl leading-relaxed max-w-xl">
                                Prihlásiť sa môžete cez Google alebo e-mail. Ak vás pozvala klinika, pripravte si aktivačný kód, ktorý ste od nej dostali.
                            </p>
                        </div>
                        <a
                            href={ORDEVIA.loginUrl}
                            target="_blank"
                            rel="noopener"
                            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-navy-dark font-semibold rounded-2xl hover:bg-teal/90 transition-all duration-300"
                        >
                            <LogIn size={18} />
                            Prihlásenie do Ordevia
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════════ Časté otázky – odpovede sú vždy v HTML ═══════════ */}
            <section className="py-24 relative z-10">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-12 text-center">
                        Časté otázky <span className="text-gradient">o Ordevii</span>
                    </h2>
                    <div className="space-y-4">
                        {ORDEVIA_FAQ.map((item) => (
                            <div key={item.question} className="glass rounded-2xl border border-white/5 p-6 lg:p-8">
                                <h3 className="text-lg font-bold font-kanit mb-3">{item.question}</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Chcete dať pacientom kliniku do vrecka?"
                description="Na bezplatnej konzultácii prejdeme, ako by Ordevia fungovala vo vašej praxi a čo všetko nasadenie obnáša."
            />
        </div>
    );
}
