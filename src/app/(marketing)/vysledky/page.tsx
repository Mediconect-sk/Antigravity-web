'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import CaseStudyDashboard from '@/components/CaseStudyDashboard';
import { TrendingUp, Award, Users, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Priemerný nárast dopytov", value: "+140%", icon: <TrendingUp className="text-teal" /> },
    { label: "Spokojnosť klientov", value: "98%", icon: <Award className="text-teal" /> },
    { label: "Aktivovaných pacientov", value: "50k+", icon: <Users className="text-teal" /> },
    { label: "ROI kampaní", value: "x4.2", icon: <BarChart3 className="text-teal" /> }
];

export default function ResultsPage() {
    return (
        <div className="min-h-screen">
            <PageHero 
                title="Výsledky našej práce" 
                subtitle="Nerobíme marketing pre dojmy. Robíme ho pre čísla, ktoré znamenajú rast vašej praxe a lepšiu starostlivosť o pacientov."
                badge="Dáta a fakty"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-2xl border border-white/5 text-center group hover:glow-teal transition-all"
                            >
                                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-kanit">{stat.value}</div>
                                <div className="text-white/40 text-sm font-stolzl">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Detailné <span className="text-gradient">prípadové štúdie</span></h2>
                            <p className="text-white/50 max-w-2xl mx-auto font-stolzl">Pozrite sa, ako sme pomohli konkrétnym klinikám dosiahnuť ich ciele.</p>
                        </div>
                        <CaseStudyDashboard />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 border-t border-white/5">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Ako meriame <span className="text-gradient">úspech?</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Kvalita, nie kvantita", desc: "Nemeráme len počet kliknutí, ale počet reálnych objednávok a kvalitu nových pacientov." },
                                    { title: "LTV (Lifetime Value)", desc: "Sledujeme, ako sa pacient vracia a akú celkovú hodnotu prináša vašej ambulancii." },
                                    { title: "Cena za akvizíciu (CPA)", desc: "Optimalizujeme náklady tak, aby ste za každé investované euro získali maximum." },
                                    { title: "Pomer prevencie", desc: "Sledujeme nárast preventívnych prehliadok, ktoré sú kľúčové pre zdravie aj ekonomiku praxe." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white mb-1 font-kanit">{item.title}</div>
                                            <div className="text-white/40 text-sm font-stolzl leading-relaxed">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal/5 blur-[120px] rounded-full" />
                            <div className="glass rounded-3xl p-10 border border-white/10 relative z-10">
                                <h3 className="text-2xl font-bold mb-6 font-kanit">Mesačný reporting</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed mb-8">
                                    Každý náš klient dostáva prehľadný report, ktorý hovorí rečou biznisu. Žiadny marketingový žargón, ale jasné odpovede na otázky: Koľko nás to stálo? Čo sme získali? Čo budeme robiť ďalej?
                                </p>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-teal/20 rounded-lg flex items-center justify-center text-teal font-bold">PDF</div>
                                    <span className="text-white/80 font-medium">Ukážka reportu pre kliniku</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner 
                title="Chcete podobné výsledky aj vo vašej praxi?"
                description="Začnime auditom vašej aktuálnej situácie a navrhnime plán, ktorý vás posunie k vašim cieľom."
            />
        </div>
    );
}
