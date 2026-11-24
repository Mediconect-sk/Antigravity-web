import type { Metadata } from "next";
import Content from "./Content";

/**
 * Vstupná stránka platenej kampane „previerka webu" (Meta, LinkedIn) – 24. 11. 2026.
 *
 * Formulár je ten istý komponent ako na /sluzby (PrevierkaWebu), mení sa len
 * nadpis podľa kanála: ?v=meta (tón pacienta), ?v=linkedin (tón manažéra).
 * Stránka nemá hlavné menu, aby lekár z kampane neodišiel inam.
 *
 * Do vyhľadávania nepatrí – organickým vstupom ostáva /sluzby a obsah by
 * sa s ňou prekrýval.
 */
export const metadata: Metadata = {
    title: "Bezplatná previerka webu ambulancie",
    description:
        "Zmeriame web vašej ambulancie rovnako ako weby našich klientov: rýchlosť na mobile, Google a dôveru pacienta. Správa príde e-mailom.",
    robots: { index: false, follow: false },
    openGraph: {
        title: "Čo vidí pacient, keď otvorí váš web?",
        description: "Bezplatná previerka webu ambulancie. Namerané hodnoty, nie odhady. Správa príde e-mailom.",
        url: "https://www.mediconect.sk/previerka-webu",
    },
};

type Props = { searchParams: Promise<{ v?: string }> };

export default async function Page({ searchParams }: Props) {
    const { v } = await searchParams;
    const variant = v === "linkedin" ? "linkedin" : v === "meta" ? "meta" : "zaklad";
    return <Content variant={variant} />;
}
