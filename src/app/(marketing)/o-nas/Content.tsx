'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { MYMEDICAL, trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Lightbulb, Shield, TrendingUp, HeartHandshake, Stethoscope, Building2, FlaskConical, Sparkles, UserCircle, ArrowRight, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Hodnoty 5I – texty z brožúry pre lekára v5 (strana O nás)
const values = [
    { title: "Integrita", lead: "Etika na prvom mieste", desc: "Rešpektujeme dôstojnosť lekárskeho stavu. Regulované služby poskytujeme len s licencovanými a praxou overenými partnermi.", icon: <Shield /> },
    { title: "Inteligencia", lead: "Rozhodnutia podložené dátami", desc: "Najprv diagnóza, potom odporúčanie.", icon: <TrendingUp /> },
    { title: "Individualizácia", lead: "Na mieru, nie zo šablóny", desc: "Každá prax a každá kariéra je iná – aj preto každému lekárovi pripravujeme vlastný plán.", icon: <Target /> },
    { title: "Interaktivita", lead: "Dialóg, nie jednosmerná komunikácia", desc: "Najprv počúvame, potom navrhujeme – a pravidelne sa vraciame s výsledkami.", icon: <HeartHandshake /> },
    { title: "Inovácie", lead: "Trendy meníme na výsledky", desc: "AI, automatizácia a vlastné aplikácie, ktoré vám šetria čas a zlepšujú ekonomické výsledky vašej praxe.", icon: <Lightbulb /> },
];

// Princípy spolupráce – brožúra v5, strana „Ako to do seba zapadá"
const principles = [
    { title: "Jeden kontakt", desc: "Osobný partner MyMedical koordinuje všetky štyri piliere. Vy riešite medicínu a rozhodnutia." },
    { title: "Diagnóza pred odporúčaním", desc: "Najprv analýza situácie, až potom riešenie. Rovnako ako v medicíne." },
    { title: "Transparentné pravidlá", desc: "Finančné služby so statusom NBS, daňové služby so SKDP, právne s advokátmi. Žiadne sľuby výnosov." },
];

// „Pre koho pracujeme" – od 13. 10. 2026 súčasť O nás (predtým samostatná stránka /pre-koho)
const segments = [
    { title: 'Ambulancie', desc: 'Pre samostatných lekárov a malé ambulancie, ktorí chcú stabilný kmeň pacientov a profesionálny imidž.', icon: <Stethoscope size={24} />, image: '/images/segmenty/ambulancie.webp', href: '/pre-koho/pre-ambulancie' },
    { title: 'Kliniky a polikliniky', desc: 'Pre väčšie zariadenia s viacerými oddeleniami, ktoré potrebujú koordinovaný postup naprieč špecializáciami.', icon: <Building2 size={24} />, image: '/images/segmenty/kliniky-a-polikliniky.webp', href: '/pre-koho/pre-kliniky-a-polikliniky' },
    { title: 'Diagnostické centrá a laboratóriá', desc: 'Pre špecializované pracoviská, kde je kľúčová komunikácia odbornosti a presnosti.', icon: <FlaskConical size={24} />, image: '/images/segmenty/diagnosticke-centra.webp', href: '/pre-koho/pre-diagnosticke-centra-a-laboratoria' },
    { title: 'Kúpele a wellness', desc: 'Pre zariadenia, ktoré kombinujú zdravotnú starostlivosť s wellnessom a chcú osloviť nových klientov.', icon: <Sparkles size={24} />, image: '/images/segmenty/kupele-a-wellness.webp', href: '/pre-koho/pre-kupele-a-wellness' },
    { title: 'Osobné značky lekárov', desc: 'Pre lekárov, ktorí chcú vybudovať si meno a autoritu vo svojom odbore.', icon: <UserCircle size={24} />, image: '/images/segmenty/osobne-znacky-lekarov.webp', href: '/pre-koho/pre-osobne-znacky-lekarov' },
    { title: 'Doplnkové služby v oblasti zdravia', desc: 'Zdravotnícke pomôcky, longevity a kozmetické salóny – služby, ktoré dopĺňajú zdravotnú starostlivosť a chcú dôveru a stálych klientov.', icon: <HeartHandshake size={24} />, image: '/images/segmenty/doplnkove-sluzby.webp', href: '/pre-koho/pre-doplnkove-sluzby-v-oblasti-zdravia' },
];

export type CollaborationPost = { href: string; title: string; description: string; date: string; cover?: string };

export default function AboutUsPage({ collaboration = [] }: { collaboration?: CollaborationPost[] }) {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail("/o-nas")}
                title="Priestor na medicínu."
                subtitle="Váš partner od prvého pacienta po posledný deň v praxi."
                badge="O nás"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            {/* Text zo strany „O nás" v brožúre pre lekára v5 */}
                            <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-8 leading-tight">
                                Vašu odbornosť meníme na <span className="text-gradient">dôveru.</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-6 font-stolzl leading-relaxed">
                                Celý profesionálny život sa staráte o&nbsp;iných. Diagnostikujete, rozhodujete, nesiete zodpovednosť – často pod tlakom, ktorý zvonka nevidno.
                            </p>
                            <blockquote className="border-l-2 border-teal pl-5 mb-6 text-xl lg:text-2xl text-white font-kanit leading-snug">
                                Málokto sa pritom pýta, kto sa stará o&nbsp;vaše zázemie.
                            </blockquote>
                            <p className="text-lg text-white/60 mb-6 font-stolzl leading-relaxed">
                                Mediconect vznikol z&nbsp;jednoduchého pozorovania: lekár robí odborné rozhodnutia každý deň a&nbsp;rovnako overený prístup očakáva aj od ľudí okolo seba. Nachádza ho však zriedka.
                            </p>
                            {/* Odsek 3 a manifest – znenie podľa architektúry značky (16. 10. 2026) */}
                            <p className="text-lg text-white/60 mb-6 font-stolzl leading-relaxed">
                                Preto sme vytvorili platformu, ktorá sprevádza celý profesný život lekára – od prvých krokov v&nbsp;medicíne cez nemocnicu či vlastnú ambulanciu až po zabezpečenie rodiny. Začínali sme marketingom založeným na dátach z&nbsp;praxe. Dnes je z&nbsp;toho Mediconect – Medical Business Partner, postavený na štyroch pilieroch: založenie a&nbsp;rast, pacienti a&nbsp;marketing, prevádzka a&nbsp;manažment, majetok a&nbsp;štruktúra. Lekárom, ktorí chcú túto starostlivosť pod jednou strechou, umožňujeme diskrétne prostredie v platforme{' '}
                                <a href={MYMEDICAL.url} className="text-teal hover:text-teal/80 transition-colors">{MYMEDICAL.name}</a>.
                            </p>
                            <blockquote className="border-l-2 border-teal pl-5 mb-8 text-xl lg:text-2xl text-white font-kanit leading-snug">
                                Vy sa staráte o naše zdravie. My sa postaráme o prosperitu vašej lekárskej praxe aj vášho firemného a rodinného majetku.
                            </blockquote>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal/5 blur-[120px] rounded-full" />
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video">
                                <Image
                                    src="/images/proces/03_strategy.png"
                                    alt="Tím Mediconect pri príprave plánu pre lekára"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="text-white font-bold font-kanit text-xl mb-2">Inovujeme s integritou</div>
                                    <div className="text-white/60 text-sm font-stolzl">Každá spolupráca začína pochopením situácie lekára – rovnako ako v medicíne.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filozofia – brožúra v5 */}
                    <div className="max-w-3xl mx-auto text-center mb-24">
                        <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Naša filozofia</span>
                        <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8">Posol medzi <span className="text-gradient">dvoma svetmi</span></h2>
                        <p className="text-lg text-white/60 mb-6 font-stolzl leading-relaxed">
                            Vták bol od praveku dôležitým symbolom v&nbsp;mytológii našich indoeurópskych predkov. Vystupoval ako posol bohov, ktorý sprostredkúval komunikáciu medzi dvoma svetmi, prinášal posolstvá o&nbsp;budúcnosti a&nbsp;prepájal ľudí s&nbsp;ich minulosťou.
                        </p>
                        <p className="text-lg text-white/60 font-stolzl leading-relaxed">
                            Preto je tiež naším symbolom. Aj Mediconect stojí medzi dvoma svetmi – medzi medicínou ako profesiou a&nbsp;zázemím, ktoré lekárovi umožňuje venovať sa jej naplno. Prekladáme jeden svet do druhého, aby lekár mohol zostať v&nbsp;tom svojom. Zúročíme, čo doteraz vybudoval, a&nbsp;pripravíme jeho prax na to, čo príde.
                        </p>
                    </div>

                    {/* Hodnoty 5I */}
                    <div className="text-center mb-12">
                        <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Hodnoty 5I</span>
                        <h2 className="text-3xl lg:text-4xl font-bold font-kanit">Na čom staviame</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="glass p-7 rounded-2xl border border-white/5 hover:border-teal/20 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal group-hover:scale-110 transition-transform">
                                        {value.icon}
                                    </div>
                                    <span className="text-white/20 font-kanit font-bold text-sm">0{i + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-1 font-kanit">{value.title}</h3>
                                <p className="text-teal text-sm font-semibold font-kanit mb-3">{value.lead}</p>
                                <p className="text-white/45 text-sm font-stolzl leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pre koho pracujeme */}
            <section id="pre-koho" className="py-24 relative z-10 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Pre koho pracujeme</span>
                        <h2 className="text-3xl lg:text-4xl font-bold font-kanit">Lekári, ambulancie <span className="text-gradient">a zdravotnícke zariadenia</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {segments.map((seg) => (
                            <Link
                                key={seg.href}
                                href={seg.href}
                                className="group glass rounded-2xl border border-white/5 hover:border-teal/30 hover:bg-teal/5 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-4 transition-all flex flex-col overflow-hidden motion-reduce:transition-none"
                            >
                                <div className="relative aspect-[16/7] overflow-hidden bg-[#0C141A]">
                                    <Image
                                        src={seg.image}
                                        alt=""
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                                    />
                                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0C141A]/75 via-[#0C141A]/10 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-teal/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
                                    <div className="absolute bottom-4 left-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0C141A]/90 text-teal shadow-lg backdrop-blur-sm">
                                        {seg.icon}
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-6 pt-5">
                                    <h3 className="text-lg font-bold font-kanit mb-2 leading-tight transition-colors group-hover:text-teal group-focus-visible:text-teal">{seg.title}</h3>
                                    <p className="text-white/55 text-sm font-stolzl leading-relaxed mb-4">{seg.desc}</p>
                                    <span className="mt-auto inline-flex items-center gap-1.5 text-teal text-sm font-semibold font-kanit">
                                        Viac <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Medzinárodná a odborná spolupráca – články kategórie „spolupraca" z blogu */}
            {collaboration.length > 0 && (
                <section id="spolupraca" className="py-24 relative z-10 scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Doma aj v zahraničí</span>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">Medzinárodná a <span className="text-gradient">odborná spolupráca</span></h2>
                            <p className="text-white/55 max-w-2xl mx-auto font-stolzl">Konferencie, odborné podujatia a spolupráca s partnermi, na ktorých sa zúčastňujeme.</p>
                        </div>
                        {/* flex + centrovanie: kým sú články 1–2, nezostanú zarovnané vľavo */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {collaboration.map((post) => (
                                <Link
                                    key={post.href}
                                    href={post.href}
                                    className="group glass rounded-2xl border border-white/5 hover:border-teal/30 transition-all flex flex-col overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                >
                                    {post.cover && (
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={post.cover}
                                                alt=""
                                                fill
                                                sizes="(min-width: 1024px) 400px, 100vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <div className="p-7 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
                                        <Globe2 size={14} className="text-teal" />
                                        {post.date}
                                    </div>
                                    <h3 className="text-lg font-bold font-kanit mb-3 leading-snug group-hover:text-teal transition-colors">{post.title}</h3>
                                    <p className="text-white/50 text-sm font-stolzl leading-relaxed mb-5">{post.description}</p>
                                    <span className="mt-auto inline-flex items-center gap-1.5 text-teal text-sm font-semibold font-kanit">
                                        Čítať <ArrowRight size={14} />
                                    </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-24 relative z-10 ">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">Vy ovládate medicínu. <span className="text-gradient">O všetko ostatné sa postaráme my.</span></h2>
                    <p className="text-white/55 font-stolzl leading-relaxed mb-10">
                        Založenie a rast praxe. Pacienti a marketing. Prevádzka a manažment. Majetok a jeho ochrana. Štyri oblasti, ktoré sa navzájom ovplyvňujú – preto ich riešime spolu, s&nbsp;jedným osobným partnerom. Pre lekárov pred atestáciou, zamestnaných lekárov aj majiteľov ambulancií.
                    </p>
                    <div className="space-y-4 text-left">
                        {principles.map((item, i) => (
                            <div key={item.title} className="flex items-start gap-4 p-5 glass rounded-xl border border-white/5">
                                <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal flex-shrink-0 font-kanit font-bold text-sm">
                                    0{i + 1}
                                </div>
                                <div>
                                    <p className="text-white font-semibold font-kanit mb-1">{item.title}</p>
                                    <p className="text-white/60 font-stolzl text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner 
                title="Prvý krok je rozhovor."
                description="Bezplatne prejdeme vašu situáciu a priority. Potom dostanete konkrétny postup, rozpočet a harmonogram."
                buttonText="Dohodnúť úvodný rozhovor"
            />
        </div>
    );
}
