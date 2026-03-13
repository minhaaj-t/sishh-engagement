"use client";

import Image from "next/image";

const DEEPAM_COUNT = 6;

export function KeralaBorder({
  className = "",
  variant = "row",
}: {
  className?: string;
  variant?: "row" | "threeCenter";
}) {
  if (variant === "threeCenter") {
    return (
      <div className={`flex justify-center items-center gap-3 sm:gap-4 py-2 ${className}`} aria-hidden>
        <Image
          src="/images/deepam.png"
          alt=""
          width={28}
          height={32}
          className="object-contain h-7 w-auto sm:h-8"
        />
        <Image
          src="/images/deepam.png"
          alt=""
          width={44}
          height={50}
          className="object-contain h-11 w-auto sm:h-14"
        />
        <Image
          src="/images/deepam.png"
          alt=""
          width={28}
          height={32}
          className="object-contain h-7 w-auto sm:h-8"
        />
      </div>
    );
  }

  return (
    <div className={`flex justify-center items-center gap-2 sm:gap-3 py-2 flex-wrap ${className}`} aria-hidden>
      {Array.from({ length: DEEPAM_COUNT }).map((_, i) => (
        <Image
          key={i}
          src="/images/deepam.png"
          alt=""
          width={28}
          height={32}
          className="object-contain h-7 w-auto sm:h-8"
        />
      ))}
    </div>
  );
}

export function KeralaDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 sm:gap-6 py-6 ${className}`} aria-hidden>
      <span className="h-px w-12 sm:w-16 bg-amber-600/50" />
      {[0, 1, 2].map((i) => (
        <Image
          key={i}
          src="/images/deepam.png"
          alt=""
          width={28}
          height={32}
          className="object-contain h-8 w-auto"
        />
      ))}
      <span className="h-px w-12 sm:w-16 bg-amber-600/50" />
    </div>
  );
}
