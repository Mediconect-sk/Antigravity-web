/**
 * Náhľadové obrázky (Open Graph) podľa sekcie webu.
 *
 * Obrázok, ktorý ukáže WhatsApp, Facebook či LinkedIn pri zdieľaní odkazu,
 * nesie logo a názov sekcie – stránka o majetku tak neukazuje „zdravotníctvo".
 * PNG generuje route handler src/app/og/[sekcia]/route.tsx pri builde
 * (statické súbory /og/<sekcia>.png). Nová sekcia = nový záznam v OG_SECTIONS
 * a prefix v OG_PREFIXES.
 */

export type OgSection = {
    /** Názov sekcie pod logom; prázdny = len logo (to už nesie „medical business partner“). */
    subtitle: string;
    /** Alt text obrázka. */
    alt: string;
};

export const OG_SECTIONS = {
    "medical-business-partner": {
        subtitle: "",
        alt: "Mediconect – medical business partner",
    },
    "healthcare-marketing": {
        subtitle: "Healthcare marketing",
        alt: "Mediconect – Healthcare marketing pre lekárov a kliniky",
    },
    "business-partner": {
        subtitle: "Business partner pre ambulancie",
        alt: "Mediconect – Business partner pre ambulancie",
    },
    "sprava-a-ochrana-majetku": {
        subtitle: "Správa a ochrana majetku lekára",
        alt: "Mediconect – Správa a ochrana majetku lekára",
    },
} satisfies Record<string, OgSection>;

export type OgSectionKey = keyof typeof OG_SECTIONS;

/** Prvý zhodný prefix cesty určuje sekciu; ostatné stránky dostanú predvolenú. */
const OG_PREFIXES: [string, OgSectionKey][] = [
    ["/sprava-a-ochrana-majetku", "sprava-a-ochrana-majetku"],
    ["/business-partner", "business-partner"],
    ["/sluzby", "healthcare-marketing"],
    ["/pre-koho", "healthcare-marketing"],
];

export const OG_DEFAULT: OgSectionKey = "medical-business-partner";

export function ogSectionFor(path: string): OgSectionKey {
    const match = OG_PREFIXES.find(([prefix]) => path === prefix || path.startsWith(`${prefix}/`));
    return match ? match[1] : OG_DEFAULT;
}

export const OG_SIZE = { width: 1200, height: 630 } as const;

/** Cesta k obrázku sekcie (bez domény – tú dopĺňa src/lib/seo.ts). */
export function ogImagePath(section: OgSectionKey): string {
    return `/og/${section}.png`;
}
