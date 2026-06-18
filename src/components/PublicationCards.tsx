interface PublicationsCardsProps {
    title: string;
    abstract: string;
    journal: string;
    img: string;
    type?: string;
    github?: string;
    link?: string;
}

const typeColor: Record<string, string> = {
    journal:    "bg-violet-500/10 text-violet-400 border-violet-500/20",
    conference: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

function PublicationsCards({ title, abstract, journal, img, type = "conference", github = "", link = "" }: PublicationsCardsProps) {
    return (
        <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 hover:border-neutral-600 transition-colors overflow-hidden group">

            {/* Thumbnail */}
            <div className="h-56 bg-neutral-800 border-b border-neutral-700 flex items-center justify-center p-6">
                {img
                    ? <img src={img} alt={journal} className="w-full h-full object-contain" />
                    : <span className="text-neutral-600 text-xs">No image</span>
                }
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${typeColor[type] ?? typeColor.conference}`}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                    <span className="text-neutral-500 text-xs italic truncate">{journal}</span>
                </div>

                <p className="text-white text-base font-semibold leading-snug line-clamp-2 group-hover:text-orange-400 transition-colors">
                    {title}
                </p>

                <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 flex-1">
                    {abstract}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
                    {link?.trim() && (
                        <a href={link} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors">
                            <img src="/link.svg" alt="" className="w-3.5 h-3.5 brightness-0 invert opacity-60" />
                            Paper
                        </a>
                    )}
                    {github?.trim() && (
                        <a href={github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors">
                            <img src="/github-mark.svg" alt="" className="w-3.5 h-3.5 brightness-0 invert opacity-60" />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PublicationsCards;
