import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Home",         to: "/" },
    { label: "Portfolio",    to: "/portfolio" },
    { label: "Publications", to: "/publications" },
    { label: "Teaching",     to: "/teaching" },
];

function Header() {
    const [open, setOpen]       = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
        };
        const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onEsc);
        };
    }, []);

    const isActive = (to: string) =>
        to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

    return (
        <header
            className={`w-screen sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-neutral-950/85 backdrop-blur-md shadow-lg shadow-black/30"
                    : "bg-neutral-950"
            }`}
        >
            <div className="w-5/6 mx-auto h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" aria-label="Florian Scalvini" className="shrink-0">
                    <img className="h-6" src="/header_svg_name.svg" alt="Florian Scalvini" />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-0.5">
                    {navLinks.map(({ label, to }) => {
                        const active = isActive(to);
                        return (
                            <Link
                                key={label}
                                to={to}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                    active
                                        ? "text-white"
                                        : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
                                }`}
                            >
                                {label}
                                {active && (
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-400" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    {/* CV pill — desktop only */}
                    <a
                        href="./cv_powerpoint.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold transition-colors"
                    >
                        CV <span className="opacity-75">↓</span>
                    </a>

                    {/* Mobile hamburger */}
                    <div className="lg:hidden relative" ref={panelRef}>
                        <button
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            onClick={() => setOpen(v => !v)}
                            className="flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                        >
                            <span className={`h-0.5 w-5 bg-white transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
                            <span className={`h-0.5 w-5 bg-white transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
                            <span className={`h-0.5 w-5 bg-white transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-2 w-52 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700/80 rounded-2xl shadow-2xl overflow-hidden z-50">
                                <div className="p-2 flex flex-col gap-0.5">
                                    {navLinks.map(({ label, to }) => {
                                        const active = isActive(to);
                                        return (
                                            <Link
                                                key={label}
                                                to={to}
                                                onClick={() => setOpen(false)}
                                                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                                                    active
                                                        ? "bg-neutral-800 text-white font-medium"
                                                        : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                                                }`}
                                            >
                                                {active && (
                                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                                                )}
                                                {!active && <span className="w-1.5 h-1.5 shrink-0" />}
                                                {label}
                                            </Link>
                                        );
                                    })}
                                </div>
                                <div className="border-t border-neutral-800 p-3">
                                    <a
                                        href="./cv_powerpoint.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold transition-colors"
                                    >
                                        Download CV ↓
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Gradient separator */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        </header>
    );
}

export default Header;
