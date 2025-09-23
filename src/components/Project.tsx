import React from 'react'
import ProjectCards from "./ProjectCards";

function Project() {
    return (
        <div className="w-full flex flex-col items-center mb-64">
            {/* Title */}
            <div className=" lg:-rotate-6  md:-rotate-3 text-6xl text-center font-bold w-full mb-16">
                <div className="relative inline-block mx-20">
                    <div
                        className="absolute -top-1 -left-4 -right-1 -bottom-1 translate-y-1 translate-x-2 bg-lime-200 -rotate-3 z-[-1] rounded-md"></div>
                    <p>Project</p>
                    <div className={"absolute -bottom-14 -right-20  scale-75 -z-10"}>
                        <img alt={"three_trait"} src={"./trait.png"}/>
                    </div>
                </div>
            </div>

            {/* Projects Container */}
            <div className="flex flex-col items-center gap-12 w-3/5 ">
                {/* First Project */}
                <div className=" lg:-rotate-6 md:-rotate-3  w-full flex justify-center z-10">
                    <ProjectCards
                        title="Envergure Project ~ 3D Sound Glasses"
                        img="./3dsg.png"
                        link="https://imvia.ube.fr/3d-sound-glasses/"
                        date="2020 ~ 2023"
                        github="https://github.com/FlorianScalvini/Thesis-3DSG-Project"
                        description="HINT develops methods and software to study neurodevelopment in neonates. It tackles data scarcity and heterogeneity challenges in imaging and signals. Focus areas: longitudinal analysis of fetal brain deformations"
                    />
                </div>

                {/* Second Project */}
                <div className="lg:rotate-6  md:rotate-3 w-full flex justify-center">
                    <ProjectCards
                        title="ANR HINT Project"
                        img="./recalage_1.png"
                        link="https://anr-hint.pages.in2p3.fr/"
                        github="https://github.com/gis-beachild/"
                        date="2024 ~ 2026"
                        description="HINT develops methods and software to study neurodevelopment in neonates. It tackles data scarcity and heterogeneity challenges in imaging and signals. Focus areas: longitudinal analysis of fetal brain deformations"
                        invert={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default Project;
