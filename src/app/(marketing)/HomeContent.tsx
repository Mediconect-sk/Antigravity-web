"use client";

import PrevierkaWebuOkno from '@/components/PrevierkaWebuOkno';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "@/lib/track";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ChevronDown,
    Mail,
    Phone,
    Check,
} from "lucide-react";
import dynamic from "next/dynamic";
import MagicalButton from "../../components/MagicalButton";
import TypewriterText from "../../components/TypewriterText";

import ServicesCards from "../../components/ServicesCards";
import { PILLARS } from "../../components/ServicesNebula";


// New sections
import CestaLekara from "@/components/CestaLekara";
import MyMedicalStrip from "@/components/MyMedicalStrip";
import OrdinacnyIndexHook from "@/components/OrdinacnyIndexHook";


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
                    trackEvent("newsletter_prihlaseny", { stranka: window.location.pathname });
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
    // Starý odkaz s ?kontakt=true presmeruje na jediný vstup pre konzultácie
    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            if (params.get("kontakt") === "true") {
                window.location.replace("/konzultacia");
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
            {/* Tmavý úvod v štýle servisných stránok (21. 11. 2026): nadpis + mapa štyroch oblastí okolo lekára */}
            <section id="hero" className="relative z-10 pt-28 lg:pt-32">
                <div className="mc-dark relative overflow-hidden rounded-[2rem] mx-4 lg:mx-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-60"
                        style={{ backgroundImage: "linear-gradient(rgba(136,213,219,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(136,213,219,.07) 1px, transparent 1px)", backgroundSize: "56px 56px" }}
                    />
                    <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        <div className="lg:col-span-7">
                            <p className="text-teal uppercase tracking-widest text-xs font-bold font-kanit mb-5">Partner lekára v každej fáze kariéry</p>
                            {/* Nadpis o prínose (schválené 11. 11. 2026; 15. 11. 2026 Viktor zmenil koniec na „a všetko ostatné") */}
                            <h1 className="font-kanit font-light text-5xl lg:text-7xl leading-[1.02] mb-6">
                                <strong>Vy liečite.</strong> O prax, pacientov a všetko ostatné sa postaráme my.
                            </h1>
                            <p className="text-lg lg:text-xl text-white/70 font-stolzl leading-relaxed mb-8 max-w-xl">
                                Jeden partner pre lekára od atestácie po odovzdanie praxe. Začíname diagnózou vašej situácie, nie ponukou.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#kontakt" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#88D5DB] text-[#041D2C] font-bold px-7 py-3.5">
                                    Bezplatná 30-minútová konzultácia
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="/konzultacia" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#88D5DB]/40 text-[#FAFAF8] font-semibold px-7 py-3.5">
                                    Vyberte, čo dnes riešite
                                </a>
                            </div>
                        </div>

                        {/* Mapa: lekár v strede, štyri oblasti okolo */}
                        <div className="lg:col-span-5">
                            <div className="relative mx-auto w-full max-w-[480px] aspect-square">
                                <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                                    <circle cx="50" cy="50" r="34" fill="none" stroke="#88D5DB" strokeOpacity=".25" strokeDasharray="1.5 2" strokeWidth=".4" />
                                    {[[50, 50, 22, 18], [50, 50, 78, 18], [50, 50, 22, 82], [50, 50, 78, 82]].map(([x1, y1, x2, y2], i) => (
                                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#88D5DB" strokeOpacity=".5" strokeWidth=".4" />
                                    ))}
                                </svg>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[32%] flex flex-col items-center">
                                    {/* Reálna fotografia lekárky (Unsplash photo-1758691462651-611d730c5272) namiesto ikony */}
                                    <div className="relative w-full aspect-square rounded-full p-1.5 bg-[#88D5DB] ring-8 ring-[#0A2B40]">
                                        <div className="relative w-full h-full rounded-full overflow-hidden">
                                            <Image src="/images/hero-karty/lekarka.webp" alt="Lekárka v ambulancii" fill sizes="160px" className="object-cover" />
                                        </div>
                                    </div>
                                    <span className="-mt-4 relative whitespace-nowrap rounded-full bg-[#88D5DB] text-[#041D2C] px-4 py-1.5 font-kanit font-semibold text-xs sm:text-sm">Vy a vaša prax</span>
                                </div>
                                {PILLARS.map((pillar, i) => {
                                    const pos = ["left-0 top-0", "right-0 top-0", "left-0 bottom-0", "right-0 bottom-0"][i];
                                    // Jemná reálna fotografia v pozadí karty (Unsplash, 21. 11. 2026)
                                    const foto = {
                                        zalozenie: "/images/hero-karty/business-partner.webp",
                                        marketing: "/images/hero-karty/marketing-v2.webp",
                                        prevadzka: "/images/hero-karty/automatizacie-v2.webp",
                                        majetok: "/images/hero-karty/majetok.webp",
                                    }[pillar.id];
                                    return (
                                        <Link
                                            key={pillar.id}
                                            href={pillar.href}
                                            className={`absolute ${pos} w-[43%] overflow-hidden rounded-2xl border border-[#E6E6E6] bg-[#fff] p-3 sm:p-4 text-[#041D2C] hover:-translate-y-0.5 transition-transform`}
                                        >
                                            {foto && (
                                                <>
                                                    <Image src={foto} alt="" fill sizes="220px" className="object-cover" />
                                                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#fff]/45 via-[#fff]/85 to-[#fff]/95" />
                                                </>
                                            )}
                                            <span className="relative block mb-1 -ml-2">{pillar.icon}</span>
                                            <span className="relative block font-kanit font-semibold text-sm sm:text-base leading-tight">{pillar.title}</span>
                                            <span className="relative hidden sm:block text-xs text-[#3F4B54] font-stolzl mt-1 leading-snug">{pillar.claim}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CESTA LEKÁRA ═══════════════ */}
            <CestaLekara />
            <OrdinacnyIndexHook />
            <MyMedicalStrip />

            {/* ═══════════════ SERVICES (Interactive Showcase) ═══════════════ */}
            <div id="sluzby" className="absolute -mt-24 h-24 w-full pointer-events-none" />

            <ServicesCards />

            {/* Bezplatná previerka webu – tlačidlo otvorí okno s formulárom (Viktor, 24. 11. 2026) */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <PrevierkaWebuOkno title="Čo vidí pacient, keď otvorí váš web?">
                    <p>Bezplatná previerka webu ambulancie. Zmeriame ho rovnako ako weby našich klientov a správu vám pošleme e-mailom.</p>
                </PrevierkaWebuOkno>
            </div>

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
                                image: "/images/proces/01-rozhovor-v2.webp"
                            },
                            {
                                step: "02",
                                title: "Audit",
                                desc: "Na základe detailnej analýzy vašej situácie zmapujeme aktuálny stav praxe a východiská pre ďalší postup.",
                                image: "/images/proces/02-analyza.webp"
                            },
                            {
                                step: "03",
                                title: "Strategický plán",
                                desc: "Podľa priorít a vašich zámerov nastavíme postupné kroky a dohodneme ich implementáciu.",
                                image: "/images/proces/03-plan.webp"
                            },
                            {
                                step: "04",
                                title: "Dlhodobá starostlivosť",
                                desc: "Osobný poradca zostáva pri vás aj po zavedení krokov. Dlhodobá starostlivosť vám dá viac pokoja a lepší prehľad o tom, ako sa vaša prax vyvíja.",
                                image: "/images/proces/04-starostlivost-v3.webp"
                            },
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeUp} custom={i} className="relative group">
                                {/* Svetlá karta s reálnou fotografiou (21. 11. 2026, predtým tmavé AI fotky) */}
                                <article className="glass rounded-3xl overflow-hidden h-full flex flex-col">
                                    <div className="relative aspect-[3/2]">
                                        <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 300px, (min-width: 768px) 45vw, 90vw" className="object-cover" />
                                        <span className="absolute left-4 top-4 rounded-full bg-[#041D2C] text-[#88D5DB] px-3 py-1 font-kanit font-semibold text-sm">{item.step}</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-kanit font-semibold mb-2">{item.title}</h3>
                                        <p className="text-white/70 font-stolzl text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </article>
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
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(76, 173, 182,0.15),transparent_50%)] animate-pulse" />
                        </div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-[120px] animate-blob" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-light/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

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
                                <MagicalButton onClick={() => window.dispatchEvent(new Event("open_contact_modal"))}>
                                    Bezplatná 30-minútová konzultácia
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
                                Zákulisie praxe.
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





        </div>
    );
}
