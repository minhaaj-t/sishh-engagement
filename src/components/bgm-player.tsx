"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

export function BgmPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const loadYouTubeAPI = useCallback(() => {
    if (window.YT?.Player) return;
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(tag, firstScript);
  }, []);

  useEffect(() => {
    loadYouTubeAPI();

    window.onYouTubeIframeAPIReady = () => {
      if (!containerRef.current) return;
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
            playerRef.current = event.target;
            event.target.playVideo();
          },
        },
      });
    };

    const alreadyLoaded = window.YT?.Player;
    if (alreadyLoaded && containerRef.current && !playerRef.current) {
      window.onYouTubeIframeAPIReady();
    }

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, [loadYouTubeAPI]);

  const toggleMute = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    if (isMuted) {
      player.unMute();
      player.setVolume(80);
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  }, [isMuted]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed bottom-0 left-0 h-0 w-0 overflow-hidden opacity-0 pointer-events-none"
        style={{ position: "fixed", left: "-9999px" }}
      />
      <button
          type="button"
          onClick={toggleMute}
          className="fixed z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-amber-600/40 bg-white/95 text-amber-700 shadow-lg transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 touch-manipulation sm:right-6 sm:bottom-6"
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
