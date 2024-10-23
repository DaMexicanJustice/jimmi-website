"use client"; // This is a client component
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

export default function Divider() {
  useGSAP(() => {
    gsap.to("#fade-in", {
      scrollTrigger: {
        trigger: "#fade-in",
        start: "top 70%",
        end: "top 10%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      duration: 2,
    });
  });
  return (
    <section
      className="p-5 bg-slate-50 dark:bg-neutral-800
        sm:px-32
        lg:px-16 lg:py-8"
    >
      <h1
        id="fade-in"
        className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50 text-center opacity-0
      lg:text-5xl"
      >
        pulserende og inspirerende arbejdsfællesskab
      </h1>
    </section>
  );
}
