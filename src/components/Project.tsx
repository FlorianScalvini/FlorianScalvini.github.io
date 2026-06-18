import ProjectCards from "./ProjectCards";

function Project() {
    return (
        <section className="bg-neutral-950 py-28">
            <div className="w-5/6 mx-auto flex flex-col gap-16">
                <div>
                    <p className="text-neutral-400 text-sm font-medium tracking-widest uppercase mb-4">Work</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-orange-400">Projects</h2>
                </div>
                <ProjectCards
                    title="Envergure Project ~ 3D Sound Glasses"
                    img="./3dsg.png"
                    link="https://imvia.ube.fr/3d-sound-glasses/"
                    date="2020 ~ 2023"
                    github="https://github.com/FlorianScalvini/Thesis-3DSG-Project"
                    description="HINT develops methods and software to study neurodevelopment in neonates. It tackles data scarcity and heterogeneity challenges in imaging and signals. Focus areas: longitudinal analysis of fetal brain deformations"
                />
                <ProjectCards
                    title="ANR HINT Project"
                    img="./recalage_1.png"
                    link="https://anr-hint.pages.in2p3.fr/"
                    github="https://github.com/gis-beachild/"
                    date="2024 ~ 2026"
                    description="HINT develops methods and software to study neurodevelopment in neonates. It tackles data scarcity and heterogeneity challenges in imaging and signals. Focus areas: longitudinal analysis of fetal brain deformations"
                    invert={false}
                />
            </div>
        </section>
    );
}

export default Project;
