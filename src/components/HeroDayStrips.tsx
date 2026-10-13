"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Vizuál Hero sekcie – „Jeden deň lekára, tri fázy".
 *
 * Fotografia je rozdelená na tri zvislé pruhy (ráno / deň / večer). Pri pohybe
 * myši nad obrázkom (na dotykových zariadeniach pri scrollovaní) sa každý pruh
 * posúva inou rýchlosťou a smerom, takže kompozícia sa nikdy úplne nezarovná.
 * Metafora k nadpisu „Partner lekára v každej fáze kariéry".
 *
 * Fotky: public/images/hero/den-lekara-*.webp – na výmenu za reálne fotenie
 * stačí nahradiť tieto tri súbory (pomer strán cca 3:5, na výšku).
 *
 * Pri `prefers-reduced-motion` zostávajú pruhy statické.
 */

const STRIPS = [
    { src: "/images/hero/den-lekara-rano.webp", label: "Ráno", alt: "Lekár ráno prichádza do ambulancie a pripravuje si deň", speed: 0.55, position: "50% 30%" },
    { src: "/images/hero/den-lekara-den.webp", label: "Deň", alt: "Lekár počas konzultácie s pacientkou", speed: -0.8, position: "35% 30%" },
    { src: "/images/hero/den-lekara-vecer.webp", label: "Večer", alt: "Lekár večer rieši administratívu a plán na ďalší deň", speed: 0.4, position: "50% 30%" },
];

const MAX_SHIFT = 60; // px

export default function HeroDayStrips() {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
        const target = STRIPS.map(() => 0);
        const current = STRIPS.map(() => 0);
        let hovering = false;
        let frame = 0;

        const setFromRatio = (ratio: number) => {
            STRIPS.forEach((s, i) => {
                target[i] = clamp(ratio * MAX_SHIFT * s.speed, -MAX_SHIFT, MAX_SHIFT);
            });
        };

        const onMove = (e: MouseEvent) => {
            hovering = true;
            const rect = container.getBoundingClientRect();
            setFromRatio(clamp(((e.clientY - rect.top) / rect.height) * 2 - 1, -1, 1));
        };
        const onScroll = () => {
            if (hovering) return;
            const rect = container.getBoundingClientRect();
            const vh = window.innerHeight || document.documentElement.clientHeight;
            setFromRatio(clamp((vh / 2 - (rect.top + rect.height / 2)) / (vh / 2), -1, 1));
        };
        const onLeave = () => {
            hovering = false;
            onScroll();
        };

        const animate = () => {
            innerRefs.current.forEach((el, i) => {
                if (!el) return;
                current[i] += (target[i] - current[i]) * 0.08;
                el.style.transform = `translate3d(0, ${current[i].toFixed(2)}px, 0)`;
            });
            frame = requestAnimationFrame(animate);
        };

        container.addEventListener("mousemove", onMove);
        container.addEventListener("mouseleave", onLeave);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        frame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frame);
            container.removeEventListener("mousemove", onMove);
            container.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[360px] sm:h-[440px] lg:h-[520px] rounded-3xl overflow-hidden bg-navy-dark border border-white/[0.06] shadow-2xl shadow-black/40"
        >
            <div className="absolute inset-0 flex">
                {STRIPS.map((s, i) => (
                    <div key={s.label} className={`relative flex-1 overflow-hidden ${i > 0 ? "border-l border-white/[0.08]" : ""}`}>
                        <div
                            ref={(el) => { innerRefs.current[i] = el; }}
                            className="absolute left-0 w-full will-change-transform"
                            style={{ top: "-12%", height: "124%" }}
                        >
                            <Image
                                src={s.src}
                                alt={s.alt}
                                fill
                                priority
                                sizes="(min-width: 1024px) 14vw, 33vw"
                                className="object-cover"
                                style={{ objectPosition: s.position }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/10 via-transparent to-navy-dark/70" />
                        </div>
                        <span className="absolute bottom-5 left-0 right-0 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 font-kanit">
                            {s.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
