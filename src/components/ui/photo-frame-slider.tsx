"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDER_IMAGES = [
  "/images/slider/1.jpeg",
  "/images/slider/2.jpeg",
  "/images/slider/3.jpeg",
  "/images/slider/5.jpeg",
  "/images/slider/6.jpeg",
];

export function PhotoFrameSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[420px] mx-auto aspect-[506/758]">
      {/* Slider — images show through frame's transparent center */}
      <div className="absolute inset-[9%] sm:inset-[11%] overflow-hidden rounded-[2px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={SLIDER_IMAGES[index]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
      {/* Frame overlay — decorative border */}
      <img
        src="/images/photo-frame.png"
        alt=""
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
}
