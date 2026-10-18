'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { trail } from '@/lib/seo';
import KonzultaciaFormular from '@/components/KonzultaciaFormular';

export default function KonzultaciaContent() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail('/konzultacia')}
                title="Nezáväzná konzultácia"
                subtitle="Vyberte, čo dnes najviac riešite. Podľa odpovede vám položíme pár otázok a ozveme sa s návrhom ďalšieho kroku."
                badge="Konzultácia"
            />
            <section className="py-24 relative z-10">
                <div className="max-w-2xl mx-auto px-6 lg:px-8">
                    <KonzultaciaFormular />
                </div>
            </section>
        </div>
    );
}
