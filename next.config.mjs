/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
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
