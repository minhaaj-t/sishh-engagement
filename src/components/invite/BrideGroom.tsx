"use client";

import { motion } from "framer-motion";

export function BrideGroom({ message }: { message: string }) {
  return (
    <section id="engagement-couple" className="px-4 py-12 sm:py-16 bg-paper">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-ink-muted"
        >
          meet the
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="text-2xl sm:text-3xl text-ink-primary"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          engagement couple
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="text-ink-secondary text-sm sm:text-base leading-relaxed"
        >
          {message}
        </motion.p>
      </div>
    </section>
  );
}
