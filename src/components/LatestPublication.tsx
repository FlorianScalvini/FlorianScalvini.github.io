import React from 'react'
import ProjectCards from "./ProjectCards";
import PublicationsCards from "./PublicationCards";


function LatestPublication() {
    return (
        <div className="w-5/6 mx-auto mb-64">
            <div className="text-5xl text-center font-bold mx-auto w-full">
                <div className="relative inline-block mx-20 mb-20">
                    {/* Rectangle Behind */}
                    <div
                        className="absolute -top-1 -left-4 -right-1 -bottom-1 translate-y-1 translate-x-2 bg-emerald-200 -rotate-2 z-[-1] rounded-md"></div>
                    <p className={""}>Latest Publications</p>
                </div>
            </div>

            {/* Grid with max 4 items per row, centered */}
            <div
                className="w-11/12 mx-auto grid gap-8  grid-cols-[repeat(auto-fit,minmax(450px,1fr))] mb-10">

                <PublicationsCards title="Outdoor Navigation Assistive System Based on Robust and real-time visual-auditory substitution approach" journal="Sensors" img="../sensors.png" type="journal" link="https://www.mdpi.com/1424-8220/24/1/166"
                                   github={"https://github.com/FlorianScalvini/Thesis-3DSG-Project"} />
                <PublicationsCards title="Low-Latency human computer auditory interface based on real rime vision analysis" journal="ICASSP"
                                   img="../icassp.png" link="https://ieeexplore.ieee.org/abstract/document/9747094/?casa_token=c5m_a-tInK4AAAAA:yXfGJNaRLa4qBtIfGI3rYSxQf_CZOyocdaqTKqf4mv1LVzotnLMOENOkhWCV7UEgV-jCrNiN9w"  github={"https://github.com/FlorianScalvini/Thesis-3DSG-Project"}  />
                <PublicationsCards title="uB-VisioGeoloc: An image sequences dataset of pedestrian navigation" journal="DataInBrief"
                                   img="./datainbrief.jpg" link="https://www.sciencedirect.com/science/article/pii/S2352340924000611" type="journal" />
                <PublicationsCards title="Distance perception of objects using visual to auditory sensory substitution: comparison of conversion methods based on sound intensity and envelope modulations" journal="APCAM"
                                   img="./camille_journal.png" />
                <PublicationsCards title="Cross-modal correspondence enhances elevation localization in visual to auditory sensory substitution" journal="Frontiers in Psychology"
                                   img="./camille_poster.png" link="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1079998/full" type="journal"/>
                <PublicationsCards title="Visual-auditory substitution device for indoor navigation based on fast visual marker detection" journal="SITIS"
                                   img="./sitis.png" link="https://ieeexplore.ieee.org/abstract/document/10090127"  github={"https://github.com/FlorianScalvini/Thesis-3DSG-Project"} />
            </div>
            {/* Central button more articles*/}
            <div className={"w-full flex m-auto items-center text-center"}>
                <a
                    href={"/publications"}
                    className="m-auto rounded-full p-1.5 bg-gradient-to-r from-emerald-300 via-amber-300  to-fuchsia-300"
                >
                    <div className="bg-green-300 rounded-full p-3 text-3xl">


                            More articles

                    </div>
                </a>
            </div>
        </div>

    )
}

export default LatestPublication;