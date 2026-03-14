"use client";

import { motion } from "framer-motion";

const defaultReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function Section({
  id,
  children,
  className = "",
  noPadding,
  reveal = true,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  reveal?: boolean;
}) {
  const Wrapper = reveal ? motion.section : "section";
  const wrapperProps = reveal
    ? { ...defaultReveal, className: noPadding ? className : `px-4 py-12 sm:py-16 md:py-20 ${className}` }
    : { className: noPadding ? className : `px-4 py-12 sm:py-16 md:py-20 ${className}` };

  return (
    <Wrapper id={id} {...wrapperProps}>
      {children}
    </Wrapper>
  );
}
