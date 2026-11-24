'use client';

import { useEffect } from 'react';
import { zachytZdroj } from '@/lib/zdroj';

/** Neviditeľný komponent: pri načítaní uloží zdroj návštevy (src/lib/zdroj.ts). */
export default function ZachytZdroja() {
    useEffect(() => {
        zachytZdroj();
    }, []);
    return null;
}
