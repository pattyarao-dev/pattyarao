import React from "react";

const Projects = React.forwardRef<HTMLElement>((props, ref) => {
    return ( <section id="Projects" className="text-white" ref={ref}>
        <p>This is the about me section</p>
    </section> );
})
 
export default Projects;