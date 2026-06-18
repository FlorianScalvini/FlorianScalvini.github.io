interface Entry {
    title: string;
    date: string;
    place: string;
    description: string;
    color: string;
}

const education: Entry[] = [
    {
        title: "PhD – Computer Sciences / Artificial Vision",
        date: "2020 – 2024",
        place: "University of Bourgogne",
        description: "Development of assitive system for visually impaired persons. The research focused on sensory substitution, computer vision, and deep learning for real-time image processing.",
        color: "bg-emerald-400",
    },
    {
        title: "Master – Images and Artificial Intelligence",
        date: "2019 – 2020",
        place: "University of Bourgogne",
        description: "Specialisation in machine learning and image analysis, focusing on image processing and mathematical 3D modeling.",
        color: "bg-emerald-400",
    },
    {
        title: "Engineering degree – Embedded Systems",
        date: "2017 – 2020",
        place: "Polytech Dijon",
        description: "Degree in computer engineering with a speciallity in embedded systems. This cursus focuses on the conception of real-time processing systems, including hardware and software aspects.",
        color: "bg-emerald-400",
    },
];

const experience: Entry[] = [
    {
        title: "Engineer – Computer Sciences / Electronics",
        date: "01/2024 – 04/2024",
        place: "Satt Sayens",
        description: "Technology transfer and valorisation of PhD research, developing a proof-of-concept for commercialisation of the sensory substitution device.",
        color: "bg-amber-400",
    },
    {
        title: "Teaching Activities",
        date: "10/2020 – 06/2023",
        place: "Polytech Dijon · University of Bourgogne",
        description: "Courses in algorithms, image processing and programming for engineering and master students across three academic years.",
        color: "bg-amber-400",
    },
    {
        title: "Internship – Software Development in AI",
        date: "04/2020 – 09/2020",
        place: "Pryntech · Corpeau",
        description: "Development of AI-based quality control systems for industrial applications using computer vision and deep learning.",
        color: "bg-amber-400",
    },
    {
        title: "Internship – Software Development",
        date: "04/2019 – 07/2019",
        place: "MoonClood Lab · Università degli studi di Milano",
        description: "International research collaboration on human-computer interaction, working with Italian researchers on novel interface paradigms.",
        color: "bg-amber-400",
    },
];

interface CardProps { entry: Entry; accent: string; dark: boolean; }

function EntryCard({ entry, accent, dark }: CardProps) {
    return (
        <div className="flex flex-col gap-3">
            <span className={`text-sm font-semibold uppercase tracking-widest ${accent}`}>{entry.date}</span>
            <h3 className={`font-bold text-xl leading-snug ${dark ? "text-white" : "text-neutral-900"}`}>{entry.title}</h3>
            <p className={`text-base font-medium ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{entry.place}</p>
            <p className={`text-base leading-relaxed text-justify ${dark ? "text-neutral-300" : "text-neutral-600"}`}>{entry.description}</p>
        </div>
    );
}

interface TimelineProps { entries: Entry[]; accent: string; dotColor: string; dark: boolean; }

function Timeline({ entries, accent, dotColor, dark }: TimelineProps) {
    const line = dark ? "bg-neutral-700" : "bg-neutral-200";
    const dot  = dark ? "border-neutral-700 bg-neutral-950" : "border-neutral-200 bg-white";

    return (
        <div className="w-5/6 mx-auto">
            {/* Mobile: left-aligned timeline */}
            <div className="flex flex-col lg:hidden gap-0">
                {entries.map((entry, i) => (
                    <div key={entry.title} className="relative flex gap-8 pb-12 last:pb-0">
                        <div className="flex flex-col items-center">
                            <div className={`mt-2 w-3 h-3 rounded-full border-2 ${dot} ${dotColor} shrink-0`} />
                            {i < entries.length - 1 && <div className={`w-px flex-1 mt-2 ${line}`} />}
                        </div>
                        <EntryCard entry={entry} accent={accent} dark={dark} />
                    </div>
                ))}
            </div>

            {/* Desktop: zigzag center timeline */}
            <div className="hidden lg:block relative">
                <div className={`absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px ${line}`} />

                <div className="flex flex-col gap-20">
                    {entries.map((entry, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div key={entry.title} className="relative flex items-start">
                                <div className="w-1/2 pr-20 flex justify-end">
                                    {isLeft && <div className="max-w-sm text-right">
                                        <EntryCard entry={entry} accent={accent} dark={dark} />
                                    </div>}
                                </div>

                                <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-4 h-4 rounded-full border-2 ${dot} ${dotColor}`} />

                                <div className="w-1/2 pl-20">
                                    {!isLeft && <div className="max-w-sm">
                                        <EntryCard entry={entry} accent={accent} dark={dark} />
                                    </div>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function Portfolio() {
    return (
        <div className="flex flex-col">

            {/* Education — dark */}
            <section className="bg-neutral-950 py-28 flex flex-col gap-16">
                <div className="w-5/6 mx-auto flex flex-col gap-2">
                    <p className="text-neutral-400 text-sm font-medium tracking-widest uppercase">Portfolio</p>
                    <h2 className="text-5xl sm:text-6xl font-bold text-emerald-400">Education</h2>
                </div>
                <Timeline
                    entries={education}
                    accent="text-emerald-400"
                    dotColor="border-emerald-400"
                    dark={true}
                />
            </section>

            {/* Work Experience — light */}
            <section className="bg-white py-28 flex flex-col gap-16">
                <div className="w-5/6 mx-auto flex flex-col gap-2">
                    <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase">Portfolio</p>
                    <h2 className="text-5xl sm:text-6xl font-bold text-amber-500">Work Experience</h2>
                </div>
                <Timeline
                    entries={experience}
                    accent="text-amber-500"
                    dotColor="border-amber-500"
                    dark={false}
                />
            </section>

        </div>
    );
}

export default Portfolio;
