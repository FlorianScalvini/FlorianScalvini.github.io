import React from 'react'

interface ProjectCardProps {
    title: string;
    description: string;
    img: string;
    link: string;
}

function ProjectCards({title, description, img, link}: ProjectCardProps) {
    const excess = 5;
    return (
        <div className="relative m-2 mb-4 h-80 bg-white" style={{width: 300}}>
            {/* Top line */}
            <span className="rounded-3xl absolute top-0 left-[-8px] right-[-8px]  bg-black" style={{height: excess}}/>

            {/* Bottom line */}
            <span className="rounded-3xl absolute bottom-0 left-[-8px] right-[-8px]  bg-black" style={{height: excess}}/>

            {/* Left line */}
            <span className="rounded-3xl absolute top-[-8px] bottom-[-8px] left-0 bg-black" style={{width: excess}}/>

            {/* Right line */}
            <span className="rounded-3xl absolute top-[-8px] bottom-[-8px] right-0 bg-black" style={{width: excess}} />

            <div className="flex w-10/12 h-full flex-col pt-3 m-auto items-center">
                <img
                    src={img}
                    alt="Logo"
                    className="w-full h-3/5 border-black  border-4"
                />
                <div className="w-full self-start mt-4">

                    <div className="flex flex-row justify-between items-center h-8">
                        <p className="text-xl font-bold my-auto">{title}</p>
                        <a className="my-auto" href="https://your-link.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src={"./link.svg"}
                                alt="Logo"
                                className="w-6 h-6 object-contain"
                            />
                        </a>
                    </div>
                    <p className="font-semibold mt-2" style={{fontSize: 15, lineHeight: 1.25}}>{description}</p>
                </div>
            </div>
        </div>

    )
}

export default ProjectCards;