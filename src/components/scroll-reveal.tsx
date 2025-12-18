"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";

import { Slot } from "radix-ui";
import { useIntersectionObserver } from "usehooks-ts";

interface Props {
  children: ReactNode;
  delay?: number; // in milliseconds
  threshold?: number; // default 0.5
  animationClasses?: string; // space-separated classes
}

export function ScrollReveal({
  children,
  delay = 0,
  threshold = 0.5,
  animationClasses = "scroll-in", // default animation
}: Props) {
  const { ref, isIntersecting, entry } = useIntersectionObserver({ threshold });

  useEffect(() => {
    if (isIntersecting && entry?.target) {
      const el = entry.target as HTMLElement;
      el.classList.add("animate-backwards");

      // Remove initial hidden class
      el.classList.remove("opacity-0");

      // Add animation classes (split by space to avoid InvalidCharacterError)
      if (animationClasses) {
        el.classList.add(...animationClasses.split(" "));
      }

      // Apply animation delay
      el.style.animationDelay = `${delay}ms`;
    }
  }, [isIntersecting, entry, delay, animationClasses]);

  return (
    <Slot.Root className="opacity-0" ref={ref}>
      {children}
    </Slot.Root>
  );
}
