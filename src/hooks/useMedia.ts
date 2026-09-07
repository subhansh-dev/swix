import { useEffect, useState } from "react";

export function useMedia(query: string, initial = false) {
  const [matches, setMatches] = useState(initial);
  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export const useReducedMotion = () => useMedia("(prefers-reduced-motion: reduce)");
export const useCanHover = () => useMedia("(hover: hover) and (pointer: fine)");
