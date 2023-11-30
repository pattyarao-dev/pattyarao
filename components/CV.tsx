import React from "react";

const CVPage = React.forwardRef<HTMLElement>((props, ref) => {
    return ( <section id="cv" className="text-white" ref={ref}>
        <p>This is the about me section</p>
    </section> );
})
 
export default CVPage;