'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Smartphone, LogIn, ExternalLink } from 'lucide-react';
import { ORDEVIA } from '@/lib/seo';
import { OrdeviaSymbol, ORDEVIA_TEAL_LIGHT } from './OrdeviaLogo';

const serviceLinks = [
    { label: 'Všetky služby', href: '/sluzby' },
    { label: 'Akvizícia a marketing', href: '/sluzby/akvizicia-a-vykonnostny-marketing' },
    { label: 'Web a SEO', href: '/sluzby/web-a-seo-pre-zdravotnictvo' },
    { label: 'Sociálne siete', href: '/sluzby/socialne-siete-pre-lekarov-a-kliniky' },
    { label: 'Email marketing', href: '/sluzby/email-marketing-a-praca-s-datami' },
    { label: 'CRM a automatizácie', href: '/sluzby/crm-a-automatizacie' },
    { label: 'Umelá inteligencia', href: '/sluzby/umela-inteligencia-pre-ambulanciu' },
    { label: 'Databáza pacientov', href: '/sluzby/databaza-pacientov-a-jej-aktivacia' },
];

const mainLinks = [
    { label: 'Pre koho', href: '/pre-koho' },
    { label: 'Výsledky', href: '/vysledky' },
    { label: 'O nás', href: '/o-nas' },
    { label: 'Blog', href: '/blog' },
];

/**
 * Tlačidlo Ordevia v hlavičke – symbol + wordmark „ordevia" (Kanit 500, mínusky,
 * „via" v Teal Light podľa brand kitu). Pod 24 px sa vnútorný ťah symbolu vynecháva.
 */
function OrdeviaButton({ active, compact = false, className = '' }: { active: boolean; compact?: boolean; className?: string }) {
    return (
        <Link
            href={ORDEVIA.servicePath}
            aria-label="Ordevia Connect – systém pre kliniky"
            aria-current={active ? 'page' : undefined}
            className={`inline-flex items-center gap-2 rounded-xl border transition-all duration-300 ${
                compact ? 'px-2.5 py-1.5' : 'px-3.5 py-2'
            } ${
                active ? 'border-teal/70 bg-teal/15' : 'border-teal/30 bg-teal/5 hover:border-teal/60 hover:bg-teal/10'
            } ${className}`}
        >
            <OrdeviaSymbol size={compact ? 16 : 18} />
            {/* Pod 360 px (compact) sa nápis nezmestí vedľa loga – zostane len symbol */}
            <span
                className={`font-kanit leading-none text-white ${compact ? 'hidden min-[360px]:inline' : ''}`}
                style={{ fontSize: compact ? 14 : 15, fontWeight: 500, letterSpacing: '-0.01em' }}
            >
                orde<span style={{ color: ORDEVIA_TEAL_LIGHT }}>via</span>
            </span>
        </Link>
    );
}

export default function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const onOrdevia = usePathname() === ORDEVIA.servicePath;

    const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            // Close mobile menu on scroll
            if (mobileMenuOpen) closeMobileMenu();
        };
        window.addEventListener('scroll', handleScroll);
        
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setServicesOpen(false);
            }
            // Close mobile menu when clicking outside
            if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                closeMobileMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileMenuOpen, closeMobileMenu]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    return (
        <>
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? 'py-3' : 'py-5'
            }`}
            style={{
                background: scrolled 
                    ? 'rgba(6, 15, 24, 0.85)' 
                    : 'linear-gradient(to bottom, #060f18 0%, rgba(6,15,24,0.6) 60%, transparent 100%)',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group relative z-[60]">
                        <Image
                            src="/Logo final.png"
                            alt="Mediconect – logo, healthcare marketing agentúra"
                            width={234}
                            height={59}
                            priority
                            className="h-[45px] lg:h-[52px] w-auto transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop nav links */}
                    {/* „Domov" v lište nie je – na úvod vedie logo; miesto patrí tlačidlu Ordevia */}
                    <div className="hidden lg:flex items-center gap-1">
                        {/* Services Dropdown */}
                        <div className="relative" ref={dropdownRef} onMouseLeave={() => setServicesOpen(false)}>
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                onMouseEnter={() => setServicesOpen(true)}
                                className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm transition-colors duration-300 font-stolzl cursor-pointer ${
                                    servicesOpen ? 'text-teal' : 'text-white/70 hover:text-teal'
                                }`}
                            >
                                Služby
                                <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {servicesOpen && (
                                    <div className="absolute top-full left-0 pt-2 w-64">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="w-full glass-strong rounded-2xl p-2 border border-teal/20 shadow-2xl overflow-hidden"
                                    >
                                        {serviceLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setServicesOpen(false)}
                                                className="block px-4 py-3 text-sm text-white/60 hover:text-teal hover:bg-teal/5 rounded-xl transition-all duration-200 font-stolzl"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}

                                        {/* Ordevia má aj vlastné tlačidlo v lište; tu zostáva pre tých, čo prechádzajú služby */}
                                        <div className="my-2 h-px bg-white/5" />
                                        <Link
                                            href={ORDEVIA.servicePath}
                                            onClick={() => setServicesOpen(false)}
                                            className="flex items-center justify-between gap-2 px-4 py-3 text-sm text-white/80 hover:text-teal hover:bg-teal/5 rounded-xl transition-all duration-200 font-stolzl"
                                        >
                                            <span className="flex items-center gap-2">
                                                <Smartphone size={15} className="text-teal" />
                                                Ordevia Connect
                                            </span>
                                            <span className="rounded-full bg-teal/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal">
                                                Nové
                                            </span>
                                        </Link>
                                        <a
                                            href={ORDEVIA.loginUrl}
                                            target="_blank"
                                            rel="noopener"
                                            onClick={() => setServicesOpen(false)}
                                            className="flex items-center gap-2 px-4 py-2.5 text-xs text-white/40 hover:text-teal hover:bg-teal/5 rounded-xl transition-all duration-200 font-stolzl"
                                        >
                                            <LogIn size={13} />
                                            Prihlásenie pre pacientov
                                            <ExternalLink size={11} className="ml-auto" />
                                        </a>
                                    </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        {mainLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-3 xl:px-4 py-2 text-sm text-white/70 hover:text-teal transition-colors duration-300 font-stolzl"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <OrdeviaButton active={onOrdevia} className="ml-1 xl:ml-2" />

                        <div className="ml-3 xl:ml-4 flex items-center gap-3">
                            <button
                                onClick={() => window.dispatchEvent(new Event('open_contact_modal'))}
                                className="px-5 py-2.5 bg-teal text-navy-dark font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-teal/90 transition-all duration-300 hover:shadow-lg hover:shadow-teal/25 cursor-pointer"
                            >
                                Konzultácia
                            </button>
                            <Link
                                href="/#dopyt"
                                className="px-5 py-2.5 border border-teal/50 text-teal font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-teal/10 transition-all duration-300"
                            >
                                Dopyt
                            </Link>
                        </div>
                    </div>

                    {/* Mobil: Ordevia je vidno vždy, nielen v rozbalenom menu */}
                    <div className="lg:hidden relative z-[60] flex items-center gap-2">
                        <OrdeviaButton active={onOrdevia} compact />
                        <button
                            className="p-2 text-white/70 hover:text-teal transition-colors cursor-pointer"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

        </nav>

        {/* Mobile Menu — rendered outside nav for correct fixed positioning */}
        <AnimatePresence>
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                        onClick={closeMobileMenu}
                    />
                    {/* Panel */}
                    <motion.div
                        ref={mobileMenuRef}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 z-50 w-[280px] max-w-[80vw] flex flex-col pt-20 px-6 pb-8 overflow-y-auto"
                        style={{ background: '#060f18' }}
                    >
                        <div className="flex flex-col gap-4">
                            <Link 
                                href="/" 
                                onClick={closeMobileMenu}
                                className="text-lg font-bold font-kanit text-white hover:text-teal transition-colors py-1"
                            >
                                Domov
                            </Link>
                            
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest font-kanit">Služby</p>
                                <div className="grid grid-cols-1 gap-1 pl-3">
                                    {serviceLinks.map((link) => (
                                        <Link 
                                            key={link.href}
                                            href={link.href}
                                            onClick={closeMobileMenu}
                                            className="text-sm text-white/60 hover:text-teal font-stolzl py-1.5 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl border border-teal/20 bg-teal/5 p-3">
                                <Link
                                    href={ORDEVIA.servicePath}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-2 text-sm font-semibold text-white font-kanit hover:text-teal transition-colors"
                                >
                                    <Smartphone size={16} className="text-teal" />
                                    Ordevia Connect
                                    <span className="ml-auto rounded-full bg-teal/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal">
                                        Nové
                                    </span>
                                </Link>
                                <a
                                    href={ORDEVIA.loginUrl}
                                    target="_blank"
                                    rel="noopener"
                                    onClick={closeMobileMenu}
                                    className="mt-2 flex items-center gap-2 text-xs text-white/50 hover:text-teal font-stolzl transition-colors"
                                >
                                    <LogIn size={13} />
                                    Prihlásenie pre pacientov
                                    <ExternalLink size={11} />
                                </a>
                            </div>

                            <div className="h-px bg-white/5 my-2" />

                            {mainLinks.map((link) => (
                                <Link 
                                    key={link.href}
                                    href={link.href} 
                                    onClick={closeMobileMenu}
                                    className="text-lg font-bold font-kanit text-white hover:text-teal transition-colors py-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-3 pt-6">
                            <button
                                onClick={() => { closeMobileMenu(); window.dispatchEvent(new Event('open_contact_modal')); }}
                                className="w-full py-3 bg-teal text-navy-dark font-bold text-sm text-center rounded-xl hover:bg-teal/90 transition-all cursor-pointer"
                            >
                                Bezplatná konzultácia
                            </button>
                            <Link
                                href="/#dopyt"
                                onClick={closeMobileMenu}
                                className="w-full py-3 border border-teal/50 text-teal font-bold text-sm text-center rounded-xl hover:bg-teal/10 transition-all"
                            >
                                Nezáväzný dopyt
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </>
    );
}
