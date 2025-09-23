import React from 'react';
import RowImgTextPortfolio from './RowImgTextPortfolio';

function Portfolio() {
    const excess = 4;

    return (
        <div className="flex flex-col min-h-screen w-full">
            {/* Header */}
            <div className="text-7xl text-center font-bold mx-auto w-full mb-16">
                <div className="relative inline-block mx-20 mb-10">
                    <div className="absolute -top-1 -left-4 -right-1 -bottom-1 translate-y-1 translate-x-2 bg-amber-300 -rotate-3 z-[-1] rounded-md" />
                    <p>Portfolio</p>
                </div>
            </div>

            {/* Section 1 */}
            <div className="flex flex-row w-5/6 mx-auto h-3/4 items-center gap-x-32">
                {/* Left - Education Label */}
                <div className="flex justify-center items-center w-1/3">
                    <div className="relative inline-block">
                        <div className="absolute -top-1 -left-4 -right-1 -bottom-1 translate-y-1 translate-x-2 bg-lime-300 -rotate-3 z-[-1] rounded-md" />
                        <div className="text-6xl font-bold">Education</div>
                    </div>
                </div>

                {/* Right - Table */}
                <div className="relative bg-white rounded-md w-2/3 p-6">
                    {/* Decorative Borders */}
                    <span className="rounded-3xl absolute top-0 left-[-8px] right-[-8px] bg-purple-400" style={{ height: excess }} />
                    <span className="rounded-3xl absolute bottom-0 left-[-8px] right-[-8px] bg-emerald-300" style={{ height: excess }} />
                    <span className="rounded-3xl absolute top-[-8px] bottom-[-8px] left-0 bg-orange-300" style={{ width: excess }} />
                    <span className="rounded-3xl absolute top-[-8px] bottom-[-8px] right-0 bg-yellow-300" style={{ width: excess }} />

                    {/* Table Rows */}
                    <div className="flex flex-col space-y-6">

                        <RowImgTextPortfolio
                            color={"bg-lime-400 border-lime-200"}
                            title={"PhD - Computer sciences / Artificial vision"}
                            date={"2020 - 2024"}
                            place={"University of Bourgogne"}
                            img={""}
                        />
                        <RowImgTextPortfolio
                            color={"bg-teal-400 border-teal -200"}
                            title={"Master degree - Images and Artificial Intelligence"}
                            date={"2019 - 2020"}
                            place={"University of Bourgogne"}
                            img={""}
                        />
                        <RowImgTextPortfolio
                            color={"bg-amber-400 border-amber-200"}
                            title={"Engineering degree - Embedded system"}
                            date={"2019 - 2020"}
                            place={"Polytech Dijon "}
                            img={""}
                        />
                    </div>
                </div>
            </div>

            {/* Section 2 (same layout, reversed) */}
            <div className="flex flex-row w-5/6 mx-auto h-3/4 items-center gap-x-32 mt-40">
                {/* Right - Table */}
                <div className="relative bg-white rounded-md w-2/3 p-6">
                    {/* Decorative Borders */}
                    <span className="rounded-3xl absolute top-0 left-[-8px] right-[-8px] bg-purple-400" style={{ height: excess }} />
                    <span className="rounded-3xl absolute bottom-0 left-[-8px] right-[-8px] bg-emerald-300" style={{ height: excess }} />
                    <span className="rounded-3xl absolute top-[-8px] bottom-[-8px] left-0 bg-orange-300" style={{ width: excess }} />
                    <span className="rounded-3xl absolute top-[-8px] bottom-[-8px] right-0 bg-yellow-300" style={{ width: excess }} />

                    {/* Table Rows */}
                    <div className="flex flex-col space-y-6">

                        <RowImgTextPortfolio
                            color={"bg-lime-400 border-lime-200"}
                            title={"Engineer in computer sciences / electronic"}
                            date={"01/2024 ~ 04/2024"}
                            place={"Satt Sayens"}
                            img={""}
                        />
                        <RowImgTextPortfolio
                            color={"bg-fuchsia-400 border-fuchsia-200"}
                            title={"Teaching activities"}
                            date={"10/2020 ~ 06/2023"}
                            place={"Polytech Dijon ~ University of Bourgogne"}
                            img={""}
                        />
                        <RowImgTextPortfolio
                            color={"bg-emerald-400 border-emerald-200"}
                            title={"Internship : Software development in Artificial Intelligence"}
                            date={"04/2020 ~ 09/2020"}
                            place={"Pryntech ~ Corpeau"}
                            img={""}
                        />
                        <RowImgTextPortfolio
                            color={"bg-violet-400 border-violet-200"}
                            title={"Internship : Software development"}
                            date={"04/2019 ~ 07/2019"}
                            place={"MoonClood Laboratory ~ Università degli studi di Milano"}
                            img={""}
                        />
                    </div>
                </div>

                {/* Left - Education Label */}
                <div className="flex justify-center items-center w-1/3">
                    <div className="relative inline-block">
                        <div className="absolute top-10 -left-4 right-20 -bottom-1 -translate-y-4 translate-x-2 bg-purple-300 rotate-3 z-[-1] rounded-md" />
                        <div className="text-6xl font-bold">Work Experience</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
