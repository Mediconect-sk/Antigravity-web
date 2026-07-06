'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
    return (
        <section className="relative pt-32 pb-20">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(78,205,196,0.1),transparent_70%)]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
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
