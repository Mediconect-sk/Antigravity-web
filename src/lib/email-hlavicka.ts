import { BASE_URL } from "@/lib/seo";

/**
 * Hlavička všetkých e-mailov z webu – originálne logo z brand manuálu
 * (negatívny variant s „medical business partner“), nie vysádzaný nápis.
 *
 * Logo je PNG, lebo e-mailové programy SVG spoľahlivo nezobrazujú. Súbor
 * `public/logo/mediconect_medical-business-partner_negat.png` je len prevod
 * SVG rovnakého názvu (3× veľkosť, priehľadné pozadie) – pri zmene loga treba
 * vymeniť oba. Logo sa neprefarbuje (pravidlo brand manuálu); negatívny
 * variant patrí len na tmavé pozadie.
 */
export const EMAIL_HLAVICKA = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#041D2C;">
  <tr>
    <td align="center" style="padding:24px 16px;">
      <a href="${BASE_URL}" style="text-decoration:none;">
        <img src="${BASE_URL}/logo/mediconect_medical-business-partner_negat.png" width="220" height="66" alt="mediconect – medical business partner" style="display:block;border:0;outline:none;width:220px;height:auto;max-width:100%;color:#ffffff;font-family:Arial,sans-serif;font-size:20px;">
      </a>
    </td>
  </tr>
</table>`;
