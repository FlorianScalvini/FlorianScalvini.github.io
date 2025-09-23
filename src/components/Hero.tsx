import React from 'react';
import ProjectCards from "./ProjectCards";

function Hero() {
    const excess = 10;

    return (
        <div className="w-5/6 mx-auto h-auto lg:h-[calc(100vh-8rem)] font-bold mb-20">
            {/* Responsive font sizes + layout: stack on mobile, row on md+ */}
            <div className="text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl flex flex-col-reverse lg:flex-row lg:items-center gap-8">

                {/* LEFT — text block, centered on mobile */}
                <div className="order-2   max-lg:h-vm lg:order-1 w-full h-[calc(100vh-15rem)] flex flex-col justify-center items-center lg:items-start max-lg:my-12">
                    <div className="max-lg:hidden relative w-40 h-40 self-start">
                        <div
                            className="absolute bg-lime-300 h-40 w-40 shadow-lg -z-20"
                            style={{ rotate: "-40deg", backgroundColor: "#F1FF58" }}
                        />
                        <img
                            className="absolute -top-20 left-12 -z-10"
                            src="./terminal.svg"
                            alt="Terminal"
                        />
                    </div>

                    <div className="flex flex-col gap-3 self-start max-lg:m-auto text-center lg:text-left">
                        {/* First line: Hi ! I'm Florian, */}
                        <div className="flex flex-wrap items-center gap-x-2 justify-center lg:justify-start">
                            <p>Hi ! I'm</p>
                            <div className="relative inline-block">
                                <p className="relative z-10 inline-block">Florian,</p>
                                <div className="absolute right-5 inset-0 bg-teal-300 z-0 rounded-md translate-y-1"></div>
                            </div>
                        </div>

                        <p className="relative z-10 inline-block">researcher in</p>

                        {/* Third line: computer vision with per-word highlights */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            <div className="relative inline-block">
                                <p className="relative z-10 inline-block">computer</p>
                                <div className="absolute -top-2 -bottom-2 -right-6 -left-3 bg-orange-200 z-0 rounded-md translate-y-2 -rotate-3"></div>
                            </div>

                            <div className="relative inline-block">
                                <p className="relative z-10 inline-block">vision</p>
                                <div className="absolute -top-2 -bottom-2 inset-0 bg-purple-300 z-0 rounded-md translate-y-2 rotate-1"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8 self-start justify-center lg:justify-start">
                        <a
                            className="flex items-center justify-center rounded-full border-4 border-black py-2 px-4 text-center font-semibold text-lg bg-lime-300"
                            href="./cv_powerpoint.pdf"
                            target={"_blank"}
                        >
                            My portfolio :)
                        </a>
                        <a
                            href="https://scholar.google.com/citations?user=JqB_G6YAAAAJ&hl=fr"
                            className="flex items-center justify-center rounded-full border-4 border-black p-2 font-semibold text-lg bg-amber-300"
                        >
                            <img className="w-8 h-8 p-1" src="./googlescholar.svg" alt="Google Scholar" />
                        </a>
                        <a
                            href="https://orcid.org/0009-0007-5257-1277"
                            className="flex items-center justify-center rounded-full border-4 border-black p-2 font-semibold text-lg bg-teal-300"
                        >
                            <img className="w-8 h-8 p-1" src="./orcid.svg" alt="Orcid" />
                        </a>
                        <a
                            href="https://github.com/FlorianScalvini"
                            className="flex items-center justify-center rounded-full border-4 border-black p-2 font-semibold text-lg bg-fuchsia-300"
                        >
                            <img className="w-8 h-8 p-1" src="./github-mark.svg" alt="Github" />
                        </a>
                    </div>
                </div>

                {/* RIGHT — card block, centered on mobile, never cropped */}
                <div className="order-1 lg:order-2 w-full flex justify-center rotate-6">
                    {/* Use vertical padding on mobile to make room for decorations that stick out */}
                    <div className="relative w-full max-w-[420px] flex flex-col items-center pt-2 pb-24 lg:pb-8">
                        <img className="h-16 lg:h-20 mb-4 object-contain" src="./its_me.svg" alt="It's me" />

                        {/* Card wrapper: auto height on mobile; no clipping */}
                        <div className="relative w-full">
                            {/* Border lines (extend slightly past edges) */}
                            <div className="relative w-full">
                                <span
                                    className="rounded-3xl absolute top-0 bg-black"
                                    style={{ height: 5, left: -excess, right: -excess }}
                                />
                                <span
                                    className="rounded-3xl absolute bottom-0 bg-black"
                                    style={{ height: 5, left: -excess, right: -excess }}
                                />
                                <span
                                    className="rounded-3xl absolute left-0 bg-black"
                                    style={{ width: 5, top: -excess, bottom: -excess }}
                                />
                                <span
                                    className="rounded-3xl absolute right-0 bg-black"
                                    style={{ width: 5, top: -excess, bottom: -excess }}
                                />

                                {/* Card content box */}
                                <div className="flex flex-col bg-gray-50 justify-center items-center p-4 min-h-[20rem] lg:min-h-[24rem]">
                                    <div className="flex flex-row space-x-20 mt-2 mb-4">
                                        <div className="w-3 h-3 bg-black rounded-full" />
                                        <div className="w-3 h-3 bg-black rounded-full" />
                                    </div>
                                    {/* Prevent cropping: object-contain + max-h */}
                                    <img
                                        src="./monster.png"
                                        alt="Logo"
                                        className="w-full max-w-[300px] h-auto max-h-60 object-contain border-black bg-gray-300 border-4 rounded-[30px] p-8"
                                    />
                                </div>
                            </div>

                            {/* Decorations (not clipped). Extra bottom padding above keeps them off the next section on mobile */}
                            <div className="h-20 w-20 rounded-full -top-8 -left-8 absolute bg-amber-400 flex items-center border-4 shadow-lg">
                                <img className="h-14 w-14 m-auto rotate-6" src="./mlp.svg" alt="MLP" />
                            </div>

                            <img className="h-32 w-32 -bottom-8 -right-8 absolute rotate-45" src="./brain.svg" alt="Brain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;