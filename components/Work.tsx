import React from "react";

const Work = React.forwardRef<HTMLElement>((props, ref) => {
    return ( <section id="Work" className="text-white" ref={ref}>
        <p>This is the about me section</p>
    </section> );
})
 
export default Work;