'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTABanner from '@/components/CTABanner';
import { FINANCE_DISCLOSURE, MYMEDICAL, trail } from '@/lib/seo';
import { GraduationCap, Briefcase, KeyRound, TrendingUp, ShieldCheck, Hourglass, Route, ArrowRight, ChevronRight, Check, Award, Building, Sun, Lock } from 'lucide-react';

const IMG = '/images/pre-lekarov';

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
        img: 'rezident',
        alt: 'Učebnice medicíny a fonendoskop na stole',
        desc: 'Prvé roky v nemocnici. Základy, na ktorých budete stavať celú kariéru – a rozhodnutie, kedy a v akej forme zvážiť vlastnú prax.',
        icon: <GraduationCap size={22} />,
    },
    {
        title: 'Zamestnaný lekár',
        img: 'zamestnany',
        alt: 'Lekársky plášť na vešiaku v nemocničnej chodbe',
        desc: 'Špecialista, vedúci lekár či primár: odborné meno, príjem, ktorý nestojí len na úväzku, a menej času na vlastné veci.',
        icon: <Briefcase size={22} />,
    },
    {
        title: 'Majiteľ praxe',
        img: 'majitel',
        alt: 'Kľúče od vlastnej ambulancie v ruke',
        desc: 'Vlastná ambulancia alebo klinika: okrem prevádzky aj vy sami – váš majetok, rodina a to, čo príde po odovzdaní praxe.',
        icon: <KeyRound size={22} />,
    },
];

const topics = [
    {
        title: 'Kariéra a prechod do vlastnej praxe',
        img: 'kariera',
        alt: 'Pôdorys ambulancie, pero a kľúče na stole',
        desc: 'Kedy a v akej forme založiť ambulanciu, ako zosúladiť termíny s výpovednou lehotou a ako začať bez behania po úradoch a bankách.',
        href: '/business-partner',
        label: 'Business partner',
        icon: <Route size={22} />,
    },
    {
        title: 'Príjem, ktorý nestojí len na úväzku',
        img: 'prijem',
        alt: 'Pohár s mincami a rastlinkou',
        desc: 'Aby to, čo zarobíte v medicíne, pracovalo pre vás a vašu rodinu – finančné plánovanie, investície a renta.',
        href: '/sprava-a-ochrana-majetku',
        label: 'Správa a ochrana majetku',
        icon: <TrendingUp size={22} />,
    },
    {
        title: 'Zabezpečenie rodiny a ochrana majetku',
        img: 'rodina',
        alt: 'Rodinný dom so záhradou pri západe slnka',
        desc: 'Zodpovednosť lekára, výpadok príjmu, holdingová štruktúra a pravidlá pre rodinný majetok – s advokátom a daňovým partnerom.',
        href: '/sprava-a-ochrana-majetku',
        label: 'Správa a ochrana majetku',
        icon: <ShieldCheck size={22} />,
    },
    {
        title: 'Dôchodok a renta',
        img: 'renta-zima',
        alt: 'Dve kreslá na terase s výhľadom na zasnežené hory',
        desc: 'Aby ste si úroveň života udržali aj po odchode z nemocnice alebo po odovzdaní praxe.',
        href: '/sprava-a-ochrana-majetku',
        label: 'Správa a ochrana majetku',
        icon: <Hourglass size={22} />,
    },
];

export default function ForDoctorsPage() {
    return (
        <div className="min-h-screen">
            {/* Úvod: tmavý blok s cestou lekára */}
            <section className="relative z-10 pt-28 lg:pt-32">
                <nav aria-label="Drobčeková navigácia" className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
                    <ol className="flex flex-wrap items-center gap-x-2 text-xs text-white/60 font-stolzl">
                        {trail('/pre-koho/pre-lekarov').map((crumb, i, arr) => (
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
                            <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-5">Pre lekárov</p>
                            <h1 className="font-kanit font-light text-5xl lg:text-7xl leading-[1.02] mb-6">
                                Lekár <strong>ako osoba</strong>
                            </h1>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed mb-8 max-w-xl">
                                Partner vašej kariéry, príjmu a majetku, nezávisle od zariadenia, v ktorom pracujete.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {['Od rezidentúry po dôchodok', 'Kariéra, príjem, rodina a majetok spolu', 'Jeden osobný partner pre všetko'].map((item) => (
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

                        {/* Cesta lekára */}
                        <div className="relative mx-auto w-full max-w-[460px] rounded-3xl border border-[#E6E6E6] bg-[#fff] p-7 font-stolzl text-[#041D2C]">
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#4CADB6] mb-6">Cesta lekára</p>
                            <ol className="relative space-y-6">
                                <span aria-hidden="true" className="absolute left-[21px] top-3 bottom-3 w-px bg-[#88D5DB]" />
                                {[
                                    { Icon: GraduationCap, t: 'Rezidentúra', d: 'Základy celej kariéry' },
                                    { Icon: Award, t: 'Atestácia', d: 'Odborné meno a príjem' },
                                    { Icon: Building, t: 'Vlastná prax', d: 'Založenie, rast, majetok' },
                                    { Icon: Sun, t: 'Dôchodok a renta', d: 'Úroveň života aj po praxi' },
                                ].map(({ Icon, t, d }, i) => (
                                    <li key={t} className="relative flex items-center gap-4">
                                        <span className={`relative z-10 w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${i === 2 ? 'bg-[#041D2C] text-[#88D5DB]' : 'bg-[#EAF4F5] text-[#4CADB6]'}`}><Icon size={20} /></span>
                                        <div>
                                            <p className="font-kanit font-semibold leading-tight">{t}</p>
                                            <p className="text-sm text-[#3F4B54]">{d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Najprv vy */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Pre koho</p>
                        <h2 className="text-4xl lg:text-6xl font-light font-kanit leading-[1.05] mb-6">Najprv vy, <span className="text-gradient">potom vaša prax</span></h2>
                        <p className="text-lg text-white/70 mb-6 font-stolzl leading-relaxed">
                                Celý profesionálny život sa staráte o&nbsp;iných. Ambulancia, klinika či nemocnica má svoje riešenia – ale vy ako človek máte vlastnú kariéru, príjem, rodinu a&nbsp;majetok, ktoré s&nbsp;ňou súvisia len čiastočne.
                            </p>
                            <p className="text-lg text-white/70 mb-6 font-stolzl leading-relaxed">
                                Preto je lekár ako osoba našou prvou cieľovou skupinou. Sprevádzame vás od rezidentúry cez atestáciu a&nbsp;rozhodnutie o&nbsp;vlastnej praxi až po dôchodok a&nbsp;odovzdanie praxe – s&nbsp;jedným osobným partnerom, ktorý pozná vašu situáciu.
                            </p>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed">
                                Osobná značka lekára – meno a&nbsp;autorita v&nbsp;odbore – je nástroj, ktorý k&nbsp;tomu môže patriť. Nájdete ju v&nbsp;pilieri{' '}
                                <Link href="/pre-koho/pre-osobne-znacky-lekarov" className="text-teal hover:text-teal/80 transition-colors">Healthcare marketing</Link>.
                            </p>
                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {audiences.map((a) => (
                            <article key={a.title} className="glass rounded-3xl overflow-hidden flex flex-col">
                                <div className="relative aspect-[3/2]">
                                    <Image src={`${IMG}/${a.img}.webp`} alt={a.alt} fill sizes="(min-width: 768px) 380px, 90vw" className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-teal/10 text-teal mb-4">{a.icon}</span>
                                    <h3 className="text-xl font-kanit font-semibold mb-2">{a.title}</h3>
                                    <p className="text-white/70 font-stolzl leading-relaxed text-sm">{a.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Štyri témy */}
            <section className="pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Čo riešime s vami</p>
                        <h2 className="text-4xl lg:text-6xl font-light font-kanit leading-[1.05] mb-4">Štyri témy <span className="text-gradient">vašej kariéry</span></h2>
                        <p className="text-white/70 font-stolzl">Každá prichádza v inej etape a vždy súvisí s ostatnými. Preto ich riešime spolu.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topics.map((t) => (
                            <Link key={t.title} href={t.href} className="group glass rounded-3xl overflow-hidden flex flex-col">
                                <div className="relative aspect-[3/2]">
                                    <Image src={`${IMG}/${t.img}.webp`} alt={t.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 768px) 45vw, 90vw" className="object-cover" />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-teal/10 text-teal mb-4">{t.icon}</span>
                                    <h3 className="text-lg font-kanit font-semibold mb-2 group-hover:text-teal transition-colors">{t.title}</h3>
                                    <p className="text-white/70 font-stolzl leading-relaxed text-sm mb-4">{t.desc}</p>
                                    <span className="mt-auto inline-flex items-center gap-1.5 text-teal text-sm font-semibold font-kanit">
                                        {t.label} <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jeden partner – MyMedical */}
            <section className="pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="glass rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-center">
                        <span className="inline-flex w-20 h-20 items-center justify-center rounded-3xl bg-[#041D2C] text-[#88D5DB]"><Lock size={34} /></span>
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold font-kanit mb-4">Jeden osobný partner pre všetky štyri piliere</h2>
                            <p className="text-white/70 font-stolzl leading-relaxed mb-6">
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
