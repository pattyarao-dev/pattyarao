import Image from "next/image";
import gradient from "@/public/5.png"

const HeroSection = () => {
    return ( 
        <section id="hero__section" className="flex-col gap-4">
            <p className="text-2xl lg:text-5xl font-black drop-shadow">hey there, i&apos;m patty</p>
            <div className="w-1/2 p-2 justify-center items-center rounded-lg drop-shadow-md text-sm lg:text-lg text-center">
                <p><span>Designer</span> and <span>Developer</span></p>
            </div>
        </section>
     );
}

HeroSection.displayName = 'Hero Section';
 
export default HeroSection;