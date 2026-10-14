'use client';

import { useState, useEffect, useRef, useCallback, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Smartphone, LogIn, ExternalLink, ArrowRight } from 'lucide-react';
import { MYMEDICAL, ORDEVIA } from '@/lib/seo';
import { OrdeviaSymbol, ORDEVIA_TEAL_LIGHT } from './OrdeviaLogo';

/**
 * Hlavné menu (rozhodnutie Viktora Struhára, 13. 10. 2026):
 * O nás | Business partner | Healthcare marketing ▾ |
 * Automatizácie a AI ▾ | Správa a ochrana majetku | MyMedical | Ordevia | Blog | [Konzultácia]
 * „Pre koho" je od 13. 10. 2026 súčasťou stránky O nás (/o-nas#pre-koho).
 *
 * Všetko sú hlavné sekcie na rovnakej úrovni (aj v mobilnom menu).
 *
 * - „Business partner" = sekcia pre majiteľov kliník a ambulancií (/business-partner).
 * - „Healthcare marketing" → Prehľad = /sluzby (filozofia, benefity, proces).
 * - „Dopyt" je výzva (tlačidlo) na konci rozbaľovacieho menu Healthcare marketing.
 * - Výsledky v menu zatiaľ nie sú (stránka /vysledky ostáva, odkaz je vo footeri).
 */
type NavLink = { label: string; href: string };
type NavGroup = { label: string; links: NavLink[]; cta?: NavLink };

const leadLinks: NavLink[] = [
    { label: 'O nás', href: '/o-nas' },
];

const businessGroup: NavGroup = {
    label: 'Business partner',
    links: [
        { label: 'Prehľad', href: '/business-partner' },
        { label: 'Štart vlastnej ambulancie', href: '/business-partner/start-vlastnej-ambulancie' },
        { label: 'Financovanie podnikania', href: '/business-partner/financovanie-podnikania' },
        { label: 'Obchodné partnerstvo', href: '/business-partner/obchodne-partnerstvo' },
        { label: 'Správa podnikateľských rizík', href: '/business-partner/sprava-podnikatelskych-rizik' },
        { label: 'Predaj kmeňa a prevádzky', href: '/business-partner/predaj-kmena-a-prevadzky' },
    ],
};

const marketingGroup: NavGroup = {
    label: 'Healthcare marketing',
    links: [
        { label: 'Prehľad', href: '/sluzby' },
        { label: 'Akvizícia pacientov', href: '/sluzby/akvizicia-a-vykonnostny-marketing' },
        { label: 'Web a SEO', href: '/sluzby/web-a-seo-pre-zdravotnictvo' },
        { label: 'Sociálne siete', href: '/sluzby/socialne-siete-pre-lekarov-a-kliniky' },
        // Akvizícia aj výkonnostný marketing sú zatiaľ na jednej stránke
        { label: 'Výkonnostný marketing', href: '/sluzby/akvizicia-a-vykonnostny-marketing' },
        { label: 'Email marketing', href: '/sluzby/email-marketing-a-praca-s-datami' },
        { label: 'Databáza pacientov', href: '/sluzby/databaza-pacientov-a-jej-aktivacia' },
    ],
    cta: { label: 'Dopyt', href: '/sluzby#dopyt' },
};

const automationGroup: NavGroup = {
    label: 'Automatizácie a AI',
    links: [
        { label: 'CRM a automatizácie', href: '/sluzby/crm-a-automatizacie' },
        { label: 'Umelá inteligencia', href: '/sluzby/umela-inteligencia-pre-ambulanciu' },
    ],
};


const assetGroup: NavGroup = {
    label: 'Správa a ochrana majetku',
    links: [
        { label: 'Prehľad', href: '/sprava-a-ochrana-majetku' },
        { label: 'Architektúra majetku', href: '/sprava-a-ochrana-majetku/architektura-majetku' },
        { label: 'Holdingová štruktúra', href: '/sprava-a-ochrana-majetku/holdingova-struktura' },
        { label: 'Nadačné a zverenecké schémy', href: '/sprava-a-ochrana-majetku/nadacne-a-zverenecke-schemy' },
        { label: 'Daňové poradenstvo', href: '/sprava-a-ochrana-majetku/danove-poradenstvo' },
        { label: 'Právne služby', href: '/sprava-a-ochrana-majetku/pravne-sluzby' },
    ],
};

const navGroups = [businessGroup, marketingGroup, automationGroup, assetGroup];

// Položky menu: jasnejší text, hover „pilulka“ a oddeľovače medzi sekciami (Viktor 13. 10. 2026: „splývajú“)
const linkBase = 'px-[5px] 2xl:px-[7px] py-1.5 rounded-lg text-[13px] 2xl:text-sm font-medium whitespace-nowrap transition-colors duration-300 font-stolzl';
const linkCls = `${linkBase} text-white/90 hover:text-teal hover:bg-white/[0.06]`;
const linkActiveCls = `${linkBase} text-teal bg-teal/10`;

/** Tenký zvislý oddeľovač medzi sekciami menu */
function NavSep() {
    return <span aria-hidden className="h-4 w-px bg-white/15" />;
}

/** Rozbaľovacie menu v desktopovej lište (hover aj klik). */
function NavDropdown({ group, open, onOpen, onClose, active = false }: { group: NavGroup; open: boolean; onOpen: () => void; onClose: () => void; active?: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!open) return;
        const handle = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) onClose();
        };
        document.addEventListener('mousedown', handle);
        return () => document.removeEventListener('mousedown', handle);
    }, [open, onClose]);

    return (
        <div className="relative" ref={ref} onMouseLeave={onClose}>
            <button
                onClick={() => (open ? onClose() : onOpen())}
                onMouseEnter={onOpen}
                aria-expanded={open}
                className={`flex items-center gap-0.5 cursor-pointer ${linkBase} ${
                    open || active ? 'text-teal bg-teal/10' : 'text-white/90 hover:text-teal hover:bg-white/[0.06]'
                }`}
            >
                {group.label}
                <ChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="w-full glass-strong rounded-2xl p-2 border border-teal/20 shadow-2xl overflow-hidden"
                        >
                            {group.links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={onClose}
                                    className="block px-4 py-3 text-sm text-white/60 hover:text-teal hover:bg-teal/5 rounded-xl transition-all duration-200 font-stolzl"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            {group.cta && (
                                <Link
                                    href={group.cta.href}
                                    onClick={onClose}
                                    className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-teal/50 text-teal font-bold text-xs uppercase tracking-wider hover:bg-teal/10 transition-all"
                                >
                                    {group.cta.label}
                                    <ArrowRight size={14} />
                                </Link>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

/**
 * Tlačidlo Ordevia v hlavičke – symbol + wordmark „ordevia" (Kanit 500, mínusky,
 * „via" v Teal Light podľa brand kitu).
 *
 * Symbol má zámerne 24 px – brand kit pod 24 px vnútorný ťah vynecháva a znak
 * by v tlačidle vyzeral ako otvorený kruh. Výšku tlačidla drží menší padding.
 */
function OrdeviaButton({ active, compact = false, className = '' }: { active: boolean; compact?: boolean; className?: string }) {
    return (
        <Link
            href={ORDEVIA.servicePath}
            aria-label="Ordevia Connect – systém pre kliniky"
            aria-current={active ? 'page' : undefined}
            className={`inline-flex items-center gap-2 rounded-xl border transition-all duration-300 ${
                compact ? 'px-2 py-[3px]' : 'px-3 py-[5px]'
            } ${
                active ? 'border-teal/70 bg-teal/15' : 'border-teal/30 bg-teal/5 hover:border-teal/60 hover:bg-teal/10'
            } ${className}`}
        >
            <OrdeviaSymbol size={24} />
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
    const [openGroup, setOpenGroup] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const onOrdevia = pathname === ORDEVIA.servicePath;
    /** Aktívna sekcia: presná stránka alebo jej podstránky (/blog/clanok) */
    const isActive = (href: string) => {
        const cesta = href.split('#')[0];
        if (!cesta || cesta === '/') return false;
        return pathname === cesta || (cesta !== '/sluzby' && pathname.startsWith(cesta + '/'));
    };

    const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
    const closeGroup = useCallback(() => setOpenGroup(null), []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            if (mobileMenuOpen) closeMobileMenu();
        };
        window.addEventListener('scroll', handleScroll);

        const handleClickOutside = (event: MouseEvent) => {
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
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    const mobileTop = 'text-lg font-bold font-kanit text-white hover:text-teal transition-colors py-1';
    const mobileSub = 'text-sm text-white/60 hover:text-teal font-stolzl py-1.5 transition-colors';

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
            {/* Hlavička je širšia ako obsah stránky – menu má 10 položiek */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex shrink-0 items-center group relative z-[60]">
                        <Image
                            src="/Logo final.png"
                            alt="Mediconect – logo, medical business partner"
                            width={234}
                            height={59}
                            priority
                            className="h-[54px] 2xl:h-[60px] w-auto transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop nav – od 1360 px (9 položiek sa na menšiu šírku nezmestí); pod tým hamburger */}
                    {/* „Domov" v lište nie je – na úvod vedie logo */}
                    <div className="hidden min-[1360px]:flex items-center">
                        {leadLinks.map((link) => (
                            <Fragment key={link.label}>
                                <Link href={link.href} className={isActive(link.href) ? linkActiveCls : linkCls}>
                                    {link.label}
                                </Link>
                                <NavSep />
                            </Fragment>
                        ))}

                        {navGroups.map((group) => (
                            <Fragment key={group.label}>
                                <NavDropdown
                                    group={group}
                                    open={openGroup === group.label}
                                    onOpen={() => setOpenGroup(group.label)}
                                    onClose={closeGroup}
                                    active={group.links.some((l) => isActive(l.href))}
                                />
                                <NavSep />
                            </Fragment>
                        ))}

                        {/* MyMedical beží na vlastnej doméne – obyčajný <a>, nie <Link> */}
                        <a href={MYMEDICAL.url} title={`${MYMEDICAL.name} – ${MYMEDICAL.tagline}`} className={linkCls}>
                            {MYMEDICAL.name}
                        </a>

                        <OrdeviaButton active={onOrdevia} className="mx-1" />

                        <Link href="/blog" className={isActive('/blog') ? linkActiveCls : linkCls}>
                            Blog
                        </Link>

                        <button
                            onClick={() => window.dispatchEvent(new Event('open_contact_modal'))}
                            className="ml-2 px-3 2xl:px-4 py-2.5 whitespace-nowrap bg-teal text-navy-dark font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-teal/90 transition-all duration-300 hover:shadow-lg hover:shadow-teal/25 cursor-pointer"
                        >
                            Konzultácia
                        </button>
                    </div>

                    {/* Mobil a tablet: Ordevia je vidno vždy, nielen v rozbalenom menu */}
                    <div className="min-[1360px]:hidden relative z-[60] flex items-center gap-2">
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                        onClick={closeMobileMenu}
                    />
                    <motion.div
                        ref={mobileMenuRef}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-[85vw] flex flex-col pt-20 px-6 pb-8 overflow-y-auto"
                        style={{ background: '#060f18' }}
                    >
                        <div className="flex flex-col gap-4">
                            <Link href="/" onClick={closeMobileMenu} className={mobileTop}>Domov</Link>

                            {leadLinks.map((link) => (
                                <Link key={link.label} href={link.href} onClick={closeMobileMenu} className={mobileTop}>
                                    {link.label}
                                </Link>
                            ))}

                            {navGroups.map((group) => (
                                <div key={group.label}>
                                    {/* Hlavná sekcia – rovnaký štýl ako ostatné položky, podpoložky odsadené */}
                                    <p className={mobileTop}>{group.label}</p>
                                    <div className="grid grid-cols-1 gap-1 pl-3 mt-1 border-l border-white/10">
                                        {group.links.map((link) => (
                                            <Link key={link.label} href={link.href} onClick={closeMobileMenu} className={mobileSub}>
                                                {link.label}
                                            </Link>
                                        ))}
                                        {group.cta && (
                                            <Link
                                                href={group.cta.href}
                                                onClick={closeMobileMenu}
                                                className="mt-1 inline-flex w-fit items-center gap-2 px-4 py-2 rounded-xl border border-teal/50 text-teal font-bold text-xs uppercase tracking-wider"
                                            >
                                                {group.cta.label}
                                                <ArrowRight size={13} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <a href={MYMEDICAL.url} onClick={closeMobileMenu} className="group py-1">
                                <span className="block text-lg font-bold font-kanit text-white group-hover:text-teal transition-colors">{MYMEDICAL.name}</span>
                                <span className="block text-xs text-white/40 font-stolzl">{MYMEDICAL.tagline}</span>
                            </a>

                            <div className="rounded-xl border border-teal/20 bg-teal/5 p-3">
                                <Link
                                    href={ORDEVIA.servicePath}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-2 text-sm font-semibold text-white font-kanit hover:text-teal transition-colors"
                                >
                                    <Smartphone size={16} className="text-teal" />
                                    Ordevia Connect
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

                            <Link href="/blog" onClick={closeMobileMenu} className={mobileTop}>Blog</Link>
                        </div>

                        <div className="mt-auto pt-6">
                            <button
                                onClick={() => { closeMobileMenu(); window.dispatchEvent(new Event('open_contact_modal')); }}
                                className="w-full py-3 bg-teal text-navy-dark font-bold text-sm text-center rounded-xl hover:bg-teal/90 transition-all cursor-pointer"
                            >
                                Bezplatná konzultácia
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </>
    );
}
