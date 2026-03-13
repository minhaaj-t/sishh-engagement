"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TextGenerateEffect({
  words,
  className = "",
  duration = 0.5,
  filter = true,
}: {
  words: string;
  className?: string;
  duration?: number;
  filter?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const wordArray = words.split(" ");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={className}>{words}</span>;
  }

  return (
    <span className={className}>
      {wordArray.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
          animate={{ opacity: 1, filter: filter ? "blur(0px)" : "none" }}
          transition={{ duration, delay: i * (duration / 2) }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}
