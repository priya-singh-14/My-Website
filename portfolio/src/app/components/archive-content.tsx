"use client";

import { useEffect, useState } from "react";
import InfiniteGrid from "./archive-grid/InfiniteGrid";
import GridSkeleton from "./archive-grid/GridSkeleton";
import type { GridItem } from "./archive-grid/data";
import { fetchArenaChannelItems } from "./archive-grid/arena";

type Status =
  | { state: "loading" }
  | { state: "error" }
  | { state: "ready"; items: GridItem[] };

export default function ArchiveContent() {
  const [status, setStatus] = useState<Status>({ state: "loading" });

  useEffect(() => {
    let cancelled = false;
    fetchArenaChannelItems()
      .then((items) => {
        if (!cancelled) setStatus({ state: "ready", items });
      })
      .catch((error) => {
        console.warn("[Archive] Are.na fetch failed:", error);
        if (!cancelled) setStatus({ state: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mt-10 flex min-h-0 flex-1 flex-col md:mt-2">
      <p className="mb-6 shrink-0 text-p2 text-primary/90">
        I spend a lot of time tinkering around. Here&apos;s what I&apos;ve been up to lately. [drag to browse]
      </p>
      <div className="-mx-5 min-h-[400px] flex-1">
        {status.state === "loading" && <GridSkeleton />}
        {status.state === "error" && (
          <p className="px-5 text-p2 text-primary/50">
            Couldn&apos;t load the archive right now -- try again shortly.
          </p>
        )}
        {status.state === "ready" && <InfiniteGrid items={status.items} />}
      </div>
    </div>
  );
}
