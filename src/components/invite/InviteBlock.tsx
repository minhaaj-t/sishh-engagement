"use client";

import { motion } from "framer-motion";
import { KeralaBorder } from "@/components/ui/kerala-border";

/* Ornate corner flourish — historical scrollwork style */
function CornerFlourish({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`absolute w-10 h-10 sm:w-12 sm:h-12 text-gold-line opacity-80 ${className}`}
      style={flip ? { transform: "scale(-1, -1)" } : undefined}
      aria-hidden
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        d="M4 44 Q4 24 24 24 Q44 24 44 4"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        d="M8 40 Q8 28 20 28 Q32 28 40 8"
      />
    </svg>
  );
}

export function InviteBlock({
  partner1Name,
  partner2Name,
}: {
  partner1Name: string;
  partner2Name: string;
}) {
  return (
    <section className="relative px-6 sm:px-8 py-10 sm:py-14">
      {/* Historical frame — double border with corner flourishes */}
      <div className="relative max-w-xl mx-auto">
        {/* Outer border */}
        <div className="absolute inset-0 border-2 border-gold-deep/60 rounded-sm" />
        {/* Inner border */}
        <div className="absolute inset-2 sm:inset-3 border border-gold-line/70 rounded-sm" />
        {/* Corner flourishes */}
        <CornerFlourish className="top-0 left-0" />
        <CornerFlourish className="top-0 right-0" flip />
        <CornerFlourish className="bottom-0 left-0" flip />
        <CornerFlourish className="bottom-0 right-0" />

        <div className="relative pt-8 pb-6 px-6 sm:px-8">
          <KeralaBorder variant="threeCenter" className="mb-6" />
          <div className="max-w-lg mx-auto text-center space-y-5">
                <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.35em] text-white/95 font-medium"
            >
              Invite
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="text-white/90 text-sm sm:text-base leading-relaxed"
            >
              You to join us at our engagement
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="text-2xl sm:text-3xl text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {partner1Name}
              <span className="text-white/95 mx-2">&</span>
              {partner2Name}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="text-sm uppercase tracking-widest text-white/80 pt-2"
            >
              On the engagement
            </motion.p>
          </div>
          <KeralaBorder variant="threeCenter" className="mt-6" />
        </div>
      </div>
    </section>
  );
}
