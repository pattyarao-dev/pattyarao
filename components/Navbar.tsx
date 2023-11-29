"use client"

import { useState } from "react";
import Link from "next/link";
import React from "react"; // Added React import

const Navbar = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="top-0 sticky w-full h-fit p-6 flex items-center justify-end gap-10 bg-gradient-to-b from-violet-main to-transparent text-off-white">
      <button
        onClick={(e) => {
          setSelected("about"); // Use e.currentTarget.value to get the button value
          console.log(selected);
        }}
      >
        about
      </button>
      <button
        onClick={(e) => {
          setSelected("work"); // Use e.currentTarget.value to get the button value
          console.log(selected);
        }}>work</button>
      <button
        onClick={(e) => {
          setSelected("contact"); // Use e.currentTarget.value to get the button value
          console.log(selected);
        }}>contact</button>
      <button
        onClick={(e) => {
          setSelected("cv"); // Use e.currentTarget.value to get the button value
          console.log(selected);
        }}>CV</button>
    </div>
  );
};

export default Navbar;