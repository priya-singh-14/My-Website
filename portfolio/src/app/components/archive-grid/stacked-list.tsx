"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GridItem } from "./data";
import { useVideoAutoplay } from "./use-video-autoplay";
import MediaSkeleton from "../media-skeleton";

interface StackedListProps {
  items: GridItem[];
}

// Keeps a very tall item from taking more than a screenful on its own.
const maxMediaHeight = "70vh";

function aspectRatio(item: GridItem): number {
  return item.width > 0 && item.height > 0 ? item.width / item.height : 1;
}

function StackedItem({ item, priority }: { item: GridItem; priority: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const alt = item.description ?? "Archive item";

  const media = (
    <div
      className="relative w-full overflow-hidden bg-primary/5"
      style={{ aspectRatio: aspectRatio(item), maxHeight: maxMediaHeight }}
    >
      <MediaSkeleton loaded={loaded} />
      {item.kind === "video" ? (
        <video
          className="absolute inset-0 h-full w-full object-contain"
          aria-label={alt}
          muted
          loop
          playsInline
          preload="metadata"
          poster={item.poster}
          src={item.src}
          onLoadedData={() => setLoaded(true)}
        />
      ) : (
        <Image
          src={item.src}
          alt={alt}
          fill
          quality={90}
          sizes="100vw"
          priority={priority}
          className="object-contain"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );

  const body = (
    <>
      {media}
      {item.description && (
        <p className="text-[14px] font-light leading-[1.6] text-primary/70">
          {item.description}
        </p>
      )}
    </>
  );

  if (item.href) {
    return (
      <li>
        <Link
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col gap-3 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-blackPrimary"
        >
          {body}
        </Link>
      </li>
    );
  }

  return <li className="flex flex-col gap-3">{body}</li>;
}

// Mobile layout: one item per row, scrolled with the modal, captions always
// showing -- the desktop grid's drag-to-pan and hover-to-reveal don't survive
// a touch screen.
export default function StackedList({ items }: StackedListProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const listener = () => setReducedMotion(query.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  useVideoAutoplay(listRef, reducedMotion, String(items.length), true);

  return (
    <ul ref={listRef} className="flex flex-col gap-12">
      {items.map((item, i) => (
        <StackedItem key={`${item.id}-${i}`} item={item} priority={i < 2} />
      ))}
    </ul>
  );
}

export function StackedListSkeleton() {
  return (
    <div className="flex flex-col gap-12">
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="aspect-square w-full animate-pulse bg-primary/10" />
          <div className="h-4 w-2/3 animate-pulse bg-primary/10" />
        </div>
      ))}
    </div>
  );
}
