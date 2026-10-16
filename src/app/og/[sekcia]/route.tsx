import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { OG_SECTIONS, OG_SIZE, type OgSectionKey } from "../../../lib/og";

/**
 * Náhľadový obrázok sekcie pre zdieľanie odkazov (/og/<sekcia>.png).
 * Generuje sa raz pri builde – žiadne volanie za behu. Sekcie a podtituly
 * sú v src/lib/og.ts, ktorá stránka dostane ktorý obrázok, rieši
 * metadataFor() v src/lib/seo.ts.
 */

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(OG_SECTIONS).map((key) => ({ sekcia: `${key}.png` }));
}

const NAVY = "#0B1622";
const TEAL = "#4ECDC4";

/** Deterministický generátor – sieť vyzerá pri každom builde rovnako. */
function rng(seed: number) {
    return () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
    };
}

/** Sieť bodov, čiar a krížikov v pravej časti obrázka (podľa pôvodného og-image.png). */
function NetworkArt() {
    const rand = rng(20261016);
    const nodes: [number, number][] = [];
    for (let i = 0; i < 46; i++) {
        // Hustejšie smerom k pravému okraju.
        const x = 1200 - Math.pow(rand(), 1.6) * 420;
        const y = rand() * 630;
        nodes.push([x, y]);
    }

    const lines: [number, number, number, number][] = [];
    nodes.forEach(([x1, y1], i) => {
        nodes
            .map(([x2, y2], j) => ({ j, x2, y2, d: Math.hypot(x2 - x1, y2 - y1) }))
            .filter(({ j }) => j > i)
            .sort((a, b) => a.d - b.d)
            .slice(0, 2)
            .forEach(({ x2, y2, d }) => {
                if (d < 190) lines.push([x1, y1, x2, y2]);
            });
    });

    const triangles = [
        [nodes[3], nodes[7], nodes[12]],
        [nodes[18], nodes[22], nodes[25]],
        [nodes[30], nodes[33], nodes[37]],
    ];

    const crosses: [number, number, number][] = [
        [1110, 150, 38],
        [960, 455, 30],
        [1150, 560, 26],
        [900, 250, 18],
    ];

    return (
        <svg
            width={OG_SIZE.width}
            height={OG_SIZE.height}
            viewBox={`0 0 ${OG_SIZE.width} ${OG_SIZE.height}`}
            style={{ position: "absolute", top: 0, left: 0 }}
        >
            {triangles.map((t, i) => (
                <polygon
                    key={`t${i}`}
                    points={t.map(([x, y]) => `${x},${y}`).join(" ")}
                    fill={TEAL}
                    fillOpacity={0.14 + i * 0.05}
                />
            ))}
            {lines.map(([x1, y1, x2, y2], i) => (
                <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={TEAL} strokeOpacity={0.28} strokeWidth={1.5} />
            ))}
            {nodes.map(([x, y], i) => (
                <circle key={`n${i}`} cx={x} cy={y} r={i % 5 === 0 ? 5 : 3} fill={TEAL} fillOpacity={0.55} />
            ))}
            {crosses.map(([x, y, s], i) => (
                <path
                    key={`c${i}`}
                    d={`M${x - s / 6} ${y - s / 2}h${s / 3}v${s / 3}h${s / 3}v${s / 3}h-${s / 3}v${s / 3}h-${s / 3}v-${s / 3}h-${s / 3}v-${s / 3}h${s / 3}z`}
                    fill={TEAL}
                    fillOpacity={0.35}
                />
            ))}
        </svg>
    );
}

export async function GET(_request: Request, { params }: { params: Promise<{ sekcia: string }> }) {
    const { sekcia } = await params;
    const key = sekcia.replace(/\.png$/, "") as OgSectionKey;
    const section = OG_SECTIONS[key];
    if (!section) return new Response("Not found", { status: 404 });

    const pub = path.join(process.cwd(), "public");
    const [logo, regular] = await Promise.all([
        readFile(path.join(pub, "Logo final.png")),
        readFile(path.join(pub, "fonts", "stolzl_regular.otf")),
    ]);
    // Rovnaké logo ako v hlavičke webu (holubica + „medical business partner“), 1200 × 362 px.
    const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    backgroundColor: NAVY,
                    backgroundImage: "radial-gradient(circle at 85% 40%, #12303A 0%, #0B1622 60%)",
                    fontFamily: "Stolzl",
                }}
            >
                <NetworkArt />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingLeft: 80,
                        width: 900,
                        height: "100%",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse nepozná next/image */}
                    <img src={logoSrc} width={620} height={187} alt="" />
                    {section.subtitle && (
                        <div style={{ display: "flex", flexDirection: "column", marginTop: 44 }}>
                            <div style={{ width: 72, height: 4, backgroundColor: TEAL, borderRadius: 2 }} />
                            <div style={{ fontSize: 44, fontWeight: 400, color: "#FFFFFF", marginTop: 24, lineHeight: 1.25 }}>
                                {section.subtitle}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        ),
        {
            ...OG_SIZE,
            fonts: [
                { name: "Stolzl", data: regular, weight: 400, style: "normal" },
            ],
        },
    );
}
