import React from "react"

const CVPage = () => {
    return (
        <section id="cv__section" className="">
            <div className="w-full h-[70vh] flex items-center justify-center">
                <img src="/resume.png" className="w-[500px] object-cover" />
            </div>
        </section>
    )
}

CVPage.displayName = "CV Page"
export default CVPage
