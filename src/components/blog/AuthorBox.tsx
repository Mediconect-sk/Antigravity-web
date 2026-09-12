import Image from "next/image";
import type { Author } from "../../../content/authors";

/** Box autora pod článkom – nositeľ E-E-A-T. Dáta v content/authors.ts. */
export default function AuthorBox({ author }: { author: Author }) {
    return (
        <aside className="glass rounded-3xl border border-white/5 p-6 lg:p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-teal/20 flex-shrink-0 bg-navy-light">
                <Image src={author.image} alt={author.name} fill sizes="80px" className="object-cover object-top" />
            </div>
            <div>
                <div className="text-xs text-teal font-semibold uppercase tracking-wider mb-1">Autor</div>
                <div className="text-white font-kanit font-bold text-xl">{author.name}</div>
                <div className="text-white/40 text-sm mb-3">{author.jobTitle}</div>
                <p className="text-white/60 leading-relaxed text-sm">{author.bio}</p>
            </div>
        </aside>
    );
}
