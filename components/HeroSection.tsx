import Image from "next/image";
import gradient from "@/public/5.png";
import portrait from "@/public/self-portrait.gif";

//icons
import { GoDotFill } from "react-icons/go";

const HeroSection = () => {
  return (
    <section id="hero__section" className="flex-col">
      <div className="w-[80%] lg:w-[60%] p-2 flex items-center justify-end bg-neutral-900/70 rounded-t-lg">
        <GoDotFill className="text-red-500"/>
        <GoDotFill className="text-yellow-500" />
        <GoDotFill className="text-green-500"/>
      </div>
      <div className="w-[80%] lg:w-[60%] lg:h-[70vh] p-6 flex flex-col lg:flex-row gap-6 items-center justify-center bg-gradient-to-br from-neutral-900/70 via-neutral-500/60 to-neutral-600/70 rounded-b-lg drop-shadow-md">
        <div>
          <Image src={portrait} width={500} height={500} alt="self portrait" className="drop-shadow-xl"/>
        </div>
        <div className="flex-col gap-4">
          <p className="text-2xl lg:text-5xl font-black drop-shadow">
            hey there, i&apos;m patty
          </p>
          <div className="w-full p-2 justify-center items-center rounded-lg drop-shadow-md text-sm lg:text-lg text-center">
            <p>
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-warm to-black">Designer</span> and <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-mute to-brown-sand">Developer</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = "Hero Section";

export default HeroSection;
