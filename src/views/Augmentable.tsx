"use client";
import React, { useRef } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import augImg from "/public/augmentable.png";
import pagesImg from "/public/pages.png";
import andro from "/public/android.png";
import { motion, useInView } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { StarsBackground } from "@/components/ui/stars-background";
import Explore from "/public/Explore.png";
import Image from "next/image";
import About from "./About";

function Augmentable() {
  const firstSectionRef = useRef(null);
  const highlightRef = useRef(null);

  const isFirstSectionInView = useInView(firstSectionRef, {
    margin: "0px 0px -100px 0px",
  });

  const isHighlightInView = useInView(highlightRef, {
    margin: "0px 0px -50px 0px",
  });

  return (
    <div className="h-full rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full p-6">
      {/* First section with animations */}
      <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, y: -50 }}
        animate={
          isFirstSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
        }
        transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-t from-arctec/40 to-arctec bg-opacity-50 text-center p-3">
          Augmentable books
        </h1>
        <p className="text-center text-sm sm:text-base md:text-2x1 lg:text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-2 max-w-screen-lg">
          ARCTEC turns reading into a fun and interactive experience. Get ready
          to see your books in a whole new way. This feature makes your books
          come alive with cool animations combined with artificial intelligence.
        </p>
        <div className="sm:flex items-center justify-center mt-4">
          <Image
            src={augImg}
            alt="ARCTEC"
            width={900}
            height={0}
            className="w-full sm:w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row md:space-x-3 items-center justify-center mt-10">
        <div className="sm:block w-full sm:w-4/5 md:w-1/2">
          <Image
            src={pagesImg}
            alt="ARCTEC"
            width={500}
            height={0}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Second section */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-2xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-md leading-relaxed lg:leading-snug text-center mx-auto mt-5 md:mt-0"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-t from-arctec/40 to-arctec bg-opacity-50">
            Augmentable pages
          </span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            with 3D models with the help of <br />
          </span>
          <motion.div
            ref={highlightRef}
            initial={{ opacity: 0 }}
            animate={isHighlightInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          >
            {isHighlightInView && (
              <Highlight className="text-black dark:text-white px-3">
                ARCTEC <span className="text-[#FFC700]">AI</span>
              </Highlight>
            )}
          </motion.div>
        </motion.h1>
      </div>

      <div className="flex flex-col md:flex-row-reverse md:space-x-3 items-center justify-center mt-10">
        <div className="sm:block w-full sm:w-4/5 md:w-1/2">
          <Image
            src={andro}
            alt="ARCTEC"
            width={400}
            height={0}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-md  text-center mx-auto mt-5 md:mt-0"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-arctec/40 to-arctec bg-opacity-50 text-3xl lg:text-5xl">
              Be Informed
            </span>{" "}
            <br />
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className=" text-center text-lg sm:text-xl md:text-2xl lg:text-5xfont-bold  max-w-md leading-relaxed  mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            ARCTEC provides a specific floor information to help visitors easily
            locate every library services.
          </motion.h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-3 mt-10">
        <div className="hidden sm:block">
          <Image
            src={Explore}
            alt="ARCTEC"
            width={500}
            height={0}
            className=""
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className=" text-center text-lg sm:text-xl md:text-2xl lg:text-5xfont-bold  max-w-md leading-relaxed  mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Explore and navigate through every floor with our Interactive Library.
        </motion.h1>
      </div>

      <About />
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className=" bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          ARCTEC 2024
        </h1>
        <h1 className=" bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Official Partner of Kabsu.me
        </h1>
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

export default Augmentable;
