function Footer() {
    return (
        <footer className="w-screen bg-neutral-950 relative">
            {/* Gradient separator — top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent blur-md pointer-events-none" />

            <div className="w-5/6 mx-auto py-8 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 shrink-0 border-2 bg-neutral-900 border-neutral-600 rounded-full flex">
                            <img src="/monster.png" className="m-auto h-8 w-8" alt="Avatar" />
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-neutral-950" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-white font-semibold text-base">Florian Scalvini</span>
                            <span className="text-neutral-300 text-sm">Postdoctoral researcher</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center">
                        <a href="https://fr.linkedin.com/in/florian-scalvini-b79852173"
                            className="opacity-75 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                            <img className="w-5 h-5 brightness-0 invert" src="/linkedin.svg" alt="LinkedIn" />
                        </a>
                        <a href="mailto:florian.scalvini@imt-atlantique.fr"
                            className="opacity-75 hover:opacity-100 transition-opacity" aria-label="Email">
                            <img className="w-5 h-5 brightness-0 invert" src="/email.svg" alt="Email" />
                        </a>
                        <a href="https://scholar.google.com/citations?user=JqB_G6YAAAAJ&hl=fr"
                            className="opacity-75 hover:opacity-100 transition-opacity" aria-label="Google Scholar">
                            <img className="w-5 h-5 brightness-0 invert" src="/googlescholar.svg" alt="Google Scholar" />
                        </a>
                    </div>
                </div>
                <hr className="border-neutral-800" />
                <p className="text-neutral-400 text-xs text-center">
                    © {new Date().getFullYear()} Florian Scalvini. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
