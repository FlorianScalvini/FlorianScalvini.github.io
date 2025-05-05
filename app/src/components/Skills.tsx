import React from 'react'
import SkillsCards from "./SkillsCards";

function Skills() {
    return (
        <div className={"w-5/6 mx-auto"}>
            <div className="relative inline-block mx-20 mb-10">
                {/* Rectangle Behind */}
                <div className="absolute -top-1 -left-4 -right-1 -bottom-1  translate-x-4 bg-fuchsia-200 -rotate-6 z-[-1] rounded-md"></div>

                {/* Text on Top */}
                <p className="text-4xl font-semibold relative z-10">
                    Skills
                </p>
            </div>
            <div className="mx-auto w-full flex flex-wrap gap-4 justify-center">
                {[...Array(14)].map((_, i) => (
                    <div key={i} className="basis-[12%]">
                        <SkillsCards
                            bgcolor={
                                [
                                    "bg-emerald-300",
                                    "bg-amber-300",
                                    "bg-purple-300",
                                    "bg-teal-300",
                                    "bg-cyan-300",
                                    "bg-amber-300",
                                    "bg-pink-300",
                                    "bg-emerald-300",
                                    "bg-red-300",
                                    "bg-fuchsia-300",
                                    "bg-yellow-200",
                                    "bg-indigo-300",
                                    "bg-green-300",
                                    "bg-orange-300",
                                ][i]
                            }
                            logo="../logo.svg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;