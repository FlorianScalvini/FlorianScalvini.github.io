import React from 'react'
import ProjectCards from "./ProjectCards";
import PublicationsCards from "./PublicationCards";


function LatestPublication() {
    return (
        <div className="w-5/6 mx-auto mb-16">
            <div className="text-5xl text-center font-bold mx-auto w-full">
                <div className="relative inline-block mx-20 mb-10">
                    {/* Rectangle Behind */}
                    <div
                        className="absolute -top-1 -left-4 -right-1 -bottom-1 translate-y-1 translate-x-2 bg-emerald-200 -rotate-2 z-[-1] rounded-md"></div>
                    <p className={""}>Latest Publications</p>
                </div>
            </div>

            {/* Grid with max 4 items per row, centered */}
            <div
                className="w-11/12 mx-auto grid gap-8 justify-items-center grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
                <PublicationsCards title="Outdoor Navigation Assistive System Based on Robust and real-time visual-auditory substitution approach" journal="Sensors" img="../sitis.png" type="journal" link=""
                                   github={"dd"} />
                <PublicationsCards title="Low-Latency human computer auditory interface based on real rime vision analysis" journal="ICASSP"
                                   img="../icassp.png" link=""  github={"dd"}  />
                <PublicationsCards title="uB-VisioGeoloc: An image sequences dataset of pedestrian navigation" journal="DataInBrief"
                                   img="./datainbrief.jpg" link="" type="journal" />
                <PublicationsCards title="Distance perception of objects using visual to auditory sensory substitution: comparison of conversion methods based on sound intensity and envelope modulations" journal="APCAM"
                                   img="./camille_journal.png" link="" />
                <PublicationsCards title="Cross-modal correspondence enhances elevation localization in visual to auditory sensory substitution" journal="Frontiers in Psychology"
                                   img="./camille_poster.png" link="" type="journal"/>
                <PublicationsCards title="Visual-auditory substitution device for indoor navigation based on fast visual marker detection;" journal="SITIS"
                                   img="./sitis.png" link=""  github={"dd"} />
            </div>
        </div>

    )
}

export default LatestPublication;