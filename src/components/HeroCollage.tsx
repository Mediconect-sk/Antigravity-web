"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Vizuál Hero sekcie – koláž troch fotografií.
 *
 * - v strede štvorec: pracovný stôl lekárov (pevný, dominantný),
 * - po stranách na výšku, čiastočne cez stred: lekár (vľavo hore) a lekárka
 *   (vpravo dole) – „dynamické":
 *   jemne sa vznášajú a pri pohybe myši (na dotykových zariadeniach pri
 *   scrollovaní) sa posúvajú proti sebe, takže koláž pôsobí živo.
 *
 * Fotky: public/images/hero/hero-{lekar,lekarka,pracovny-stol}.webp – na
 * výmenu stačí nahradiť súbory (pozor na cache – viď CHANGELOG).
 *
 * Fotky sú zámerne stlmené (priehľadnosť 80 %, mierne nižšia sýtosť, tmavá
 * vrstva 20 %), aby na tmavom webe nepôsobili príliš jasne.
 *
 * Pri `prefers-reduced-motion` sú všetky tri fotky statické.
 */

const SIDE_SHIFT = 28; // px – maximálny posun bočných fotiek

export default function HeroCollage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
        // [ľavá, pravá] – posúvajú sa opačným smerom
        const target = [0, 0];
        const current = [0, 0];
        let hovering = false;
        let frame = 0;
        const start = performance.now();

        const setFromRatio = (ratio: number) => {
            target[0] = ratio * SIDE_SHIFT;
            target[1] = -ratio * SIDE_SHIFT;
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

        const animate = (now: number) => {
            const t = (now - start) / 1000;
            // jemné „dýchanie" – každá strana v inej fáze
            const float = [Math.sin(t * 0.9) * 6, Math.sin(t * 0.9 + Math.PI) * 6];
            [leftRef.current, rightRef.current].forEach((el, i) => {
                if (!el) return;
                current[i] += (target[i] - current[i]) * 0.08;
                el.style.transform = `translate3d(0, ${(current[i] + float[i]).toFixed(2)}px, 0)`;
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

    const card = "absolute overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 bg-navy-dark";

    return (
        <div ref={containerRef} className="relative w-full max-w-[560px] mx-auto aspect-[1/0.95]">
            {/* Stred – pracovný stôl (štvorec, pevný) */}
            <div className={`${card} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square z-10`}>
                <Image
                    src="/images/hero/hero-pracovny-stol.webp"
                    alt="Lekári pri pracovnom stole s dokumentmi a notebookom"
                    fill
                    priority
                    sizes="(min-width: 1024px) 340px, 60vw"
                    className="object-cover opacity-80 saturate-[0.85]"
                />
                <div className="absolute inset-0 bg-navy-dark/20 pointer-events-none" />
            </div>

            {/* Ľavá – lekár (pohyblivá, prekrýva stred) */}
            <div className="absolute left-0 top-[4%] w-[34%] aspect-[3/4] z-20">
                <div ref={leftRef} className={`${card} inset-0 will-change-transform`}>
                    <Image
                        src="/images/hero/hero-lekar.webp"
                        alt="Lekár v bielom plášti so stetoskopom"
                        fill
                        priority
                        sizes="(min-width: 1024px) 200px, 34vw"
                        className="object-cover opacity-80 saturate-[0.85]"
                        style={{ objectPosition: "50% 15%" }}
                    />
                    <div className="absolute inset-0 bg-navy-dark/20 pointer-events-none" />
                </div>
            </div>

            {/* Pravá – lekárka (pohyblivá, prekrýva stred) */}
            <div className="absolute right-0 bottom-[4%] w-[34%] aspect-[3/4] z-20">
                <div ref={rightRef} className={`${card} inset-0 will-change-transform`}>
                    <Image
                        src="/images/hero/hero-lekarka.webp"
                        alt="Lekárka v modrom pracovnom odeve"
                        fill
                        priority
                        sizes="(min-width: 1024px) 200px, 34vw"
                        className="object-cover opacity-80 saturate-[0.85]"
                        style={{ objectPosition: "50% 15%" }}
                    />
                    <div className="absolute inset-0 bg-navy-dark/20 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
