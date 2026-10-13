import Image from 'next/image';

/**
 * Široká fotka pod hero na stránkach „Pre koho" (fotky z Unsplash, licencia
 * Unsplash – bezplatné komerčné použitie; zoznam ID v CHANGELOG 13. 10. 2026).
 * Stlmená rovnako ako koláž na domovskej stránke, aby na tmavom webe nesvietila.
 */
export default function SegmentBanner({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 -mt-4 mb-4">
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-white/10">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1280px) 1216px, 100vw"
                    className="object-cover opacity-80 saturate-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/20 to-navy-dark/10 pointer-events-none" />
            </div>
        </div>
    );
}
