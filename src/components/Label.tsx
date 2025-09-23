import React from "react";
import ProjectCards from "./ProjectCards";

// Configuration des labels dans un fichier séparé si besoin

export const labelsConfig = {
    deeplearning:   { text: "Deep-learning",     color: "bg-purple-500 text-white" },
    dataset:   { text: "Dataset",     color: "bg-purple-500 text-white" },
    journal:   { text: "Journal",     color: "bg-purple-500 text-white" },
    conference:   { text: "Conference",     color: "bg-lime-500 text-white" },
    system: { text: "System", color: "bg-teal-500 text-white" },
    sound_3d: { text: "3D Sound", color: "bg-green-500 text-white" },
    visual: { text: "Vision", color: "bg-green-500 text-white" },
    auditory: { text: "Auditory", color: "bg-green-500 text-white" },
    hrtf: { text: "HRTF", color: "bg-green-500 text-white" },
    mri: { text: "MRI", color: "bg-green-500 text-white" },
    rgbd: { text: "RGB-D", color: "bg-green-500 text-white" },
    c_plus_plus: { text: "C++", color: "bg-green-500 text-white" },
    python: { text: "python", color: "bg-green-500 text-white" },
    webflow:  { text: "Neuroscience",   color: "bg-purple-500 text-white" },
    empty:    { text: "Empty",         color: "bg-gray-400 text-black" }, // Label par défaut

} as const;

type LabelProps = {
    name: string; // <-- évite le any implicite et sécurise la clé
};

export type LabelName = keyof typeof labelsConfig;
// Composant Label
function Label({ name }: LabelProps) {
    const label = name && labelsConfig[name as LabelName]
        ? labelsConfig[name as LabelName]
        : labelsConfig["empty"];
    return (
        <div
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${label.color}`}
        >
            {label.text}
        </div>
    );
}

export default Label;