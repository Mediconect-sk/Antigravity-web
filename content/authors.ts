import { BASE_URL, ORG } from "@/lib/seo";

/**
 * Autori článkov na blogu.
 *
 * Kľúč objektu je hodnota `author` vo frontmatter článku (content/blog/*.mdx).
 * `id` musí sedieť s Person schémou na domovskej stránke
 * (src/app/(marketing)/page.tsx), aby Google aj AI vyhľadávače chápali,
 * že ide o tú istú osobu.
 */
export type Author = {
    /** @id v schema.org Person – zdieľané s domovskou stránkou. */
    id: string;
    name: string;
    jobTitle: string;
    /** Dve-tri vety, zobrazujú sa pod článkom. */
    bio: string;
    /** Cesta k fotke v public/. */
    image: string;
    /** Profily na sociálnych sieťach – sameAs v Person schéme. Doplniť, keď budú. */
    sameAs: string[];
};

export const AUTHORS = {
    "tomas-kuchta": {
        id: `${BASE_URL}/#tomas-kuchta`,
        name: "Tomáš Kuchta",
        jobTitle: "Sales & Operation Director, Mediconect",
        bio: `Vedie obchod a prevádzku v agentúre ${ORG.name}. Denne hovorí s lekármi a majiteľmi kliník o tom, ako získať pacientov bez toho, aby marketing zaťažoval ambulanciu. Píše o tom, čo v praxi funguje a čo nie.`,
        image: "/tomas_final.png",
        sameAs: [],
    },
} as const satisfies Record<string, Author>;

export type AuthorSlug = keyof typeof AUTHORS;

export function getAuthor(slug: string): Author {
    const author = (AUTHORS as Record<string, Author>)[slug];
    if (!author) {
        throw new Error(`[blog] Neznámy autor "${slug}" – doplňte ho do content/authors.ts`);
    }
    return author;
}
