import Image from "next/image"
import gradient from "@/public/5.png"
import portrait from "@/public/self-portrait.gif"

//icons
import { GoDotFill } from "react-icons/go"

const HeroSection = () => {
    return (
        <section id="hero__section" className="flex-col">
            <div className="w-[80%] lg:w-[60%] p-2 flex items-center justify-end bg-neutral-900/70 rounded-t-lg">
                <GoDotFill className="text-red-500" />
                <GoDotFill className="text-yellow-500" />
                <GoDotFill className="text-green-500" />
            </div>
            <div className="w-[80%] lg:w-[60%] lg:h-[70vh] p-6 flex flex-col lg:flex-row gap-6 items-center justify-center bg-gradient-to-br from-neutral-900/70 via-neutral-500/60 to-neutral-600/70 rounded-b-lg drop-shadow-md">
                <div>
                    <Image
                        src={portrait}
                        width={500}
                        height={500}
                        alt="self portrait"
                        className="drop-shadow-xl"
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col md:gap-6 text-center">
                    <p className="text-2xl lg:text-5xl font-black drop-shadow">
                        hey there, i&apos;m patty
                    </p>
                    <p className="w-full items-center rounded-lg drop-shadow-md text-sm lg:text-lg">
                        <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-warm to-black">
                            Designer
                        </span>{" "}
                        and{" "}
                        <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-mute to-brown-sand">
                            Developer
                        </span>
                    </p>
                    <p className="text-white text-justify">
                        Aspiring Web Developer! My interest in technology
                        integration pushed me to pursue my education at De La
                        Salle University, where I am currently in my 3rd year as
                        a BS Information Systems student. Under my program, I am
                        able to develop my skills in Programming, UI/UX Design,
                        and Business and Systems Analysis. Currently, I am a
                        student intern for a startup company in the Philippines,
                        where I aim to gain real-life experience in Software
                        Development and develop my skills at the industry
                        standard. I am also engaging in Web Development
                        opportunities at the university, where I build websites
                        for organizations with a team. I am also in the process
                        of developing personal projects that I hope to share
                        with others. In my free time, I play the guitar, cook,
                        discover new music, read about the world, and watch cat
                        videos
                    </p>
                </div>
            </div>
        </section>
    )
}

HeroSection.displayName = "Hero Section"

export default HeroSection
