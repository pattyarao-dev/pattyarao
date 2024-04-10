"use client"

import { useState } from "react"
import Link from "next/link"
import React from "react" // Added React import
import Projects from "./Projects"

const Navbar = () => {
    const [selected, setSelected] = useState<string>("")

    function scrollToSection(sectionId: string): void {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="top-0 sticky w-full h-fit z-40 flex items-center justify-center p-6 bg-black text-off-white text-sm">
            <div className="w-full lg:w-[60%] flex items-center justify-between">
                <h1
                    className={`font-black transition ease duration-70 cursor-pointer hover:scale-125 ${
                        selected === "hero" ? `text-pink-warm` : null
                    }`}
                    onClick={() => {
                        scrollToSection("hero__section")
                        setSelected("hero")
                    }}
                >
                    patty.
                </h1>
                <div className="w-fit flex items-center justify-end gap-4">
                    {/* <button
                        className={`${
                            selected === "about" ? `text-pink-warm` : null
                        }`}
                        onClick={() => {
                            scrollToSection("aboutme__section")
                            setSelected("about")
                        }}
                    >
                        about
                    </button> */}
                    <button
                        className={`${
                            selected === "work" ? `text-pink-warm` : null
                        }`}
                        onClick={() => {
                            scrollToSection("work__section")
                            setSelected("work")
                        }}
                    >
                        work
                    </button>
                    {/* <button
                        className={`${
                            selected === "projects" ? `text-pink-warm` : null
                        }`}
                        onClick={() => {
                            scrollToSection("projects__section")
                            setSelected("projects")
                        }}
                    >
                        projects
                    </button>
                    <button
                        className={`${
                            selected === "contact" ? `text-pink-warm` : null
                        }`}
                        onClick={() => {
                            scrollToSection("contact__section")
                            setSelected("contact")
                        }}
                    >
                        contact me
                    </button> */}
                    <button
                        className={`${
                            selected === "cv" ? `text-pink-warm` : null
                        }`}
                        onClick={() => {
                            scrollToSection("cv__section")
                            setSelected("cv")
                        }}
                    >
                        cv
                    </button>
                </div>
            </div>
        </div>
    )
}

Navbar.displayName = "Navbar"

export default Navbar
