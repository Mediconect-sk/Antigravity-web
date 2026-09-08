import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import Content from "./Content";

const PATH = "/sluzby/databaza-pacientov-a-jej-aktivacia";

export const metadata: Metadata = pageMetadata(PATH);

export default function Page() {
    return (
        <>
            <JsonLd data={pageJsonLd(PATH)} />
            <Content />
        </>
    );
}
