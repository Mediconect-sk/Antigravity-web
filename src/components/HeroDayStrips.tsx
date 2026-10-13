"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Vizuál Hero sekcie – „Jeden deň lekára, tri fázy".
 *
 * Tri zvislé pruhy bez popisov: po stranách fotky (ráno, večer), v strede
 * krátke video z konzultácie s pacientom. Pri pohybe
 * myši nad obrázkom (na dotykových zariadeniach pri scrollovaní) sa každý pruh
 * posúva inou rýchlosťou a smerom, takže kompozícia sa nikdy úplne nezarovná.
 * Metafora k nadpisu „Partner lekára v každej fáze kariéry".
 *
 * Súbory: public/images/hero/lekar-rano-chodba.webp a
 * lekar-vecer-administrativa.webp (fotky po stranách),
 * public/videos/hero/den-lekara-den.{mp4,webm} (video v strede, bez zvuku,
 * slučka) a public/images/hero/den-lekara-den.webp (náhľad videa, kým sa
 * načíta). Na výmenu za reálne zábery stačí nahradiť tieto súbory (formát na
 * výšku, 9 : 16).
 *
 * Pri `prefers-reduced-motion` sa videá nespúšťajú a pruhy sú statické.
 */

const STRIPS = [
    { key: "rano", video: false, img: "/images/hero/lekar-rano-chodba.webp", label: "Lekár ráno na chodbe nemocnice s kávou a podkladmi", speed: 0.55, position: "50% 25%" },
    { key: "den", video: true, img: "/images/hero/den-lekara-den.webp", label: "Lekár počas konzultácie s pacientkou", speed: -0.8, position: "35% 30%" },
    { key: "vecer", video: false, img: "/images/hero/lekar-vecer-administrativa.webp", label: "Lekár večer pri stole rieši administratívu", speed: 0.4, position: "45% 40%" },
];

const MAX_SHIFT = 60; // px

export default function HeroDayStrips() {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        // Videá sa spúšťajú až v JS – pri reduced-motion ostane len poster.
        videoRefs.current.forEach((v) => {
            if (!v) return;
            v.muted = true;
            v.play().catch(() => { /* autoplay zablokovaný – ostane poster */ });
        });

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
                    <div key={s.key} className={`relative flex-1 overflow-hidden ${i > 0 ? "border-l border-white/[0.08]" : ""}`}>
                        <div
                            ref={(el) => { innerRefs.current[i] = el; }}
                            className="absolute left-0 w-full will-change-transform"
                            style={{ top: "-12%", height: "124%" }}
                        >
                            {s.video ? (
                                <video
                                    ref={(el) => { videoRefs.current[i] = el; }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    style={{ objectPosition: s.position }}
                                    poster={s.img}
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    aria-label={s.label}
                                >
                                    <source src={`/videos/hero/den-lekara-${s.key}.mp4`} type="video/mp4" />
                                    <source src={`/videos/hero/den-lekara-${s.key}.webm`} type="video/webm" />
                                </video>
                            ) : (
                                <Image
                                    src={s.img}
                                    alt={s.label}
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 14vw, 33vw"
                                    className="object-cover"
                                    style={{ objectPosition: s.position }}
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/10 via-transparent to-navy-dark/50" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
