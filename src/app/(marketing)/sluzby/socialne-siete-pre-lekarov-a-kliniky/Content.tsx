'use client';

import React from 'react';
import Link from 'next/link';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import OrdinacnyIndexHook from '@/components/OrdinacnyIndexHook';
import { FacebookPost, InstagramGrid, YouTubeThumb, TikTokCard } from '@/components/SocialMockups';
import { Users, Heart, Shield, Instagram, Facebook, Youtube, Check, ArrowRight, ChevronRight, BookOpen, Star, CalendarClock, ThumbsUp, Music2 } from 'lucide-react';

export default function SocialMediaPage() {
    return (
        <div className="min-h-screen">
            {/* Úvod: tmavý blok s ukážkou príspevkov a plávajúcimi prvkami */}
            <section className="relative z-10 pt-28 lg:pt-32">
                <nav aria-label="Drobčeková navigácia" className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
                    <ol className="flex flex-wrap items-center gap-x-2 text-xs text-white/60 font-stolzl">
                        {trail("/sluzby/socialne-siete-pre-lekarov-a-kliniky").map((crumb, i, arr) => (
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
                            <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-5">Komunita</p>
                            <h1 className="font-kanit font-light text-5xl lg:text-7xl leading-[1.02] mb-6">
                                Sociálne siete, ktoré <strong>budujú dôveru</strong>
                            </h1>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed mb-8 max-w-xl">
                                Ukážeme ľudskú tvár vašej praxe tam, kde pacienti trávia čas. Autenticky a v súlade s medicínskou etikou.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {[
                                    'Facebook, Instagram, YouTube aj TikTok',
                                    'Edukácia pacienta namiesto reklamy',
                                    'Každý príspevok vopred schvaľujete vy',
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

                        <div className="relative mx-auto w-full max-w-[480px] h-[520px]">
                            <FacebookPost className="absolute left-0 top-10 w-[58%] -rotate-2" />
                            <div className="absolute right-0 top-0 w-[43%] rotate-2 z-10 rounded-3xl border border-[#E6E6E6] bg-[#fff] p-4">
                                <div className="flex items-center gap-2 mb-3 text-[#041D2C] font-stolzl text-sm font-semibold"><Instagram size={16} className="text-[#4CADB6]" /> Instagram</div>
                                <InstagramGrid />
                            </div>
                            <div className="absolute right-[4%] bottom-0 w-[58%] z-20 rounded-3xl border border-[#E6E6E6] bg-[#fff] p-4">
                                <YouTubeThumb />
                            </div>
                            {[
                                { icon: <ThumbsUp size={16} />, text: 'Schválené vami', pos: 'left-[6%] bottom-[10%]' },
                                { icon: <CalendarClock size={16} />, text: 'Naplánované', pos: 'left-0 top-[2%]' },
                            ].map((c) => (
                                <div key={c.text} className={`absolute z-30 ${c.pos} flex items-center gap-2 rounded-full bg-[#88D5DB] text-[#041D2C] px-4 py-2 text-sm font-semibold font-stolzl`}>{c.icon}{c.text}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="max-w-7xl mx-auto px-6 lg:px-8 mt-3 text-xs text-white/55 font-stolzl">Ukážky príspevkov sú ilustračné.</p>
            </section>

            {/* Viac než pekné príspevky */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    <div className="lg:col-span-2">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Prečo to robíme</p>
                        <h2 className="text-4xl lg:text-5xl font-light font-kanit leading-[1.05] mb-6">Viac než len <span className="text-gradient">pekné príspevky</span></h2>
                        <p className="text-lg text-white/70 font-stolzl leading-relaxed">Zmyslom nie je zvýšiť počet lajkov. Cieľom je prostredie, kde sa pacient cíti bezpečne a vníma vás ako odborníka, ktorému môže veriť.</p>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-1 gap-5">
                        {[
                            { icon: <Heart size={26} />, title: 'Zníženie strachu', text: 'Ukazujeme prostredie a personál, čo odbúrava stres pacienta pred návštevou.' },
                            { icon: <BookOpen size={26} />, title: 'Edukovaný pacient', text: 'Pacienti prichádzajú s reálnejšími očakávaniami a lepším pochopením postupu.' },
                            { icon: <Star size={26} />, title: 'Sociálne schválenie', text: 'Pacienti sa pri výbere lekára spoliehajú na referencie a recenzie iných pacientov.' },
                        ].map((it) => (
                            <article key={it.title} className="glass rounded-3xl p-6 flex items-center gap-6">
                                <span className="inline-flex w-16 h-16 shrink-0 items-center justify-center rounded-2xl bg-teal/10 text-teal">{it.icon}</span>
                                <div>
                                    <h3 className="text-xl font-kanit font-semibold mb-1">{it.title}</h3>
                                    <p className="text-white/70 font-stolzl leading-relaxed">{it.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kanály: asymetrická mriežka */}
            <section className="pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-12 max-w-2xl">
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Kanály</p>
                        <h2 className="text-4xl lg:text-6xl font-light font-kanit leading-[1.05]">Každý kanál má <span className="text-gradient">svoju úlohu</span></h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                        <article className="glass rounded-3xl p-8 lg:col-span-4 flex flex-col sm:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><Facebook size={26} /></span>
                                <h3 className="text-2xl font-kanit font-semibold mb-3">Facebook</h3>
                                <p className="text-white/70 font-stolzl leading-relaxed">Lojalita a komunita starších pacientov a celých rodín.</p>
                            </div>
                            <FacebookPost className="w-full sm:w-80 shrink-0" />
                        </article>
                        <article className="glass rounded-3xl p-8 lg:col-span-2">
                            <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><Instagram size={26} /></span>
                            <h3 className="text-2xl font-kanit font-semibold mb-3">Instagram</h3>
                            <p className="text-white/70 font-stolzl leading-relaxed mb-5">Vizuálna prezentácia kliniky a tímu.</p>
                            <InstagramGrid />
                        </article>
                        <article className="glass rounded-3xl p-8 lg:col-span-2">
                            <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><Youtube size={26} /></span>
                            <h3 className="text-2xl font-kanit font-semibold mb-3">YouTube</h3>
                            <p className="text-white/70 font-stolzl leading-relaxed mb-5">Hĺbková edukácia videom a autorita odborníka.</p>
                            <YouTubeThumb />
                        </article>
                        <article className="glass rounded-3xl p-8 lg:col-span-4 flex flex-col sm:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6"><Music2 size={26} /></span>
                                <h3 className="text-2xl font-kanit font-semibold mb-3">TikTok</h3>
                                <p className="text-white/70 font-stolzl leading-relaxed">Krátke videá pre mladšie generácie a moderná edukácia.</p>
                            </div>
                            <TikTokCard className="w-32 h-52 shrink-0" />
                        </article>
                    </div>
                </div>
            </section>

            <section className="pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-5xl font-light font-kanit mb-4">Dôvera je <span className="text-gradient">menou 21. storočia</span></h2>
                        <p className="text-white/70 max-w-2xl mx-auto font-stolzl">Pacienti sa o lekárovi informujú online skôr, než k nemu prídu.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Budovanie brandu', desc: 'Dlhodobá stratégia identity, ktorá vás odlíši od konkurencie.', icon: <Heart size={24} /> },
                            { title: 'Krízová komunikácia', desc: 'Pripravíme postup, ako slušne a vecne reagovať na kritiku a negatívne recenzie.', icon: <Shield size={24} /> },
                            { title: 'Edukácia a prevencia', desc: 'Zvyšujeme lojalitu pacientov cez hodnotné rady a tipy.', icon: <Users size={24} /> },
                        ].map((it) => (
                            <article key={it.title} className="glass rounded-3xl p-8">
                                <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-6">{it.icon}</span>
                                <h3 className="text-xl font-kanit font-semibold mb-3">{it.title}</h3>
                                <p className="text-white/70 font-stolzl leading-relaxed">{it.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <OrdinacnyIndexHook variant="marketing" />
            <CTABanner 
                title="Ste pripravení budovať svoju digitálnu komunitu?"
                description="Navrhneme vám autentickú stratégiu pre sociálne siete, ktorá bude rešpektovať váš čas aj medicínsku etiku."
            />
        </div>
    );
}
