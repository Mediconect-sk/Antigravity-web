import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Pás fotiek z odborných podujatí (EUROPREV Madrid, EURIPA Cartagena 2026).
 * Fotky sú tie isté ako v článkoch blogu – vlastné, nie z fotobanky.
 */
const PHOTOS = [
    { src: '/images/blog/europrev-2026/fakulta-mediciny-uam-v2.webp', alt: 'PhDr. Víťazoslav Struhár na Lekárskej fakulte UAM v Madride', href: '/blog/europrev-forum-2026-madrid', place: 'Madrid · EUROPREV' },
    { src: '/images/blog/europrev-2026/sala-forum-v2.webp', alt: 'Prednášková sála EUROPREV Fora 2026', href: '/blog/europrev-forum-2026-madrid', place: 'Madrid · EUROPREV' },
    { src: '/images/blog/euripa-2026/molcan-euripa-forum.webp', alt: 'MUDr. Ľubomír Molčan na EURIPA Rural Health Forum', href: '/blog/euripa-rural-health-forum-2026-cartagena', place: 'Cartagena · EURIPA' },
    { src: '/images/blog/euripa-2026/poster-personalizovany-marketing.webp', alt: 'Poster Mediconect o personalizovanom zdravotníckom marketingu', href: '/blog/euripa-rural-health-forum-2026-cartagena', place: 'Cartagena · EURIPA' },
];

export default function ConferenceStrip() {
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                    <div>
                        <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Prezentované v Európe</span>
                        <h2 className="text-3xl lg:text-4xl font-bold font-kanit">
                            Náš prístup k marketingu <span className="text-gradient">sme ukázali lekárom z celej Európy</span>
                        </h2>
                    </div>
                    <Link href="/o-nas#spolupraca" className="inline-flex items-center gap-2 text-teal font-semibold font-kanit shrink-0 hover:gap-3 transition-all">
                        Odborná spolupráca <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {PHOTOS.map((p) => (
                        <Link key={p.src} href={p.href} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 300px, 50vw" className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-transparent to-transparent" />
                            <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 font-kanit">{p.place}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
