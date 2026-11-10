"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

type SlideInProps = {
  children?: React.ReactNode;
  className?: string;
  /** ScrollTrigger start, e.g. "top 80%". */
  start?: string;
};

/**
 * Slides its content in from the right when scrolled into view.
 * Replaces the per-page `.image-container` GSAP blocks so pages can stay
 * server components. The parent should clip overflow (overflow-x-hidden).
 */
export default function SlideIn({ children, className = "", start = "top 80%" }: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { x: "150%" },
        {
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            end: "top top",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
