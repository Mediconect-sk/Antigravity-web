'use client';

import React from 'react';
import { Compass, Building2, Landmark, Calculator, Scale } from 'lucide-react';
import AreaGrid, { type Area } from './AreaGrid';

/**
 * Päť podsekcií piliera Správa a ochrana majetku (Viktor 14. 10. 2026).
 * Daňové a právne služby poskytujú výhradne licencovaní partneri – Mediconect koordinuje.
 * Fotky: Unsplash, ID v CHANGELOG.md.
 */
export const WEALTH_AREAS: Area[] = [
    {
        href: '/sprava-a-ochrana-majetku/architektura-majetku',
        label: 'Architektúra majetku',
        claim: 'Jedna architektúra namiesto piatich riešení.',
        text: 'Finančná diagnóza, plán, ochrana, rast a renta poskladané do jedného celku s ročnou revíziou.',
        image: '/images/sprava-majetku/architektura-majetku.webp',
        alt: 'Dvaja ľudia prechádzajú finančné dokumenty pri stole',
        icon: <Compass size={22} />,
    },
    {
        href: '/sprava-a-ochrana-majetku/holdingova-struktura',
        label: 'Holdingová štruktúra',
        claim: 'Oddeľte zisk od istoty.',
        text: 'Materská spoločnosť, ktorá vlastní ambulanciu a stráži zarobené mimo dosahu prevádzkových rizík.',
        image: '/images/sprava-majetku/holdingova-struktura.webp',
        alt: 'Moderná sklenená administratívna budova',
        icon: <Building2 size={22} />,
    },
    {
        href: '/sprava-a-ochrana-majetku/nadacne-a-zverenecke-schemy',
        label: 'Nadačné a zverenecké schémy',
        claim: 'Majetok, ktorý sa nedelí, ale prechádza ďalej.',
        text: 'Nadácie, zverenecké a nadačné fondy aj zahraničné alternatívy pre prenos majetku na ďalšie generácie.',
        image: '/images/sprava-majetku/nadacne-a-zverenecke-schemy.webp',
        alt: 'Rodina s deťmi v objatí pri západe slnka',
        icon: <Landmark size={22} />,
    },
    {
        href: '/sprava-a-ochrana-majetku/danove-poradenstvo',
        label: 'Daňové poradenstvo',
        claim: 'Daňová efektivita v súlade so zákonom.',
        text: 'Vyplácanie zisku, štruktúra a plánovanie s daňovým poradcom – členom Slovenskej komory daňových poradcov.',
        image: '/images/sprava-majetku/danove-poradenstvo.webp',
        alt: 'Ruky pri kalkulačke a klávesnici na pracovnom stole',
        icon: <Calculator size={22} />,
    },
    {
        href: '/sprava-a-ochrana-majetku/pravne-sluzby',
        label: 'Právne služby',
        claim: 'Zmluvy a štruktúry, ktoré obstoja.',
        text: 'Holding, prevody, zmluvy a dedičské plánovanie s overenými advokátmi. Koordináciu preberáme my.',
        image: '/images/sprava-majetku/pravne-sluzby.webp',
        alt: 'Stretnutie pri podpise zmluvy',
        icon: <Scale size={22} />,
    },
];

export default function WealthAreas() {
    return (
        <AreaGrid
            eyebrow="Päť oblastí"
            title={<>Majetok, štruktúra <span className="text-gradient">a ochrana</span></>}
            text="Od celkovej architektúry majetku cez holding a nadácie až po daňové a právne služby – s jedným osobným partnerom."
            areas={WEALTH_AREAS}
        />
    );
}
