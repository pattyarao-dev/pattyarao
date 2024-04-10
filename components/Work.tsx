import React from "react"
import { GoDotFill } from "react-icons/go"

import { FaReact } from "react-icons/fa"
import { DiMongodb } from "react-icons/di"
import { SiExpress } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiVite } from "react-icons/si"
import { TbBrandSvelte } from "react-icons/tb"
import { TbBrandNextjs } from "react-icons/tb"
import { SiTypescript } from "react-icons/si"

const Work = () => {
    const experience = [
        {
            name: "Web Development Lead",
            company: "UXS Taft",
            date: "Oct 2023 - Present",
            contribs: [
                "Spearheading the development team's different projects",
                "Preparing and securing partnerships and business deals with various clients",
                "Maintenance of the organization's current website."
            ]
        },
        {
            name: "Software Development Intern",
            company: "Supafaya",
            date: "Aug 2023 - Nov 2023",
            contribs: [
                "Served as the lead frontend developer among a group of student interns",
                "Designed and implemented a revamp of the website's landing page, increasing traction by 34%",
                "Implemented a “Reseller Information Page” which will be presented to prospect reseller partners of the company."
            ]
        },
        {
            name: "Web Development Asst. Team Head",
            company: "DLSU Council of Student Organizations",
            date: "Aug 2023 - Nov 2023",
            contribs: [
                "Collaborated with fellow team members for the frontend development of the Annual Recruitment Week 2023 website which garnered 30,000 unique visits.",
                "Designed and implemented 2 major pages of the website.",
                "Provided major contributions to other pages and components across the website."
            ]
        }
    ]
    return (
        <section id="work__section" className="flex-col">
            <div className="w-[80%] lg:w-[60%] p-2 flex items-center justify-end bg-neutral-900/70 rounded-t-lg">
                <GoDotFill className="text-red-500" />
                <GoDotFill className="text-yellow-500" />
                <GoDotFill className="text-green-500" />
            </div>
            <div className="w-[80%] lg:w-[60%] lg:h-[70vh] p-6 flex flex-col gap-16 items-center justify-center bg-gradient-to-br from-neutral-900/70 via-neutral-500/60 to-neutral-600/70 rounded-b-lg drop-shadow-md">
                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-yellow-500">
                        Tech stacks I work with...
                    </h2>
                    <div className="flex items-center gap-3 text-3xl text-white">
                        <DiMongodb />
                        <SiExpress />
                        <FaReact />
                        <FaNodeJs />
                        <SiVite />
                        <TbBrandSvelte />
                        <TbBrandNextjs />
                        <SiTypescript />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-yellow-500">
                        Experience
                    </h2>
                    <div className="w-full flex flex-col gap-10 justify-center">
                        {experience.map((exp, index) => (
                            <div key={index} className="text-white">
                                <p>{exp.date}</p>
                                <p className="text-orange-mute text-xl font-semibold">
                                    {exp.name}
                                </p>
                                <p>{exp.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

Work.displayName = "Work"
export default Work
