"use client";

import { motion } from "framer-motion";

export type ThingItem = {
  title: string;
  description: string;
};

export function ThingsToKnow({ mapEmbedUrl, mapUrl }: { mapEmbedUrl?: string; mapUrl?: string }) {
  return (
    <section id="things-to-know" className="px-4 py-12 sm:py-16 bg-paper">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl text-ink-primary text-center mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Venue
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-gold-line shadow-card aspect-video sm:aspect-[16/10]"
        >
          {mapEmbedUrl ? (
            <iframe
              src={mapEmbedUrl}
              title="Venue location"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : mapUrl ? (
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full bg-warm text-ink-secondary hover:bg-gold-pale/30 transition-colors"
            >
              Click to open map
            </a>
          ) : null}
        </motion.div>
        {mapUrl && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-4"
          >
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gold-deep hover:text-gold-mid underline underline-offset-2"
            >
              Open in Google Maps
            </a>
          </motion.p>
        )}
      </div>
    </section>
  );
}
