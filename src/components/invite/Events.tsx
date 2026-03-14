"use client";

import { motion } from "framer-motion";
import { PhotoFrameSlider } from "@/components/ui/photo-frame-slider";

export type EventItem = {
  title: string;
  date: string;
  venue: string;
  time: string;
  mapUrl?: string;
};

export function Events() {
  return (
    <section
      id="events"
      className="px-4 py-12 sm:py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/bg-red.png)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <PhotoFrameSlider />
      </motion.div>
    </section>
  );
}
