'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import Image from 'next/image';
import { Target, Lightbulb, Shield, TrendingUp, HeartHandshake } from 'lucide-react';
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

export default function AboutUsPage() {
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
                                Mediconect vznikol z&nbsp;jednoduchého pozorovania: lekár robí odborné rozhodnutia každý deň a&nbsp;rovnakú odbornosť očakáva od ľudí okolo seba. Nachádza ju však zriedka.
                            </p>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Preto sme vytvorili platformu, ktorá spája celý profesný život lekára – od prvých krokov v&nbsp;medicíne cez nemocnicu či vlastnú ambulanciu až po majetok a&nbsp;zabezpečenie rodiny. Začínali sme marketingom založeným na dátach z&nbsp;praxe. Dnes k&nbsp;platforme patrí financovanie potrieb a&nbsp;projektov lekárov, ochrana majetku a&nbsp;odborného mena, štart a&nbsp;správa vlastnej prevádzky, ale tiež nástroje, ktoré vám šetria čas.
                            </p>
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
                            Preto je aj naším symbolom. Aj Mediconect stojí medzi dvoma svetmi – medzi medicínou ako profesiou a&nbsp;zázemím, ktoré lekárovi umožňuje venovať sa jej naplno. Prekladáme jeden svet do druhého, aby lekár mohol zostať v&nbsp;tom svojom. Zúročíme, čo doteraz vybudoval, a&nbsp;pripravíme jeho prax na to, čo príde.
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
