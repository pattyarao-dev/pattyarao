"use client";

import AboutMe from "@/components/AboutMe";
import CVPage from "@/components/CV";
import ContactMe from "@/components/ContactMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Image from "next/image";
import React from "react";
import { useState, useRef, RefObject} from "react";

export default function Home() {
  const aboutRef = useRef<RefObject<AboutMe>>(React.createRef());
  const workRef = useRef<RefObject<Work>>(React.createRef());
  const projectsRef = useRef<RefObject<Projects>>(React.createRef());
  const contactRef = useRef<RefObject<ContactMe>>(React.createRef());
  const cvRef = useRef<RefObject<CVPage>>(React.createRef());

  const handleLinkClick = (link: string) => {
    // Scroll to the corresponding section based on the link
    if (link === 'about' && aboutRef.current && aboutRef.current.current) {
      aboutRef.current.current.scrollIntoView({ behavior: 'smooth' });
    } else if (link === 'work' && workRef.current && workRef.current.current) {
      workRef.current.current.scrollIntoView({ behavior: 'smooth' });
    } else if (link === 'projects' && projectsRef.current && projectsRef.current.current) {
      projectsRef.current.current.scrollIntoView({ behavior: 'smooth' });
    } else if (link === 'contact' && contactRef.current && contactRef.current.current) {
      contactRef.current.current.scrollIntoView({ behavior: 'smooth' });
    } else if (link === 'cv' && cvRef.current && cvRef.current.current) {
      cvRef.current.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [navigateTo, setNavigateTo] = useState<string>("");
  return (
    <main
      id="landing__page"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-violet-main to-black"
    >
      <Navbar onLinkClick={handleLinkClick} />
      <HeroSection />
      <AboutMe ref={aboutRef} />
      <Work ref={workRef} />
      <Projects ref={projectsRef} />
      <ContactMe ref={contactRef} />
      <CVPage ref={cvRef} />
    </main>
  );
}
