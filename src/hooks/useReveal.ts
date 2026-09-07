import { useEffect, useRef } from "react";

/**
 * A single shared IntersectionObserver for every revealed element on the page.
 * Cheaper than one observer per component, and elements unobserve themselves
 * once revealed so the observer's work shrinks as you scroll.
 */
let sharedObserver: IntersectionObserver | null = null;
const pending = new WeakMap<Element, () => void>();

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = pending.get(entry.target);
          cb?.();
          pending.delete(entry.target);
          sharedObserver?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  return sharedObserver;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    const obs = getObserver();
    pending.set(el, () => el.classList.add("is-in"));
    obs.observe(el);
    return () => {
      pending.delete(el);
      obs.unobserve(el);
    };
  }, []);
  return ref;
}
