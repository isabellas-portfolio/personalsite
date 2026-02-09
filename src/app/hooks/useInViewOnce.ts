"use client";

import { useEffect, useRef, useState } from "react";

/** Uses IntersectionObserver to set true once when element is ~40–60% visible. */
export function useInViewOnce(
  options?: { threshold?: number; rootMargin?: string }
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const threshold = options?.threshold ?? 0.5;
    const rootMargin = options?.rootMargin ?? "0px";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, options?.threshold, options?.rootMargin]);

  return [ref, inView];
}
