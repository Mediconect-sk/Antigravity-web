import { NextResponse } from "next/server";
import { zapisDoCrm, SUHLAS_NEWSLETTER } from "@/lib/crm";

/**
 * Newsletter „Zákulisie úspešných ambulancií“.
 *
 * E-mail sa zapisuje do CRM Ordevia spolu so súhlasom. Do SmartEmailingu
 * (zoznam 83 „Mediconect Newsletter z webu“) ho pošle nočná synchronizácia
 * Ordevie – web už SmartEmailing priamo nevolá. Podrobnosti: src/lib/crm.ts.
 */
export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
            return NextResponse.json(
                { error: "Neplatná e-mailová adresa" },
                { status: 400 }
            );
        }

        const { ok } = await zapisDoCrm({
            typ: "NEWSLETTER",
            email,
            stranka: request.headers.get("referer"),
            marketing_suhlas: true,
            marketing_suhlas_text: SUHLAS_NEWSLETTER,
        });

        if (!ok) {
            return NextResponse.json(
                { error: "Prihlásenie sa teraz nepodarilo uložiť. Skúste to prosím o chvíľu znova." },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true, message: "Ďakujeme, ste prihlásený na odber." });
    } catch (error) {
        console.error("Newsletter API Error:", error instanceof Error ? error.message : error);
        return NextResponse.json(
            { error: "Interná chyba servera pri spracovaní požiadavky." },
            { status: 500 }
        );
    }
}
