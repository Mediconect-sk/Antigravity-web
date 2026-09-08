import React from "react";

/**
 * Vloží structured data (schema.org) do stránky.
 * Server component – schéma sa dostane priamo do HTML, ktoré vidí crawler.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
    const payload = Array.isArray(data) ? data : [data];

    return (
        <>
            {payload.map((item, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
                />
            ))}
        </>
    );
}
