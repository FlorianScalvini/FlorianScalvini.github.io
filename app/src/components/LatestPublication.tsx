import React from 'react'
import ProjectCards from "./ProjectCards";


function LatestPublication() {
    return (
        <div className="w-5/6 mx-auto">
            <div className="text-4xl text-center font-semibold mx-auto w-full">
                <div className="relative inline-block mx-20 mb-10">
                    {/* Rectangle Behind */}
                    <div
                        className="absolute -top-1 -left-4 -right-1 -bottom-1 translate-y-1 translate-x-2 bg-emerald-200 -rotate-3 z-[-1] rounded-md"></div>
                    <p className={""}>Latest Publications</p>
                </div>
            </div>

            <div className="w-full flex flex-wrap gap-8 items-center justify-around">
                <ProjectCards title={"3D Sound Glasses"} description={"UI design - User research -\n" +
                    "webflow develop"} img={"./logo.svg"} link={""}/>
                <ProjectCards title={"3D Sound Glasses"} description={"UI design - User research -\n" +
                    "webflow develop"} img={"./logo.svg"} link={""}/>
                <ProjectCards title={"3D Sound Glasses"} description={"UI design - User research -\n" +
                    "webflow develop"} img={"./logo.svg"} link={""}/>
                <ProjectCards title={"3D Sound Glasses"} description={"UI design - User research -\n" +
                    "webflow develop"} img={"./logo.svg"} link={""}/>
                <ProjectCards title={"3D Sound Glasses"} description={"UI design - User research -\n" +
                    "webflow develop"} img={"./logo.svg"} link={""}/>
                <ProjectCards title={"3D Sound Glasses"} description={"UI design - User research -\n" +
                    "webflow develop"} img={"./logo.svg"} link={""}/>
            </div>
        </div>

    )
}

export default LatestPublication;