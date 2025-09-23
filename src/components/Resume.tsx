import React from 'react';

function Resume() {
    return (
        <div className="w-5/6 mx-auto font-bold mb-32">
            <div className="text-5xl text-center font-bold mx-auto w-full">
                <div className="relative inline-block mx-20 mb-32">
                    {/* Rectangle Behind */}
                    <div className="absolute -top-1 -left-4 -right-1 -bottom-1 translate-y-1 translate-x-2 bg-cyan-200 -rotate-3 z-[-1] rounded-md"></div>
                    <p>Resume</p>
                </div>

                {/* Container with max width = 5/6 of window */}
                <div className="flex justify-center items-center">
                    <div className="flex flex-col xl:flex-row gap-8 justify-center items-center">
                        <div className="bg-lime-400 -rotate-12 flex justify-center items-center w-96 h-80">
                            <div className="bg-lime-100 border-lime-300 w-full h-full border-8 rotate-2 m-1"></div>
                        </div>
                        <div className="bg-purple-400 rotate-6 flex justify-center items-center w-80 h-96">
                            <div className="bg-purple-100 border-purple-300 w-full h-full border-8 rotate-2 m-1"></div>
                        </div>
                        <div className="bg-orange-400 rotate-2 flex justify-center items-center w-80 h-80">
                            <div className="bg-orange-100 border-orange-300 w-full h-full border-4 rotate-2 m-1"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Resume;
