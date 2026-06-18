interface ProjectCardProps {
    title: string;
    img: string;
    date?: string;
    github?: string;
    link: string;
    description?: string;
    invert?: boolean;
}

function ProjectCards({ title, img, github = '', date = '', description = '', link, invert = true }: ProjectCardProps) {
    return (
        <div
            className="relative w-full rounded-2xl overflow-hidden border border-neutral-800 group"
            style={{ background: "linear-gradient(135deg, #0a0a0a 55%, #3b1f6e 100%)" }}
        >
            {/* Subtle glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.15), transparent 70%)" }} />

            <div className={`relative flex flex-col lg:flex-row ${invert ? "lg:flex-row-reverse" : ""} gap-8 p-8 lg:p-12 items-center`}>

                {/* Image */}
                <div className="w-full lg:w-1/2 shrink-0">
                    <div className="rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900">
                        <img src={img} alt={title} className="w-full max-h-72 object-contain p-6" />
                    </div>
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <span className="text-xs font-medium text-neutral-300 tracking-widest uppercase">{date}</span>

                    <h3
                        className="text-2xl lg:text-3xl font-bold leading-snug"
                        style={{
                            backgroundImage: "radial-gradient(circle at left, #ff6b6b, #6b5bff)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {title}
                    </h3>

                    <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>

                    <div className="flex items-center gap-3 pt-2">
                        {link?.trim() && (
                            <a
                                href={link} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-600 text-neutral-200 text-xs font-medium hover:border-violet-500 hover:text-white transition-colors"
                            >
                                <img src="/link.svg" alt="" className="w-3.5 h-3.5 brightness-0 invert opacity-70" />
                                Website
                            </a>
                        )}
                        {github?.trim() && (
                            <a
                                href={github} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-600 text-neutral-200 text-xs font-medium hover:border-violet-500 hover:text-white transition-colors"
                            >
                                <img src="/github-mark.svg" alt="" className="w-3.5 h-3.5 brightness-0 invert opacity-70" />
                                Code
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectCards;
