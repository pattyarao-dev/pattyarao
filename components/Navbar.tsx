"use client"

import { useState } from "react";
import Link from "next/link";
import React from "react"; // Added React import

interface NavProps {
  onLinkClick: (link: string) => void
}

const Navbar: React.FC<NavProps> = ({onLinkClick}) => {

  const handleClick = (link:string) => {
    onLinkClick(link);
  }

  return (
    <div className="top-0 sticky w-full h-fit p-6 flex items-center justify-end gap-10 bg-gradient-to-b from-off-white/40 to-transparent text-off-white text-sm">
      <button onClick={() => handleClick('about')}>about</button>
      <button onClick={() => handleClick('work')}>work</button>
      <button onClick={() => handleClick('projects')}>projects</button>
      <button onClick={() => handleClick('contact')}>contact me</button>
      <button onClick={() => handleClick('cv')}>cv</button>
    </div>
  );
};

export default Navbar;