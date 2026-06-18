import SkillsCards from "./SkillsCards";

const categories = [
    {
        label: "Languages",
        skills: [
            { name: "C++",    logo: "/c_plus_plus.svg", accent: "bg-blue-500" },
            { name: "Python", logo: "/python.svg",       accent: "bg-yellow-400" },
            { name: "Swift",  logo: "/swift.svg",        accent: "bg-orange-500" },
            { name: "Java",   logo: "/java.svg",         accent: "bg-red-500" },
            { name: "MATLAB", logo: "/matlab.svg",       accent: "bg-rose-400" },
        ],
    },
    {
        label: "Deep Learning",
        skills: [
            { name: "PyTorch",    logo: "/pytorch.svg",    accent: "bg-orange-500" },
            { name: "TensorFlow", logo: "/tensorflow.svg", accent: "bg-amber-400" },
            { name: "OpenCV",     logo: "/opencv.svg",     accent: "bg-green-500" },
        ],
    },
    {
        label: "Dev & Tools",
        skills: [
            { name: "Docker",   logo: "/docker.svg",   accent: "bg-blue-400" },
            { name: "Node.js",  logo: "/nodejs.svg",   accent: "bg-green-400" },
            { name: "Tailwind", logo: "/tailwind.svg", accent: "bg-cyan-400" },
            { name: "Unity",    logo: "/unity.svg",    accent: "bg-neutral-400" },
        ],
    },
];

function Skills() {
    return (
        <section className="bg-neutral-950 py-28">
            <div className="w-5/6 mx-auto flex flex-col gap-16">

                <div>
                    <p className="text-neutral-400 text-sm font-medium tracking-widest uppercase mb-4">Expertise</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-violet-400">Skills</h2>
                </div>

                <div className="flex flex-col gap-12">
                    {categories.map(({ label, skills }) => (
                        <div key={label} className="flex flex-col gap-6">
                            <div className="flex items-center gap-5">
                                <span className="text-neutral-200 text-sm font-semibold uppercase tracking-widest shrink-0">{label}</span>
                                <div className="flex-1 h-px bg-neutral-700" />
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {skills.map(({ name, logo, accent }) => (
                                    <SkillsCards key={name} name={name} logo={logo} accent={accent} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;
