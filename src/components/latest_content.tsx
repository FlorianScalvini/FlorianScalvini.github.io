const items = [
    {
        tag: "Publication",
        date: "Jun 2024",
        title: "",
        abstract: "",
        href: "#",
    },
    {
        tag: "Project",
        date: "Mar 2024",
        title: "",
        abstract: "",
        href: "#",
    },
    {
        tag: "Talk",
        date: "Jan 2024",
        title: "",
        abstract: "",
        href: "#",
    },
];

const tagColor: Record<string, string> = {
    Publication: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    Project:     "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Talk:        "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

function LatestContent() {
    return (
        <section className="bg-neutral-950 py-28">
            <div className="w-5/6 mx-auto flex flex-col gap-14">

                {/* Header */}
                <div>
                    <p className="text-neutral-400 text-sm font-medium tracking-widest uppercase mb-4">What's new</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-orange-400">Latest</h2>
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-5">
                    {items.map(({ tag, date, title, abstract, href }) => (
                        <a
                            key={title}
                            href={href}
                            className="group flex flex-col sm:flex-row sm:items-start gap-6 p-7 rounded-2xl border border-neutral-700 bg-neutral-900 hover:border-neutral-500 hover:bg-neutral-800/60 transition-colors"
                        >
                            {/* Left meta */}
                            <div className="sm:w-36 shrink-0 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-3">
                                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagColor[tag]}`}>
                                    {tag}
                                </span>
                                <span className="text-neutral-500 text-xs">{date}</span>
                            </div>

                            {/* Divider */}
                            <div className="hidden sm:block w-px self-stretch bg-neutral-700" />

                            {/* Content */}
                            <div className="flex flex-col gap-3 flex-1 min-w-0">
                                <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-orange-400 transition-colors">
                                    {title}
                                </h3>
                                <p className="text-neutral-300 text-sm leading-relaxed line-clamp-2">{abstract}</p>
                                <span className="mt-1 text-orange-400 text-sm font-medium group-hover:underline">
                                    Read more →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default LatestContent;
