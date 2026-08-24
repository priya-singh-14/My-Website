"use client";
import { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
  scrollTarget?: string;
}

interface TableOfContentsProps {
  items: Array<TocItem>;
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (items.length === 0) return null;

  return (
    <nav className="hidden lg:flex lg:flex-col gap-2 fixed ml-5">
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
    </nav>
  );
}
