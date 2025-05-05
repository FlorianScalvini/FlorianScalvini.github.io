import React from 'react'
import logo from '../logo.svg';
import ProjectCards from "./ProjectCards";


function Hero() {
    const excess=10;
    return (
        <div className={"w-5/6 mx-auto h-[calc(100vh-8rem)] text-5xl font-bold"}>
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-1/2 h-[calc(100vh-8rem)] flex flex-col justify-center items-center">
                    <div className="relative w-32 h-32 self-start">
                        <div className="bg-lime-300  h-20 w-24 shadow-lg"
                             style={{rotate: "-40deg", backgroundColor: "#F1FF58"}}/>
                        <img className="absolute top-2 left-12 h-32" src="./terminal.svg" alt="Terminal"/>
                    </div>
                    <div className={"flex flex-col gap-3 self-start"}>
                        <div className="flex flex-row">
                            <p className="mr-1.5">Hi ! I'm</p>
                            <div className="relative inline-block">
                                <p className={""}>Florian</p>
                                <div
                                    className="absolute -top-0 -left-0 -right-0 -bottom-0 translate-y-1  bg-teal-300  z-[-1] rounded-md"></div>
                            </div>
                            <p>,</p>
                        </div>
                        <div>researcher in</div>
                        <div className="flex flex-row ">
                            <div className="relative inline-block">
                                <p className={""}>computer vision</p>
                                <div
                                    className="absolute -top-0 -left-0 -right-0 -bottom-0 translate-y-1  bg-purple-300  z-[-1] rounded-md"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8 self-start">
                        <a className={"flex items-center justify-center rounded-full border-4 border-black py-2 px-4 text-center font-semibold text-lg bg-lime-300"}
                           href={""}>
                            My portfolio :)
                        </a>
                        <a href={"https://scholar.google.com/citations?user=JqB_G6YAAAAJ&hl=fr"}
                           className={"flex items-center justify-center rounded-full border-4 border-black p-2 font-semibold text-lg bg-amber-300"}>
                            <img className={"w-8 h-8 p-1"} src={"./googlescholar.svg"} alt={"Google Scholar"}/>
                        </a>
                        <a href={"hhttps://orcid.org/0009-0007-5257-1277"}
                           className={"flex items-center justify-center rounded-full border-4 border-black p-2 font-semibold text-lg bg-teal-300"}>
                            <img className={"w-8 h-8 p-1"} src={"./orcid.svg"} alt={"Orcid"}/>
                        </a>
                        <a href={"https://github.com/FlorianScalvini"}
                           className={"flex items-center justify-center rounded-full border-4 border-black p-2 font-semibold text-lg bg-fuchsia-300"}>
                            <img className={"w-8 h-8 p-1"} src={"./github-mark.svg"} alt={"Github"}/>
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col justify-center items-center" style={{height: 500, width: 500}}>
                    <img className="h-20 " src="./its_me.svg"/>
                    {/* Card wrapper */}
                    <div className="relative h-96 w-[400px] flex justify-center items-center">
                        {/* Card container with border lines */}
                        <div className="relative w-full h-full">
                            {/* Border lines */}
                            <span className="rounded-3xl absolute top-0 bg-black"
                                  style={{height: 5, left: -excess, right: -excess}}/>
                            <span className="rounded-3xl absolute bottom-0 bg-black"
                                  style={{height: 5, left: -excess, right: -excess}}/>
                            <span className="rounded-3xl absolute left-0 bg-black"
                                  style={{width: 5, top: -excess, bottom: -excess}}/>
                            <span className="rounded-3xl absolute right-0 bg-black"
                                  style={{width: 5, top: -excess, bottom: -excess}}/>

                            {/* Card content */}
                            <div className="flex flex-col bg-gray-50 h-full justify-center items-center p-4">
                                <div className="flex flex-row space-x-20 mt-4 mb-4">
                                    <div className="w-3 h-3 bg-black rounded-full"/>
                                    <div className="w-3 h-3 bg-black rounded-full"/>
                                </div>
                                <img
                                    src="./logo.svg"
                                    alt="Logo"
                                    className="w-3/4 h-3/4 border-black bg-gray-300 border-4 rounded-[30px]"
                                />
                            </div>
                        </div>

                        {/* Decorations */}
                        <div
                            className="h-20 w-20 rounded-full -top-8 -left-8 absolute bg-amber-400 flex items-center border-4 shadow-lg">
                            <img className="h-14 w-14 m-auto rotate-6" src="./mlp.svg"/>
                        </div>

                        <img className="h-32 w-32 -bottom-8 -right-8 absolute rotate-45" src="./brain.svg"/>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hero;