import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PILLARS } from "./ServicesNebula";

/**
 * Štyri piliere služieb ako jednotné karty (svetlý štýl úvodu).
 * Údaje sú z PILLARS v ServicesNebula – jeden zdroj pravdy pre texty.
 */
export default function ServicesCards() {
    return (
        <section className="relative z-10 py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="block mb-3 text-xs font-bold uppercase tracking-widest text-[#4CADB6] font-kanit">
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
                            className="group flex flex-col rounded-2xl border border-[#041D2C]/10 bg-[#ffffff] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#041D2C] text-[#88D5DB]">
                                {service.icon}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#4CADB6] font-kanit">
                                {service.label}
                            </span>
                            <h3 className="mt-2 text-2xl font-bold leading-tight text-[#041D2C]">{service.title}</h3>
                            <p className="mt-3 font-kanit text-base font-semibold text-[#041D2C]">{service.claim}</p>
                            <p className="mt-3 text-sm leading-relaxed text-[#041D2C]/70">{service.desc}</p>
                            <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#041D2C] font-kanit">
                                Zistiť viac
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
