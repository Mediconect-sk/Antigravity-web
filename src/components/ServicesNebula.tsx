"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { Target, Layers, Briefcase, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from "next/link";

/* ─── Data ───
 * Portfólio = štyri piliere Mediconectu (architektúra značky v2, 27. 9. 2026),
 * pomenované a prelinkované podľa hlavného menu. Ordevia tu zámerne nie je –
 * má vlastnú stránku (/sluzby/webova-aplikacia-ordevia) a tlačidlo v hlavičke.
 */
export const PILLARS = [
    {
        id: "zalozenie",
        icon: <Briefcase size={28} />,
        label: "Pilier 1",
        title: "Business partner",
        claim: "Vaša ambulancia od prvého dňa na pevných základoch.",
        desc: "Lokalita a biznis plán, povolenia a zmluvy s poisťovňami, financovanie vybavenia, nábor sestier, lekárov a personálu, generačná výmena praxe a program Mediconect Štart.",
        detail: "Otvorená a financovaná ambulancia bez behania po úradoch a bankách.",
        href: "/business-partner",
        pos: { x: -150, y: -110, z: 20 }
    },
    {
        id: "marketing",
        icon: <Target size={28} />,
        label: "Pilier 2",
        title: "Healthcare marketing",
        claim: "Správni pacienti, dôstojná komunikácia.",
        desc: "Značka ambulancie a web, lokálna viditeľnosť a recenzie, preventívne kampane, e-mail a databáza pacientov – v súlade s etickým kódexom.",
        detail: "Plná kapacita pacientmi, ktorých chcete liečiť, a reputácia, ktorá rastie roky.",
        href: "/sluzby",
        pos: { x: 150, y: -110, z: -10 }
    },
    {
        id: "prevadzka",
        icon: <Layers size={28} />,
        label: "Pilier 3",
        title: "Automatizácie a AI",
        claim: "Ambulancia, ktorá funguje aj bez vás pri telefóne.",
        desc: "CRM a automatizácie, umelá inteligencia, procesy a role v tíme, zaškolenie personálu a mesačný prehľad kľúčových čísel ambulancie.",
        detail: "Menej administratívy a výpadkov, viac času na pacientov.",
        href: "/sluzby/crm-a-automatizacie",
        pos: { x: 150, y: 110, z: 30 }
    },
    {
        id: "majetok",
        icon: <ShieldCheck size={28} />,
        label: "Pilier 4",
        title: "Správa a ochrana majetku",
        claim: "Čo zarobíte v ambulancii, má pracovať pre vás a vašu rodinu.",
        desc: "Holdingová štruktúra, finančné plánovanie, investície a renta, poistenie zodpovednosti a ochrana rodiny – s advokátom a daňovým poradcom.",
        detail: "Jasná finančná architektúra a majetok nezávislý od pracovných hodín.",
        href: "/sprava-a-ochrana-majetku",
        pos: { x: -150, y: 110, z: -30 }
    },
];

const servicesData = PILLARS;

export default function ServicesNebula() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Piliere sa samy striedaju kazdych 5 s, aby bolo jasne, ze su styri.
    // Pri prejdeni mysou alebo vybere klavesnicou striedanie pauzne.
    useEffect(() => {
        if (isHovering) return;
        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const t = window.setInterval(() => {
            setActiveIndex((i) => (i + 1) % servicesData.length);
        }, 5000);
        return () => window.clearInterval(t);
    }, [isHovering]);

    // Mouse Parallax State
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth rotation using springs
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovering(false);
    };

    return (
        <div
            className="w-full py-16 lg:py-24"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
        >
            {/* Title - Centered & Spaced */}
            <div className="relative z-10 text-center mb-8 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Portfólio služieb</span>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Štyri oblasti. <br />
                        <span className="text-white/30">Jeden partner.</span>
                    </h2>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >

                    {/* LEFT COLUMN: 3D Nebula Cloud */}
                    <motion.div
                        className="relative h-[440px] flex items-center justify-center perspective-1000"
                        style={{
                            perspective: 1000,
                            rotateX,
                            rotateY
                        }}
                    >
                        {/* Background Gradients */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[80px]" />
                        </div>

                        {/* Central Core (Logo) */}
                        <div
                            className="absolute z-10 w-32 h-32 rounded-full bg-[#EAF4F5] border border-teal/15 flex items-center justify-center p-7 transition-transform duration-500"
                            style={{ transform: 'translateZ(0px)' }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/logo/mediconect_bird_pozit.png"
                                    alt="Mediconect Core"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Floating Nodes */}
                        {servicesData.map((service, index) => {
                            const isActive = activeIndex === index;

                            // Depth logic
                            const scale = 1 + (service.pos.z / 500);
                            const zIndex = isActive ? 100 : Math.floor(service.pos.z + 50);

                            return (
                                <motion.div
                                    key={service.id}
                                    className="absolute flex flex-col items-center justify-center group cursor-pointer"
                                    style={{
                                        x: service.pos.x,
                                        y: service.pos.y,
                                        zIndex: zIndex,
                                    }}
                                    animate={{
                                        y: [service.pos.y - 10, service.pos.y + 10, service.pos.y - 10],
                                        // Subtle random delay for organic feel
                                        transition: {
                                            duration: 6 + (index % 3),
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }
                                    }}
                                    onMouseEnter={() => {
                                        setActiveIndex(index);
                                        setIsHovering(true);
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                    onFocus={() => {
                                        setActiveIndex(index);
                                        setIsHovering(true);
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-pressed={isActive}
                                    aria-label={`Zobraziť pilier: ${service.title}`}
                                >
                                    {/* Icon Bubble */}
                                    <motion.div
                                        animate={{
                                            scale: isActive ? 1.3 : 1,
                                            borderColor: isActive ? "rgba(76, 173, 182, 0.6)" : "rgba(255, 255, 255, 0.1)",
                                            backgroundColor: isActive ? "rgba(76, 173, 182, 0.1)" : "rgba(255, 255, 255, 0.03)",
                                        }}
                                        className={`
                                            w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10
                                            transition-colors duration-300 shadow-lg
                                        `}
                                    >
                                        <div className={`transition-all duration-300 ${isActive ? "text-teal drop-shadow-[0_0_10px_rgba(76, 173, 182,0.8)]" : "text-white/70"}`}>
                                            {service.icon}
                                        </div>
                                    </motion.div>

                                    {/* Label - visible always but highlighted on active */}
                                    <motion.div
                                        className={`mt-3 px-3 py-1 rounded-full border transition-all duration-300 whitespace-nowrap ${isActive
                                            ? "bg-teal text-navy-dark border-teal font-bold shadow-[0_0_15px_rgba(76, 173, 182,0.4)]"
                                            : "bg-black/30 text-white/60 border-white/5"
                                            }`}
                                    >
                                        <span className="text-xs font-kanit">{service.title}</span>
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        {/* Connecting Lines (Very subtle, organic) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-visible">
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(76, 173, 182, 0)" />
                                    <stop offset="50%" stopColor="rgba(76, 173, 182, 0.05)" />
                                    <stop offset="100%" stopColor="rgba(76, 173, 182, 0)" />
                                </linearGradient>
                            </defs>
                            {servicesData.map((service, i) => (
                                <motion.line
                                    key={i}
                                    x1="50%" y1="50%"
                                    x2={`calc(50% + ${service.pos.x}px)`}
                                    y2={`calc(50% + ${service.pos.y}px)`}
                                    stroke="url(#lineGrad)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                />
                            ))}
                        </svg>
                    </motion.div>

                    {/* RIGHT COLUMN: Detail Card
                        Vsetky styri karty su v HTML (vyhladavace a AI crawlery ich vidia),
                        viditelna je iba aktivna – prepina sa cistym CSS (pravidlo v CLAUDE.md). */}
                    <div className="flex flex-col items-center justify-center h-full gap-6">
                        <div className="grid w-full max-w-lg">
                            {servicesData.map((service, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div
                                        key={service.id}
                                        aria-hidden={!isActive}
                                        className={`[grid-area:1/1] w-full min-h-[440px] mc-step p-8 flex flex-col justify-center relative overflow-hidden transition-all duration-500 ${isActive
                                            ? "opacity-100 translate-x-0 blur-0"
                                            : "opacity-0 translate-x-4 blur-sm pointer-events-none"
                                            }`}
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="inline-flex p-4 rounded-2xl bg-[#4CADB6] text-[#FFFFFF]">
                                                    {service.icon}
                                                </div>
                                                <span className="text-teal/80 text-xs font-bold uppercase tracking-widest font-kanit">{service.label}</span>
                                            </div>
                                            <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                                                {service.title}
                                            </h3>
                                            <p className="text-teal font-kanit text-lg mb-5">{service.claim}</p>
                                            <p className="text-base text-white/75 leading-relaxed mb-6">
                                                {service.desc}
                                            </p>
                                            <div className="text-sm text-white/55 pt-5 border-t border-white/5 mb-6">
                                                {service.detail}
                                            </div>
                                            <Link
                                                href={service.href}
                                                tabIndex={isActive ? 0 : -1}
                                                className="inline-flex items-center gap-2 text-teal font-semibold font-kanit hover:gap-3 transition-all"
                                            >
                                                Viac o oblasti <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Prepinac pilierov – je hned vidiet, ze su styri */}
                        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Štyri oblasti">
                            {servicesData.map((service, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <button
                                        key={service.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => setActiveIndex(index)}
                                        onMouseEnter={() => setIsHovering(true)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-kanit border transition-all duration-300 ${isActive
                                            ? "bg-teal text-navy-dark border-teal font-bold"
                                            : "bg-white/5 text-white/60 border-white/10 hover:text-white hover:border-teal/40"
                                            }`}
                                    >
                                        {index + 1}. {service.title}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
