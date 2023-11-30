import React from "react";

const ContactMe = React.forwardRef<HTMLElement>((props, ref) => {
    return ( <section id="contactme" className="text-white" ref={ref}>
        <p>This is the about me section</p>
    </section> );
})
 
export default ContactMe;