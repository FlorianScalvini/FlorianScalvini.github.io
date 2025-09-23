import React from 'react';
import ProjectCards from "./ProjectCards";

function Resume() {
    const excess = 10;

    return (
        <div className="w-5/6 mx-auto h-auto md:h-[calc(100vh-8rem)] font-bold">
            <div className="text-5xl text-center font-bold mx-auto w-full">
                <div className="relative inline-block mx-20 mb-32">
                    {/* Rectangle Behind */}
                    <div
                        className="absolute -top-1 -left-4 -right-1 -bottom-1 translate-y-1 translate-x-2 bg-cyan-300 -rotate-3 z-[-1] rounded-md"></div>
                    <p>Resume</p>
                </div>
            </div>

        </div>
    );
}

export default Resume;
