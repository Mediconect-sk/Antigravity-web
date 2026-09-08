import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import Content from "./Content";

const PATH = "/sluzby/umela-inteligencia-pre-ambulanciu";

export const metadata: Metadata = pageMetadata(PATH);

export default function Page() {
    return (
        <>
            <JsonLd data={pageJsonLd(PATH)} />
            <Content />
        </>
    );
}
