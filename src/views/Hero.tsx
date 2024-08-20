"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import heroImg from "/public/heroImg.png"; // Desktop image
import MobileImg from "/public/Mobile.png"; // Mobile image
import { QrCode, Download } from "lucide-react";

const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-7xl md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-arctec/90 to-arctec bg-opacity-50">
              AR
            </span>
            CTEC
          </h1>
          <p className="text-center text-lg md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-2">
            Augmented Reality for CvSU Ladislao N. Diwa Memorial Library
          </p>
          <div className="flex items-center justify-center pt-4 md:pt-6">
            {/* Mobile View */}
            <div className="block md:hidden">
              <Image
                src={MobileImg}
                alt="ARCTEC Mobile"
                width={800}
                height={800}
                className="w-full h-auto mx-auto"
              />
            </div>
            {/* Desktop View */}
            <div className="hidden md:block">
              <Image
                src={heroImg}
                alt="ARCTEC"
                width={1500}
                height={1500}
                className="w-full md:w-[200%] lg:w-[300%] xl:w-[400%] h-auto items-center justify-center mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="https://drive.google.com/file/d/1vP1ORXlv7y_ZSapjzgc0Yr2MplUxjPj6/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-3 md:px-12 md:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 flex items-center space-x-2">
              <QrCode size={24} />
              <span>Library QR</span>
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1yKRlLzWjjHSYmqQy1F-4FUtlJ0FXpaoW/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-3 md:px-12 md:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 flex items-center space-x-2">
              <Download size={24} />
              <span>Download</span>
            </button>
          </a>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
