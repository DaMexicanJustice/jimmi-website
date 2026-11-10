"use client";
import { useRef } from "react";
import { Accordion } from "./accordion";
import { ScrollTrigger, useGSAP } from "../lib/gsap";

/**
 * "Forløb" heading that stays pinned (desktop) while the course accordion
 * scrolls past. Refreshes ScrollTrigger when accordion items open/close.
 */
export default function ForloebSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      scrub: true,
      pin: headingRef.current,
      anticipatePin: 1,
      pinReparent: false,
    });
    const refresh = () => setTimeout(() => ScrollTrigger.refresh(), 300);
    section.addEventListener("click", refresh);
    return () => section.removeEventListener("click", refresh);
  });

  return (
    <>
      <div ref={headingRef} className="hidden lg:block">
        <h2 className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50 lg:text-6xl">
          Forløb<span className="font-sans text-yellow-400">|</span>
        </h2>
      </div>
      <div ref={sectionRef} className="flex flex-col gap-6 w-full lg:flex-row lg:justify-end">
        <div className="flex flex-col gap-6 items-center lg:basis-9/12 lg:items-start">
          <Accordion />
        </div>
      </div>
    </>
  );
}
