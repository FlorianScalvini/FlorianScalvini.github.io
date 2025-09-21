import React from 'react'
import ProjectCards from "./ProjectCards";

function Project() {
    return (
        <div className="w-5/6 mx-auto mb-64">
            <div className="text-5xl text-center font-bold mx-auto w-full">
                <div className="relative inline-block mx-20 mb-32">
                    {/* Rectangle Behind */}
                    <div className="absolute -top-1 -left-4 -right-1 -bottom-1 translate-y-1 translate-x-2 bg-lime-200 -rotate-3 z-[-1] rounded-md"></div>
                    <p>Project</p>
                </div>
            </div>

            {/* First Project */}
            <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-around">
                <div className="-rotate-6">
                    <ProjectCards
                        title={"Envergure Project ~ 3D Sound Glasses"}
                        img={"./3dsg.png"}
                        link={"https://imvia.ube.fr/3d-sound-glasses/"}
                        date={"2020 ~ 2023"}
                        github={"https://github.com/FlorianScalvini/Thesis-3DSG-Project"}
                    />
                </div>
                <p className="text-2xl font-semibold w-full md:w-1/2">
                    The project aims to develop electronic glasses to help visually impaired people avoid obstacles
                    using a 3D camera that converts visual information into spatialized sounds. Visual dimensions
                    (left-right, up-down, near-far) are translated into auditory cues (right-left ear, pitch, sound effects).
                </p>
            </div>

            {/* Second Project */}
            <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-around mt-16">
                <p className="text-2xl font-semibold w-full md:w-1/2">
                    HINT develops methods and software to study neurodevelopment in neonates.
                    It tackles data scarcity and heterogeneity challenges in imaging and signals. Focus areas: longitudinal analysis of fetal brain deformations
                </p>
                <div className="rotate-6">
                    <ProjectCards
                        title={"ANR HINT Project"}
                        img={"./recalage_1.png"}
                        link={"https://anr-hint.pages.in2p3.fr/"}
                        github={"https://github.com/gis-beachild/"}
                        date={"2024 ~ 2026"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Project;
