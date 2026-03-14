"use client";

import { motion } from "framer-motion";

export function Blessing({
  sanskritLine,
  engagementDate,
}: {
  sanskritLine: string;
  engagementDate: string;
}) {
  return (
    <section className="px-4 py-12 sm:py-16 bg-page">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-base text-ink-primary"
          style={{ fontFamily: "var(--font-devanagari)" }}
        >
          {sanskritLine}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-xs sm:text-sm uppercase tracking-[0.2em] text-ink-muted"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          With the blessings of our families
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl text-ink-primary font-medium"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Engagement
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-sm text-ink-muted italic"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Request the pleasure of your presence
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-base sm:text-lg text-ink-secondary"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {engagementDate}
        </motion.p>
      </div>
      <div className="flex justify-center mt-8 pb-4">
        <img
          src="/images/blessing-ornament.png"
          alt=""
          className="h-16 sm:h-20 w-auto object-contain opacity-90"
          style={{ filter: "brightness(0) saturate(100%)" }}
        />
      </div>
    </section>
  );
}
