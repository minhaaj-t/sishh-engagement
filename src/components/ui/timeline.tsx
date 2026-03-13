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
          className="w-full flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-5 rounded-lg border border-amber-600/25 bg-white shadow-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
        >
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-amber-800">{item.title}</h3>
            {item.time && (
              <p className="text-amber-700 font-medium mt-0.5">{item.time}</p>
            )}
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left text-amber-900/85">
            {item.content}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
