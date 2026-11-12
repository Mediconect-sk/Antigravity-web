/**
 * Ordinačný index – znak (finálne logo od dizajnéra, verzia 1.0, november 2026; pozri brand_guidelines.md).
 *
 * Znak = písmeno „O" (ordinácia): kruh s tyrkysovým oblúkom (skóre)
 * a plnou bodkou v strede (ambulancia v centre pozornosti). Bez zdravotníckej symboliky.
 * Geometria je 1:1 podľa SVG z balíka logotypu (public/logo/ordinacny-index_znak*.svg).
 * Wordmark sa nikdy nekreslí v kóde – používa sa súbor public/logo/ordinacny-index_logo_*.svg (písmo Outfit).
 */
import React from 'react';

export const OI_TEAL = '#4CADB6';
export const OI_TEAL_LIGHT = '#88D5DB';

type Tone = 'dark' | 'light'; // dark = na tmavom podklade (negatív), light = na svetlom (pozitív)

// farby podľa logomanuálu: pozitív #0A2B40 + #3C97A3, negatív #F2F6F8 + #4CADB6
const TONES = {
    dark: { ring: '#F2F6F8', arc: '#4CADB6', center: '#F2F6F8' },
    light: { ring: '#0A2B40', arc: '#3C97A3', center: '#0A2B40' },
} as const;

export function OrdinacnyIndexSymbol({ size = 28, tone = 'dark', className }: { size?: number; tone?: Tone; className?: string }) {
    const c = TONES[tone];
    return (
        <svg viewBox="-14.8 -14.8 769.6 769.6" width={size} height={size} className={className} aria-hidden="true" focusable="false">
            <circle cx="370" cy="370" r="322.5" fill="none" stroke={c.ring} strokeWidth="95" />
            <path d="M370 47.5A322.5 322.5 0 1 1 47.5 370" fill="none" stroke={c.arc} strokeWidth="95" strokeLinecap="round" />
            <circle cx="370" cy="370" r="72" fill={c.center} />
        </svg>
    );
}
