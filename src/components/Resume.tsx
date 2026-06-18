const stats = [
    { value: "", label: "" },
    { value: "", label: "" },
    { value: "", label: "" },
    { value: "", label: "" },
];

function Resume() {
    return (
        <section className="bg-white py-28">
            <div className="w-5/6 mx-auto flex flex-col lg:flex-row gap-20 items-start">

                {/* Left — bio */}
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <div>
                        <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase mb-4">About</p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-orange-500">Who I am</h2>
                    </div>
                    <p className="text-neutral-600 text-base leading-loose">
                        I am a postdoctoral researcher specialising in computer vision and image processing,
                        currently working at IMT Atlantique. My work focuses on developing robust, real-time
                        perception systems — from sensory substitution devices for visually impaired users
                        to deep learning pipelines for medical image analysis.
                    </p>
                    <p className="text-neutral-600 text-base leading-loose">
                        I hold a PhD in Computer Sciences from the University of Bourgogne (2020–2024)
                        and an engineering degree from Polytech Dijon. Alongside research, I have
                        three years of teaching experience at university level.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a
                            href="./cv_powerpoint.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
                        >
                            Download CV
                        </a>
                        <a
                            href="/portfolio"
                            className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 text-sm font-medium hover:border-neutral-900 hover:text-neutral-900 transition-colors"
                        >
                            View portfolio
                        </a>
                    </div>
                </div>

                {/* Right — stats */}
                <div className="grid grid-cols-2 gap-5 lg:w-1/2 w-full">
                    {stats.map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col gap-2 p-10 rounded-2xl bg-neutral-900 border border-neutral-700"
                        >
                            <span className="text-4xl font-bold text-white">{value}</span>
                            <span className="text-neutral-300 text-sm">{label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Resume;
