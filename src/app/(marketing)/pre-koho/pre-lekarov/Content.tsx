'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SegmentBanner from '@/components/SegmentBanner';
import CTABanner from '@/components/CTABanner';
import { FINANCE_DISCLOSURE, MYMEDICAL, trail } from '@/lib/seo';
import { GraduationCap, Briefcase, KeyRound, TrendingUp, ShieldCheck, Hourglass, Route, ArrowRight, UserCircle } from 'lucide-react';

/**
 * Pre lekárov – lekár ako osoba (rozhodnutie 30. 10. 2026).
 * Cieľová skupina nie je zariadenie, ale človek: jeho kariéra, príjem, rodina
 * a majetok, nezávisle od toho, kde pracuje. Texty vychádzajú zo sekcie
 * „Cesta lekára" na domovskej stránke a z architektúry značky (žiadne nové
 * tvrdenia ani čísla). Osobná značka lekára je marketingový nástroj a má
 * vlastnú stránku pod Healthcare marketingom.
 */

const audiences = [
    {
        title: 'Lekár pred atestáciou',
        desc: 'Prvé roky v nemocnici. Základy, na ktorých budete stavať celú kariéru – a rozhodnutie, kedy a v akej forme zvážiť vlastnú prax.',
        icon: <GraduationCap size={22} />,
    },
    {
        title: 'Zamestnaný lekár',
        desc: 'Špecialista, vedúci lekár či primár: odborné meno, príjem, ktorý nestojí len na úväzku, a menej času na vlastné veci.',
        icon: <Briefcase size={22} />,
    },
    {
        title: 'Majiteľ praxe',
        desc: 'Vlastná ambulancia alebo klinika: okrem prevádzky aj vy sami – váš majetok, rodina a to, čo príde po odovzdaní praxe.',
        icon: <KeyRound size={22} />,
    },
];

const topics = [
    {
        title: 'Kariéra a prechod do vlastnej praxe',
        desc: 'Kedy a v akej forme založiť ambulanciu, ako zosúladiť termíny s výpovednou lehotou a ako začať bez behania po úradoch a bankách.',
        href: '/business-partner',
        label: 'Business partner',
        icon: <Route size={22} />,
    },
    {
        title: 'Príjem, ktorý nestojí len na úväzku',
        desc: 'Aby to, čo zarobíte v medicíne, pracovalo pre vás a vašu rodinu – finančné plánovanie, investície a renta.',
        href: '/sprava-a-ochrana-majetku',
        label: 'Správa a ochrana majetku',
        icon: <TrendingUp size={22} />,
    },
    {
        title: 'Zabezpečenie rodiny a ochrana majetku',
        desc: 'Zodpovednosť lekára, výpadok príjmu, holdingová štruktúra a pravidlá pre rodinný majetok – s advokátom a daňovým poradcom.',
        href: '/sprava-a-ochrana-majetku',
        label: 'Správa a ochrana majetku',
        icon: <ShieldCheck size={22} />,
    },
    {
        title: 'Dôchodok a renta',
        desc: 'Aby ste si úroveň života udržali aj po odchode z nemocnice alebo po odovzdaní praxe.',
        href: '/sprava-a-ochrana-majetku',
        label: 'Správa a ochrana majetku',
        icon: <Hourglass size={22} />,
    },
];

export default function ForDoctorsPage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail('/pre-koho/pre-lekarov')}
                title="Lekár ako osoba."
                subtitle="Partner vašej kariéry, príjmu a majetku – nezávisle od zariadenia, v ktorom pracujete."
                badge="Pre lekárov"
            />

            <SegmentBanner src="/images/segmenty/lekar.webp" alt="Rozhovor nad dokumentmi a notebookom v ambulancii" />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Najprv vy, <br /><span className="text-gradient">potom vaša prax.</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-6 font-stolzl leading-relaxed">
                                Celý profesionálny život sa staráte o&nbsp;iných. Ambulancia, klinika či nemocnica má svoje riešenia – ale vy ako človek máte vlastnú kariéru, príjem, rodinu a&nbsp;majetok, ktoré s&nbsp;ňou súvisia len čiastočne.
                            </p>
                            <p className="text-lg text-white/60 mb-6 font-stolzl leading-relaxed">
                                Preto je lekár ako osoba našou prvou cieľovou skupinou. Sprevádzame vás od rezidentúry cez atestáciu a&nbsp;rozhodnutie o&nbsp;vlastnej praxi až po dôchodok a&nbsp;odovzdanie praxe – s&nbsp;jedným osobným partnerom, ktorý pozná vašu situáciu.
                            </p>
                            <p className="text-lg text-white/60 font-stolzl leading-relaxed">
                                Osobná značka lekára – meno a&nbsp;autorita v&nbsp;odbore – je nástroj, ktorý k&nbsp;tomu môže patriť. Nájdete ju v&nbsp;pilieri{' '}
                                <Link href="/pre-koho/pre-osobne-znacky-lekarov" className="text-teal hover:text-teal/80 transition-colors">Healthcare marketing</Link>.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {audiences.map((a) => (
                                <div key={a.title} className="glass p-6 rounded-2xl border border-white/5 hover:border-teal/20 transition-all flex gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                                        {a.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 font-kanit">{a.title}</h3>
                                        <p className="text-white/60 font-stolzl leading-relaxed text-sm">{a.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Čo riešime s vami</span>
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Štyri témy <span className="text-gradient">vašej kariéry</span></h2>
                        <p className="text-white/55 max-w-2xl mx-auto font-stolzl">Každá prichádza v inej etape – a vždy súvisí s ostatnými. Preto ich riešime spolu.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {topics.map((t) => (
                            <Link key={t.title} href={t.href} className="group glass p-8 rounded-2xl border border-white/5 hover:border-teal/30 hover:bg-teal/5 transition-all flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                                    {t.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold mb-3 font-kanit group-hover:text-teal transition-colors">{t.title}</h3>
                                    <p className="text-white/60 font-stolzl leading-relaxed text-sm mb-4">{t.desc}</p>
                                    <span className="mt-auto inline-flex items-center gap-1.5 text-teal text-sm font-semibold font-kanit">
                                        {t.label} <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="glass rounded-3xl p-10 lg:p-14 border border-white/10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-center">
                        <UserCircle size={72} className="text-teal" />
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold font-kanit mb-4">Jeden osobný partner pre všetky štyri piliere</h2>
                            <p className="text-white/60 font-stolzl leading-relaxed mb-6">
                                Lekárom, ktorí chcú túto starostlivosť pod jednou strechou, umožňujeme diskrétne prostredie v platforme{' '}
                                <a href={MYMEDICAL.url} className="text-teal hover:text-teal/80 transition-colors">{MYMEDICAL.name}</a>. Osobný partner koordinuje založenie a rast, pacientov a marketing, prevádzku a manažment aj majetok a štruktúru. Vy riešite medicínu a rozhodnutia.
                            </p>
                            <p className="text-xs text-white/40 font-stolzl leading-relaxed">{FINANCE_DISCLOSURE}</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner
                title="Prvý krok je rozhovor."
                description="Bezplatne prejdeme vašu situáciu a priority – v ktorej etape ste a čo dnes najviac riešite. Potom dostanete konkrétny postup."
            />
        </div>
    );
}
