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
            className="flex w-[350px] max-w-full shrink-0 flex-col gap-2 rounded-lg border border-amber-600/30 bg-white/95 px-6 py-4 shadow-sm"
          >
            <p className="text-sm leading-relaxed text-amber-900/85">{item.quote}</p>
            <div>
              <p className="font-medium text-amber-800">{item.name}</p>
              {item.title ? <p className="text-xs text-amber-700/70">{item.title}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
