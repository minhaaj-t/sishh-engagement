"use client";

import { motion } from "framer-motion";

export function BrideGroom({
  partner1Name,
  partner2Name,
}: {
  partner1Name: string;
  partner2Name: string;
}) {
  return (
    <section id="engagement-couple" className="px-4 py-12 sm:py-16 bg-paper">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-ink-muted"
        >
          Engagement Ceremony
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="text-2xl sm:text-3xl text-ink-primary"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          You are cordially invited
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="text-ink-secondary text-sm sm:text-base leading-relaxed"
        >
          to the engagement ceremony of {partner1Name} & {partner2Name}, as we seek your blessings and presence on this auspicious occasion.
        </motion.p>
      </div>
    </section>
  );
}
