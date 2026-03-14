"use client";

import { motion } from "framer-motion";

export function Lamp({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative flex min-h-[50vh] sm:min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-3 sm:px-4 py-16 sm:py-24 w-full ${className}`}
      style={{ backgroundImage: "url(/images/bg-pink.png)" }}
    >
      <div className="relative flex w-full max-w-4xl flex-1 scale-y-125 items-center justify-center">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute inset-auto z-0 h-2/3 w-full max-w-3xl rounded-full opacity-50 blur-3xl"
          style={{
            background: "conic-gradient(from 70deg at 50% 0%, var(--gold-pale), transparent, transparent)",
          }}
        />
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute inset-auto z-0 h-2/3 w-full max-w-3xl rounded-full opacity-50 blur-3xl"
          style={{
            background: "conic-gradient(from 290deg at 50% 0%, transparent, transparent, var(--gold-pale))",
          }}
        />
      </div>
      <div className="relative z-50 flex flex-col items-center -mt-16 sm:-mt-20 w-full max-w-full">{children}</div>
    </div>
  );
}
