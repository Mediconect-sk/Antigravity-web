import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import Content from "./Content";

const PATH = "/pre-koho/pre-ambulancie";

export const metadata: Metadata = pageMetadata(PATH);

export default function Page() {
    return (
        <>
            <JsonLd data={pageJsonLd(PATH)} />
            <Content />
        </>
    );
}
