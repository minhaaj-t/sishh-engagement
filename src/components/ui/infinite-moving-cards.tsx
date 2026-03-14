"use client";

import { cn } from "@/lib/utils";

export type InfiniteMovingCardsItem = {
  quote: string;
  name: string;
  title: string;
};

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: InfiniteMovingCardsItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const speedClass =
    speed === "fast"
      ? "animate-[scroll_20s_linear_infinite]"
      : speed === "normal"
        ? "animate-[scroll_40s_linear_infinite]"
        : "animate-[scroll_60s_linear_infinite]";

  const duplicated = [...items, ...items];

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-4 justify-around",
          direction === "left" ? speedClass : "animate-[scroll-reverse_60s_linear_infinite]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ width: "max-content" }}
      >
        {duplicated.map((item, i) => (
          <div
            key={i}
            className="flex w-[280px] sm:w-[350px] max-w-[85vw] shrink-0 flex-col gap-2 rounded-xl border border-gold-line bg-card px-4 sm:px-6 py-4 sm:py-5 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <p className="text-sm leading-relaxed text-ink-secondary">{item.quote}</p>
            <div>
              <p className="font-semibold text-ink-primary text-sm sm:text-base">{item.name}</p>
              {item.title ? <p className="text-xs text-ink-muted mt-0.5">{item.title}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
