import PublicationsCards from "./PublicationCards";

const publications = [
    {
        title: "Outdoor Navigation Assistive System Based on Robust and real-time visual-auditory substitution approach",
        abstract: "We present a real-time assistive navigation system converting visual scene information into auditory feedback, enabling visually impaired users to navigate outdoor environments autonomously.",
        journal: "Sensors", img: "/sensors.png", type: "journal",
        link: "https://www.mdpi.com/1424-8220/24/1/166",
        github: "https://github.com/FlorianScalvini/Thesis-3DSG-Project",
    },
    {
        title: "Low-Latency human computer auditory interface based on real time vision analysis",
        abstract: "A low-latency pipeline for translating visual input into structured audio signals, designed for real-time human-computer interaction with minimal perceptual delay.",
        journal: "ICASSP", img: "/icassp.png",
        link: "https://ieeexplore.ieee.org/abstract/document/9747094/?casa_token=c5m_a-tInK4AAAAA:yXfGJNaRLa4qBtIfGI3rYSxQf_CZOyocdaqTKqf4mv1LVzotnLMOENOkhWCV7UEgV-jCrNiN9w",
        github: "https://github.com/FlorianScalvini/Thesis-3DSG-Project",
    },
    {
        title: "uB-VisioGeoloc: An image sequences dataset of pedestrian navigation",
        abstract: "A publicly available annotated dataset of image sequences captured during pedestrian navigation, designed to benchmark visual localisation and geolocation algorithms in urban settings.",
        journal: "Data in Brief", img: "/datainbrief.jpg", type: "journal",
        link: "https://www.sciencedirect.com/science/article/pii/S2352340924000611",
    },
];

function LatestPublication() {
    return (
        <section className="bg-white py-28">
            <div className="w-5/6 mx-auto flex flex-col gap-14">

                {/* Header */}
                <div>
                    <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase mb-4">Research</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-orange-500">Latest Publications</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {publications.map((pub) => (
                        <PublicationsCards key={pub.title} {...pub} />
                    ))}
                </div>

                {/* More button */}
                <div className="flex justify-center pt-4">
                    <a
                        href="/publications"
                        className="px-8 py-3 rounded-full border border-neutral-300 text-neutral-700 text-sm font-medium hover:border-neutral-900 hover:text-neutral-900 transition-colors"
                    >
                        View all publications →
                    </a>
                </div>

            </div>
        </section>
    );
}

export default LatestPublication;
