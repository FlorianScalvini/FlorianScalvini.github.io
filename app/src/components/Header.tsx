import React from 'react'
import logo from '../logo.svg';
import ProjectCards from "./ProjectCards";


function Header() {
    return (
        <div className={""}>
            <img className={"absolute z-10 h-20 top-10 -left-10 scale-[1.7]"} src={"./shape_1.svg"}/>
            <img className={"absolute z-10 h-20 -top-12 -right-0 rotate-12 scale-[1.3]"} src={"./shape_1.svg"}/>
            <div className={"w-5/6 mx-auto font-semibold h-20 text-lg"}>
                <div className="flex flex-row justify-between items-center h-full">
                    <div className={"flex flex-row  items-center border-4 border-black rounded-lg"}>
                        <img className={"p-2"} src={"./header_svg_name.svg"}/>
                        <p className={"text-xl text-center py-2 pr-20"}>Florian Scalvini</p>
                    </div>
                    <div className="text-xl relative flex flex-row divide-x-2 divide-black border-4 border-black rounded-lg">
                        <a href="#">
                            <div className="relative inline-block my-2 mx-6">
                                <div
                                    className="absolute -top-0 -left-0.5 -right-0.5 -bottom-0  bg-purple-400 -rotate-2 z-[-1] rounded-md"></div>
                                Home
                            </div>
                        </a>
                        <a href="#">
                            <div className="relative inline-block my-2 mx-6">
                                <div
                                    className="absolute -top-0 -left-0.5 -right-0.5 -bottom-0  bg-lime-300 -rotate-2 z-[-2] rounded-md "></div>
                                Publications
                            </div>
                        </a>
                        <a href="#">
                            <div className="relative inline-block my-2 mx-6">
                                <div
                                    className="absolute -top-0 -left-0.5 -right-0.5 -bottom-0  bg-teal-300 -rotate-2 z-[-2] rounded-md"></div>
                                Teaching
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="-z-20 w-screen border-black border-2 mx-auto mb-10"/>
        </div>
    )
}

export default Header;