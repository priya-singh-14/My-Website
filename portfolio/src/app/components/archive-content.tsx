"use client";

import { useEffect, useState } from "react";
import InfiniteGrid from "./archive-grid/infinite-grid";
import GridSkeleton from "./archive-grid/grid-skeleton";
import StackedList, { StackedListSkeleton } from "./archive-grid/stacked-list";
import type { GridItem } from "./archive-grid/data";
import { fetchArenaChannelItems } from "./archive-grid/arena";
import { useNarrowViewport } from "./archive-grid/use-narrow-viewport";

type Status =
  | { state: "loading" }
  | { state: "error" }
  | { state: "ready"; items: GridItem[] };

export default function ArchiveContent() {
  const [status, setStatus] = useState<Status>({ state: "loading" });
  const narrow = useNarrowViewport();

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

  const loading = status.state === "loading" || narrow === null;

  return (
    // Narrow: height comes from the content, so the modal scrolls it. Wide:
    // the grid is pinned to the modal's height and pans inside itself.
    <div
      className={
        narrow ? "mt-10 flex flex-col" : "mt-10 flex min-h-0 flex-1 flex-col md:mt-2"
      }
    >
      <p className="mb-6 shrink-0 text-[14px] font-light leading-[1.5] text-primary/90 md:text-p2">
        I spend a lot of time tinkering around. Here&apos;s what I&apos;ve been up to
        lately. {narrow ? "[scroll to browse]" : "[drag to browse]"}
      </p>
      {/* No negative inset: the grid stays inside the modal's px-5 so its
          cells line up with the landing page's content margins rather than
          running flush to the viewport edges. */}
      {/* The stacked list scrolls with the modal, so it can't be pinned to the
          modal's height the way the pannable grid is. */}
      <div className={narrow ? "" : "min-h-[400px] flex-1"}>
        {loading && (narrow ? <StackedListSkeleton /> : <GridSkeleton />)}
        {!loading && status.state === "error" && (
          <p className="text-p2 text-primary/50">
            Couldn&apos;t load the archive right now — try again shortly.
          </p>
        )}
        {!loading &&
          status.state === "ready" &&
          (narrow ? (
            <StackedList items={status.items} />
          ) : (
            <InfiniteGrid items={status.items} />
          ))}
      </div>
    </div>
  );
}
