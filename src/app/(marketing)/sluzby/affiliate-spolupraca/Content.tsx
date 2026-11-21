'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTABanner from '@/components/CTABanner';
import { trail } from '@/lib/seo';
import { Package, Microscope, ShoppingBag, UserCheck, ShieldCheck, Eye, Handshake, Check, ArrowRight, ChevronRight, Stethoscope, Building2, BadgeCheck, Search, FileSignature, MessageSquare } from 'lucide-react';

const IMG = '/images/affiliate';

/**
 * Affiliate spolupráca (nová podstránka 12. 11. 2026, podľa brožúry Mediconect s. 16–17).
 * Zámerne bez prísľubov výnosu a bez slov „bez rizika“ a „bez námahy“ (pravidlo NBS a etika povolania);
 * odmena sa uvádza ako dohoda, nie ako zaručený príjem. Bez finančného sprostredkovania (Viktor 12. 11. 2026),
 * preto sa tu nezobrazuje FINANCE_DISCLOSURE; ak by sa finančné služby vrátili, treba ho doplniť.
 */

const PARTNERS = [
    { Icon: Package, img: 'produkty', alt: 'Fľaštičky s doplnkami výživy na kamennej doske', t: 'Výrobca produktov', d: 'Doplnky výživy a dietetické potraviny, ktoré súvisia so starostlivosťou o zdravie.' },
    { Icon: Microscope, img: 'diagnostika', alt: 'Laboratórium so skúmavkami a mikroskopom', t: 'Poskytovateľ diagnostiky', d: 'Laboratóriá, CT, magnetická rezonancia a špeciálne vyšetrenia.' },
    { Icon: ShoppingBag, img: 'tovar', alt: 'Detské a hygienické potreby na poličke', t: 'Predajca tovaru', d: 'Detské výrobky, hygienické potreby a zdravotnícke pomôcky.' },
];

const STEPS = [
    { Icon: Search, t: 'Zmapujeme vašu situáciu', d: 'Zistíme, čo vaši pacienti hľadajú mimo ambulancie a čo je pre vás a vašu prax vhodné.' },
    { Icon: BadgeCheck, t: 'Vyberieme partnerov', d: 'Vyberáme len overených poskytovateľov, ktorí zodpovedajú vášmu zameraniu a etike povolania.' },
    { Icon: FileSignature, t: 'Dohodneme pravidlá', d: 'Podmienky spolupráce a odmenu dohodneme písomne a vopred. Nič nie je skryté.' },
    { Icon: MessageSquare, t: 'Spustíme citlivú komunikáciu', d: 'Pacient sa dozvie o príležitosti len so svojím súhlasom a rozhoduje sa slobodne.' },
];

const RULES = [
    { Icon: UserCheck, t: 'Súhlas pacienta', d: 'Oslovujeme len pacientov, ktorí s komunikáciou súhlasili. Zdravotné údaje pacientov nepoužívame ani neprijímame.' },
    { Icon: Eye, t: 'Otvorenosť', d: 'Pacient vie, od koho ponuka prichádza a že ambulancia s partnerom spolupracuje.' },
    { Icon: ShieldCheck, t: 'Liečba je na prvom mieste', d: 'Spolupráca nikdy neovplyvňuje, aký postup lekár pacientovi odporučí.' },
    { Icon: Handshake, t: 'Žiadne sľuby výnosu', d: 'Výsledok závisí od vašej databázy, partnera aj záujmu pacientov. Výšku príjmu nezaručujeme.' },
];

export default function AffiliateSpolupracaPage() {
    return (
        <div className="min-h-screen">
            {/* Úvod: tmavý blok s fotografiou a prepojením troch strán */}
            <section className="relative z-10 pt-28 lg:pt-32">
                <nav aria-label="Drobčeková navigácia" className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
                    <ol className="flex flex-wrap items-center gap-x-2 text-xs text-white/60 font-stolzl">
                        {trail('/sluzby/affiliate-spolupraca').map((crumb, i, arr) => (
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
                            <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-5">Doplnkové zdroje príjmu</p>
                            <h1 className="font-kanit font-light text-5xl lg:text-7xl leading-[1.02] mb-6">
                                Dôvera pacientov, <strong>ktorá má aj ekonomický prínos</strong>
                            </h1>
                            <p className="text-lg text-white/70 font-stolzl leading-relaxed mb-8 max-w-xl">
                                Pacienti hľadajú služby a produkty súvisiace so zdravím. Spojíme vás s overenými partnermi citlivo a podľa jasných pravidiel.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {[
                                    'Len overení partneri, ktorí zodpovedajú vašej etike',
                                    'Pacient sa dozvie o ponuke len so svojím súhlasom',
                                    'Odmena dohodnutá vopred a písomne, bez sľubov výnosu',
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

                        <div className="relative mx-auto w-full max-w-[520px]">
                            <div className="relative aspect-square w-full sm:w-[88%] rounded-3xl overflow-hidden border border-[#88D5DB]/20">
                                <Image src={`${IMG}/uvod-v2.webp`} alt="Lekárka podáva ruku partnerovi pri stole" fill priority sizes="(min-width: 1024px) 460px, 90vw" className="object-cover" />
                            </div>
                            {/* Tri strany spolupráce */}
                            <div className="relative mt-4 w-full sm:absolute sm:mt-0 sm:right-0 sm:bottom-10 sm:w-[66%] rounded-2xl border border-[#E6E6E6] bg-[#fff] p-5 font-stolzl text-[#041D2C] z-10">
                                <p className="text-xs font-semibold uppercase tracking-widest text-[#4CADB6] mb-4">Tri strany spolupráce</p>
                                <div className="flex items-center justify-between gap-2">
                                    {[
                                        { Icon: Stethoscope, t: 'Ambulancia' },
                                        { Icon: Building2, t: 'Mediconect' },
                                        { Icon: BadgeCheck, t: 'Overený partner' },
                                    ].map(({ Icon, t }, i) => (
                                        <React.Fragment key={t}>
                                            {i > 0 && <ArrowRight size={16} className="text-[#4CADB6] shrink-0" aria-hidden="true" />}
                                            <div className="flex flex-col items-center gap-2 text-center min-w-0">
                                                <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${i === 1 ? 'bg-[#041D2C] text-[#88D5DB]' : 'bg-[#EAF4F5] text-[#4CADB6]'}`}><Icon size={20} /></span>
                                                <span className="text-xs font-semibold leading-tight">{t}</span>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                                <p className="mt-4 text-xs text-[#3F4B54] leading-relaxed">Len so súhlasom pacienta. Bez zdravotných údajov. Liečbu to neovplyvňuje.</p>
                            </div>
                            {[
                                { icon: <UserCheck size={16} />, text: 'Súhlas pacienta', pos: 'left-3 sm:-left-8 top-4 sm:top-8 flex' },
                                { icon: <Handshake size={16} />, text: 'Jasné pravidlá', pos: 'right-3 sm:right-0 top-16 sm:top-6 flex' },
                            ].map((c) => (
                                <div key={c.text} className={`absolute z-20 ${c.pos} items-center gap-2 rounded-full bg-[#88D5DB] text-[#041D2C] px-4 py-2 text-sm font-semibold font-stolzl`}>{c.icon}{c.text}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Prečo</p>
                        <h2 className="text-4xl lg:text-5xl font-light font-kanit leading-[1.05] text-balance">
                            Pacienti si tieto služby <span className="text-gradient">nájdu aj bez vás</span>
                        </h2>
                        <p className="text-lg text-white/70 mt-6 font-stolzl leading-relaxed">
                            V praxi stretávame lekárov, ktorí si neuvedomujú, aký potenciál je ukrytý v dôvere ich pacientov. Osloviť pacienta s ponukou im pripadá neetické a na komunikáciu nemajú čas.
                        </p>
                        <p className="text-lg text-white/70 mt-4 font-stolzl leading-relaxed">
                            Pacienti preto služby a tovar úzko súvisiaci so zdravotnou starostlivosťou kupujú inde. Profitujú najmä lekárne, drogérie, poskytovatelia diagnostiky a terapeutického poradenstva. Pacient tieto služby vyhľadáva a vy môžete byť jeho odborným poradcom.
                        </p>
                    </div>
                    <blockquote className="rounded-3xl bg-[#0A2B40] text-[#fff] p-10 text-2xl font-kanit font-light leading-snug text-balance">
                        Prepojíme vás s pacientmi tak, aby ste profitovali vďaka svojej autorite.
                    </blockquote>
                </div>
            </section>

            <section className="pb-24 relative z-10">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-4">Partneri</p>
                    <h2 className="text-4xl lg:text-6xl font-light font-kanit leading-[1.05] text-balance">Tri typy <span className="text-gradient">partnerov</span></h2>
                    <p className="text-white/70 mt-4 max-w-3xl font-stolzl leading-relaxed">
                        Naša stratégia stojí na prepojení lekárov, ich pacientov a dodávateľov, ktorí poskytujú služby v jednotlivých segmentoch zdravotnej starostlivosti. Využívame rôzne marketingové nástroje, ktoré tieto príležitosti sprostredkujú pacientom citlivo a elegantne.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {PARTNERS.map(({ Icon, img, alt, t, d }) => (
                            <article key={t} className="glass rounded-3xl overflow-hidden flex flex-col">
                                <div className="relative aspect-[3/2]">
                                    <Image src={`${IMG}/${img}.webp`} alt={alt} fill sizes="(min-width: 768px) 360px, 90vw" className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-teal/10 text-teal mb-4"><Icon size={22} aria-hidden="true" /></span>
                                    <h3 className="text-xl font-kanit font-semibold mb-2">{t}</h3>
                                    <p className="text-white/70 font-stolzl leading-relaxed text-sm">{d}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 relative z-10">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-5xl font-bold font-kanit text-balance">Ako spolupráca prebieha</h2>
                    <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                        {STEPS.map((s, i) => (
                            <li key={s.t} className="glass p-8 rounded-3xl">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal/10 text-teal"><s.Icon size={26} aria-hidden="true" /></span>
                                    <span className="font-kanit font-semibold text-3xl text-teal/50">0{i + 1}</span>
                                </div>
                                <h3 className="text-lg font-bold mb-3 font-kanit">{s.t}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">{s.d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-20 relative z-10">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-5xl font-bold font-kanit text-balance">Pravidlá, ktoré platia vždy</h2>
                    <div className="grid md:grid-cols-2 gap-4 mt-10">
                        {RULES.map(({ Icon, t, d }) => (
                            <div key={t} className="rounded-3xl border border-[#D3D9DE] bg-[#fff] text-[#0A2B40] p-6 flex gap-4">
                                <span className="w-12 h-12 shrink-0 rounded-2xl bg-[#E6F3F4] text-[#25727C] grid place-items-center"><Icon size={24} aria-hidden="true" /></span>
                                <div>
                                    <h3 className="font-kanit text-lg font-normal leading-tight" style={{ color: '#0A2B40' }}>{t}</h3>
                                    <p className="text-sm text-[#4B6272] leading-snug mt-2">{d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Zistite, čo by dávalo zmysel práve vo vašej ambulancii"
                description="V nezáväznom rozhovore si povieme, čo vaši pacienti hľadajú a či je spolupráca s partnermi pre vás vhodná."
            />
        </div>
    );
}
