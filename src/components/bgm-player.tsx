"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const YOUTUBE_VIDEO_ID = "hlS87tJOva4";

declare global {
  interface Window {
    YT: {
      Player: new (
        el: HTMLElement | string,
        config: Record<string, unknown>
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YTPlayer {
  playVideo: () => void;
  unMute: () => void;
  mute: () => void;
  setVolume: (volume: number) => void;
  getVolume: () => number;
}

function fireConfetti() {
  const count = 80;
  const defaults = { origin: { y: 0.6 }, zIndex: 9999 };
  const colors = ["#d97706", "#b45309", "#fbbf24", "#f59e0b", "#fcd34d"];

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors,
    });
  }
  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

export function BgmPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const createPlayer = useCallback(() => {
    if (!containerRef.current || playerRef.current) return;
    try {
      const player = new window.YT.Player(containerRef.current, {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event: { target: YTPlayer }) => {
            if (playerRef.current) return;
            playerRef.current = event.target;
            event.target.playVideo();
          },
        },
      });
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.onYouTubeIframeAPIReady = () => {
      if (window.YT?.Player && containerRef.current) {
        requestAnimationFrame(() => createPlayer());
      }
    };

    const scriptId = "youtube-iframe-api";
    if (document.getElementById(scriptId)) {
      if (window.YT?.Player) {
        requestAnimationFrame(() => createPlayer());
      }
      return () => {
        window.onYouTubeIframeAPIReady = () => {};
      };
    }

    const tag = document.createElement("script");
    tag.id = scriptId;
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(tag, firstScript);

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, [createPlayer]);

  const handleOpen = useCallback(() => {
    const player = playerRef.current;
    setIsClosing(true);
    fireConfetti();
    if (player) {
      try {
        player.unMute();
        player.setVolume(100);
        setIsMuted(false);
      } catch {
        // ignore
      }
    }
  }, []);

  const handleOverlayExitComplete = useCallback(() => {
    setShowOverlay(false);
  }, []);

  const toggleMute = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    if (isMuted) {
      handleOpen();
    } else {
      player.mute();
      setIsMuted(true);
    }
  }, [isMuted, handleOpen]);

  return (
    <>
      <div
        ref={containerRef}
        id="bgm-youtube-container"
        className="fixed bottom-0 left-0 h-0 w-0 overflow-hidden opacity-0 pointer-events-none"
        style={{ position: "fixed", left: "-9999px" }}
      />
      <AnimatePresence onExitComplete={handleOverlayExitComplete}>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={
              isClosing
                ? { opacity: 0, scale: 1.08 }
                : { opacity: 1, scale: 1 }
            }
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={() => {
              if (isClosing) setShowOverlay(false);
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-amber-950/50 backdrop-blur-xl p-4"
          >
            <motion.button
              type="button"
              onClick={handleOpen}
              initial={{ scale: 1 }}
              animate={
                isClosing
                  ? { scale: 1.15, opacity: 0 }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.35 }}
              className="rounded-full bg-white/95 px-6 py-3 text-sm font-medium text-amber-800 shadow-xl ring-1 ring-amber-600/30 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              aria-label="Open invitation and play music"
            >
              Open
            </motion.button>
            <motion.button
              type="button"
              onClick={() => {
                setIsClosing(true);
              }}
              animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-amber-700/70 hover:text-amber-800 focus:outline-none"
              aria-label="Skip"
            >
              Skip
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={toggleMute}
        className="fixed z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-amber-600/40 bg-white/95 text-amber-700 shadow-lg transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 touch-manipulation"
        style={{
          right: "max(1rem, env(safe-area-inset-right))",
          bottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
        aria-label={isMuted ? "Play background music" : "Mute"}
      >
        {isMuted ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
    </>
  );
}
