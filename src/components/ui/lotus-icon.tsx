"use client";

export function LotusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={`text-gold-mid ${className}`}
      aria-hidden
    >
      {/* Simplified lotus flower - traditional auspicious symbol */}
      <ellipse cx="32" cy="36" rx="12" ry="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path
        d="M20 36 Q32 28 44 36 Q32 44 20 36"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M26 32 Q32 24 38 32 Q32 40 26 32"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M32 20 L32 44" stroke="currentColor" strokeWidth="0.6" />
      <path d="M32 36 L28 52 L32 48 L36 52 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  );
}
