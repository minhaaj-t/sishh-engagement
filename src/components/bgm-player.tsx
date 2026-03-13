"use client";

const YOUTUBE_VIDEO_ID = "hlS87tJOva4";

export function BgmPlayer() {
  const embedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}`;

  return (
    <iframe
      src={embedUrl}
      title="Background music"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      allowFullScreen
      className="fixed bottom-0 left-0 h-0 w-0 border-0 opacity-0 pointer-events-none overflow-hidden"
      style={{ position: "fixed", left: "-9999px" }}
    />
  );
}
