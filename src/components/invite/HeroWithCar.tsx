"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "./Hero";
import { Blessing } from "./Blessing";

export function HeroWithCar({
  partner1Name,
  partner2Name,
  sanskritLine,
  engagementDate,
}: {
  partner1Name: string;
  partner2Name: string;
  sanskritLine: string;
  engagementDate: string;
}) {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Car animates as hero scrolls — confined inside hero section
  const carY = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], ["25%", "0%", "0%", "-15%"]);
  const carScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1.05, 1.05, 0.95]);
  const carOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const carX = useTransform(scrollYProgress, [0.2, 0.5, 0.8], ["-2%", "0%", "2%"]);

  return (
    <div className="relative">
      <Hero ref={heroRef} partner1Name={partner1Name} partner2Name={partner2Name}>
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none">
          <motion.div
            className="relative w-full max-w-[min(380px,85vw)] mx-auto flex justify-center will-change-transform z-20"
            style={{
              x: carX,
              y: carY,
              scale: carScale,
              opacity: carOpacity,
            }}
          >
            <img
              src="/images/car.png"
              alt=""
              className="w-full h-auto object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              draggable={false}
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </Hero>

      <Blessing
        sanskritLine={sanskritLine}
        engagementDate={engagementDate}
      />
    </div>
  );
}
