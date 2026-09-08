import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
    title: "Ďakujeme za váš záujem",
    description: "Vaša správa bola odoslaná. Ozveme sa vám do 24 hodín.",
    // Potvrdzovacia stránka nemá patriť do vyhľadávania.
    robots: { index: false, follow: true },
};

export default function Page() {
    return <Content />;
}
