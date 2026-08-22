"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

// Plays/pauses each <video> in `containerRef` based on whether it's currently
// on screen, so concurrent playback is bounded to what's actually visible
// regardless of how far the grid has been panned. Independent of the rAF loop.
export function useVideoAutoplay(
  containerRef: RefObject<HTMLElement | null>,
  reducedMotion: boolean
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const videos = Array.from(container.querySelectorAll("video"));
    if (videos.length === 0) return;

    if (reducedMotion) {
      // Poster only -- no autoplay, no decode.
      videos.forEach((video) => video.pause());
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay can be rejected by the browser; poster stays visible.
            });
          } else {
            video.pause();
          }
        }
      },
      { root: container, threshold: 0.1 }
    );

    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, [containerRef, reducedMotion]);
}
