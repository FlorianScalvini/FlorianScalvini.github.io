import React from 'react'
import ProjectCards from "./ProjectCards";

function Project() {
    return (
        <div className="w-5/6 mx-auto">
            <div className="text-5xl text-center font-bold mx-auto w-full">
                <div className="relative inline-block mx-20 mb-10">
                    {/* Rectangle Behind */}
                    <div
                        className="absolute -top-1 -left-4 -right-1 -bottom-1 translate-y-1 translate-x-2 bg-emerald-200 -rotate-3 z-[-1] rounded-md"></div>
                    <p className={""}>Project</p>
                </div>
            </div>

            <div className="w-full flex flex-row gap-8 items-center justify-around">
                <div className="-rotate-6">
                    <ProjectCards title={"3D Sound Glasses"} description={"UI design - User research -\n" +
                        "webflow develop"} img={"./logo.svg"} link={""}/>
                </div>
                <p className={"text-2xl"}>Here’s what my clients
                    are saying about my work</p>
            </div>

            <div className="w-full flex flex-row gap-8 items-center justify-around">
                <p className={"text-2xl"}>Here’s what my clients
                    are saying about my work</p>
                <div className="rotate-6">
                    <ProjectCards title={"3D Sound Glasses"} description={"UI design - User research -\n" +
                        "webflow develop"} img={"./logo.svg"} link={""}/>
                </div>
            </div>
        </div>

    )
}

export default Project;