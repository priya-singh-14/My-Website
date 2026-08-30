"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

// How long a cell must hold the cursor before focus moves to it, so a fast
// sweep resolves as one handoff rather than a dozen.
const switchDelayMs = 70;

// How long focus lingers after the cursor leaves a cell.
const hideDelayMs = 120;

// null until the client has evaluated the query -- callers that render a
// non-hover fallback need to tell "no hover" from "not measured yet".
export function useHoverCapable(): boolean | null {
  const [capable, setCapable] = useState<boolean | null>(null);
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCapable(query.matches);
    const listener = () => setCapable(query.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);
  return capable;
}

// Reports which cell the cursor has committed to. The target is the item's
// media and caption ([data-hit-region]), not the whole cell box, so hovering
// dead space beside an image doesn't light it up.
export function useHoverFocus(
  viewportRef: RefObject<HTMLElement | null>,
  onFocusChange: (el: HTMLElement | null) => void
) {
  const hoverCapable = useHoverCapable();
  const focusedEl = useRef<HTMLElement | null>(null);
  const switchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!hoverCapable) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const clearSwitch = () => {
      if (switchTimer.current !== null) clearTimeout(switchTimer.current);
      switchTimer.current = null;
    };
    const clearHide = () => {
      if (hideTimer.current !== null) clearTimeout(hideTimer.current);
      hideTimer.current = null;
    };

    const commit = (el: HTMLElement | null) => {
      if (focusedEl.current === el) return;
      focusedEl.current = el;
      onFocusChange(el);
    };

    const onMouseOver = (e: MouseEvent) => {
      const region = (e.target as HTMLElement).closest("[data-hit-region]");
      const cell = region?.closest<HTMLElement>("[data-grid-hit]");
      if (!cell) return;
      clearHide();
      if (focusedEl.current === cell) {
        clearSwitch();
        return;
      }
      clearSwitch();
      if (focusedEl.current === null) {
        commit(cell);
        return;
      }
      switchTimer.current = setTimeout(() => {
        switchTimer.current = null;
        commit(cell);
      }, switchDelayMs);
    };

    const onMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related?.closest("[data-hit-region]")) return;
      clearSwitch();
      clearHide();
      hideTimer.current = setTimeout(() => {
        hideTimer.current = null;
        commit(null);
      }, hideDelayMs);
    };

    viewport.addEventListener("mouseover", onMouseOver);
    viewport.addEventListener("mouseout", onMouseOut);

    return () => {
      viewport.removeEventListener("mouseover", onMouseOver);
      viewport.removeEventListener("mouseout", onMouseOut);
      clearSwitch();
      clearHide();
      commit(null);
    };
  }, [hoverCapable, viewportRef, onFocusChange]);
}
