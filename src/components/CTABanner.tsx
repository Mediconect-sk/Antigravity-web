'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagicalButton from './MagicalButton';

interface CTABannerProps {
    title?: string;
    description?: string;
    buttonText?: string;
    onClick?: () => void;
}

export default function CTABanner({ 
    title = "Pripravení posunúť vašu prax na novú úroveň?",
    description = "Rezervujte si 30-minútovú bezplatnú konzultáciu, kde spoločne identifikujeme najväčšie príležitosti pre váš rast.",
    buttonText = "Rezervovať bezplatnú konzultáciu",
    onClick
}: CTABannerProps) {
    const handleDefaultClick = () => {
        // Dispatch global event to open the contact modal
        window.dispatchEvent(new Event('open_contact_modal'));
    };

    return (
        <section className="py-24 relative z-10">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-navy-dark to-navy-dark border border-teal/20" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-[100px] animate-blob" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-[80px] animate-blob animation-delay-2000" />

                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-5xl font-bold font-kanit mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto font-stolzl">
                            {description}
                        </p>
                        <div className="flex justify-center">
                            <MagicalButton onClick={onClick || handleDefaultClick}>
                                <div className="flex items-center gap-2">
                                    {buttonText}
                                    <ArrowRight size={18} />
                                </div>
                            </MagicalButton>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
