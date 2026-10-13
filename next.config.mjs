/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // MyMedical – komunita lekárov beží na vlastnej doméne, mediconect.sk/mymedical
            // je len krátka adresa. Dočasné (307), aby prehliadače presmerovanie
            // neuložili natrvalo, ak by tu raz vznikla vlastná stránka.
            // Adresa je aj v MYMEDICAL (src/lib/seo.ts).
            {
                source: "/mymedical",
                destination: "https://www.mymedical.sk",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
