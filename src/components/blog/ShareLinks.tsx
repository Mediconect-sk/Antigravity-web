"use client";

import { useState } from "react";
import { Link2, Linkedin, Facebook, Check } from "lucide-react";

/** Zdieľanie článku – LinkedIn, Facebook a kopírovanie odkazu. */
export default function ShareLinks({ url, title }: { url: string; title: string }) {
    const [copied, setCopied] = useState(false);
    const encoded = encodeURIComponent(url);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* schránka nie je dostupná – ticho ignorovať */
        }
    };

    const item =
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 text-sm hover:text-teal hover:border-teal/20 transition-colors";

    return (
        <div className="flex flex-wrap items-center gap-3">
            <span className="text-white/35 text-sm mr-1">Zdieľať:</span>
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
                target="_blank"
                rel="noopener"
                className={item}
                aria-label={`Zdieľať na LinkedIn: ${title}`}
            >
                <Linkedin size={15} /> LinkedIn
            </a>
            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
                target="_blank"
                rel="noopener"
                className={item}
                aria-label={`Zdieľať na Facebooku: ${title}`}
            >
                <Facebook size={15} /> Facebook
            </a>
            <button type="button" onClick={copy} className={item}>
                {copied ? <Check size={15} className="text-teal" /> : <Link2 size={15} />}
                {copied ? "Skopírované" : "Kopírovať odkaz"}
            </button>
        </div>
    );
}
