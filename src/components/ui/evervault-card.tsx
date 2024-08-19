"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

export const EvervaultCard = ({
  name,
  image,
  pos1,
  pos2,
  className,
}: {
  name: string;
  image: StaticImageData;
  pos1: string;
  pos2?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    setRandomString(generateRandomString(1500));
  }

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent flex items-center justify-center w-full h-auto md:w-96 relative overflow-hidden",
        className
      )}
      onMouseMove={onMouseMove}
    >
      <div className="group/card rounded-3xl w-full h-full relative overflow-hidden bg-transparent flex items-center justify-center">
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex flex-row items-center justify-center text-center p-4">
          <div className="relative rounded-full overflow-hidden w-20 h-20 md:w-28 md:h-28">
            <img
              src={image.src}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 text-white ml-5">
            <h2 className="font-bold text-lg md:text-xl">{name}</h2>
            <p className="text-xs md:text-sm">{pos1}</p>
            {pos2 && <p className="text-xs md:text-sm">{pos2}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
