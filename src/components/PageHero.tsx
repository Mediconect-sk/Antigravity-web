'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { Crumb } from '@/lib/seo';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    badge?: string;
    /** Drobčeková navigácia vrátane domovskej stránky – použite trail(path) zo src/lib/seo. */
    breadcrumbs?: Crumb[];
}

export default function PageHero({ title, subtitle, badge, breadcrumbs }: PageHeroProps) {
    return (
        <section className="relative pt-32 pb-20">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(78,205,196,0.1),transparent_70%)]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                {breadcrumbs && breadcrumbs.length > 1 && (
                    <nav aria-label="Drobčeková navigácia" className="mb-8">
                        <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-white/35 font-stolzl">
                            {breadcrumbs.map((crumb, i) => {
                                const isLast = i === breadcrumbs.length - 1;
                                return (
                                    <li key={crumb.path} className="flex items-center gap-2">
                                        {i > 0 && (
                                            <ChevronRight size={12} className="text-white/20" aria-hidden="true" />
                                        )}
                                        {isLast ? (
                                            <span aria-current="page" className="text-white/60">
                                                {crumb.name}
                                            </span>
                                        ) : (
                                            <Link
                                                href={crumb.path}
                                                className="hover:text-teal transition-colors"
                                            >
                                                {crumb.name}
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {badge && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-6">
                            <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                            <span className="text-teal text-xs font-bold uppercase tracking-widest font-kanit">
                                {badge}
                            </span>
                        </div>
                    )}
                    
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 font-kanit">
                        <span className="text-gradient">{title}</span>
                    </h1>
                    
                    {subtitle && (
                        <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto font-stolzl">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
