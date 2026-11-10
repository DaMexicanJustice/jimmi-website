"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

export default function Divider() {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 70%",
        end: "top 10%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      duration: 2,
    });
  });

  return (
    <section className="bg-slate-50 dark:bg-neutral-800">
      <div className="container-page py-10 lg:py-16 2xl:py-20">
      <p
        ref={ref}
        className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50 text-center opacity-0 lg:text-5xl"
      >
        Pulserende og inspirerende arbejdsfællesskab
      </p>
      </div>
    </section>
  );
}
