import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd, pageJsonLd, pageMetadata } from "@/lib/seo";
import { ALL_FAQ_ITEMS } from "./faq";
import Content from "./Content";

const PATH = "/sluzby";

export const metadata: Metadata = pageMetadata(PATH);

export default function Page() {
    return (
        <>
            <JsonLd data={[...pageJsonLd(PATH), faqJsonLd(ALL_FAQ_ITEMS)]} />
            <Content />
        </>
    );
}
