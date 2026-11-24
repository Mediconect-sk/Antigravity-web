/**
 * Zdroj návštevy pre kampane (Meta, LinkedIn, newsletter…).
 *
 * Pri PRVEJ návšteve s UTM parametrami (alebo pri prvej návšteve vôbec)
 * uložíme do localStorage, odkiaľ lekár prišiel. Formuláre potom zdroj
 * pošlú spolu s údajmi, aby bolo v CRM vidieť, ktorá kampaň priniesla
 * dopyt (rozhodnutie Viktora 24. 11. 2026 – kampaň „previerka webu").
 *
 * Model „prvý dotyk": neskoršia návšteva bez UTM zdroj neprepíše,
 * návšteva s novými UTM áno (nová kampaň je silnejší signál).
 *
 * ⚠️ Žiadne osobné údaje – len parametre odkazu, vstupná stránka a doména,
 *    odkiaľ prišiel. localStorage môže byť zablokovaný → všetko v try/catch.
 */

const KLUC = 'mc_zdroj_v1';
const UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;

export type Zdroj = {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    vstup?: string;
    odkial?: string;
};

function orez(v: string | null | undefined, max = 80): string | undefined {
    const t = (v ?? '').trim();
    return t ? t.slice(0, max) : undefined;
}

/** Zavolať raz pri načítaní stránky (komponent ZachytZdroja). */
export function zachytZdroj(): void {
    try {
        const p = new URLSearchParams(window.location.search);
        const maUtm = UTM.some((k) => p.get(k));
        const ulozeny = localStorage.getItem(KLUC);
        if (ulozeny && !maUtm) return;

        let odkial: string | undefined;
        try {
            const r = document.referrer ? new URL(document.referrer) : null;
            if (r && r.hostname !== window.location.hostname) odkial = orez(r.hostname);
        } catch {
            odkial = undefined;
        }

        const z: Zdroj = { vstup: orez(window.location.pathname, 120), odkial };
        for (const k of UTM) z[k] = orez(p.get(k));
        // Meta pridáva fbclid, LinkedIn li_fat_id – zdroj spoznáme aj bez UTM.
        if (!z.utm_source && p.get('fbclid')) z.utm_source = 'meta';
        if (!z.utm_source && p.get('li_fat_id')) z.utm_source = 'linkedin';

        localStorage.setItem(KLUC, JSON.stringify(z));
    } catch {
        /* zablokované úložisko nesmie nič pokaziť */
    }
}

export function nacitajZdroj(): Zdroj {
    try {
        const t = localStorage.getItem(KLUC);
        return t ? (JSON.parse(t) as Zdroj) : {};
    } catch {
        return {};
    }
}

/** Krátky čitateľný zápis do CRM, napr. „meta / paid / previerka-nov26 / video1 · vstup /previerka-webu". */
export function zdrojAkoText(z: Zdroj = nacitajZdroj()): string {
    const kampan = [z.utm_source, z.utm_medium, z.utm_campaign, z.utm_content].filter(Boolean).join(' / ');
    const casti = [
        kampan || (z.odkial ? `odkaz z ${z.odkial}` : 'priama návšteva'),
        z.vstup ? `vstup ${z.vstup}` : null,
    ].filter(Boolean);
    return casti.join(' · ').slice(0, 250);
}
