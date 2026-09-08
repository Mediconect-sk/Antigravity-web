'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import { Mail, Shield, TrendingUp, Users, Clock, Heart, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    { label: "ROI v zdravotníctve", value: "42:1+", desc: "Za každé 1€ investované sa vráti 42€ a viac." },
    { label: "Doručiteľnosť", value: "98%", desc: "Vysoká technická kvalita rozosielky." },
    { label: "Open Rate", value: "70%+", desc: "Naše stratégie dosahujú nadštandardný záujem." }
];

const benefits = [
    {
        title: "Edukácia buduje autoritu",
        desc: "Lekár si doručovaním hodnotného obsahu buduje status experta a zlepšuje adherenciu k liečbe.",
        icon: <Shield size={24} />
    },
    {
        title: "Diskrétnosť a personalizácia",
        desc: "Email je privátna zóna. Môžete osloviť špecifické skupiny (napr. ženy po pôrode) s citlivými témami.",
        icon: <Heart size={24} />
    },
    {
        title: "Vlastníctvo dát",
        desc: "Databáza emailov je váš majetok. Nikto vám ju nemôže vziať, zablokovať ani spoplatniť dosah.",
        icon: <TrendingUp size={24} />
    },
    {
        title: "Zvyšovanie hodnoty pacienta",
        desc: "Email marketing slúži na to, aby sa pacient vracal (napr. preventívne prehliadky, očkovanie).",
        icon: <Users size={24} />
    }
];

export default function EmailMarketingPage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail("/sluzby/email-marketing-a-praca-s-datami")}
                title="Email marketing a práca s dátami" 
                subtitle="Kým sociálne siete sú námestie, email je ako zatvorené dvere v ambulancii. Je to váš najsilnejší nástroj na budovanie dlhodobého vzťahu a navýšenie príjmov."
                badge="Kľúčová služba"
            />

            {/* Stats Strip */}
            <section className="py-12 relative z-10 bg-white/2">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {stats.map((stat, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-teal font-kanit mb-2">{stat.value}</div>
                                <div className="text-white font-semibold mb-1 font-kanit">{stat.label}</div>
                                <div className="text-white/40 text-sm font-stolzl">{stat.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section 1 */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Email marketing: <span className="text-gradient">Liek 21. storočia</span> pre vašu prax
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Zdravie je intímna vec. Pacienti dnes už nevyhľadávajú len liečbu, ale aj informácie a kontinuálnu starostlivosť. Emailing pripomína vašim klientom, že existujete a že sa o nich staráte aj mimo ordinačných hodín.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "99% ľudí si kontroluje email na dennej báze",
                                    "30% efektívnejšia kampaň oproti sociálnym sieťam",
                                    "Doručiteľnosť newsletterov až 98% (oproti 7-10% na FB)",
                                    "Extrémna návratnosť investície (ROI)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                            <Check size={12} />
                                        </div>
                                        <span className="text-white/80 font-stolzl">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal/10 blur-[100px] rounded-full" />
                            <div className="glass rounded-3xl p-10 border border-white/10 relative z-10">
                                <Mail size={64} className="text-teal mb-6" />
                                <blockquote className="text-xl italic text-white/90 font-stolzl leading-relaxed">
                                    "Sociálne siete sú na to, aby o vás ľudia vedeli. Ale email marketing slúži na to, aby k vám pacienti prišli a navýšili príjmy vašej ambulancie."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 relative z-10 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6">Prečo je email v zdravotníctve <span className="text-gradient">kráľom?</span></h2>
                        <p className="text-white/50 max-w-2xl mx-auto font-stolzl">Kombinácia diskrétnosti a priameho zásahu robí z emailu najefektívnejší kanál pre moderného lekára.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all group">
                                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-kanit">{benefit.title}</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Practical Value */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: "Virtuálna sestrička", desc: "Ušetrí hodiny telefonovania pri pripomínaní preventívok." },
                                    { title: "Poučený pacient", desc: "Automatické inštrukcie k liečbe po návšteve ambulancie." },
                                    { title: "Plná ambulancia", desc: "Efektívny manažment cirkulácie a vyťaženosti." },
                                    { title: "Rast hodnoty firmy", desc: "Aktívna databáza zvyšuje cenu vašej lekárskej praxe." }
                                ].map((item, i) => (
                                    <div key={i} className="glass p-6 rounded-xl border border-white/5">
                                        <div className="text-teal font-bold mb-2 font-kanit">{item.title}</div>
                                        <p className="text-white/40 text-sm font-stolzl">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Vaša digitálna sestra, ktorá <span className="text-gradient">nikdy nespí</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-6 font-stolzl leading-relaxed">
                                Vážený pán doktor, vaša kartotéka je zákonná povinnosť. Ale databáza emailov je nástroj, ktorý vám umožňuje aktívne riadiť váš čas a ekonomický rast.
                            </p>
                            <p className="text-white/50 font-stolzl leading-relaxed">
                                Hromadný email o zmene ordinačných hodín alebo pripomienka preventívky vyrieši za 5 minút to, čo by sestra telefonovala 3 dni. Šetríme mzdové náklady a zvyšujeme komfort pacienta.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner 
                title="Chcete aktivovať svoju databázu?"
                description="Zistite, aký potenciál sa skrýva vo vašej kartotéke. Navrhneme vám stratégiu, ktorá rešpektuje etiku aj súkromie vašich pacientov."
            />
        </div>
    );
}
