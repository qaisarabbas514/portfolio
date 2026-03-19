"use client";

/**
 * useFadeIn – attaches an IntersectionObserver to add the
 * "visible" class to elements with the "fade-in-up" class,
 * and adds "visible" to ".timeline-item" elements.
 */
import { useEffect } from "react";

export default function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll(".fade-in-up, .timeline-item");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
