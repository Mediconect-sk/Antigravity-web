'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import Image from 'next/image';
import { Target, Lightbulb, Shield, Zap, TrendingUp, HeartHandshake, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
    { title: "Medicínska etika", desc: "Nikdy nekomunikujeme spôsobom, ktorý by znižoval dôstojnosť lekárskeho stavu.", icon: <Shield /> },
    { title: "Dátová inteligencia", desc: "Každé naše rozhodnutie je podložené reálnymi číslami z vašej praxe.", icon: <TrendingUp /> },
    { title: "Inovácia", desc: "Hľadáme nové cesty, ako AI a automatizácia môžu zefektívniť chod ambulancie.", icon: <Lightbulb /> },
    { title: "Partnerstvo", desc: "Sme súčasťou vášho tímu. Váš rast je náš úspech.", icon: <HeartHandshake /> }
];

export default function AboutUsPage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail("/o-nas")}
                title="Sme strategickým partnerom vašej ambulancie" 
                subtitle="Mediconect vznikol s víziou modernizovať komunikáciu v zdravotníctve a priniesť lekárom nástroje, ktoré im uľahčia prácu a zvýšia hodnotu ich praxe."
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
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-teal font-kanit">10+</div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest font-stolzl">Klientov z medicíny</div>
                                </div>
                                <div className="w-px h-10 bg-white/10" />
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-teal font-kanit">10+</div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest font-stolzl">Špecializácií</div>
                                </div>
                            </div>
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
                                    <div className="text-white/60 text-sm font-stolzl">Každý projekt začína pochopením potrieb lekára a očakávaní pacienta.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-kanit">{value.title}</h3>
                                <p className="text-white/40 text-sm font-stolzl leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 ">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8">Prečo <span className="text-gradient">Mediconect?</span></h2>
                    <div className="space-y-6 text-left">
                        {[
                            "Špecializácia výhradne na segment zdravotníctva",
                            "Vlastné know-how v oblasti spracovania pacientskych dát",
                            "Transparentný reporting a merateľnosť každého eura",
                            "Minimálna časová záťaž pre personál ambulancie",
                            "Vždy aktuálne riešenia využívajúce najnovšie AI technológie"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5">
                                <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center text-teal flex-shrink-0">
                                    <Check size={14} />
                                </div>
                                <span className="text-white/80 font-stolzl">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner 
                title="Budujte s nami budúcnosť vašej praxe"
                description="Sme pripravení stať sa vaším strategickým partnerom v digitálnom svete."
            />
        </div>
    );
}
