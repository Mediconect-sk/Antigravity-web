'use client';

import React from 'react';
import { Rocket, Banknote, Handshake, KeyRound } from 'lucide-react';
import AreaGrid from './AreaGrid';

/**
 * Štyri podsekcie piliera Business partner (Viktor 13. 10. 2026).
 * Jeden zdroj pre prehľad na /business-partner, menu a prelinkovanie podstránok.
 * Fotky: Unsplash (licencia Unsplash), zdroj a ID v CHANGELOG.md.
 */
export const BP_AREAS = [
    {
        href: '/business-partner/start-vlastnej-ambulancie',
        label: 'Štart vlastnej ambulancie',
        claim: 'Od rozhodnutia po prvého pacienta.',
        text: 'Lokalita, biznis plán, povolenie VÚC, zmluvy s poisťovňami, priestory a vybavenie v jednom harmonograme.',
        image: '/images/business-partner/start-vlastnej-ambulancie.webp',
        alt: 'Nová, zariadená vyšetrovňa pripravená na prvého pacienta',
        icon: <Rocket size={22} />,
    },
    {
        href: '/business-partner/financovanie-podnikania',
        label: 'Financovanie podnikania',
        claim: 'Prístroje a priestory bez zbytočného čakania.',
        text: 'Úver, lízing alebo prenájom vybavenia – porovnanie ponúk, podklady pre banku a sprostredkovanie.',
        image: '/images/business-partner/financovanie-podnikania.webp',
        alt: 'Podanie rúk nad podpísanými dokumentmi',
        icon: <Banknote size={22} />,
    },
    {
        href: '/business-partner/obchodne-partnerstvo',
        label: 'Obchodné partnerstvo',
        claim: 'Sieť ambulancií Mediconect a program Štart.',
        text: 'Mentor zo siete, regionálna exkluzivita a kapitálový vstup s opciou na odkúpenie podielu.',
        image: '/images/business-partner/obchodne-partnerstvo.webp',
        alt: 'Dvaja zdravotníci konzultujú postup nad dokumentmi',
        icon: <Handshake size={22} />,
    },
    {
        href: '/business-partner/predaj-kmena-a-prevadzky',
        label: 'Predaj kmeňa a prevádzky',
        claim: 'Odovzdanie praxe s rešpektom k pacientom.',
        text: 'Ocenenie ambulancie, nástupca, forma prevodu a citlivé odovzdanie pacientov.',
        image: '/images/business-partner/predaj-kmena-a-prevadzky.webp',
        alt: 'Skúsený lekár v pracovni svojej ambulancie',
        icon: <KeyRound size={22} />,
    },
];

/** Mriežka štyroch podsekcií s fotkou a ikonou (prehľad /business-partner). */
export default function BusinessPartnerAreas() {
    return (
        <AreaGrid
            eyebrow="Štyri oblasti"
            title={<>S čím vám <span className="text-gradient">pomôžeme</span></>}
            text="Od otvorenia vlastnej ambulancie cez jej financovanie a rast v sieti až po odovzdanie nástupcovi."
            areas={BP_AREAS}
        />
    );
}
