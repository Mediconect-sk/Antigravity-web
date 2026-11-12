import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd, pageJsonLd, pageMetadata } from "@/lib/seo";
import { ORDINACNY_INDEX_FAQ } from "./faq";
import Content from "./Content";

const PATH = "/ordinacny-index";

export const metadata: Metadata = pageMetadata(PATH);

export default function Page() {
    return (
        <>
            <JsonLd data={[...pageJsonLd(PATH), faqJsonLd(ORDINACNY_INDEX_FAQ)]} />
            <Content />
        </>
    );
}
