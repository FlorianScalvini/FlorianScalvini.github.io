const socialLinks = [
    { href: "https://fr.linkedin.com/in/florian-scalvini-b79852173", icon: "/linkedin.svg", label: "LinkedIn" },
    { href: "https://scholar.google.com/citations?user=JqB_G6YAAAAJ&hl=fr", icon: "/googlescholar.svg", label: "Google Scholar" },
    { href: "https://orcid.org/0009-0007-5257-1277", icon: "/orcid.svg", label: "ORCID" },
    { href: "https://github.com/FlorianScalvini", icon: "/github-mark.svg", label: "GitHub" },
];

function Hero() {
    return (
        <div className="relative bg-neutral-950 overflow-hidden">
            {/* Background image */}
            <img
                src="/hero.png"
                alt=""
                className="absolute bottom-0 left-0 w-full h-auto object-cover object-bottom pointer-events-none select-none z-0 opacity-60"
            />

            {/* Content */}
            <div className="relative z-10 w-5/6 mx-auto min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20 lg:py-0">

                {/* Greeting */}
                <p className="text-neutral-300 text-sm lg:text-base font-medium tracking-widest uppercase mb-4">
                    Welcome to my portfolio
                </p>

                {/* Name */}
                <h1
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4"
                    style={{
                        backgroundImage: "radial-gradient(circle at left, #FF946D, #EABA35)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Hi, I'm Florian
                </h1>

                {/* Role */}
                <p className="text-neutral-100 text-lg sm:text-xl lg:text-2xl font-extralight max-w-xl mb-10 leading-relaxed">
                    Postdoctoral researcher in <span className="text-neutral-200 font-light">image processing</span>
                </p>

                {/* Socials */}
                <div className="flex items-center gap-3">
                    {socialLinks.map(({ href, icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors"
                        >
                            <img className="w-5 h-5 brightness-0 invert" src={icon} alt={label} />
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Hero;
