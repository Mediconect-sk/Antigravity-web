"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plus, Minus, Send, ChevronDown, X } from "lucide-react";
import MediconectForm from "@/components/MediconectForm";
import { FAQ_CATEGORIES, FAQ_GROUPS, type FaqCategory, type FaqItemData } from "@/app/(marketing)/sluzby/faq";

/**
 * FAQ o marketingu a výzva „Vyplňte nezáväzný dopyt" (#faq, #dopyt).
 * Presunuté z domovskej stránky na /sluzby (Healthcare marketing) 13. 10. 2026.
 * FAQPage schema sa generuje v /sluzby/page.tsx.
 */

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

/* ─── Zvýraznenie **takto** v texte odpovede ─── */
function renderEmphasis(text: string) {
    return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
        chunk.startsWith("**") && chunk.endsWith("**") ? (
            <strong key={i} className="text-white/80">
                {chunk.slice(2, -2)}
            </strong>
        ) : (
            <span key={i}>{chunk}</span>
        )
    );
}

/* ─── FAQ Accordion Item ─── */
/* Odpoveď je v DOM vždy (len vizuálne zbalená), aby ju videli vyhľadávače
   aj AI crawlery, ktoré nespúšťajú JavaScript ani neklikajú na accordion. */
function FAQItem({ item, id }: { item: FaqItemData; id: string }) {
    const [open, setOpen] = useState(false);
    const panelId = `${id}-panel`;

    return (
        <div className="border-b border-white/5">
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls={panelId}
                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
            >
                <span className="text-lg font-medium text-white/90 group-hover:text-teal transition-colors pr-8">
                    {item.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center transition-all group-hover:bg-teal/20">
                    {open ? <Minus size={16} className="text-teal" /> : <Plus size={16} className="text-teal" />}
                </span>
            </button>
            {/* Rozbalenie riesi CSS grid 0fr→1fr, nie framer-motion: animacie
                v tejto sekcii su gatovane variantmi rodica a panel by zostal
                zabaleny. Text je tak v DOM vzdy a accordion spolahlivo funguje. */}
            <div
                id={panelId}
                aria-hidden={!open}
                className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                style={{ maxHeight: open ? "60rem" : 0, opacity: open ? 1 : 0 }}
            >
                <div className="pb-6 text-white/60 leading-relaxed max-w-3xl space-y-4">
                    {item.answer && <p>{renderEmphasis(item.answer)}</p>}
                    {item.bullets && (
                        <ul className="space-y-2">
                            {item.bullets.map((bullet, i) => (
                                <li key={i}>• {renderEmphasis(bullet)}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─── Newsletter Form ─── */
export default function MarketingFaqInquiry() {
    const [faqCategory, setFaqCategory] = useState<FaqCategory>("spolupráca");
    const [isDopytOpen, setIsDopytOpen] = useState(false);
    const [formResetKey, setFormResetKey] = useState(0);

    return (
        <>
            {/* ═══════════════ FAQ ═══════════════ */}
            <Section className="py-24 lg:py-32 relative z-10" id="faq">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <motion.div variants={fadeUp} custom={0} className="text-center mb-10">
                        <span className="text-teal text-sm font-semibold uppercase tracking-widest">
                            FAQ
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-bold mt-4">
                            Často kladené <span className="text-gradient">otázky</span>
                        </h2>
                    </motion.div>

                    {/* Category tabs */}
                    <motion.div variants={fadeUp} custom={1} className="flex gap-2 justify-center mb-10 flex-wrap">
                        {FAQ_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFaqCategory(cat)}
                                aria-pressed={faqCategory === cat}
                                className={`px-5 py-2 rounded-full text-sm font-medium font-kanit capitalize transition-all duration-300 cursor-pointer ${faqCategory === cat
                                    ? "bg-teal text-navy-dark shadow-[0_0_16px_rgba(76, 173, 182,0.35)]"
                                    : "glass text-white/60 hover:text-teal hover:border-teal/30"
                                    }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </motion.div>

                    {/* Všetky kategórie zostávajú v DOM – neaktívne sú len skryté,
                        aby celý obsah FAQ videli aj crawlery, ktoré nespúšťajú JavaScript. */}
                    <motion.div variants={fadeUp} custom={2}>
                        {FAQ_CATEGORIES.map((cat) => (
                            <div key={cat} hidden={faqCategory !== cat}>
                                {FAQ_GROUPS[cat].map((item, i) => (
                                    <FAQItem key={item.question} item={item} id={`faq-${cat}-${i}`} />
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Section>

            {/* ═══════════════ KONTAKT (Nová sekcia) ═══════════════ */}
            <Section className="relative z-10 py-16 lg:py-24" id="dopyt">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Toggle card — always visible */}
                    <div
                        onClick={() => setIsDopytOpen(!isDopytOpen)}
                        className="glass-strong rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 hover:border-teal/40 hover:shadow-[0_0_30px_rgba(76, 173, 182,0.1)] transition-all duration-500 cursor-pointer group"
                    >
                        {/* Background glow */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-teal/10 rounded-full blur-[60px] pointer-events-none transition-all duration-500 group-hover:bg-teal/20" />
                        
                        {/* Left Side: Text and Icon */}
                        <div className="relative z-10 flex items-start gap-5 text-center lg:text-left flex-col lg:flex-row">
                            <div className="mx-auto lg:mx-0 p-4 bg-teal/10 rounded-2xl text-teal group-hover:scale-110 transition-transform duration-300">
                                <Send size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-bold font-kanit text-white mb-2 group-hover:text-teal transition-colors duration-300">
                                    Máte konkrétnu predstavu? Vyplňte nezáväzný dopyt
                                </h3>
                                <p className="text-white/60 text-sm md:text-base font-stolzl max-w-xl leading-relaxed">
                                    Pripravíme vám férový návrh marketingu na mieru vašej ambulancie či kliniky. Zaberie to len 3 minúty.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: CTA with rotating chevron */}
                        <div className="relative z-10 flex-shrink-0 w-full lg:w-auto">
                            <div className="w-full lg:w-auto px-6 py-4 bg-teal text-navy-dark font-semibold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-teal/90 transition-all duration-300 hover:shadow-lg hover:shadow-teal/25">
                                <span>{isDopytOpen ? 'Zbaliť dopyt' : 'Vyplniť podrobný dopyt'}</span>
                                <motion.div animate={{ rotate: isDopytOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    <ChevronDown size={18} />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Form container — stays mounted to preserve form data */}
                    <motion.div
                        initial={false}
                        animate={{
                            height: isDopytOpen ? "auto" : 0,
                            opacity: isDopytOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className="pt-8">
                            <MediconectForm key={formResetKey} endpoint="/api/dopyt" />

                            {/* Bottom controls */}
                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                                <button
                                    onClick={() => setFormResetKey(k => k + 1)}
                                    className="text-white/30 hover:text-white/60 transition-colors duration-300 text-xs flex items-center gap-1.5"
                                >
                                    <X size={12} />
                                    <span>Zresetovať formulár</span>
                                </button>
                                <button
                                    onClick={() => {
                                        document.getElementById('dopyt')?.scrollIntoView({ behavior: 'instant', block: 'start' });
                                        setIsDopytOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 px-4 py-2 border border-white/10 hover:border-white/20 rounded-xl text-sm"
                                >
                                    <span>Zbaliť formulár</span>
                                    <motion.div animate={{ rotate: 180 }}>
                                        <ChevronDown size={16} />
                                    </motion.div>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

        </>
    );
}
