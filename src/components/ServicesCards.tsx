import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PILLARS } from "./ServicesNebula";

// Fotografia ku každému pilieru (21. 11. 2026); reálne fotky z Unsplash alebo predmety bez osôb.
const PHOTOS: Record<string, { src: string; alt: string }> = {
    zalozenie: { src: "/images/proces/pilier-business-partner.webp", alt: "Kľúče od vlastnej ambulancie v ruke" },
    marketing: { src: "/images/proces/pilier-marketing-v4.webp", alt: "Žena v kaviarni s úsmevom pozerá do telefónu" },
    prevadzka: { src: "/images/proces/pilier-automatizacie-v2.webp", alt: "Notebook a telefón s online kalendárom termínov" },
    majetok: { src: "/images/pre-lekarov/rodina-v3.webp", alt: "Rodina na prechádzke v prírode" },
};

/**
 * Štyri piliere služieb ako jednotné karty (svetlý štýl úvodu).
 * Údaje sú z PILLARS v ServicesNebula – jeden zdroj pravdy pre texty.
 */
export default function ServicesCards() {
    return (
        <section className="relative z-10 py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="block mb-3 text-xs font-bold uppercase tracking-widest text-[#1F6F78] font-kanit">
                        Portfólio služieb
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#041D2C]">
                        Jeden partner. <span className="text-[#4CADB6]">Štyri oblasti.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {PILLARS.map((service) => (
                        <Link
                            key={service.id}
                            href={service.href}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-[#041D2C]/10 bg-[#ffffff] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {PHOTOS[service.id] && (
                                <div className="relative aspect-[3/2]">
                                    <Image src={PHOTOS[service.id].src} alt={PHOTOS[service.id].alt} fill sizes="(min-width: 1280px) 300px, (min-width: 768px) 45vw, 90vw" className="object-cover" />
                                </div>
                            )}
                            <div className="flex flex-1 flex-col p-7">
                            <span className="-mt-14 mb-5 relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#041D2C] text-[#88D5DB]">
                                {service.icon}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F78] font-kanit">
                                {service.label}
                            </span>
                            <h3 className="mt-2 text-2xl font-bold leading-tight text-[#041D2C]">{service.title}</h3>
                            <p className="mt-3 font-kanit text-base font-semibold text-[#041D2C]">{service.claim}</p>
                            <p className="mt-3 text-sm leading-relaxed text-[#041D2C]/70">{service.desc}</p>
                            <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#041D2C] font-kanit">
                                Zistiť viac
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
