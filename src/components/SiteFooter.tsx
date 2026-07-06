'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function SiteFooter() {
    return (
        <footer className="relative z-10 border-t border-white/5 bg-navy-dark/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-start md:items-center text-left md:text-center">
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
                            <div className="mt-4 pt-4 border-t border-white/10 md:text-center text-left">
                                <p>MediConect s.r.o.</p>
                                <p>Lounská 629/2</p>
                                <p>031 04 Liptovský Mikuláš</p>
                                <p>IČO: 57016615</p>
                                <p>IČ DPH: SK2122534216</p>
                            </div>
                        </div>
                    </div>

                    {/* Legal + Blog */}
                    <div className="flex flex-col items-start md:items-end text-left md:text-right">
                        <h4 className="font-semibold text-white/80 mb-4 font-kanit">Právne</h4>
                        <div className="flex flex-col gap-3 text-sm text-white/40 items-start md:items-end font-stolzl">
                            <Link href="/blog" className="block hover:text-teal transition-colors font-medium text-white/60">
                                Blog
                            </Link>
                            <Link href="/ochrana-osobnych-udajov" className="block hover:text-teal transition-colors">
                                Ochrana osobných údajov
                            </Link>
                            <Link href="/zasady-cookies" className="block hover:text-teal transition-colors">
                                Zásady cookies
                            </Link>
                            <button
                                onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("open_cookie_settings")); }}
                                className="block hover:text-teal transition-colors md:text-right text-left cursor-pointer"
                            >
                                Nastavenia cookies (Súhlas)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 text-center text-sm text-white/30 font-stolzl">
                    © {new Date().getFullYear()} Mediconect. Všetky práva vyhradené.
                </div>
            </div>
        </footer>
    );
}
