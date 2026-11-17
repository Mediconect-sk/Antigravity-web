'use client';

import React from 'react';
import Ikona from './Ikona';
import AreaGrid from './AreaGrid';

/**
 * Podsekcie piliera Business partner (Viktor 13. 10. 2026).
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
        alt: 'Kľúč vo dverách – otvárate vlastnú ambulanciu',
        icon: <Ikona name="rocket" size={28} />,
    },
    {
        href: '/business-partner/financovanie-podnikania',
        label: 'Financovanie podnikania',
        claim: 'Prístroje a priestory bez zbytočného čakania.',
        text: 'Úver, lízing alebo prenájom vybavenia – porovnanie ponúk, podklady pre banku a sprostredkovanie.',
        image: '/images/business-partner/financovanie-podnikania.webp',
        alt: 'Podanie rúk nad podpísanými dokumentmi',
        icon: <Ikona name="banknote" size={28} />,
    },
    {
        href: '/business-partner/efektivna-a-ziskova-ambulancia',
        label: 'Efektívna ambulancia',
        claim: 'Ambulancia, ktorá funguje aj bez vás pri telefóne.',
        text: 'Procesy, tím, vyťaženie hodín a prístrojov, cenník a kľúčové čísla – stabilná ekonomika praxe.',
        image: '/images/business-partner/efektivna-a-ziskova-ambulancia.webp',
        alt: 'Prehľad kľúčových čísel a grafov na obrazovke notebooku',
        icon: <Ikona name="trending" size={28} />,
    },
    {
        href: '/business-partner/obchodne-partnerstvo',
        label: 'Obchodné partnerstvo',
        claim: 'Sieť ambulancií Mediconect a program Štart.',
        text: 'Mentor zo siete, regionálna exkluzivita a kapitálový vstup s opciou na odkúpenie podielu.',
        image: '/images/business-partner/obchodne-partnerstvo.webp',
        alt: 'Dielik skladačky zapadajúci na svoje miesto',
        icon: <Ikona name="handshake" size={28} />,
    },
    {
        href: '/business-partner/sprava-podnikatelskych-rizik',
        label: 'Správa podnikateľských rizík',
        claim: 'Výsledkom nie je poistka, ale istota.',
        text: 'Zodpovednosť, výpadok príjmu, prerušenie prevádzky a údaje pacientov – skryté riziká a ochrana, ktorá zafunguje.',
        image: '/images/business-partner/sprava-podnikatelskych-rizik.webp',
        alt: 'Lekárka pri počítači, vedľa leží stetoskop',
        icon: <Ikona name="shield-alert" size={28} />,
    },
    {
        href: '/business-partner/naborovy-management',
        label: 'Náborový management',
        claim: 'Výberové konanie, ktoré nevedie lekár popri ordinovaní.',
        text: 'Výber sestry, lekára aj ďalšieho zdravotníckeho personálu – oslovenie, predvýber, pohovory a zapracovanie, všetko prehľadne v Ordevii.',
        image: '/images/business-partner/naborovy-management.webp',
        alt: 'Životopis na podložke vedľa notebooku',
        icon: <Ikona name="user-plus" size={28} />,
    },
    {
        href: '/business-partner/financovanie-liecby',
        label: 'Financovanie liečby',
        claim: 'Pacient dostane riešenie. Klinika dostane pacienta.',
        text: 'Financovanie nákladnej liečby pre pacientov a financovanie prístrojov pre kliniky. Celý proces zabezpečíme, online vybavenie do 24 hodín.',
        image: '/images/business-partner/financovanie-podnikania.webp',
        alt: 'Riešenie financovania na pracovisku',
        icon: <Ikona name="stethoscope" size={28} />,
    },
    {
        href: '/business-partner/zamestnanecke-benefity',
        label: 'Zamestnanecké benefity',
        claim: 'Dôvod, prečo dobrí ľudia zostávajú.',
        text: 'Program výhod pre váš tím – bývanie, financie, poistenie, dôchodok a finančné vzdelávanie s partnermi myLife a TUreality.',
        image: '/images/business-partner/zamestnanecke-benefity.webp',
        alt: 'Kľúče od nového bývania medzi modelmi domov',
        icon: <Ikona name="gift" size={28} />,
    },
    {
        href: '/business-partner/predaj-kmena-a-praxe',
        label: 'Predaj kmeňa a praxe',
        claim: 'Odovzdanie praxe s rešpektom k pacientom.',
        text: 'Ocenenie ambulancie, nástupca, forma prevodu a citlivé odovzdanie pacientov.',
        image: '/images/business-partner/predaj-kmena-a-praxe.webp',
        alt: 'Skúsený lekár v pracovni svojej ambulancie',
        icon: <Ikona name="key" size={28} />,
    },
];

/** Mriežka podsekcií s fotkou a ikonou (prehľad /business-partner). */
export default function BusinessPartnerAreas() {
    return (
        <AreaGrid
            eyebrow="Sedem oblastí"
            title={<>S čím vám <span className="text-gradient">pomôžeme</span></>}
            text="Od otvorenia vlastnej ambulancie cez financovanie, efektívnu prevádzku, rast v sieti, ochranu pred rizikami a benefity pre tím až po odovzdanie nástupcovi."
            areas={BP_AREAS}
        />
    );
}
