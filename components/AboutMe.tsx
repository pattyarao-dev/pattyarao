import React from "react";

const AboutMe = () => {
    return ( <section id="aboutme__section" className="w-full md:w-[80%] min-h-screen p-10 flex flex-col justify-center items-start gap-4">
        <h1 className="w-full text-2xl font-semibold">Nice to meet you!</h1>
        <p className="w-full text-justify">
            I am an aspiring Web Developer! My interest in technology integration pushed me to pursue my education at De La Salle University, where I am currently in my 3rd year as a BS Information Systems student. Under my program, I am able to develop my skills in Programming, UI/UX Design, and Business and Systems Analysis. 

            Currently, I am engaged in Web Development opportunities at the university, where I build websites for organizations with a team. I am also in the process of developing personal projects that I hope to share with others. 

            In my free time, I play the guitar, cook, discover new music, read about the world, and watch cat videos.
        </p>
    </section> );
}

AboutMe.displayName = 'About Me';
export default AboutMe;