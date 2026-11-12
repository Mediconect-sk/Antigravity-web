'use client';

import { useState, useEffect, useRef, useCallback, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, LogIn, ExternalLink, ArrowRight } from 'lucide-react';
import { MYMEDICAL, ORDEVIA } from '@/lib/seo';
import { OrdeviaSymbol, ORDEVIA_TEAL, ORDEVIA_TEAL_LIGHT } from './OrdeviaLogo';
import { OrdinacnyIndexSymbol, OI_TEAL_LIGHT } from './OrdinacnyIndexLogo';

/**
 * Hlavné menu (rozhodnutie Viktora Struhára, 11. 11. 2026 – nahrádza menu z 13. 10. 2026):
 * O nás ▾ (O nás, Blog) | 4 piliere ▾ | MyMedical | [Ordevia] (poradie a presun Výsledkov: Viktor 12. 11. 2026); Ordinačný index a Konzultácia sú plávajúce tlačidlá vpravo dole (desktop), v mobilnom menu sú ako karta a položka
 *
 * - Piliere: Založenie a rast praxe (/business-partner), Healthcare marketing (/sluzby, v menu
 *   premenované z „Pacienti a marketing" 12. 11. 2026; obsahuje aj Výsledky),
 *   Automatizácie a AI, Správa a ochrana majetku. Adresy sa nemenia.
 * - „O nás“ ▾ je prvá položka lišty a obsahuje O nás a Blog.
 * - Jedna stránka = jeden odkaz (Akvizícia a výkonnostný marketing už nie sú dve položky).
 * - Na mobile sú sekcie zbalené cez <details> – obsah je stále v HTML (pravidlo v CLAUDE.md).
 * - Konzultácia je obyčajný odkaz na /konzultacia (funguje aj bez JavaScriptu a na stránke 404).
 */
type NavLink = { label: string; href: string };
type NavGroup = { label: string; links: NavLink[]; cta?: NavLink };

const businessGroup: NavGroup = {
    label: 'Založenie a rast praxe',
    links: [
        { label: 'Prehľad', href: '/business-partner' },
        { label: 'Štart vlastnej ambulancie', href: '/business-partner/start-vlastnej-ambulancie' },
        { label: 'Financovanie podnikania', href: '/business-partner/financovanie-podnikania' },
        { label: 'Efektívna ambulancia', href: '/business-partner/efektivna-a-ziskova-ambulancia' },
        { label: 'Obchodné partnerstvo', href: '/business-partner/obchodne-partnerstvo' },
        { label: 'Správa podnikateľských rizík', href: '/business-partner/sprava-podnikatelskych-rizik' },
        { label: 'Náborový management', href: '/business-partner/naborovy-management' },
        { label: 'Financovanie liečby', href: '/business-partner/financovanie-liecby' },
        { label: 'Zamestnanecké benefity', href: '/business-partner/zamestnanecke-benefity' },
        { label: 'Predaj kmeňa a praxe', href: '/business-partner/predaj-kmena-a-praxe' },
    ],
};

const marketingGroup: NavGroup = {
    label: 'Healthcare marketing',
    links: [
        { label: 'Prehľad', href: '/sluzby' },
        { label: 'Akvizícia a výkonnostný marketing', href: '/sluzby/akvizicia-a-vykonnostny-marketing' },
        { label: 'Web a SEO', href: '/sluzby/web-a-seo-pre-zdravotnictvo' },
        { label: 'Sociálne siete', href: '/sluzby/socialne-siete-pre-lekarov-a-kliniky' },
        { label: 'Email marketing', href: '/sluzby/email-marketing-a-praca-s-datami' },
        { label: 'Databáza pacientov', href: '/sluzby/databaza-pacientov-a-jej-aktivacia' },
        { label: 'Affiliate spolupráca', href: '/sluzby/affiliate-spolupraca' },
        // Osobná značka je marketingový nástroj, nie cieľová skupina (30. 10. 2026)
        { label: 'Osobná značka lekára', href: '/pre-koho/pre-osobne-znacky-lekarov' },
        // Výsledky sú dôkaz marketingu, preto patria sem, nie do „O nás" (Viktor 12. 11. 2026)
        { label: 'Výsledky', href: '/vysledky' },
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
        { label: 'Lifestyle Property', href: '/sprava-a-ochrana-majetku/lifestyle-property' },
        { label: 'Efektívna správa daní', href: '/sprava-a-ochrana-majetku/danove-poradenstvo' },
        { label: 'Právne služby', href: '/sprava-a-ochrana-majetku/pravne-sluzby' },
    ],
};

/** Štyri piliere – poradie podľa architektúry značky. */
const pillarGroups = [businessGroup, marketingGroup, automationGroup, assetGroup];

/** „O nás“ – firma a blog; v lište je prvá. MyMedical (vlastná doména) je samostatná položka v hlavnom menu. */
const aboutGroup: NavGroup = {
    label: 'O nás',
    links: [
        { label: 'O nás', href: '/o-nas' },
        { label: 'Blog', href: '/blog' },
    ],
};

const isExternal = (href: string) => href.startsWith('http');

// Položky menu: jasnejší text, hover „pilulka“ a oddeľovače medzi sekciami (Viktor 13. 10. 2026: „splývajú“)
const linkBase = 'px-[5px] py-1.5 rounded-lg text-[13px] font-medium whitespace-nowrap transition-colors duration-300 font-stolzl';
// Svetlý redizajn: navy text, hover tyrkysová mäkká pilulka, aktívna položka tyrkysový podklad
const linkCls = `${linkBase} text-white/85 hover:text-white hover:bg-white/10`;
const linkActiveCls = `${linkBase} text-[#041D2C] bg-teal`;

/** Tenký zvislý oddeľovač medzi sekciami menu */
function NavSep() {
    return <span aria-hidden className="h-4 w-px bg-white/15" />;
}

/** Rozbaľovacie menu v desktopovej lište (hover aj klik). */
function NavDropdown({ group, open, onOpen, onClose, active = false, alignRight = false }: { group: NavGroup; open: boolean; onOpen: () => void; onClose: () => void; active?: boolean; alignRight?: boolean }) {
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
                    open || active ? 'text-[#041D2C] bg-teal' : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
            >
                {group.label}
                <ChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <div className={`absolute top-full pt-2 w-72 ${alignRight ? 'right-0' : 'left-0'}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="w-full rounded-2xl p-2 bg-[#fff] border border-[#C9D0D4] border-t-[3px] border-t-[#4CADB6] shadow-[0_24px_60px_-18px_rgba(4,29,44,0.4)] overflow-hidden"
                        >
                            {group.links.map((link) => {
                                const cls = "block px-4 py-3 text-[15px] font-medium text-[#041D2C] hover:bg-[#EAF4F5] hover:pl-5 rounded-xl transition-all duration-200 font-stolzl";
                                return isExternal(link.href) ? (
                                    <a key={link.label} href={link.href} onClick={onClose} className={cls}>{link.label}</a>
                                ) : (
                                    <Link prefetch={false} key={link.label} href={link.href} onClick={onClose} className={cls}>
                                        {link.label}
                                    </Link>
                                );
                            })}
                            {group.cta && (
                                <Link prefetch={false}
                                    href={group.cta.href}
                                    onClick={onClose}
                                    className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#041D2C] text-[#FAFAF8] font-bold text-xs uppercase tracking-wider hover:bg-[#0C141A] transition-all"
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
 * Od 1440 px (bez `compact`) je to celý logotyp s dovetkom „Digitálna starostlivosť"
 * (rozhodnutie Viktora 12. 11. 2026): symbol 34 px, wordmark 21 px, dovetok verzálkami
 * v Teal. Hlavička má logo Mediconectu vysoké 54 px, takže vyššie tlačidlo ju nezväčší.
 *
 * Medzi 1280 a 1439 px ostáva pôvodná veľkosť bez dovetku – s dovetkom je tlačidlo
 * o 100 px širšie a pri 1280 px pretieklo za okraj okna (zmerané 12. 11. 2026).
 * Na mobile (`compact`) takisto bez dovetku. Symbol nikdy nejde pod 24 px – brand kit
 * pod 24 px vynecháva vnútorný ťah.
 */
function OrdeviaButton({ active, compact = false, className = '' }: { active: boolean; compact?: boolean; className?: string }) {
    return (
        <Link prefetch={false}
            href={ORDEVIA.servicePath}
            aria-label="Ordevia Connect – digitálna starostlivosť, systém pre kliniky"
            aria-current={active ? 'page' : undefined}
            className={`inline-flex items-center gap-2 rounded-xl border transition-all duration-300 ${
                compact ? 'px-2 py-[3px]' : 'px-3 py-[5px] min-[1440px]:gap-2.5 min-[1440px]:px-3.5 min-[1440px]:py-[7px]'
            } ${
                active ? 'border-teal/70 bg-teal/15' : 'border-teal/30 bg-teal/5 hover:border-teal/60 hover:bg-teal/10'
            } ${className}`}
        >
            <OrdeviaSymbol size={34} className={compact ? 'h-6 w-6' : 'h-6 w-6 min-[1440px]:h-[34px] min-[1440px]:w-[34px]'} />
            {/* Pod 360 px (compact) sa nápis nezmestí vedľa loga – zostane len symbol */}
            <span className={`flex flex-col gap-[5px] ${compact ? 'hidden min-[360px]:flex' : ''}`}>
                <span
                    className={`font-kanit leading-none text-white ${compact ? 'text-[14px]' : 'text-[15px] min-[1440px]:text-[21px]'}`}
                    style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                >
                    orde<span style={{ color: ORDEVIA_TEAL_LIGHT }}>via</span>
                </span>
                {!compact && (
                    <span
                        className="hidden min-[1440px]:block font-kanit uppercase leading-none whitespace-nowrap"
                        style={{ fontSize: 8.5, fontWeight: 500, letterSpacing: '0.16em', color: ORDEVIA_TEAL }}
                    >
                        Digitálna starostlivosť
                    </span>
                )}
            </span>
        </Link>
    );
}

/**
 * Samostatná viditeľná karta Ordinačného indexu v hlavnom menu (rozhodnutie Viktora 11. 11. 2026).
 * Znak + wordmark „ordinačný index" (index v Teal Light). Pod 360 px ostane len znak.
 */
function OrdinacnyIndexButton({ active, compact = false, className = '' }: { active: boolean; compact?: boolean; className?: string }) {
    return (
        <Link prefetch={false}
            href="/ordinacny-index"
            aria-label="Ordinačný index – mapa ambulancie a financií"
            aria-current={active ? 'page' : undefined}
            className={`inline-flex items-center gap-2 rounded-xl border transition-all duration-300 ${
                compact ? 'px-2 py-[3px]' : 'px-3 py-[5px]'
            } ${
                active ? 'border-teal/70 bg-teal/15' : 'border-teal/30 bg-teal/5 hover:border-teal/60 hover:bg-teal/10'
            } ${className}`}
        >
            <OrdinacnyIndexSymbol size={compact ? 24 : 26} tone="dark" />
            <span
                className={`font-stolzl leading-none text-white whitespace-nowrap ${compact ? 'hidden min-[420px]:inline' : ''}`}
                style={{ fontSize: compact ? 13 : 14.5, fontWeight: 500, letterSpacing: '-0.01em' }}
            >
                ordinačný <span style={{ color: OI_TEAL_LIGHT }}>index</span>
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
        return () => window.removeEventListener('scroll', handleScroll);
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
        <input
            id="mobile-menu-toggle"
            type="checkbox"
            className="peer sr-only"
            aria-label="Mobilné menu"
            checked={mobileMenuOpen}
            onChange={(e) => setMobileMenuOpen(e.target.checked)}
        />
        <nav
            className={`mc-dark fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? 'py-3 md:[backdrop-filter:blur(20px)]' : 'py-5'
            }`}
            style={{
                /* Tmavá lišta (navy) ako pätička – Viktor 31. 10. 2026 */
                background: scrolled ? 'rgba(10, 43, 64, 0.96)' : '#0A2B40',
                borderBottom: '1px solid rgba(136, 213, 219, 0.18)',
            }}
        >
            {/* Hlavička je širšia ako obsah stránky */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link prefetch={false} href="/" className="flex shrink-0 items-center group relative z-[60]">
                        <Image
                            src="/logo/mediconect_medical-business-partner_negat.svg"
                            alt="Mediconect – logo, medical business partner"
                            width={241}
                            height={73}
                            priority
                            className="h-[54px] 2xl:h-[60px] w-auto transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop nav – od 1280 px; pod 1440 px majú karty Ordinačný index a Ordevia len znak (aria-label ostáva), aby sa zmestilo tlačidlo Konzultácia (zmerané 11. 11. 2026); pod 1280 px hamburger. „Domov" v lište nie je – na úvod vedie logo */}
                    <div className="hidden min-[1280px]:flex items-center">
                        <NavDropdown
                            group={aboutGroup}
                            open={openGroup === aboutGroup.label}
                            onOpen={() => setOpenGroup(aboutGroup.label)}
                            onClose={closeGroup}
                            active={isActive('/o-nas') || isActive('/blog')}
                        />
                        <NavSep />

                        {pillarGroups.map((group) => (
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

                        <a href={MYMEDICAL.url} className={linkCls} title={`${MYMEDICAL.name} – ${MYMEDICAL.tagline}`}>
                            {MYMEDICAL.name}
                        </a>
                        <NavSep />

                        <OrdeviaButton active={onOrdevia} className="ml-1" />

                    </div>

                    {/* Mobil a tablet: Ordevia je vidno vždy, nielen v rozbalenom menu */}
                    <div className="min-[1280px]:hidden relative z-[60] flex items-center gap-2">
                        <OrdinacnyIndexButton active={isActive('/ordinacny-index')} compact />
                        <OrdeviaButton active={onOrdevia} compact />
                        <label
                            htmlFor="mobile-menu-toggle"
                            className="p-2 text-white/70 hover:text-teal transition-colors cursor-pointer"
                            aria-label={mobileMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </label>
                    </div>
                </div>
            </div>
        </nav>

        {/* Ordinačný index a Konzultácia mimo lišty: plávajúce tlačidlá vpravo dole na desktope (Viktor 11. 11. 2026 – lišta je zhustená, Ordevia musí mať nápis). Na mobile sú v menu, na vlastných stránkach sa neukazujú */}
        <div className="hidden min-[1280px]:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
            {!pathname.startsWith('/ordinacny-index') && (
                <div className="mc-dark rounded-xl shadow-lg shadow-black/25" style={{ background: '#0A2B40' }}>
                    <OrdinacnyIndexButton active={false} />
                </div>
            )}
            {pathname !== '/konzultacia' && (
                <Link
                    prefetch={false}
                    href="/konzultacia"
                    className="px-5 py-3 whitespace-nowrap bg-teal text-navy-dark font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-black/25 hover:bg-teal/90 transition-all duration-300 cursor-pointer"
                >
                    Konzultácia
                </Link>
            )}
        </div>

        {/* Mobilné menu – ovláda ho skrytý checkbox, takže sa dá otvoriť aj pred načítaním JavaScriptu */}
        <div
            className="fixed inset-0 z-40 bg-black/70 invisible opacity-0 peer-checked:visible peer-checked:opacity-100 peer-checked:transition-[opacity,visibility] peer-checked:duration-200"
            onClick={closeMobileMenu}
        />
        <div
            ref={mobileMenuRef}
            className="mc-dark fixed top-0 right-0 bottom-0 z-40 w-[300px] max-w-[85vw] flex flex-col pt-28 px-6 pb-8 overflow-y-auto invisible translate-x-full peer-checked:visible peer-checked:translate-x-0 peer-checked:transition-[transform,visibility] peer-checked:duration-200 peer-checked:ease-out"
            style={{ background: '#0A2B40' }}
        >
                        <div className="flex flex-col gap-3">
                            <Link prefetch={false} href="/" onClick={closeMobileMenu} className={mobileTop}>Domov</Link>

                            {/* Ordinačný index – karta navrchu mobilného menu */}
                            <Link prefetch={false} href="/ordinacny-index" onClick={closeMobileMenu}
                                className="flex items-center gap-3 rounded-xl border border-teal/40 bg-teal/10 p-3">
                                <OrdinacnyIndexSymbol size={34} tone="dark" />
                                <span className="flex flex-col leading-tight">
                                    <span className="font-stolzl text-white font-medium">ordinačný <span style={{ color: OI_TEAL_LIGHT }}>index</span></span>
                                    <span className="font-stolzl text-xs text-white/60">Mapa ambulancie a financií</span>
                                </span>
                            </Link>

                            <a href={MYMEDICAL.url} onClick={closeMobileMenu} className={mobileTop}>{MYMEDICAL.name}</a>

                            {/* Zbalené sekcie: <details> drží odkazy v HTML aj keď sú zavreté */}
                            {[aboutGroup, ...pillarGroups].map((group) => (
                                <Fragment key={group.label}>
                                    <details className="group/sekcia" open={group.links.some((l) => isActive(l.href))}>
                                        <summary className={`${mobileTop} flex items-center justify-between gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
                                            {group.label}
                                            <ChevronDown size={18} className="shrink-0 text-white/50 transition-transform duration-200 group-open/sekcia:rotate-180" />
                                        </summary>
                                        <div className="grid grid-cols-1 gap-1 pl-3 mt-1 mb-2 border-l border-white/10">
                                            {group.links.map((link) =>
                                                isExternal(link.href) ? (
                                                    <a key={link.label} href={link.href} onClick={closeMobileMenu} className={mobileSub}>{link.label}</a>
                                                ) : (
                                                    <Link prefetch={false} key={link.label} href={link.href} onClick={closeMobileMenu} className={mobileSub}>
                                                        {link.label}
                                                    </Link>
                                                )
                                            )}
                                            {group.cta && (
                                                <Link prefetch={false}
                                                    href={group.cta.href}
                                                    onClick={closeMobileMenu}
                                                    className="mt-1 inline-flex w-fit items-center gap-2 px-4 py-2 rounded-xl border border-teal/50 text-teal font-bold text-xs uppercase tracking-wider"
                                                >
                                                    {group.cta.label}
                                                    <ArrowRight size={13} />
                                                </Link>
                                            )}
                                        </div>
                                    </details>
                                </Fragment>
                            ))}

                            {/* Ordevia Connect má tlačidlo v lište (vždy viditeľné) – tu ostáva len prihlásenie pre pacientov */}
                            <a
                                href={ORDEVIA.loginUrl}
                                target="_blank"
                                rel="noopener"
                                onClick={closeMobileMenu}
                                className="mt-2 flex items-center gap-2 rounded-xl border border-teal/20 bg-teal/5 p-3 text-sm text-white/70 hover:text-teal font-stolzl transition-colors"
                            >
                                <LogIn size={15} className="text-teal" />
                                Ordevia – prihlásenie pre pacientov
                                <ExternalLink size={12} />
                            </a>
                        </div>

                        <div className="mt-auto pt-6">
                            <Link
                                prefetch={false}
                                href="/konzultacia"
                                onClick={closeMobileMenu}
                                className="block w-full py-3 bg-teal text-navy-dark font-bold text-sm text-center rounded-xl hover:bg-teal/90 transition-all cursor-pointer"
                            >
                                Bezplatná konzultácia
                            </Link>
                        </div>
        </div>
    </>
    );
}
