/** @type {import('next').NextConfig} */
const nextConfig = {
    // Bezpečnostné hlavičky (audit 11. 11. 2026). Content-Security-Policy tu zámerne nie je:
    // web vkladá inline skripty (JSON-LD, Next.js) a analytiku po súhlase – CSP treba
    // najprv nasadiť v režime „report-only“ a overiť, inak by zablokovala vlastné skripty.
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
                ],
            },
        ];
    },
    async redirects() {
        return [
            // Ordinačný index: stránka už nie je „vzor", ale vysvetlenie služby (12. 11. 2026)
            {
                source: "/ordinacny-index/vzor",
                destination: "/ordinacny-index",
                permanent: true,
            },
            // Kúpele a wellness -> Kúpele a rehabilitácia (wellness z ponuky odstránený)
            {
                source: "/pre-koho/pre-kupele-a-wellness",
                destination: "/pre-koho/pre-kupele-a-rehabilitacia",
                permanent: true,
            },
            // Business partner: podsekcia premenovaná 14. 10. 2026 (Predaj kmeňa a praxe)
            {
                source: "/business-partner/predaj-kmena-a-prevadzky",
                destination: "/business-partner/predaj-kmena-a-praxe",
                permanent: true,
            },
            // Nábor lekárov zlúčený do Náborového managementu (Viktor 29. 10. 2026)
            {
                source: "/business-partner/nabor-lekarov",
                destination: "/business-partner/naborovy-management",
                permanent: true,
            },
            // MyMedical – komunita lekárov beží na vlastnej doméne, mediconect.sk/mymedical
            // je len krátka adresa. Dočasné (307), aby prehliadače presmerovanie
            // neuložili natrvalo, ak by tu raz vznikla vlastná stránka.
            // Adresa je aj v MYMEDICAL (src/lib/seo.ts).
            {
                source: "/mymedical",
                destination: "https://www.mymedical.sk",
                permanent: false,
            },
            // „Pre koho" je súčasťou stránky O nás (13. 10. 2026). Trvalé presmerovanie,
            // aby Google preniesol pozíciu na /o-nas. Podstránky /pre-koho/* ostávajú.
            {
                source: "/pre-koho",
                destination: "/o-nas#pre-koho",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
