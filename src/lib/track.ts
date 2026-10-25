import { track } from "@vercel/analytics";

/**
 * Konverzné udalosti webu – jeden zoznam, aby sa názvy nerozišli.
 * Popis a vyhodnotenie: SEO.md, sekcia „Meranie návštevnosti a konverzií".
 */
export type ConversionEvent =
    | "dopyt_odoslany" // formulár dopytu (FAQ / služby)
    | "kontakt_odoslany" // formulár na /kontakt alebo kontaktné okno
    | "konzultacia_odoslana" // formulár Bezplatná konzultácia
    | "newsletter_prihlaseny" // prihlásenie na newsletter
    | "klik_telefon" // klik na tel: odkaz
    | "klik_email" // klik na mailto: odkaz
    | "klik_mymedical"; // prechod na mymedical.sk

type EventProps = Record<string, string | number | boolean | null>;

/**
 * Odošle udalosť do Vercel Web Analytics (bez cookies, nevyžaduje súhlas)
 * a súčasne do GA4, ak je zapnuté. GA4 beží v Consent Mode v2 – bez súhlasu
 * návštevníka neukladá cookies, udalosť len anonymne modeluje.
 *
 * Do vlastností NIKDY neposielať osobné údaje (meno, e-mail, telefón,
 * obsah správy) – len technický kontext ako formulár alebo stránka.
 */
export function trackEvent(name: ConversionEvent, props: EventProps = {}): void {
    try {
        track(name, props);
    } catch {
        /* meranie nesmie nikdy zablokovať formulár */
    }
    try {
        window.gtag?.("event", name, props);
    } catch {
        /* GA4 nemusí byť načítané */
    }
}
