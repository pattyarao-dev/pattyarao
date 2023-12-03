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

export default function Home() {
  return (
    <main
      id="landing__page"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br via-brown-sand from-pink-warm to-orange-mute"
    >
      <Navbar />
      <HeroSection />
      {/* <AboutMe /> */}
      <Work />
      <Projects />
      <ContactMe />
      <CVPage />
    </main>
  );
}
