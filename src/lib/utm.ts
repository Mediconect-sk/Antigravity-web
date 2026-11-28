/**
 * UTM značky odkazu, ktoré formuláre posielajú do CRM Ordevia (#5188).
 *
 * Klient ich berie z uloženého zdroja návštevy (`src/lib/zdroj.ts`, model
 * „prvý dotyk“), server ich overí touto schémou a `zapisDoCrm` ich zapíše
 * do stĺpcov utm_* v `web_mediconect_formular` (Ordevia migrácia 400).
 * Pri `utm_source=linkedin` CRM založí kontakt s pôvodom LinkedIn
 * a číslom newslettera z `utm_content`.
 *
 * Bezpečné pre server aj klienta (žiadny prístup k súborom).
 */
import { z } from "zod";

const hodnota = z.string().trim().max(200).optional();

export const UtmSchema = z
  .object({
    utm_source: hodnota,
    utm_medium: hodnota,
    utm_campaign: hodnota,
    utm_content: hodnota,
  })
  .optional()
  .catch(undefined);

export type Utm = z.infer<typeof UtmSchema>;
