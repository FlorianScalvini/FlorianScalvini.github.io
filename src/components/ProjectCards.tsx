import React from 'react'
import Label from "./Label";

interface ProjectCardProps {
    title: string;
    img: string;
    type?: string;
    date?: string;
    github?: string;
    link: string;
    description?: string;
    invert?: boolean; // NEW
}
function ProjectCards({title, img, type='', github='', date='', description='', link, invert = true}: ProjectCardProps) {
    const excess = 5;
    return (
        <div className="relative w-full m-2 mb-4 bg-white h-auto">
            {/* Borders */}
            <span className="rounded-3xl absolute top-0 left-[-8px] right-[-8px] bg-purple-400" style={{ height: excess }} />
            <span className="rounded-3xl absolute bottom-0 left-[-8px] right-[-8px] bg-emerald-300" style={{ height: excess }} />
            <span className="rounded-3xl absolute top-[-8px] bottom-[-8px] left-0 bg-orange-300" style={{ width: excess }} />
            <span className="rounded-3xl absolute top-[-8px] bottom-[-8px] right-0 bg-yellow-300" style={{ width: excess }} />

            <div
                className={`relative flex flex-col lg:flex-row ${invert ? "lg:flex-row-reverse" : ""} justify-between p-6`}>
                {/* Image Side */}
                <div className="flex w-3/4 lg:w-1/2 flex-col pt-3 m-auto items-center">
                    <div className="w-full flex m-auto items-center text-center">
                        <a href={"/publications"}
                           className="m-auto p-1.5 bg-gradient-to-r from-emerald-300 via-amber-300 to-fuchsia-300">
                            <div className="bg-white font-bold p-3 text-3xl">
                                <img src={img} alt="Logo" className="w-full max-h-72 p-3 bg-white object-contain"/>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Text Side */}
                <div className={`w-3/4 lg:w-1/2 text-2xl font-semibold lg:m-16 flex flex-col justify-center m-auto`}>
                    <div className="w-full self-start">
                        <div className="mt-2 pb-5">
                            <div className="text-2xl font-bold">{title}</div>
                            <div className="text-xl italic font-semibold text-gray-800">{date}</div>
                            <div className="relative flex flex-row items-center h-8 gap-2">
                                <a className="my-auto" href={link} target="_blank" rel="noopener noreferrer">
                                    <img src="./link.svg" alt="Link" className="w-6 h-6 object-contain"/>
                                </a>
                                {github?.trim() && (
                                    <a href={github} target="_blank" rel="noopener noreferrer">
                                        <img className="w-6 h-6" src="./github-mark.svg" alt="Github"/>
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="text-lg">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards;