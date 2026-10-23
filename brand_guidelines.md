# Brand Guidelines: Mediconect

## 1. Kdo jsme (Brand Identity)
Mediconect je strategická marketingová agentura vytvořená pro svět moderního zdravotnictví v roce 2026. Jsme klíčovým partnerem pro lékaře, soukromé ambulance a estetické kliniky, kterým pomáháme růst, budovat autoritu a získávat nové pacienty.

Naším úkolem je vnést do medicínského marketingu špičkovou technologii, eleganci a efektivitu. Nejsme jen dodavatelé, jsme prodlouženou rukou lékařů, která jim uvolňuje čas pro jejich pacienty, zatímco my se staráme o jejich prosperitu.

## 2. Vizuální DNA (The Vibe)
Design musí působit jako „digitální chirurgický nástroj“:

*   **Futuristický minimalismus:** Žádný zbytečný šum, jen čistá funkčnost.
*   **Temná elegance:** High-end dark mode, který buduje pocit exkluzivity a stability.
*   **Klinická preciznost:** Každý pixel má svůj smysl, důraz na detail a čistou typografii.
*   **Atmosféra roku 2026:** Využití hloubky, skleněných efektů (glassmorphism) a moderních gridů.

## 3. Barevná paleta (Brand Colors)
Tyto barvy definují vizuální prostor Mediconectu. Nepoužívej žádné jiné odstíny pro primární prvky. (maximálně různé varianty této barvy)

Zdroj: Brand manuál Mediconect 2026 (vydanie 07. 10. 2026). Hodnoty sú v `src/app/brand-tokens.css`.

*   `#0C141A` Ink – základ a text, najtmavšie pozadie (`navy-dark`)
*   `#041D2C` Navy – tmavé plochy (`navy`)
*   `#88D5DB` Svetlá tyrkysová – akcenty a tlačidlá na tmavom pozadí (`teal-light`)
*   `#4CADB6` Tyrkysová – dôraz a grafika (`teal`)
*   `#F2F2F2`, `#E6E6E6`, `#CCCCCC`, `#FFFFFF` – neutrálne

Staré hodnoty `#0D1B2A` a `#4ECDC4` sa už nepoužívajú (nahradené 23. 10. 2026).

## 4. Typografie a Prvky
*   **Písmo:** Moderní bezpatkové fonty (Sans-serif) s čistou geometrií a variabilní tloušťkou.
*   **Prvky:** Zaoblené rohy (cca 15–20px), jemné stíny pro pocit levitace objektů nad pozadím, vysoký kontrast pro perfektní čitelnost.

### Logo

*   Súbor: `public/Logo final.png` (1200 × 362 px, priehľadné pozadie). Používa ho hlavička, pätička aj structured data (`logo` v `layout.tsx`).
*   **Podnadpis loga: „medical business partner"** (do 27. 9. 2026 „healthcare marketing"). Je **súčasťou obrázka**, nie HTML text.
*   Podnadpis je písmo **Stolzl Regular** (`public/fonts/stolzl_regular.otf`), veľkosť ~56,9 px, farba `#87D4DA`, baseline y ≈ 347 px, zarovnaný doprava na pravý okraj obrázka (x = 1200).
*   Postup pri zmene podnadpisu je v `CHANGELOG.md` (záznam z 27. 9. 2026).

## 5. Cílová skupina
Lékaři, majitelé klinik a profesionálové v estetické medicíně, kteří hledají prémiového partnera, jenž rozumí jejich odbornosti a váží si jejich času.

## Zdroj farieb (od 23. 10. 2026)

Farby a písmo sa berú z `src/app/brand-tokens.css` – kópie `brand/tokens.css` z repozitára Mediconect-sk/Mediconect. Paleta: Ink #0C141A, Navy #041D2C, svetlá tyrkysová #88D5DB, tyrkysová #4CADB6, sivé #F2F2F2 / #E6E6E6 / #CCCCCC. Pevné hex hodnoty v komponentoch nepoužívať.
