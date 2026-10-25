"use client";

import { useEffect } from "react";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { trackEvent } from "../lib/track";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Klik na telefón, e-mail a prechod na MyMedical sa meria jedným
 * poslucháčom na celom dokumente – netreba upravovať každý odkaz zvlášť.
 */
function useClickTracking() {
    useEffect(() => {
        const onClick = (ev: MouseEvent) => {
            const link = (ev.target as Element | null)?.closest?.("a[href]");
            if (!link) return;
            const href = link.getAttribute("href") ?? "";
            const props = { stranka: window.location.pathname };
            if (href.startsWith("tel:")) trackEvent("klik_telefon", props);
            else if (href.startsWith("mailto:")) trackEvent("klik_email", props);
            else if (href.includes("mymedical.sk")) trackEvent("klik_mymedical", props);
            else if (link.closest("[data-socialne-profily]")) {
                trackEvent("klik_socialna_siet", { ...props, siet: link.getAttribute("data-siet") ?? "" });
            }
        };
        document.addEventListener("click", onClick, { capture: true });
        return () => document.removeEventListener("click", onClick, { capture: true });
    }, []);
}

/**
 * Meranie webu – dve vrstvy:
 *
 * 1. Vercel Web Analytics + Speed Insights – bez cookies a bez osobných
 *    údajov, preto nevyžadujú súhlas v cookie lište a vidia 100 % návštev.
 *    Primárny zdroj čísel o návštevnosti a konverziách.
 * 2. Google Analytics 4 (nižšie) – voliteľné, zapína sa premennou
 *    NEXT_PUBLIC_GA_ID; potrebné až pri platených kampaniach.
 */
export default function SiteAnalytics() {
    useClickTracking();
    return (
        <>
            <VercelAnalytics />
            <SpeedInsights />
            <GoogleAnalytics />
        </>
    );
}

type ConsentState = { analytics: boolean; marketing: boolean };

function readConsent(): ConsentState {
    try {
        const raw = localStorage.getItem("cookie_consent");
        if (!raw) return { analytics: false, marketing: false };
        const parsed = JSON.parse(raw);
        return {
            analytics: parsed.analytics === true,
            marketing: parsed.marketing === true,
        };
    } catch {
        return { analytics: false, marketing: false };
    }
}

/**
 * Google Analytics 4 s Consent Mode v2.
 *
 * Skript sa načíta vždy, ale s odmietnutým súhlasom – GA teda pred súhlasom
 * neukladá žiadne cookies. Po potvrdení v cookie lište sa súhlas aktualizuje.
 *
 * Zapnutie: nastavte NEXT_PUBLIC_GA_ID (napr. "G-XXXXXXXXXX") v prostredí.
 * Bez tejto premennej sa nenačíta nič.
 */
function GoogleAnalytics() {
    useEffect(() => {
        if (!GA_ID) return;

        const applyConsent = () => {
            const { analytics, marketing } = readConsent();
            window.gtag?.("consent", "update", {
                analytics_storage: analytics ? "granted" : "denied",
                ad_storage: marketing ? "granted" : "denied",
                ad_user_data: marketing ? "granted" : "denied",
                ad_personalization: marketing ? "granted" : "denied",
            });
        };

        applyConsent();
        window.addEventListener("cookie_consent_updated", applyConsent);
        return () => window.removeEventListener("cookie_consent_updated", applyConsent);
    }, []);

    if (!GA_ID) return null;

    return (
        <>
            <Script id="ga-consent-default" strategy="beforeInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('consent', 'default', {
                        ad_storage: 'denied',
                        ad_user_data: 'denied',
                        ad_personalization: 'denied',
                        analytics_storage: 'denied',
                        functionality_storage: 'granted',
                        security_storage: 'granted',
                        wait_for_update: 500
                    });
                `}
            </Script>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', { anonymize_ip: true });
                `}
            </Script>
        </>
    );
}

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}
