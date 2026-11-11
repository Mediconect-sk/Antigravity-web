"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Shield, Check } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [hasStoredConsent, setHasStoredConsent] = useState(false);
    // GDPR: voliteľné kategórie musia byť predvolene VYPNUTÉ – predzaškrtnutý
    // súhlas nie je platný súhlas (rozsudok SDEÚ Planet49, C-673/17).
    const [preferences, setPreferences] = useState({
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Check if consent is already stored
        const storedConsent = localStorage.getItem("cookie_consent");
        if (!storedConsent) {
            // Delay showing the banner slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        } else {
            setHasStoredConsent(true);
            try {
                const parsed = JSON.parse(storedConsent);
                setPreferences({
                    analytics: parsed.analytics === true,
                    marketing: parsed.marketing === true,
                });
            } catch (e) { }
        }
    }, []);

    useEffect(() => {
        const handleOpenSettings = () => {
            setIsVisible(true);
            setShowSettings(true);
        };
        window.addEventListener('open_cookie_settings', handleOpenSettings);
        return () => window.removeEventListener('open_cookie_settings', handleOpenSettings);
    }, []);

    const handleAcceptAll = () => {
        const consent = {
            necessary: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem("cookie_consent", JSON.stringify(consent));
        setIsVisible(false);
        setHasStoredConsent(true);
        // Trigger potential GTM/Analytics initialization here if needed
        window.dispatchEvent(new Event("cookie_consent_updated"));
    };

    const handleDecline = () => {
        const consent = {
            necessary: true,
            analytics: false,
            marketing: false,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem("cookie_consent", JSON.stringify(consent));
        setIsVisible(false);
        setHasStoredConsent(true);
        window.dispatchEvent(new Event("cookie_consent_updated"));
    };

    const handleSaveSettings = () => {
        const consent = {
            necessary: true,
            analytics: preferences.analytics,
            marketing: preferences.marketing,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem("cookie_consent", JSON.stringify(consent));
        setIsVisible(false);
        setHasStoredConsent(true);
        window.dispatchEvent(new Event("cookie_consent_updated"));
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed bottom-0 left-0 right-0 z-[100] p-2 md:p-6"
                    >
                        <div className="max-w-5xl mx-auto glass-strong border border-teal/20 rounded-2xl p-3 md:p-6 shadow-2xl shadow-black/50 overflow-hidden relative">
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-[80px] pointer-events-none" />

                            {!showSettings ? (
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 md:gap-6 justify-between relative z-10">
                                    <div className="flex-1 md:space-y-3">
                                        {/* Na mobile je lišta nízky pás: bez ikony a nadpisu, len veta a tri tlačidlá v rade */}
                                        <div className="hidden md:flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                                                <Cookie size={20} />
                                            </div>
                                            <h3 className="text-lg font-bold text-white">Nastavenie súkromia</h3>
                                        </div>
                                        <p className="text-white/60 text-xs md:text-sm leading-snug md:leading-relaxed max-w-2xl">
                                            <span className="md:hidden">Cookies používame na fungovanie stránky a so súhlasom na meranie návštevnosti. </span>
                                            <span className="hidden md:inline">Používame súbory cookies na zabezpečenie správneho fungovania stránky, analýzu návštevnosti a personalizáciu marketingu v súlade s GDPR. </span>
                                            <a href="/zasady-cookies" className="text-teal font-semibold underline md:hidden">Zásady cookies</a>
                                        </p>
                                        <a href="/zasady-cookies" className="hidden md:inline-block text-teal text-xs font-semibold hover:underline mt-1">
                                            Zásady cookies →
                                        </a>
                                    </div>

                                    <div className="grid grid-cols-3 sm:flex sm:flex-row gap-2 md:gap-3 w-full lg:w-auto">
                                        <button
                                            onClick={() => setShowSettings(true)}
                                            className="px-2 md:px-6 py-2.5 md:py-3 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-xs md:text-sm font-medium"
                                        >
                                            Nastavenia
                                        </button>
                                        <button
                                            onClick={handleDecline}
                                            className="px-2 md:px-6 py-2.5 md:py-3 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-xs md:text-sm font-medium"
                                        >
                                            Odmietnuť
                                        </button>
                                        <button
                                            onClick={handleAcceptAll}
                                            className="px-2 md:px-8 py-2.5 md:py-3 rounded-xl bg-teal text-navy-dark font-bold hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/20 transition-all text-xs md:text-sm"
                                        >
                                            Prijať všetko
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6 relative z-10 w-full">
                                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                                        <h3 className="text-xl font-bold font-kanit text-white flex items-center gap-3">
                                            <Shield size={22} className="text-teal" />
                                            Predvoľby cookies
                                        </h3>
                                        <button
                                            onClick={() => setShowSettings(false)}
                                            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {/* Necessary */}
                                        <div className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 relative overflow-hidden">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal/50" />
                                            <div>
                                                <p className="font-bold text-white text-base">Nevyhnutné</p>
                                                <p className="text-white/40 text-sm mt-1 font-stolzl">Zabezpečujú základné funkcie a bezpečnosť (vždy zapnuté).</p>
                                            </div>
                                            <div className="flex items-center justify-center w-12 h-6 rounded-full bg-teal/20 border border-teal text-teal">
                                                <Check size={14} className="stroke-[3px]" />
                                            </div>
                                        </div>

                                        {/* Analytics */}
                                        <label className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 hover:border-teal/30 transition-all duration-300 group">
                                            <div>
                                                <p className="font-bold text-white text-base group-hover:text-teal transition-colors">Analytické</p>
                                                <p className="text-white/40 text-sm mt-1 font-stolzl">Pomáhajú nám rozumieť návštevnosti a vylepšovať váš zážitok.</p>
                                            </div>
                                            <div className="relative inline-flex items-center h-6 rounded-full w-12 transition-colors duration-300 ease-in-out">
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={preferences.analytics}
                                                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                                />
                                                <span className={`absolute inset-0 rounded-full transition-colors duration-300 ${preferences.analytics ? 'bg-teal border border-teal' : 'bg-navy-light/80 border border-white/20'}`} />
                                                <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-sm ${preferences.analytics ? 'translate-x-6' : 'translate-x-0'}`} />
                                            </div>
                                        </label>

                                        {/* Marketing */}
                                        <label className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 hover:border-teal/30 transition-all duration-300 group">
                                            <div>
                                                <p className="font-bold text-white text-base group-hover:text-teal transition-colors">Marketingové</p>
                                                <p className="text-white/40 text-sm mt-1 font-stolzl">Na prispôsobenie obsahu a meranie reklamných kampaní.</p>
                                            </div>
                                            <div className="relative inline-flex items-center h-6 rounded-full w-12 transition-colors duration-300 ease-in-out">
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={preferences.marketing}
                                                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                                />
                                                <span className={`absolute inset-0 rounded-full transition-colors duration-300 ${preferences.marketing ? 'bg-teal border border-teal' : 'bg-navy-light/80 border border-white/20'}`} />
                                                <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-sm ${preferences.marketing ? 'translate-x-6' : 'translate-x-0'}`} />
                                            </div>
                                        </label>
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-end items-center gap-4 pt-6 mt-2 border-t border-white/10">
                                        <button
                                            onClick={handleAcceptAll}
                                            className="w-full sm:w-auto px-6 py-3 rounded-full text-white/70 hover:text-white hover:bg-white/5 font-kanit font-medium transition-colors text-sm"
                                        >
                                            Prijať všetko znova
                                        </button>
                                        <button
                                            onClick={handleSaveSettings}
                                            className="w-full sm:w-auto px-8 py-3 rounded-full bg-teal text-navy-dark font-bold font-kanit hover:bg-teal/90 hover:scale-105 transition-all text-sm shadow-lg shadow-teal/10"
                                        >
                                            Uložiť nastavenia
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Plávajúca ikona cookies odstránená 11. 11. 2026 – na mobile prekrývala obsah.
                Nastavenia sa otvárajú odkazom „Nastavenia cookies“ v pätičke (udalosť open_cookie_settings). */}
        </>
    );
}
