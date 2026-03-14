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
  const colors = ["#8b6914", "#b8860b", "#c9a227", "#c45c2a", "#e8d5a3"];

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
  const [isPlayerReady, setIsPlayerReady] = useState(false);

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
            setIsPlayerReady(true);
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

    if (window.YT?.Player && containerRef.current) {
      requestAnimationFrame(() => createPlayer());
    }

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, [createPlayer]);

  const handleOpen = useCallback(() => {
    const player = playerRef.current;
    setIsClosing(true);
    fireConfetti();
    if (player && isPlayerReady) {
      try {
        player.playVideo();
        player.unMute();
        player.setVolume(100);
        setIsMuted(false);
      } catch {
        // ignore
      }
    }
  }, [isPlayerReady]);

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
        className="fixed overflow-hidden opacity-0 pointer-events-none"
        style={{
          left: "-9999px",
          width: "256px",
          height: "144px",
        }}
      />
      <AnimatePresence onExitComplete={handleOverlayExitComplete}>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isClosing
                ? { opacity: 0 }
                : { opacity: 1 }
            }
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onAnimationComplete={() => {
              if (isClosing) setShowOverlay(false);
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4"
            style={{
              background: "var(--bg-overlay)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              perspective: "1400px",
            }}
          >
            <motion.div
              initial={{ rotateX: -88, opacity: 0 }}
              animate={
                isClosing
                  ? { rotateX: -88, opacity: 0, scale: 0.92 }
                  : { rotateX: 0, opacity: 1, scale: 1 }
              }
              exit={{ rotateX: -88, opacity: 0, scale: 0.92 }}
              transition={{
                duration: 0.75,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{
                transformOrigin: "center top",
                boxShadow: "var(--shadow-overlay)",
                borderRadius: "1rem",
                border: "1px solid var(--gold-line)",
                background: "var(--bg-paper)",
              }}
              className="relative flex w-full max-w-sm flex-col overflow-hidden"
            >
              <div
                className="absolute left-0 right-0 top-0 h-1"
                style={{ background: "linear-gradient(90deg, transparent, var(--gold-soft) 20%, var(--gold-soft) 80%, transparent)" }}
              />
              <div className="flex flex-col items-center gap-5 p-6 pt-7 pb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    isClosing ? {} : { scale: 1, opacity: 1 }
                  }
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="relative overflow-hidden w-64 h-36 sm:w-80 sm:h-44"
                >
                  <img
                    src="/images/loves.png"
                    alt="Decorative hearts"
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={isClosing ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                  className="text-center font-serif text-sm italic text-ink-secondary"
                >
                  You&apos;re invited
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={isClosing ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.35 }}
                  className="flex flex-col items-center gap-3"
                >
                  <motion.button
                    type="button"
                    onClick={handleOpen}
                    disabled={!isPlayerReady}
                    initial={{ scale: 0.9 }}
                    animate={
                      isClosing
                        ? { scale: 1.15, opacity: 0 }
                        : { scale: 1, opacity: 1 }
                    }
                    transition={{ duration: 0.35 }}
                    whileHover={isPlayerReady ? { scale: 1.03 } : undefined}
                    whileTap={isPlayerReady ? { scale: 0.98 } : undefined}
                    className="rounded-full px-7 py-3.5 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-paper)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background: "var(--gold-deep)",
                      boxShadow: "0 4px 14px rgba(44, 24, 16, 0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
                    }}
                    aria-label="Open invitation and play music"
                  >
                    {isPlayerReady ? "Open" : "Loading…"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setIsClosing(true)}
                    animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-ink-muted hover:text-ink-secondary focus:outline-none focus-visible:underline font-label"
                    aria-label="Skip"
                  >
                    Skip
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={toggleMute}
        className="fixed z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gold-line bg-paper text-ink-primary transition-all hover:bg-warm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-mid)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)] touch-manipulation"
        style={{
          right: "max(1rem, env(safe-area-inset-right))",
          bottom: "max(1rem, env(safe-area-inset-bottom))",
          boxShadow: "var(--shadow-card)",
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
