import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, ORDEVIA, ROUTES, absoluteUrl, faqJsonLd, pageJsonLd, pageMetadata } from "@/lib/seo";
import { ORDEVIA_FAQ } from "./faq";
import Content from "./Content";

const PATH = "/sluzby/webova-aplikacia-ordevia";

export const metadata: Metadata = pageMetadata(PATH);

/** Samotná aplikácia ako entita – aby ju Google aj AI vyhľadávače vedeli priradiť k Mediconectu. */
const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${absoluteUrl(PATH)}#app`,
    name: ORDEVIA.name,
    alternateName: "Ordevia",
    url: ORDEVIA.appUrl,
    description: ROUTES[PATH].description,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    browserRequirements: "Vyžaduje moderný webový prehliadač.",
    inLanguage: "sk-SK",
    offers: {
        "@type": "Offer",
        url: absoluteUrl(PATH),
        seller: { "@id": `${BASE_URL}/#organization` },
    },
};

export default function Page() {
    return (
        <>
            <JsonLd data={[...pageJsonLd(PATH), appJsonLd, faqJsonLd(ORDEVIA_FAQ)]} />
            <Content />
        </>
    );
}
