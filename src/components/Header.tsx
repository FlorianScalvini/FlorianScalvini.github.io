import React, { useEffect, useRef, useState } from "react";
import ProjectCards from "./ProjectCards";
import {Link} from "react-router-dom";


function Header() {
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);

    // close on outside click / Esc
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
    return (
        <div className={""}>

            <div className={"w-5/6 mx-auto font-semibold h-20 text-lg"}>
                <div className="flex flex-row justify-between items-center h-full">
                    <div className="flex flex-row items-center border-4 border-black rounded-lg"
                         aria-label="Florian Scalvini">
                        <img className="p-2" src="./header_svg_name.svg" alt="" aria-hidden="true"/>
                        <p className="hidden md:block text-xl text-center py-2 pr-20">Florian Scalvini</p>
                    </div>
                    <nav className="relative">
                        {/* Mobile: hamburger (< md) */}
                        <div className="lg:hidden relative inline-block">
                            <button
                                aria-label="Toggle menu"
                                aria-expanded={open}
                                onClick={() => setOpen((v) => !v)}
                                className="border-4 border-black rounded-lg p-2 flex flex-col justify-center items-center gap-1"
                            >
                                <span
                                    className={`h-0.5 w-6 bg-black transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}/>
                                <span
                                    className={`h-0.5 w-6 bg-black transition-opacity ${open ? "opacity-0" : "opacity-100"}`}/>
                                <span
                                    className={`h-0.5 w-6 bg-black transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}/>
                            </button>

                            {open && (
                                <div
                                    ref={panelRef}
                                    className="absolute right-0 mt-2 w-56 text-xl border-4 border-black rounded-lg bg-white z-50 overflow-hidden"
                                >
                                    <ul className="divide-y-2 divide-black">
                                        <li>
                                            <div className="block px-4 py-3 relative">
                                                <Link to="/">
                                                    <div className="relative ">
                                                        {/* Rectangle Behind */}
                                                        <div
                                                            className="absolute -top-1 -left-6 right-32 -bottom-1  translate-x-4 bg-purple-300 -rotate-6 z-[-1] rounded-md"></div>
                                                        {/* Text on Top */}

                                                        <p className="font-bold relative z-10">
                                                            Home
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block px-4 py-3 relative">
                                                <Link to="/portfolio">
                                                    <div className="relative ">
                                                        {/* Rectangle Behind */}
                                                        <div
                                                            className="absolute -top-1 -left-6 right-4 -bottom-1  translate-x-4 bg-lime-300 -rotate-3 z-[-1] rounded-md"></div>
                                                        <p className="font-bold relative z-10">
                                                            Portfolio
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block px-4 py-3 relative">
                                                <Link to="/portfolio">
                                                    <div className="relative ">
                                                        {/* Rectangle Behind */}
                                                        <div
                                                            className="absolute -top-1 -left-6 right-20 -bottom-1  translate-x-4 bg-orange-300 -rotate-6 z-[-1] rounded-md"></div>
                                                        {/* Text on Top */}

                                                        <p className="font-bold relative z-10">
                                                            Publications
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="block px-4 py-3 relative">
                                                <Link to="/portfolio">
                                                    <div className="relative ">
                                                        {/* Rectangle Behind */}
                                                        <div
                                                            className="absolute -top-1 -left-6 right-24 -bottom-1  translate-x-4 bg-teal-200 -rotate-6 z-[-1] rounded-md"></div>
                                                        {/* Text on Top */}

                                                        <p className="font-bold relative z-10">
                                                            Teaching
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Desktop: original menu (md+) */}
                        <div
                            className="hidden lg:flex text-xl relative flex-row divide-x-2 divide-black border-4 border-black rounded-lg">
                            <div className="block px-4 py-3 relative">
                                <Link to="/">
                                    <div className="relative ">
                                        {/* Rectangle Behind */}
                                        <div
                                            className="absolute -top-0.5 -left-6 right-4 -bottom-1  translate-x-4 bg-purple-400 -rotate-3 z-[-1] rounded-md"></div>
                                        <p className="font-bold relative z-10">
                                            Home
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="block px-4 py-3 relative">
                                <Link to="/portfolio">
                                    <div className="relative ">
                                        {/* Rectangle Behind */}
                                        <div
                                            className="absolute -top-1 -left-6 right-4 -bottom-1  translate-x-4 bg-lime-300 -rotate-3 z-[-1] rounded-md"></div>
                                        <p className="font-bold relative z-10">
                                            Portfolio
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="block px-4 py-3 relative">
                                <Link to="/portfolio">
                                    <div className="relative ">
                                        {/* Rectangle Behind */}
                                        <div
                                            className="absolute -top-1 -left-3 right-3 -bottom-0.5  translate-x-3 bg-orange-300 -rotate-2 z-[-1] rounded-md"></div>
                                        <p className="font-bold relative z-10">
                                            Publications
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="block px-4 py-3 relative">
                                <Link to="/portfolio">
                                    <div className="relative ">
                                        {/* Rectangle Behind */}
                                        <div
                                            className="absolute -top-1 left-0 right-1 -bottom-0.5  translate-y-1 bg-teal-300 -rotate-2 z-[-1] rounded-md"></div>
                                        <p className="font-bold relative z-10">
                                            Teaching
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>


            <hr className=" w-screen border-black border-2 mx-auto mb-10 z-10"/>
            <img className={"absolute h-20 top-14 -left-10 scale-[1.7]  z-6"} src={"./shape_1.svg"}/>
            <img className={"absolute h-20 -top-12 -right-0 rotate-12 scale-[1.3] z-[-1] "} src={"./shape_1.svg"}/>
        </div>
    )
}

export default Header;