"use client";

import { useEffect } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
export default function Analytics() {
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
