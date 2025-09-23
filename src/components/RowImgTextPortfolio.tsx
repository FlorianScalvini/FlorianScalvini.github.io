import React from 'react';

interface RowImgProps {
    title: string;
    img: string;
    date: string;
    place: string;
    color: string;
}

function RowImgTextPortfolio({ title, img, date, place, color }: RowImgProps) {
    return (
        <div className="flex flex-row items-center justify-start w-full space-x-6">
            {/* Image Box (1/5 width) */}
            <div className={`-rotate-6 w-1/5 h-36 ${color} border-4 rounded-xl`}>
                {/* Optionally, you can add an image here */}
            </div>

            {/* Text Box (4/5 width) */}
            <div className="flex flex-col w-4/5">
                <div className="text-3xl font-extrabold">{title}</div>
                <div className="text-xl font-semibold">{place}</div>
                <div className="text-xl font-semibold italic">{date}</div>
            </div>
        </div>
    );
}

export default RowImgTextPortfolio;
