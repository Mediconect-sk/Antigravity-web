"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroCollage from "@/components/HeroCollage";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ChevronDown,
    Mail,
    Phone,
    Check,
} from "lucide-react";
import dynamic from "next/dynamic";
import GlowCard from "../../components/GlowCard";
import MagicalButton from "../../components/MagicalButton";
import TypewriterText from "../../components/TypewriterText";

import ServicesNebula from "../../components/ServicesNebula";
import ServicesCarousel from "../../components/ServicesCarousel";


// New sections
import CestaLekara from "@/components/CestaLekara";
import MyMedicalStrip from "@/components/MyMedicalStrip";

const ContactModal = dynamic(() => import("../../components/ContactModal"), {
    ssr: false,
});

/* ─── Animation Variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

const fadeIn = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (i: number = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

/* ─── Reusable Section Wrapper with scroll reveal ─── */
function Section({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.section
            ref={ref}
            id={id}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.section>
    );
}

/* ─── Animated Counter ─── */
function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref} className="font-kanit tabular-nums">
            {prefix}{count.toLocaleString("sk-SK")}{suffix}
        </span>
    );
}

function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [gdpr, setGdpr] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() && gdpr) {
            setIsLoading(true);
            setError("");

            try {
                const response = await fetch("/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email.trim() }),
                });

                if (response.ok) {
                    setIsSubmitted(true);
                } else {
                    const data = await response.json();
                    setError(data.error || "Niekde nastala chyba, skúste to prosím znova.");
                }
            } catch (err) {
                setError("Chyba pripojenia. Skontrolujte prosím svoje internetové pripojenie.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-sm flex flex-col items-center justify-center p-6 bg-teal/10 border border-teal/20 rounded-2xl text-center"
            >
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center mb-3">
                    <Check size={24} className="text-teal" />
                </div>
                <h4 className="text-white font-bold font-kanit text-lg mb-1">Ste na zozname!</h4>
                <p className="text-white/60 text-sm font-stolzl">
                    Ďakujeme. Najbližšie marketingové tipy pošleme do vašej schránky.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-lg">
            <form className="relative flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                <div className="relative flex items-center w-full">
                    <input
                        type="email"
                        placeholder="Váš e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                        className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-full py-5 pl-8 pr-32 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/50 transition-all font-stolzl text-base h-16 disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !gdpr}
                        className="absolute right-2 px-6 h-12 bg-teal text-navy-dark font-bold font-kanit text-base rounded-full hover:bg-teal/90 hover:scale-105 transition-all duration-300 pointer flex items-center justify-center disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Pridávam..." : "Odoberať"}
                    </button>
                </div>

                {/* GDPR checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group mt-2 ml-4">
                    <div className="relative mt-0.5">
                        <input
                            type="checkbox"
                            name="gdpr-newsletter"
                            required
                            checked={gdpr}
                            onChange={(e) => setGdpr(e.target.checked)}
                            className="sr-only peer"
                        />
                        <div className="w-5 h-5 rounded-md border border-white/20 bg-white/5 peer-checked:bg-teal peer-checked:border-teal transition-all flex items-center justify-center">
                            {gdpr && <Check size={14} className="text-navy-dark" />}
                        </div>
                    </div>
                    <span className="text-white/40 text-xs leading-relaxed group-hover:text-white/60 transition-colors">
                        Súhlasím so spracovaním osobných údajov na účely zasielania noviniek v súlade s dokumentom{" "}
                        <a href="/ochrana-osobnych-udajov" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline" onClick={(e) => e.stopPropagation()}>
                            Ochrana osobných údajov
                        </a>.
                    </span>
                </label>
            </form>
            {error && (
                <p className="text-red-400 text-sm mt-3 text-center lg:text-left ml-4 font-stolzl">{error}</p>
            )}
        </div>
    );
}


/* ═══════════════════════════════════════════════ */
/*                  MAIN PAGE                     */
/* ═══════════════════════════════════════════════ */
export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);

    // Otvorenie modalu, ak je v URL adrese parameter ?kontakt=true
    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            if (params.get("kontakt") === "true") {
                setModalOpen(true);
            }
        }
    }, []);




    // Hash-based scroll fix: framer-motion's initial hidden state prevents
    // the browser's native anchor scroll from working on first load.
    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;
        const id = hash.replace("#", "");
        // Wait for framer-motion to render elements before scrolling
        const timer = setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen relative">



            {/* ═══════════════ HERO ═══════════════ */}
            <section id="hero" className="relative min-h-screen flex items-center pt-20">
                {/* Hero-specific background effects */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Animated gradient mesh */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-30">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal/20 via-transparent to-transparent blur-[120px] animate-float" />
                        <div className="absolute inset-10 rounded-full bg-gradient-to-tl from-teal/10 via-transparent to-transparent blur-[100px] animate-float-delayed" />
                    </div>
                    {/* Radial lines */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 75% 50%, rgba(78,205,196,0.4) 0%, rgba(78,205,196,0) 50%)`,
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                        {/* Left: Text content */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-8"
                            >
                                <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                                <span className="text-teal text-sm font-medium font-kanit tracking-wide">
                                    Medical Business Partner
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight mb-8"
                            >
                                Partner lekára{" "}
                                <span className="text-gradient">v&nbsp;každej fáze kariéry.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                                className="text-lg lg:text-xl text-white/65 leading-relaxed max-w-xl mb-10"
                            >
                                Vy sa venujete medicíne. My všetkému, čo ju obklopuje.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.45 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <a
                                    href="#kontakt"
                                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-teal text-navy-dark font-semibold text-lg rounded-2xl hover:bg-teal/90 transition-all duration-300 animate-pulse-glow cursor-pointer"
                                >
                                    Bezplatná konzultácia
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </a>
                                <a
                                    href="#sluzby"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 glass rounded-2xl text-white/80 hover:text-teal transition-all duration-300 hover:border-teal/30"
                                >
                                    Naše služby
                                    <ChevronDown size={20} />
                                </a>
                            </motion.div>

                        </div>

                        {/* Right: koláž – lekár, pracovný stôl, lekárka */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="lg:col-span-5"
                        >
                            <HeroCollage />
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════ CESTA LEKÁRA ═══════════════ */}
            <CestaLekara />
            <MyMedicalStrip />

            {/* ═══════════════ SERVICES (Interactive Showcase) ═══════════════ */}
            <div id="sluzby" className="absolute -mt-24 h-24 w-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="block lg:hidden"
            >
                <ServicesCarousel />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="hidden lg:block py-20"
            >
                <ServicesNebula />
            </motion.div>

            {/* ═══════════════ PROCESS ═══════════════ */}
            <Section className="py-24 lg:py-32 relative z-10" id="proces">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
                        <span className="text-teal text-sm font-semibold uppercase tracking-widest">
                            Proces
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-bold mt-4">
                            Ako <span className="text-gradient">spolupracujeme</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            // Architektúra značky v2, časť 6 „Ako spolupracujeme"
                            {
                                step: "01",
                                title: "Úvodný rozhovor",
                                desc: "Pochopíme vašu prax, ciele a to, čo vás najviac zaťažuje.",
                                image: "/images/proces/01_consultation.png"
                            },
                            {
                                step: "02",
                                title: "Diagnóza",
                                desc: "Na základe detailnej analýzy vašej situácie pripravíme audit aktuálneho stavu a východiská pre ďalší postup.",
                                image: "/images/proces/02_research.png"
                            },
                            {
                                step: "03",
                                title: "Liečebný plán",
                                desc: "Podľa priorít a vašich zámerov nastavíme strategický plán a cez postupné kroky dohodneme jeho implementáciu.",
                                image: "/images/proces/03_strategy.png"
                            },
                            {
                                step: "04",
                                title: "Dlhodobá starostlivosť",
                                desc: "Pravidelné konzultácie, merateľné výsledky a dlhodobá starostlivosť vám prinesú viac pokoja, nové možnosti a ekonomický rast vašej praxe.",
                                image: "/images/proces/04_results.png"
                            },
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeUp} custom={i} className="relative group">
                                <GlowCard className="h-full">
                                    <div className="glass rounded-2xl p-8 h-full transition-all duration-500 relative overflow-hidden flex flex-col justify-end">
                                        {/* Background Image behind text */}
                                        {item.image && (
                                            <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#060f18] to-transparent opacity-80" />
                                            </div>
                                        )}
                                        <div className="relative z-10 pt-16">
                                            <div className="text-5xl font-black text-teal/15 group-hover:text-teal/30 transition-colors duration-300 mb-4 inline-block">
                                                {item.step}
                                            </div>
                                            <h3 className="text-lg font-semibold mb-3 group-hover:text-teal transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </GlowCard>
                                {/* Connector line (hidden on last) */}
                                {i < 3 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-teal/30 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ═══════════════ CTA ═══════════════ */}
            <Section className="py-24 lg:py-32 relative z-10" id="kontakt">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        variants={fadeIn}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        {/* Background glow */}
                        {/* Background glow & Mesh Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-navy to-navy-dark" />
                        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.15),transparent_50%)] animate-pulse" />
                        </div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-[120px] animate-blob" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

                        {/* Particles - Fixed positions to prevent hydration mismatch */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[
                                { top: "15%", left: "10%", size: 4, delay: 0, dur: 6 },
                                { top: "35%", left: "85%", size: 3, delay: 1, dur: 8 },
                                { top: "65%", left: "18%", size: 2, delay: 2, dur: 7 },
                                { top: "80%", left: "75%", size: 5, delay: 0.5, dur: 9 },
                                { top: "45%", left: "55%", size: 3, delay: 1.5, dur: 6.5 },
                                { top: "90%", left: "30%", size: 2, delay: 3, dur: 8 },
                                { top: "10%", left: "65%", size: 4, delay: 2.5, dur: 7.5 },
                                { top: "25%", left: "40%", size: 3, delay: 4, dur: 6 },
                                { top: "75%", left: "90%", size: 2.5, delay: 1.2, dur: 5.5 },
                                { top: "5%", left: "25%", size: 3.5, delay: 3.5, dur: 7 },
                                { top: "60%", left: "5%", size: 2, delay: 0.8, dur: 8.5 },
                                { top: "95%", left: "50%", size: 4, delay: 2.2, dur: 6.8 },
                            ].map((p, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full bg-teal/40"
                                    style={{
                                        top: p.top,
                                        left: p.left,
                                        width: p.size,
                                        height: p.size,
                                    }}
                                    animate={{
                                        y: [0, -30, 0],
                                        opacity: [0.2, 0.8, 0.2],
                                    }}
                                    transition={{
                                        duration: p.dur,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: p.delay,
                                    }}
                                />
                            ))}
                        </div>

                        <div className="relative z-10 glass-strong rounded-3xl px-4 py-10 sm:p-12 lg:p-20 text-center">
                            <motion.h2
                                variants={fadeUp}
                                custom={0}
                                className="text-2xl sm:text-3xl lg:text-5xl font-bold font-kanit leading-tight mb-6"
                            >
                                Vaša prax si zaslúži
                                <span className="text-gradient block mt-2 lg:mt-4 whitespace-nowrap">
                                    {/* Jedno slovo za kazdy pilier: Business partner, marketing, AI, majetok */}
                                    <TypewriterText words={["pevné základy", "správnych pacientov", "menej administratívy", "chránený majetok"]} />
                                </span>
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                custom={1}
                                className="text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl font-stolzl mx-auto mb-10"
                            >
                                Otvárate vlastnú ambulanciu, chcete viac pacientov, menej papierovania alebo chrániť to, čo ste vybudovali? Vyberte, čo vás zaujíma, a prvý 30-minútový rozhovor venujeme presne tomu. Bezplatne a s konkrétnym ďalším krokom.
                            </motion.p>
                            <motion.div variants={fadeUp} custom={2} className="flex flex-col items-center gap-8">
                                <MagicalButton onClick={() => setModalOpen(true)}>
                                    Vybrať, s čím potrebujem pomôcť
                                </MagicalButton>

                                {/* Floating Contact Cards (Desktop only) */}
                                <div className="hidden lg:flex gap-6 mt-4">
                                    <div className="glass px-5 py-3 rounded-full flex items-center gap-3 text-sm text-teal/80 hover:text-teal hover:bg-teal/10 transition-all duration-300">
                                        <Mail size={16} />
                                        info@mediconect.sk
                                    </div>
                                    <div className="glass px-5 py-3 rounded-full flex items-center gap-3 text-sm text-teal/80 hover:text-teal hover:bg-teal/10 transition-all duration-300">
                                        <Phone size={16} />
                                        +421 948 220 845
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact info - Mobile only */}
                            <motion.div
                                variants={fadeUp}
                                custom={3}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-white/40 text-sm lg:hidden"
                            >
                                <a
                                    href="mailto:info@mediconect.sk"
                                    className="flex items-center gap-2 hover:text-teal transition-colors"
                                >
                                    <Mail size={16} />
                                    info@mediconect.sk
                                </a>
                                <a
                                    href="tel:+421948220845"
                                    className="flex items-center gap-2 hover:text-teal transition-colors"
                                >
                                    <Phone size={16} />
                                    +421 948 220 845
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* ═══════════════ NEWSLETTER (The Insider Footer) ═══════════════ */}
            <Section className="relative z-10 pb-16 lg:pb-24" id="newsletter">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        custom={0}
                        className="glass-strong rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10"
                    >
                        {/* Background glow for the newsletter box */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-[80px] pointer-events-none" />

                        {/* Text Content */}
                        <div className="relative z-10 max-w-xl text-center lg:text-left">
                            <h3 className="text-2xl lg:text-3xl font-bold font-kanit text-white mb-4">
                                Zákulisie úspešných ambulancií.
                            </h3>
                            <p className="text-white/60 text-sm md:text-base font-stolzl leading-relaxed">
                                Udržte si náskok. Prinášame overené marketingové postupy a dáta, z ktorých urobíte informované rozhodnutia pre vašu prax. Priamo na váš e-mail, bez zbytočného spamu.
                            </p>
                        </div>

                        {/* Input Form */}
                        <div className="relative z-10 w-full lg:w-auto flex-shrink-0 flex items-center justify-center lg:justify-end min-h-[80px]">
                            <NewsletterForm />
                        </div>

                    </motion.div>
                </div>
            </Section>



            {/* ═══════════════ CONTACT MODAL ═══════════════ */}
            <ContactModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />


        </div>
    );
}
