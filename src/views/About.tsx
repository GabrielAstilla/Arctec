"use client";
import React from "react";
import { EvervaultCard } from "@/components/ui/evervault-card";
import Gab from "/public/GAB.png";
import Rod from "/public/rod (2).png";
import Scire from "/public/scire (1).png";
import James from "/public/james (2).png";

export const aboutDev = [
  {
    name: "Gabiel Astilla",
    image: Gab,
    pos1: "UI/UX Designer",
    pos2: "3D Artist",
  },
  {
    name: "Rod Cotines",
    image: Rod,
    pos1: "Main Developer",
    pos2: "Unity Developer",
  },
  {
    name: "Scire Nuestro",
    image: Scire,
    pos1: "Project Researcher",
  },
  {
    name: "James Lagda",
    image: James,
    pos1: "Project Researcher",
  },
];

function About() {
  return (
    <div className="flex items-center justify-between flex-col pt-6">
      <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-t from-arctec/60 to-arctec bg-opacity-20 text-3xl sm:text-4xl md:text-5xl font-bold">
        Development Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6 p-4 mt-4 max-w-screen-lg w-full">
        {aboutDev.map((dev, index) => (
          <EvervaultCard
            key={index}
            name={dev.name}
            image={dev.image}
            pos1={dev.pos1}
            pos2={dev.pos2}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
