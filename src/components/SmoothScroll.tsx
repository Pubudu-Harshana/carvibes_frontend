"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis for premium smooth scroll feel
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential decel
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Make Lenis available globally so other components (like Navbar) can trigger scroll functions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    // Connect Lenis scroll loop to RequestAnimationFrame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).lenis === lenis) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (window as any).lenis;
      }
    };
  }, []);

  return null;
}
