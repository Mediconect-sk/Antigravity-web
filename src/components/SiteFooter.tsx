'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Smartphone, ExternalLink } from 'lucide-react';
import { ORDEVIA, ROUTES } from '@/lib/seo';

/** Odkazy sa generujú z ROUTES, takže footer nikdy nezaostane za sitemapou. */
const SERVICE_LINKS = Object.entries(ROUTES)
    .filter(([, route]) => route.parent === '/sluzby')
    .map(([path, route]) => ({ path, label: route.label }));

const SEGMENT_LINKS = Object.entries(ROUTES)
    .filter(([, route]) => route.parent === '/pre-koho')
    .map(([path, route]) => ({ path, label: route.label }));

function LinkColumn({
    title,
    href,
    links,
}: {
    title: string;
    href: string;
    links: { path: string; label: string }[];
}) {
    return (
        <div className="flex flex-col items-start text-left">
            <h4 className="font-semibold text-white/80 mb-4 font-kanit">
                <Link href={href} className="hover:text-teal transition-colors">
                    {title}
                </Link>
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/40 font-stolzl">
                {links.map((link) => (
                    <li key={link.path}>
                        <Link href={link.path} className="hover:text-teal transition-colors">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function SiteFooter() {
    return (
        <footer className="relative z-10 border-t border-white/5 bg-navy-dark/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col items-start text-left">
                        <Link href="/" className="flex items-center mb-6">
                            <Image
                                src="/Logo final.png"
                                alt="Mediconect – logo, strategický partner pre zdravotníctvo"
                                width={234}
                                height={59}
                                className="h-[58px] w-auto"
                            />
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs font-stolzl">
                            Vašu odbornosť meníme na dôveru. Inteligentný marketing pre ambulancie a kliniky 21. storočia s víziou a integritou.
                        </p>

                        {/* Priamy vstup do aplikácie Ordevia – pre pacientov aj kliniky */}
                        <a
                            href={ORDEVIA.loginUrl}
                            target="_blank"
                            rel="noopener"
                            className="group mt-6 flex w-full max-w-xs items-center gap-3 rounded-xl border border-teal/20 bg-teal/5 px-4 py-3 transition-all hover:border-teal/40 hover:bg-teal/10"
                        >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/15 text-teal">
                                <Smartphone size={18} />
                            </span>
                            <span className="flex flex-col">
                                <span className="text-sm font-semibold text-white/80 font-kanit transition-colors group-hover:text-teal">
                                    Aplikácia Ordevia
                                </span>
                                <span className="text-xs text-white/40 font-stolzl">Prihlásenie na moja.ordevia.sk</span>
                            </span>
                            <ExternalLink size={14} className="ml-auto text-white/30 transition-colors group-hover:text-teal" />
                        </a>
                    </div>

                    <LinkColumn title="Služby" href="/sluzby" links={SERVICE_LINKS} />

                    <LinkColumn title="Pre koho" href="/pre-koho" links={SEGMENT_LINKS} />

                    {/* Contact */}
                    <div className="flex flex-col items-start text-left">
                        <h4 className="font-semibold text-white/80 mb-4 font-kanit">Kontakt</h4>
                        <div className="flex flex-col gap-3 text-sm text-white/40 font-stolzl">
                            <a
                                href="mailto:info@mediconect.sk"
                                className="flex items-center gap-2 hover:text-teal transition-colors"
                            >
                                <Mail size={14} />
                                info@mediconect.sk
                            </a>
                            <a
                                href="tel:+421948220845"
                                className="flex items-center gap-2 hover:text-teal transition-colors"
                            >
                                <Phone size={14} />
                                +421 948 220 845
                            </a>
                            <address className="mt-4 pt-4 border-t border-white/10 not-italic">
                                <p>MediConect s.r.o.</p>
                                <p>Lounská 629/2</p>
                                <p>031 04 Liptovský Mikuláš</p>
                                <p>IČO: 57016615</p>
                                <p>IČ DPH: SK2122534216</p>
                            </address>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-white/30 font-stolzl">
                    <p>© {new Date().getFullYear()} Mediconect. Všetky práva vyhradené.</p>
                    <nav aria-label="Doplnkové odkazy">
                        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                            {[
                                { href: '/o-nas', label: 'O nás' },
                                { href: '/vysledky', label: 'Výsledky' },
                                { href: '/blog', label: 'Blog' },
                                { href: '/kontakt', label: 'Kontakt' },
                                { href: '/ochrana-osobnych-udajov', label: 'Ochrana osobných údajov' },
                                { href: '/zasady-cookies', label: 'Zásady cookies' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-teal transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("open_cookie_settings")); }}
                                    className="hover:text-teal transition-colors cursor-pointer"
                                >
                                    Nastavenia cookies
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
