import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface TD {
    number: number;
    title: string;
    description: string;
    pdf: string;
}

interface Course {
    title: string;
    subtitle: string;
    level: string;
    institution: string;
    period: string;
    description: string;
    tds: TD[];
}

const courses: Course[] = [
    {
        title: "Introduction to Python",
        subtitle: "Programming fundamentals",
        level: "Class préparatoire 2A",
        institution: "Polytech Dijon · University of Bourgogne",
        period: "2020 – 2023",
        description: "Introductory course covering Python syntax, data structures, control flow, functions, and basic algorithms. Practical sessions (TD) guide students through hands-on exercises progressing from scripting basics to image processing applications.",
        tds: [
            {
                number: 1,
                title: "Python Basics",
                description: "Introduction to Python syntax, variables, basic data types, conditions, loops and simple functions.",
                pdf: "./Teaching/Esirem/TD1.pdf",
            },
            {
                number: 2,
                title: "Creation of video games (Terminal & UI version)— 4-in-a-row ",
                description: "Deep dive into function definitions, list comprehensions, dictionaries, and reading/writing files.",
                pdf: "./Teaching/Esirem/TD2.pdf",
            },
        ],
    },
];

// ── PDF Modal ─────────────────────────────────────────────────────────────────

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
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full border bg-orange-500/10 text-orange-400 border-orange-500/20 shrink-0">
                            TD {title.split("—")[0].replace("TD", "").trim()}
                        </span>
                        <p className="text-white text-sm font-medium truncate">{title}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                        <a href={src} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-neutral-400 hover:text-white transition-colors font-medium">
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

// ── TD card ───────────────────────────────────────────────────────────────────

function TDCard({ td }: { td: TD }) {
    const [showPdf, setShowPdf] = useState(false);

    return (
        <>
            <div className="flex flex-col sm:flex-row items-start gap-5 p-5 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-neutral-400 transition-colors group">
                {/* Number badge */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-lg">TD{td.number}</span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <p className="text-neutral-900 font-semibold text-base leading-snug group-hover:text-orange-500 transition-colors">
                        {td.title}
                    </p>
                    <p className="text-neutral-500 text-sm leading-relaxed">{td.description}</p>
                    <button
                        onClick={() => setShowPdf(true)}
                        className="mt-2 self-start flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-300 text-orange-600 text-xs font-medium hover:bg-orange-50 transition-colors"
                    >
                        <span>⊞</span> View PDF
                    </button>
                </div>
            </div>

            {showPdf && (
                <PdfModal src={td.pdf} title={`TD ${td.number} — ${td.title}`} onClose={() => setShowPdf(false)} />
            )}
        </>
    );
}

// ── Course section ────────────────────────────────────────────────────────────

function CourseSection({ course, dark }: { course: Course; dark: boolean }) {
    const bg   = dark ? "bg-neutral-950" : "bg-white";
    const head = dark ? "text-orange-400" : "text-orange-500";
    const sub  = dark ? "text-neutral-300" : "text-neutral-600";
    const meta = dark ? "text-neutral-400" : "text-neutral-500";
    const div  = dark ? "border-neutral-800" : "border-neutral-200";

    return (
        <section className={`${bg} py-20 ${dark ? "" : "shadow-[inset_0_4px_16px_rgba(0,0,0,0.08)]"}`}>
            <div className="w-5/6 mx-auto flex flex-col gap-10">

                {/* Course header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full border bg-orange-500/10 text-orange-400 border-orange-500/20">
                                {course.level}
                            </span>
                            <span className={`text-xs ${meta}`}>{course.period}</span>
                        </div>
                        <h2 className={`text-3xl sm:text-4xl font-bold ${head}`}>{course.title}</h2>
                        <p className={`text-lg font-light ${sub}`}>{course.subtitle}</p>
                        <p className={`text-sm ${meta}`}>{course.institution}</p>
                    </div>
                    <div className={`shrink-0 text-center px-6 py-4 rounded-xl border ${div} flex flex-col gap-1`}>
                        <span className={`text-3xl font-bold ${dark ? "text-white" : "text-neutral-900"}`}>{course.tds.length}</span>
                        <span className={`text-xs uppercase tracking-widest ${meta}`}>TDs</span>
                    </div>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed max-w-2xl text-justify ${sub}`}>{course.description}</p>

                {/* Divider */}
                <div className={`border-t ${div}`} />

                {/* TD list */}
                <div className="flex flex-col gap-4">
                    <p className={`text-xs font-semibold uppercase tracking-widest ${meta}`}>Practical sessions</p>
                    {course.tds.map(td => <TDCard key={td.number} td={td} />)}
                </div>

            </div>
        </section>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

function TeachingPage() {
    return (
        <div className="min-h-screen bg-neutral-950">
            <Header />

            {/* Hero */}
            <section className="bg-neutral-950 py-20 border-b-2 border-neutral-600">
                <div className="w-5/6 mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <p className="text-neutral-300 text-sm font-medium tracking-widest uppercase mb-3">Academic</p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400">Teaching</h1>
                    </div>
                    <div className="flex gap-6 text-center">
                        <div>
                            <p className="text-3xl font-bold text-white">{courses.length}</p>
                            <p className="text-neutral-400 text-xs uppercase tracking-widest mt-1">Courses</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-orange-400">
                                {courses.reduce((acc, c) => acc + c.tds.length, 0)}
                            </p>
                            <p className="text-neutral-400 text-xs uppercase tracking-widest mt-1">TDs</p>
                        </div>
                    </div>
                </div>
            </section>

            {courses.map((course, i) => (
                <CourseSection key={course.title} course={course} dark={i % 2 !== 0} />
            ))}

            <Footer />
        </div>
    );
}

export default TeachingPage;
