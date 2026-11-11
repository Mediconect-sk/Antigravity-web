import type { Resend } from "resend";
import { ORG } from "@/lib/seo";

/**
 * Potvrdzovací e-mail lekárovi po odoslaní dopytu alebo žiadosti o konzultáciu
 * (rozhodnutie 11. 11. 2026).
 *
 * ⚠️ E-mail NESMIE obsahovať nič z toho, čo návštevník napísal do formulára
 * (meno, správu, názov zariadenia). Formulár môže ktokoľvek vyplniť s cudzou
 * adresou – s pevným textom sa cez neho nedá poslať vlastný obsah tretej osobe.
 *
 * Zlyhanie potvrdenia nikdy nezhodí formulár: dopyt je vtedy už prijatý
 * (e-mail tímu a zápis do CRM prebehli pred týmto volaním).
 */

const PREDMET = "Váš dopyt sme prijali – Mediconect";

const KROKY = [
    "Zavoláme alebo napíšeme Vám a dohodneme termín bezplatného 30-minútového rozhovoru.",
    "V rozhovore prejdeme Vašu situáciu a priority.",
    "Po rozhovore dostanete návrh ďalšieho kroku.",
];

function text(): string {
    return [
        "Dobrý deň,",
        "",
        "ďakujeme za Váš dopyt. Prijali sme ho a ozveme sa Vám do jedného pracovného dňa.",
        "",
        "Čo bude nasledovať:",
        ...KROKY.map((k, i) => `${i + 1}. ${k}`),
        "",
        `Ak je vec súrna, zavolajte nám na ${ORG.phoneDisplay} alebo odpovedzte na tento e-mail.`,
        "",
        "S úctou",
        "tím Mediconect",
        "www.mediconect.sk",
    ].join("\n");
}

function html(): string {
    const p = "margin:0 0 16px;color:#0C141A;font-size:16px;line-height:1.65;";
    return `<!DOCTYPE html>
<html lang="sk">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#ECEEF0;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ECEEF0;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #E6E6E6;border-top:3px solid #4CADB6;">
          <tr>
            <td style="background:#0A2B40;padding:22px 32px;">
              <span style="color:#ffffff;font-size:22px;font-weight:700;letter-spacing:0.5px;">mediconect</span>
              <span style="display:block;color:#88D5DB;font-size:11px;letter-spacing:1.5px;margin-top:2px;">MEDICAL BUSINESS PARTNER</span>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 8px;">
              <h1 style="margin:0 0 20px;color:#041D2C;font-size:24px;line-height:1.3;font-weight:400;">Váš dopyt sme prijali</h1>
              <p style="${p}">Dobrý deň,</p>
              <p style="${p}">ďakujeme za Váš dopyt. Prijali sme ho a ozveme sa Vám <strong>do jedného pracovného dňa</strong>.</p>
              <p style="margin:24px 0 10px;color:#041D2C;font-size:16px;font-weight:700;">Čo bude nasledovať</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${KROKY.map(
    (k, i) => `                <tr>
                  <td width="34" valign="top" style="padding:0 0 12px;color:#1F6F78;font-size:16px;font-weight:700;">${String(i + 1).padStart(2, "0")}</td>
                  <td valign="top" style="padding:0 0 12px;color:#0C141A;font-size:16px;line-height:1.6;">${k}</td>
                </tr>`
).join("\n")}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F7F8;border-left:3px solid #4CADB6;">
                <tr>
                  <td style="padding:16px 20px;color:#0C141A;font-size:15px;line-height:1.6;">
                    Ak je vec súrna, zavolajte nám na <a href="tel:${ORG.phone}" style="color:#041D2C;font-weight:700;text-decoration:none;">${ORG.phoneDisplay}</a> alebo odpovedzte na tento e-mail.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;color:#0C141A;font-size:16px;line-height:1.6;">
              S úctou<br>tím Mediconect<br>
              <a href="https://www.mediconect.sk" style="color:#1F6F78;">www.mediconect.sk</a>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;border-top:1px solid #E6E6E6;color:#5A6670;font-size:12px;line-height:1.6;">
              Tento e-mail je potvrdenie formulára odoslaného na www.mediconect.sk. Ak ste ho neodoslali Vy, môžete ho ignorovať.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Vráti obsah potvrdenia – používa sa aj na náhľad a v testoch. */
export function potvrdenieObsah(): { subject: string; html: string; text: string } {
    return { subject: PREDMET, html: html(), text: text() };
}

/** Pošle potvrdenie na adresu z formulára. Nikdy nevyhodí výnimku. */
export async function posliPotvrdenie(resend: Resend, komu: string): Promise<{ ok: boolean }> {
    try {
        const obsah = potvrdenieObsah();
        const { error } = await resend.emails.send({
            from: "Mediconect <noreply@mediconect.sk>",
            to: [komu.trim()],
            replyTo: ORG.email,
            subject: obsah.subject,
            html: obsah.html,
            text: obsah.text,
        });
        if (error) {
            console.error("Potvrdenie lekárovi neodišlo:", error.name, error.message);
            return { ok: false };
        }
        return { ok: true };
    } catch (e) {
        console.error("Potvrdenie lekárovi neodišlo:", e instanceof Error ? e.message : e);
        return { ok: false };
    }
}
