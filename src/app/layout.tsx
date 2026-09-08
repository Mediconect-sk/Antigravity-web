import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";
import ScrollGradientBackground from "../components/ScrollGradientBackground";
import JsonLd from "../components/JsonLd";
import Analytics from "../components/Analytics";
import { BASE_URL, ORG, ROUTES, SOCIAL_PROFILES } from "../lib/seo";

const kanit = Kanit({
    subsets: ["latin", "latin-ext"],
    weight: ["300", "400", "500", "600", "700", "900"],
    variable: "--font-kanit",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: ROUTES["/"].title,
        template: `%s | ${ORG.name}`,
    },
    description: ROUTES["/"].description,
    keywords: [
        "marketing pre lekárov",
        "zdravotnícky marketing",
        "akvizícia pacientov",
        "mediconect",
        "marketing klinika",
        "marketing ambulancia",
        "digitálny marketing zdravotníctvo",
        "SEO pre lekárov",
        "sociálne siete ambulancia",
        "email marketing lekár",
        "CRM zdravotníctvo",
        "umelá inteligencia medicína",
        "healthcare marketing Slovakia",
    ],
    authors: [{ name: ORG.legalName, url: BASE_URL }],
    creator: ORG.legalName,
    publisher: ORG.legalName,
    // POZOR: tu zámerne NIE JE `alternates.canonical`.
    // Root metadata sa dedia do všetkých podstránok, takže canonical nastavený
    // tu by každej podstránke povedal, že jej kanonickou verziou je domovská
    // stránka – a Google by ju prestal indexovať. Canonical rieši pageMetadata()
    // v src/lib/seo.ts pre každú stránku zvlášť.
    openGraph: {
        title: ROUTES["/"].title,
        description: ROUTES["/"].description,
        url: BASE_URL,
        siteName: ORG.name,
        locale: "sk_SK",
        type: "website",
        images: [
            {
                url: `${BASE_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: "Mediconect – Strategický partner pre zdravotníctvo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: ROUTES["/"].title,
        description: ROUTES["/"].description,
        images: [`${BASE_URL}/og-image.png`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
            ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
            : undefined,
    },
    icons: {
        icon: "/Favikona web.png",
        shortcut: "/Favikona web.png",
        apple: "/Favikona web.png",
    },
};

const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: ORG.street,
    addressLocality: ORG.city,
    postalCode: ORG.postalCode,
    addressCountry: ORG.country,
};

const areaServed = [
    { "@type": "Country", name: "Slovakia" },
    { "@type": "Country", name: "Czech Republic" },
];

const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${BASE_URL}/#organization`,
            name: ORG.legalName,
            alternateName: ORG.name,
            url: BASE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/Logo final.png`,
            },
            image: `${BASE_URL}/og-image.png`,
            email: ORG.email,
            telephone: ORG.phone,
            foundingDate: ORG.foundingDate,
            vatID: ORG.icDph,
            taxID: ORG.ico,
            identifier: [
                { "@type": "PropertyValue", propertyID: "IČO", value: ORG.ico },
                { "@type": "PropertyValue", propertyID: "IČ DPH", value: ORG.icDph },
            ],
            contactPoint: {
                "@type": "ContactPoint",
                telephone: ORG.phone,
                contactType: "customer service",
                email: ORG.email,
                areaServed: ["SK", "CZ"],
                availableLanguage: ["Slovak", "Czech"],
            },
            address: postalAddress,
            sameAs: SOCIAL_PROFILES,
            description:
                "Mediconect je marketingová agentúra špecializovaná na zdravotníctvo. Pomáhame lekárom, ambulanciám a klinikám budovať dôveru pacientov a rásť prostredníctvom dátami podloženého marketingu.",
        },
        {
            "@type": "WebSite",
            "@id": `${BASE_URL}/#website`,
            url: BASE_URL,
            name: ORG.name,
            description:
                "Strategický marketingový partner pre zdravotníctvo – lekárov, kliniky a ambulancie.",
            publisher: { "@id": `${BASE_URL}/#organization` },
            inLanguage: "sk-SK",
        },
        {
            "@type": ["ProfessionalService", "LocalBusiness"],
            "@id": `${BASE_URL}/#localbusiness`,
            name: ORG.legalName,
            image: `${BASE_URL}/Logo final.png`,
            logo: `${BASE_URL}/Logo final.png`,
            url: BASE_URL,
            telephone: ORG.phone,
            email: ORG.email,
            vatID: ORG.icDph,
            taxID: ORG.ico,
            parentOrganization: { "@id": `${BASE_URL}/#organization` },
            address: postalAddress,
            geo: {
                "@type": "GeoCoordinates",
                latitude: ORG.latitude,
                longitude: ORG.longitude,
            },
            priceRange: "€€",
            currenciesAccepted: "EUR",
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
            },
            areaServed,
            sameAs: SOCIAL_PROFILES,
            knowsAbout: [
                "Healthcare Marketing",
                "Medical Practice SEO",
                "Patient Acquisition",
                "Healthcare CRM",
                "Medical Social Media Management",
                "AI for Healthcare",
            ],
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Marketingové služby pre zdravotníctvo",
                itemListElement: Object.entries(ROUTES)
                    .filter(([, route]) => route.serviceName)
                    .map(([path, route]) => ({
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            "@id": `${BASE_URL}${path}#service`,
                            name: route.serviceName,
                            url: `${BASE_URL}${path}`,
                        },
                    })),
            },
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="sk" suppressHydrationWarning>
            <head>
                <JsonLd data={siteJsonLd} />
                <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
                {/* Vlastný font Stolzl – preload len rezov, ktoré sú nad ohybom. */}
                <link
                    rel="preload"
                    href="/fonts/stolzl_regular.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/stolzl_bold.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
            </head>
            <body className={`antialiased ${kanit.variable}`} style={{ position: 'relative' }}>
                <ScrollGradientBackground />
                <div style={{ position: 'relative', zIndex: 5 }}>
                    {children}
                    <CookieConsent />
                </div>
                <Analytics />
            </body>
        </html>
    );
}
