"use client";

import { motion } from "framer-motion";
import { AddToCalendarButton } from "add-to-calendar-button-react";

/* Ornate corner flourish — historical scrollwork style */
function CornerFlourish({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`absolute w-8 h-8 sm:w-10 sm:h-10 text-gold-line opacity-80 ${className}`}
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

export type CalendarEvent = {
  name: string;
  description?: string;
  location?: string;
  startDate: string;
  endDate: string;
  startTime?: string;
  endTime?: string;
  timeZone?: string;
};

export function Rsvp({ calendarEvent }: { calendarEvent?: CalendarEvent }) {
  if (!calendarEvent) return null;

  return (
    <section id="save-the-date" className="px-4 py-12 sm:py-16 bg-page">
      <div className="max-w-md mx-auto flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl text-ink-primary mb-2"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Save the date
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-ink-muted text-sm sm:text-base mb-8"
        >
          Add our engagement to your calendar
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full flex justify-center"
        >
          {/* Historical frame — double border with corner flourishes */}
          <div className="relative w-full max-w-[340px] mx-auto">
            {/* Outer border */}
            <div className="absolute inset-0 border-2 border-gold-deep/60 rounded-sm" />
            {/* Inner border */}
            <div className="absolute inset-2 sm:inset-3 border border-gold-line/70 rounded-sm" />
            {/* Corner flourishes */}
            <CornerFlourish className="top-0 left-0" />
            <CornerFlourish className="top-0 right-0" flip />
            <CornerFlourish className="bottom-0 left-0" flip />
            <CornerFlourish className="bottom-0 right-0" />

            <div className="relative px-4 py-5 sm:px-6 sm:py-6 flex justify-center items-center">
              <AddToCalendarButton
                name={calendarEvent.name}
                description={calendarEvent.description}
                location={calendarEvent.location}
                startDate={calendarEvent.startDate}
                endDate={calendarEvent.endDate}
                startTime={calendarEvent.startTime}
                endTime={calendarEvent.endTime}
                timeZone={calendarEvent.timeZone}
                options={["Apple", "Google", "Outlook.com", "Yahoo", "iCal"]}
                buttonStyle="flat"
                size="5"
                lightMode="light"
                label="Add to Calendar"
                styleLight="--btn-background: #8b6914; --btn-text: #fdfcf9; --font: 'Cormorant Garamond', Georgia, serif;"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
