import React from 'react'
import logo from '../logo.svg';

interface SkillsCardProps {
    bgcolor: string;
    logo: string;
}


function SkillsCards({bgcolor, logo}: SkillsCardProps) {
    return (
        <div className={`w-36 h-44 ${bgcolor} flex items-center justify-center rounded-2xl border-8 border-black`}>
            <div
                className="w-28 h-28 bg-white border-8 border-black rounded-full flex items-center justify-center">
                <img src={`${logo}`} alt="Logo" className="w-24 h-24"/>
            </div>
        </div>
    );
}

export default SkillsCards;