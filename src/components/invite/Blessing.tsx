"use client";

import { motion } from "framer-motion";

export function Blessing({
  sanskritLine,
  parentsLine1,
  parentsLine2,
}: {
  sanskritLine: string;
  parentsLine1: string;
  parentsLine2: string;
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
          style={{ fontFamily: "var(--font-serif)" }}
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
          With the heavenly blessings of
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-sm sm:text-base text-ink-secondary"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {parentsLine1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-ink-muted text-xs"
        >
          —
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-ink-secondary"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {parentsLine2}
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
