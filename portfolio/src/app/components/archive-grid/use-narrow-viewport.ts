"use client";

import { useEffect, useState } from "react";

// Matches Tailwind's `md` breakpoint, the same line the navbar switches on.
const narrowQuery = "(max-width: 767px)";

// null until the client has evaluated the query, so callers can hold off
// rendering either layout rather than flashing the wrong one.
export function useNarrowViewport(): boolean | null {
  const [narrow, setNarrow] = useState<boolean | null>(null);
  useEffect(() => {
    const query = window.matchMedia(narrowQuery);
    setNarrow(query.matches);
    const listener = () => setNarrow(query.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);
  return narrow;
}
