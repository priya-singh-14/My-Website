"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

export function useVideoAutoplay(
  containerRef: RefObject<HTMLElement | null>,
  reducedMotion: boolean,
  renderKey: string,
  // For layouts that scroll in the page rather than panning inside the
  // container -- there, the container never clips, so it can't be the root.
  rootIsViewport = false
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const videos = Array.from(container.querySelectorAll("video"));
    if (videos.length === 0) return;

    if (reducedMotion) {
      videos.forEach((video) => video.pause());
      return;
    }
    
    const pending = new Map<HTMLVideoElement, boolean>();
    let flushTimeout: ReturnType<typeof setTimeout> | null = null;

    const flush = () => {
      flushTimeout = null;
      pending.forEach((shouldPlay, video) => {
        if (shouldPlay === !video.paused) return;
        if (shouldPlay) {
          video.play().catch(() => {
            // Autoplay can be rejected by the browser; poster stays visible.
          });
        } else {
          video.pause();
        }
      });
      pending.clear();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          pending.set(entry.target as HTMLVideoElement, entry.isIntersecting);
        }
        if (flushTimeout) clearTimeout(flushTimeout);
        flushTimeout = setTimeout(flush, 120);
      },
      // Margin keeps a video playing through the fade band at the edges, so it
      // isn't restarting from the poster right as it becomes fully visible.
      { root: rootIsViewport ? null : container, rootMargin: "200px", threshold: 0 }
    );

    videos.forEach((video) => observer.observe(video));
    return () => {
      observer.disconnect();
      if (flushTimeout) clearTimeout(flushTimeout);
    };
  }, [containerRef, reducedMotion, renderKey, rootIsViewport]);
}
