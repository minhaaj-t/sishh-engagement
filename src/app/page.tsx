"use client";

import { Lamp } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { KeralaBorder, KeralaDivider } from "@/components/ui/kerala-border";
import { HeartIcon } from "@/components/ui/heart-icon";
import { BgmPlayer } from "@/components/bgm-player";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Ganapati Pooja",
    time: "10:00 AM",
    content: <p>Invocation & blessings</p>,
  },
  {
    title: "Nischayam (Engagement)",
    time: "10:30 AM",
    content: <p>Formal engagement ceremony</p>,
  },
  {
    title: "Exchange of Rings",
    time: "11:00 AM",
    content: <p>Muhurtham</p>,
  },
  {
    title: "Blessings & Lunch",
    time: "12:00 PM onwards",
    content: <p>Elders&apos; blessings & traditional sadya</p>,
  },
];

const blessings = [
  {
    quote: "So happy for you both! Wishing you loads of love and laughter together. Can’t wait to celebrate!",
    name: "Rasi KP",
    title: "",
  },
  {
    quote: "Sishaj & Athulya, this is just the beginning of something beautiful. Blessed to be part of your day!",
    name: "Rheshikesh",
    title: "",
  },
  {
    quote: "Here’s to the two of you! May your journey be full of joy, peace and endless happiness. Cheers!",
    name: "Minhaj",
    title: "",
  },
  {
    quote: "So proud of you both! Wishing you a lifetime of love, understanding and all the best. Much love!",
    name: "Chethan",
    title: "",
  },
];

export default function EngagementInvitation() {
  return (
    <div className="min-h-screen min-w-0 bg-white text-amber-900">
      <BgmPlayer />
      {/* Hero - Lamp */}
      <Lamp>
        <KeralaBorder />
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.35em] text-amber-700/90 mb-3 sm:mb-4 font-medium px-2 text-center">
          With the blessings of our families
        </p>
        <TextGenerateEffect
          words="Engagement"
          className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-amber-900 text-center px-2 max-w-full"
          duration={0.08}
        />
        <motion.div
          className="mt-4 sm:mt-6 flex flex-col items-center gap-1 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <TextGenerateEffect
            words="Sishaj"
            className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-amber-800 text-center"
            duration={0.05}
          />
          <span className="flex items-center gap-1.5 text-amber-600/90">
            <HeartIcon className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
          </span>
          <TextGenerateEffect
            words="Athulya"
            className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-amber-800 text-center"
            duration={0.05}
          />
        </motion.div>
        <motion.p
          className="mt-6 sm:mt-8 text-amber-700/90 text-base sm:text-lg px-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          Request the pleasure of your presence
        </motion.p>
        <motion.p
          className="mt-1 sm:mt-2 text-amber-600/80 text-sm sm:text-base px-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          Monday, 23 March 2026
        </motion.p>
        <KeralaBorder variant="threeCenter" />
      </Lamp>

      {/* Invitation line */}
      <section className="relative border-t border-amber-600/20 bg-amber-50/40 py-10 sm:py-16 px-4">
        <KeralaDivider />
        <div className="mx-auto max-w-2xl text-center px-1">
          <motion.h2
            className="text-lg sm:text-xl font-medium text-amber-800 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            You are cordially invited
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-amber-800/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            to the engagement ceremony of Sishaj & Athulya, as we seek your blessings and presence on this auspicious occasion.
          </motion.p>
        </div>
        <KeralaDivider />
      </section>

      {/* Schedule */}
      <section className="relative border-t border-amber-600/20 py-12 sm:py-20 px-4 flex flex-col items-center">
        <motion.h2
          className="text-center text-xl sm:text-2xl font-light text-amber-900 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Programme
        </motion.h2>
        <KeralaDivider className="py-2" />
        <div className="w-full flex justify-center px-0 sm:px-4">
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Blessings - Infinite Moving Cards */}
      <section className="relative border-t border-amber-600/20 bg-amber-50/40 py-12 sm:py-20 overflow-hidden">
        <motion.h2
          className="text-center text-xl sm:text-2xl font-light text-amber-900 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Blessings
        </motion.h2>
        <KeralaDivider className="py-2" />
        <InfiniteMovingCards
          items={blessings}
          direction="left"
          speed="slow"
          pauseOnHover
          className="py-6"
        />
      </section>

      {/* Closing */}
      <section className="relative border-t border-amber-600/20 py-12 sm:py-20 px-4">
        <KeralaDivider />
        <div className="mx-auto max-w-xl text-center px-1">
          <motion.p
            className="text-lg sm:text-xl font-light text-amber-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            We seek your blessings and presence.
          </motion.p>
          <motion.p
            className="mt-3 sm:mt-4 text-amber-700/80 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Kindly confirm your presence by 15 March 2026
          </motion.p>
        </div>
        <KeralaBorder />
      </section>
    </div>
  );
}
