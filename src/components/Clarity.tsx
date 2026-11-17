"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

/**
 * Microsoft Clarity – správanie návštevníka (mŕtve kliky, zúrivé kliky,
 * skrolovanie, nahrávky relácií).
 *
 * Dve pravidlá, na ktorých tento komponent stojí:
 *
 * 1. **Pred súhlasom sa nenačíta nič.** Na rozdiel od Google Analytics
 *    (Consent Mode) Clarity nemá režim „beží, ale neukladá". Skript sa
 *    preto do stránky vloží až vtedy, keď má návštevník v cookie lište
 *    zaškrtnutú analytiku. Bez súhlasu na stránke nie je ani riadok
 *    z clarity.ms – to je stav, ktorý web dnes má a nechceme ho stratiť.
 * 2. **Bez premennej `NEXT_PUBLIC_CLARITY_ID` sa nenačíta nič.** Rovnaký
 *    vzor ako `NEXT_PUBLIC_GA_ID`.
 *
 * Maskovanie citlivých polí nerieši kód, ale nastavenie projektu v Clarity
 * (Settings → Masking → **Strict**). Na zdravotníckom webe sa do formulárov
 * píšu údaje o zdraví a tie sa do nahrávok nesmú dostať. Jednotlivé prvky sa
 * dajú skryť atribútom `data-clarity-mask="true"`.
 *
 * Odhlásenie súhlasu: už načítanému skriptu sa pošle `clarity("consent", false)`.
 * Skript z bežiacej stránky odstrániť nevieme, preto sa po odvolaní súhlasu
 * ďalej nič nezbiera a nové načítanie stránky Clarity už nevloží.
 */
export default function Clarity() {
    const [povolene, setPovolene] = useState(false);

    useEffect(() => {
        if (!CLARITY_ID) return;

        const citajSuhlas = (): boolean => {
            try {
                const raw = localStorage.getItem("cookie_consent");
                if (!raw) return false;
                return JSON.parse(raw).analytics === true;
            } catch {
                return false;
            }
        };

        const uplatni = () => {
            const suhlas = citajSuhlas();
            setPovolene((predosle) => predosle || suhlas);
            window.clarity?.("consent", suhlas);
        };

        uplatni();
        window.addEventListener("cookie_consent_updated", uplatni);
        return () => window.removeEventListener("cookie_consent_updated", uplatni);
    }, []);

    if (!CLARITY_ID || !povolene) return null;

    return (
        <Script id="clarity" strategy="afterInteractive">
            {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
                window.clarity("consent");
            `}
        </Script>
    );
}

declare global {
    interface Window {
        clarity?: (...args: unknown[]) => void;
    }
}
