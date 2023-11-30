import { MdKeyboardArrowDown } from "react-icons/md";

const HeroSection = () => {
    return ( 
        <section id="hero__section" className="flex-col justify-evenly">
            <div>
            <h1 className="w-full text-center text-2xl text-white">hey there, i'm</h1>
            <h1 id="landing__text" className="text-center text-[80px] lg:text-[200px]">patty</h1>
            </div>

            <p className="w-full flex items-center justify-center gap-4 text-white">learn more about me <span><MdKeyboardArrowDown /></span></p>
        </section>
     );
}
 
export default HeroSection;