import React from "react";

const AboutMe = React.forwardRef<HTMLElement>((props, ref) => {
    return ( <section id="aboutme" className="text-white" ref={ref}>
        <p>This is the about me section</p>
    </section> );
})
 
export default AboutMe;