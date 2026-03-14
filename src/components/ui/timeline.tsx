"use client";

import { motion } from "framer-motion";

export type TimelineEntry = {
  title: string;
  time?: string;
  content: React.ReactNode;
};

export function Timeline({ data }: { data: TimelineEntry[] }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center gap-4">
      {data.map((item, i) => (
        <motion.div
          key={i}
          className="w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 p-4 sm:p-5 rounded-xl border border-gold-line bg-card shadow-card transition-shadow hover:shadow-card-hover"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
        >
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-ink-primary">{item.title}</h3>
            {item.time && (
              <p className="text-ink-muted font-medium mt-0.5 text-sm">{item.time}</p>
            )}
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left text-ink-secondary text-sm sm:text-base leading-relaxed">
            {item.content}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
