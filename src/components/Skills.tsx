import React from 'react'
import SkillsCards from "./SkillsCards";

function Skills() {
    return (
        <div className={"relative"}>
            <img className={"absolute -top-72 -right-52 scale-[0.3] z-[-1] rotate-45"} src={"./gears.png"}/>
            <div className={"relative w-5/6 mx-auto mb-16"}>

                <div className="relative">
                    <div className="relative inline-block mx-20 mb-10">
                        {/* Rectangle Behind */}
                        <div
                            className="absolute -top-1 -left-4 -right-1 -bottom-1  translate-x-4 bg-fuchsia-200 -rotate-6 z-[-1] rounded-md"></div>

                        {/* Text on Top */}

                        <p className="text-5xl font-bold relative z-10">
                            Skills
                        </p>
                    </div>

                </div>

                <div
                    className="mx-auto w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
                    <SkillsCards bgcolor="bg-emerald-300" logo="../c_plus_plus.svg"/>
                    <SkillsCards bgcolor="bg-amber-300" logo="../python.svg"/>
                    <SkillsCards bgcolor="bg-purple-300" logo="../swift.svg"/>
                    <SkillsCards bgcolor="bg-teal-300" logo="../java.svg"/>
                    <SkillsCards bgcolor="bg-cyan-300" logo="../matlab.svg"/>
                    <SkillsCards bgcolor="bg-amber-300" logo="../nodejs.svg"/>
                    <SkillsCards bgcolor="bg-pink-300" logo="../tailwind.svg"/>
                    <SkillsCards bgcolor="bg-emerald-300" logo="../docker.svg"/>
                    <SkillsCards bgcolor="bg-red-300" logo="../pytorch.svg"/>
                    <SkillsCards bgcolor="bg-fuchsia-300" logo="../tensorflow.svg"/>
                    <SkillsCards bgcolor="bg-yellow-300" logo="../opencv.svg"/>
                    <SkillsCards bgcolor="bg-green-300" logo="../unity.svg"/>
                </div>
                <img className={"absolute  h-20 top-30 -left-10 scale-[2.7] z-[-1] "} src={"./shape_1.svg"}/>
            </div>
        </div>

    );
}

export default Skills;