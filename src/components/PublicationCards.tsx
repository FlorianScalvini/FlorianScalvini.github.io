import React from 'react';
import Label from "./Label";

interface PublicationsCardsProps {
    title: string;
    journal: string;
    img: string;
    type?: string;
    github?: string;
    link: string;
}

function PublicationsCards({ title, journal, img, type = 'conference', github = '', link }: PublicationsCardsProps) {
    const excess = 5;
    return (
        <div className="relative m-2 mb-4 bg-white h-auto" style={{ width: 400 }}>
            {/* Top line */}
            <span className="rounded-3xl absolute top-0 left-[-8px] right-[-8px]  bg-purple-400" style={{ height: excess }} />
            {/* Bottom line */}
            <span className="rounded-3xl absolute bottom-0 left-[-8px] right-[-8px]  bg-emerald-300" style={{ height: excess }} />
            {/* Left line */}
            <span className="rounded-3xl absolute top-[-8px] bottom-[-8px] left-0 bg-orange-300" style={{ width: excess }} />
            {/* Right line */}
            <span className="rounded-3xl absolute top-[-8px] bottom-[-8px] right-0 bg-yellow-300" style={{ width: excess }} />

            <div className="flex w-10/12 flex-col pt-3 m-auto items-center">
                <img
                    src={img}
                    alt="Logo"
                    className="w-full max-h-52 p-3 rounded-lg bg-white border-4 object-contain border-cyan-100"
                />
                <div className="w-full self-start mt-2">
                    <div className="flex flex-row justify-between items-center h-8">
                        <Label name={type}/>
                        <div className="relative flex flex-row justify-between items-center h-8 gap-2">
                            {/* Link Icon */}
                            <a className="my-auto" href="https://your-link.com" target="_blank"
                               rel="noopener noreferrer">
                                <img src="./link.svg" alt="Link" className="w-6 h-6 object-contain"/>
                            </a>

                            {/* GitHub Icon (only if github is not empty) */}
                            {github?.trim() && (
                                <a href="https://github.com/FlorianScalvini" target="_blank" rel="noopener noreferrer">
                                    <img className="w-6 h-6" src="./github-mark.svg" alt="Github"/>
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="mt-2 pb-5">
                        <p className="text-lg font-bold">{title}</p>
                        <p className="text-lg italic font-semibold text-gray-800">{journal}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicationsCards;