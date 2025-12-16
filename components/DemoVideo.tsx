// components/DemoVideo.tsx
"use client";

import * as React from "react";

type DemoVideoProps = {
  title?: string;
  subtitle?: string;

  // Prefer providing both:
  mp4Src: string;
  webmSrc?: string;

  // Poster image shown before play (prevents layout shift + looks professional)
  posterSrc: string;

  // Optional captions (WebVTT)
  captionsSrc?: string;
  captionsLang?: string; // e.g. "en"
  captionsLabel?: string; // e.g. "English"

  // Styling hooks
  className?: string;
  rounded?: boolean;
};

export default function DemoVideo({
  title = "Product demo",
  subtitle = "See how Sparta works in under 90 seconds.",
  mp4Src,
  webmSrc,
  posterSrc,
  captionsSrc,
  captionsLang = "en",
  captionsLabel = "English",
  className = "",
  rounded = true,
}: DemoVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const onTogglePlay = async () => {
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      try {
        await el.play();
        setIsPlaying(true);
      } catch {
        // Some browsers block play without user interaction; overlay click is the interaction.
      }
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-600">{subtitle}</p>
        </div>

        <div
          className={[
            "relative overflow-hidden border bg-black shadow-sm",
            rounded ? "rounded-2xl" : "rounded-none",
            "border-gray-200",
          ].join(" ")}
        >
          <iframe
            title="demo"
            src="https://drive.google.com/file/d/1vUvfM7YrhXQBx-H5ZDNynUys-8Ejgf7Z/view?usp=sharing"
          ></iframe>

          {/* Click-to-play overlay (only when paused) */}
          {!isPlaying && (
            <button
              type="button"
              onClick={onTogglePlay}
              className="absolute inset-0 grid place-items-center bg-black/35 transition hover:bg-black/45 focus:outline-none"
              aria-label="Play demo video"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-black shadow-lg">
                {/* play icon */}
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>

        {/* Optional: lightweight helper row */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
          <button
            type="button"
            onClick={onTogglePlay}
            className="rounded-md border border-gray-200 bg-white px-3 py-1.5 hover:bg-gray-50"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <span>Tip: Add captions for investors reviewing without sound.</span>
        </div>
      </div>
    </section>
  );
}
