"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { HeartIcon } from "@/components/ui/heart-icon";

export const Hero = forwardRef<
  HTMLElement,
  {
    partner1Name: string;
    partner2Name: string;
    children?: React.ReactNode;
  }
>(function Hero({ partner1Name, partner2Name, children }, ref) {
  return (
    <section
      ref={ref}
  className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden border-t-[10px] border-l-[10px] border-r-[10px] border-[#ffffff] bg-cover bg-center bg-no-repeat"
  style={{
    boxShadow: "0 0 0 4px rgba(0,0,0,0.07)",
    backgroundImage: "url(/images/hero.png)",
  }}
>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      {/* Subtle gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 40%, var(--gold-pale), transparent 70%)",
        }}
      />
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-pale mb-2"
          style={{ fontFamily: "var(--font-decorative)" }}
        >
          {partner1Name}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-2"
        >
          <HeartIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gold-pale" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-pale"
          style={{ fontFamily: "var(--font-decorative)" }}
        >
          {partner2Name}
        </motion.p>
      </div>
      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 h-px w-24 bg-gold-line origin-center"
      />
      {/* Car overlay — rendered inside hero only */}
      {children}
    </section>
  );
});
