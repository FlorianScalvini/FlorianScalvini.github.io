import React, { useEffect, useRef, useState } from "react";
import ProjectCards from "./ProjectCards";


function Footer() {
    return (
        <footer className={"w-screen"}>
            <hr className=" w-screen border-black border-2 mx-auto mb-4 z-10"/>
            <div className={"relative flex justify-between w-5/6 mx-auto mb-4"}>
                <div className={"flex flex-row gap-6"}>
                    <a
                        href="https://github.com/FlorianScalvini"
                        className="flex items-center justify-center font-semibold text-lg "
                    >
                        <img className="w-6 h-6" src="./linkedin.svg" alt="Github"/>
                    </a>
                    <a
                        href="mailto:florian.scalvini@imt-atlantique.fr"
                        className="flex items-center justify-center  font-semibold text-lg "
                    >
                        <img className="w-8 h-8" src="./email.svg" alt="Github"/>
                    </a>
                    <a
                        href="https://scholar.google.com/citations?user=JqB_G6YAAAAJ&hl=fr"
                        className="flex items-center justify-center font-semibold text-lg "
                    >
                        <img className="w-6 h-6" src="./googlescholar.svg" alt="Google Scholar"/>
                    </a>
                </div>
                <p className={"text-lg font-semibold italic h-10 my-auto"}>© Fl0ri@n ~ Oct 2025</p>
            </div>
        </footer>
    )
}

export default Footer;