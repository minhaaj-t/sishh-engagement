"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown({ targetDate }: { targetDate: Date }) {
  const [mounted, setMounted] = useState(false);
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = new Date();
      const d = Math.max(0, targetDate.getTime() - now.getTime());
      setDiff({
        days: Math.floor(d / (1000 * 60 * 60 * 24)),
        hours: Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((d % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((d % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!mounted) {
    return (
      <section className="px-4 py-12 sm:py-16 bg-paper">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-ink-muted text-sm uppercase tracking-widest mb-6">The countdown begins</p>
          <p className="text-2xl text-ink-secondary">00 : 00 : 00 : 00</p>
        </div>
      </section>
    );
  }

  return (
    <section id="countdown" className="px-4 py-12 sm:py-16 bg-paper">
      <div className="max-w-xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-ink-muted text-sm uppercase tracking-widest mb-8"
        >
          The countdown begins
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center items-end gap-1 sm:gap-3 flex-wrap"
        >
          {[
            { value: diff.days, label: "Days" },
            { value: diff.hours, label: "Hours" },
            { value: diff.minutes, label: "Minutes" },
            { value: diff.seconds, label: "Seconds" },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex items-baseline gap-1 sm:gap-2">
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-4xl font-semibold text-ink-primary tabular-nums" style={{ fontFamily: "var(--font-serif)" }}>
                  {pad(value)}
                </span>
                <span className="text-[10px] sm:text-xs text-ink-muted uppercase tracking-wider mt-1">{label}</span>
              </div>
              {i < 3 && <span className="text-xl sm:text-3xl text-gold-soft font-light pb-2">:</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
