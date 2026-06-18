import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Publication {
    title: string;
    authors: string;
    venue: string;
    year: string;
    type: "journal" | "conference" | "colloque" | "dataset";
    link?: string;
    github?: string;
    poster?: string;
}

const typeStyle: Record<string, string> = {
    journal:    "bg-violet-500/10 text-violet-400 border-violet-500/20",
    conference: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    dataset:    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    colloque:   "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

const colloques: Publication[] = [
    {
        title: "Analysis of Early Brain Development via Longitudinal MRI Registration Using Stationary Velocity Fields",
        authors: "Florian Scalvini, Anne Kerachni, Nicolas Passat, François Rousseau",
        venue: "IABM · Lyon",
        year: "2026",
        type: "colloque",
        link: 'https://hal.science/hal-05470105v1',
        poster: "./poster_iabm_2026.pdf",
    },
    {
        title: "Estimation longitudinale au cours du développement fœtal à partir de donnée IRM",
        authors: "Florian Scalvini, Anne Kerachni, Nicolas Passat, François Rousseau",
        venue: "NeoBrain3 · Amiens",
        year: "2026",
        type: "colloque",
        link: 'https://hal.science/hal-05101819v1'
    },
    {
        title: "Estimation des déformations longitudinales cérébrales basée sur un champ de vélocité stationnaire",
        authors: "Florian Scalvini, Anne Kerachni, Nicolas Passat, François Rousseau",
        venue: "IABM · Nice",
        year: "2025",
        type: "colloque",
        link: 'https://hal.science/hal-04897254v1',
        poster: "./poster_iabm_2025.pdf",
    },
];

const journals: Publication[] = [
    {
        title: "Localization abilities with a visual-to-auditory substitution device are modulated by the spatial arrangement of the scene",
        authors: "Bordeau, Scalvini, Migniot, Argon, Dubois, Ambard",
        venue: "Attention, Perception, & Psychophysics",
        year: "2025",
        type: "journal",
        link: "https://link.springer.com/article/10.3758/s13414-025-03065-y"
    },
    {
        title: "Outdoor Navigation Assistive System Based on Robust and Real-Time Visual–Auditory Substitution Approach",
        authors: "Scalvini, Bordeau, Ambard, Migniot, Dubois",
        venue: "Sensors",
        year: "2024",
        type: "journal",
        link: "https://www.mdpi.com/1424-8220/24/1/166",
        github: "https://github.com/FlorianScalvini/Thesis-3DSG-Project",
    },
    {
        title: "uB-VisioGeoloc: An image sequences dataset of pedestrian navigation, including geolocalised-inertial information and spatial sound rendering of the urban environment's obstacles",
        authors: "Scalvini, Bordeau, Ambard, Migniot, Vergnaud, Dubois",
        venue: "Data In Brief",
        year: "2024",
        type: "journal",
        link: "https://www.sciencedirect.com/science/article/pii/S2352340924000611",
    },
    {
        title: "Cross-modal correspondence enhances elevation localization in visual-to-auditory sensory substitution",
        authors: "Bordeau, Scalvini, Migniot, Argon, Dubois, Ambard",
        venue: "Frontiers in Psychology",
        year: "2022",
        type: "journal",
        link: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1079998/full",
    },
];

const conferences: Publication[] = [

    {
        title: "Low-Latency Human-Computer Auditory Interface Based on Real-Time Vision Analysis",
        authors: "Scalvini, Bordeau, Ambard, Migniot, Argon, Dubois",
        venue: "ICASSP · Singapour",
        year: "2022",
        type: "conference",
        link: "https://ieeexplore.ieee.org/abstract/document/9747094/",
        github: "https://github.com/FlorianScalvini/Thesis-3DSG-Project",
        poster: "./poster_icaspp_2022.pdf",
    },
    {
        title: "Visual-auditory substitution device for indoor navigation based on fast visual marker detection",
        authors: "Scalvini, Bordeau, Ambard, Migniot, Argon, Dubois",
        venue: "SITIS · Dijon",
        year: "2022",
        type: "conference",
        link: "https://ieeexplore.ieee.org/abstract/document/10090127",
        github: "https://github.com/FlorianScalvini/Thesis-3DSG-Project",
    },
    {
        title: "Distance perception of objects using visual-to-auditory sensory substitution: Comparison of conversion methods based on sound intensity and envelope modulation",
        authors: "Bordeau, Scalvini, Migniot, Argon, Dubois, Ambard",
        venue: "APCAM · Boston",
        year: "2022",
        type: "conference",
        poster: "./camille_boston.pdf",
    },
];

// ── PDF Modal ────────────────────────────────────────────────────────────────

function PdfModal({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative flex flex-col w-full max-w-5xl h-[90vh] bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-700 shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full border bg-teal-500/10 text-teal-400 border-teal-500/20 shrink-0">
                            Poster
                        </span>
                        <p className="text-white text-sm font-medium truncate">{title}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                        <a
                            href={src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-neutral-400 hover:text-white transition-colors font-medium"
                        >
                            Open in tab ↗
                        </a>
                        <button
                            onClick={onClose}
                            className="w-7 h-7 flex items-center justify-center rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors text-sm"
                        >
                            ✕
                        </button>
                    </div>
                </div>
                <iframe src={src} title={title} className="flex-1 w-full bg-neutral-950" />
            </div>
        </div>
    );
}

// ── Publication entry ─────────────────────────────────────────────────────────

function PubEntry({ pub, index }: { pub: Publication; index: number }) {
    const [showPoster, setShowPoster] = useState(false);

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-6 border-b border-neutral-200 last:border-0 group">
                <div className="sm:w-24 shrink-0 flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1">
                    <span className="text-neutral-400 text-xs font-mono">[{String(index).padStart(2, "0")}]</span>
                    <span className="text-neutral-500 text-xs">{pub.year}</span>
                </div>

                <div className="hidden sm:block w-px self-stretch bg-neutral-200" />

                <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${typeStyle[pub.type]}`}>
                            {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                        </span>
                        <span className="text-neutral-500 text-xs italic">{pub.venue}</span>
                    </div>

                    <p className="text-neutral-900 font-semibold text-base leading-snug group-hover:text-orange-500 transition-colors">
                        {pub.title}
                    </p>

                    <p className="text-neutral-500 text-sm">{pub.authors}</p>

                    <div className="flex items-center gap-4 pt-1 flex-wrap">
                        {pub.link && (
                            <a href={pub.link} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-medium">
                                <img src="/link.svg" alt="" className="w-3.5 h-3.5 opacity-50" />
                                Paper
                            </a>
                        )}
                        {pub.github && (
                            <a href={pub.github} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-medium">
                                <img src="/github-mark.svg" alt="" className="w-3.5 h-3.5 opacity-50" />
                                Code
                            </a>
                        )}
                        {pub.poster && (
                            <button
                                onClick={() => setShowPoster(true)}
                                className="flex items-center gap-1.5 text-xs text-teal-600 hover:text-teal-800 transition-colors font-medium"
                            >
                                <span className="text-base leading-none">⊞</span>
                                View Poster
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {showPoster && pub.poster && (
                <PdfModal src={pub.poster} title={pub.title} onClose={() => setShowPoster(false)} />
            )}
        </>
    );
}

// ── Section ───────────────────────────────────────────────────────────────────

function PubSection({ title, pubs, startIndex }: { title: string; pubs: Publication[]; startIndex: number }) {
    return (
        <section className="bg-white py-16">
            <div className="w-5/6 mx-auto flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold text-orange-500 shrink-0">{title}</h2>
                    <div className="flex-1 h-px bg-neutral-200" />
                    <span className="text-neutral-400 text-sm shrink-0">{pubs.length} article{pubs.length > 1 ? "s" : ""}</span>
                </div>
                <div>
                    {pubs.map((pub, i) => (
                        <PubEntry key={pub.title} pub={pub} index={startIndex + i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

function PublicationsPage() {
    const total = journals.length + conferences.length + colloques.length;
    return (
        <div className="min-h-screen bg-neutral-950">
            <Header />

            <section className="bg-neutral-950 py-20 border-b border-neutral-800">
                <div className="w-5/6 mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <p className="text-neutral-300 text-sm font-medium tracking-widest uppercase mb-3">Research output</p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400">Publications</h1>
                    </div>
                    <div className="flex gap-6 text-center">
                        <div>
                            <p className="text-3xl font-bold text-white">{total}</p>
                            <p className="text-neutral-400 text-xs uppercase tracking-widest mt-1">Total</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-violet-400">{journals.length}</p>
                            <p className="text-neutral-400 text-xs uppercase tracking-widest mt-1">Journals</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-orange-400">{conferences.length}</p>
                            <p className="text-neutral-400 text-xs uppercase tracking-widest mt-1">Conferences</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-teal-400">{colloques.length}</p>
                            <p className="text-neutral-400 text-xs uppercase tracking-widest mt-1">Colloques</p>
                        </div>
                    </div>
                </div>
            </section>

            <PubSection title="Journal Articles" pubs={journals} startIndex={1} />
            <PubSection title="Conference Papers" pubs={conferences} startIndex={journals.length + 1} />
            <PubSection title="Colloques" pubs={colloques} startIndex={journals.length + conferences.length + 1} />

            <Footer />
        </div>
    );
}

export default PublicationsPage;
