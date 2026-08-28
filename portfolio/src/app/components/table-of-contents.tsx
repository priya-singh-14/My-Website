"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export interface TocItem {
  id: string;
  label: string;
  scrollTarget?: string;
}

interface TableOfContentsProps {
  items: Array<TocItem>;
}

// Fraction of the viewport height at which a section becomes the current one.
const ACTIVATION_LINE = 0.4;

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    let frame: number | null = null;

    // Scroll position rather than IntersectionObserver. The observer's
    // activation band was a thin slice of the viewport, so any section the
    // page can't scroll far enough to push into it -- the last one or two,
    // mostly -- could never win, and clicking it left the previous section
    // highlighted. "Lowest section whose top has crossed the line" always
    // resolves to exactly one item, and the bottom-of-page guard covers the
    // tail sections whose tops never reach the line at all.
    const update = () => {
      frame = null;
      const line = window.innerHeight * ACTIVATION_LINE;

      // `items` is in document order, so the last match is the lowest
      // section that has crossed the line.
      let current: string | null = null;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        const last = items[items.length - 1];
        if (document.getElementById(last.id)) current = last.id;
      }

      setActiveId(current ?? items[0].id);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (items.length === 0) return null;

  return (
    <motion.nav
      className="hidden lg:flex lg:flex-col gap-2 fixed ml-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {items.map(({ id, label, scrollTarget }) => (
        <a
          key={id}
          href={`#${scrollTarget ?? id}`}
          onClick={scrollTo(scrollTarget ?? id)}
          className={`font-manrope text-[13px] uppercase tracking-wide transition-colors ${
            activeId === id
              ? "text-blackPrimary font-semibold"
              : "text-greyAccent hover:text-greyPrimary"
          }`}
        >
          {label}
        </a>
      ))}
    </motion.nav>
  );
}
