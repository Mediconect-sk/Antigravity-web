import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, ORG, faqJsonLd, pageJsonLd, pageMetadata } from "@/lib/seo";
import { ALL_FAQ_ITEMS } from "./faq";
import Content from "./HomeContent";

const PATH = "/";

export const metadata: Metadata = pageMetadata(PATH);

/** Kontaktná osoba uvedená na stránke – posilňuje E-E-A-T aj entitu firmy. */
const contactPersonJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#tomas-kuchta`,
    name: "Tomáš Kuchta",
    jobTitle: "Sales & Operation Director",
    worksFor: { "@id": `${BASE_URL}/#organization` },
    email: ORG.email,
    telephone: ORG.phone,
    image: `${BASE_URL}/tomas_final.png`,
    url: `${BASE_URL}/#tym`,
};

export default function Page() {
    return (
        <>
            <JsonLd
                data={[...pageJsonLd(PATH), faqJsonLd(ALL_FAQ_ITEMS), contactPersonJsonLd]}
            />
            <Content />
        </>
    );
}
