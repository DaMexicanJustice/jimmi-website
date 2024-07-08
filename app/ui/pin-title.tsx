"use client"; // This is a client component
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

const PinTitle = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#Employee-details",
      start: "top 40%",
      end: "bottom bottom",
      scrub: true,
      pin: ".scroll-target",
      anticipatePin: 1,
      pinSpacing: false,
    });
  });

  return (
    <div
      className="scroll-target self-start absolute right-0 px-5 hidden
            lg:block"
    >
      <Link href="/employees">
        <h2
          className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50
              lg:text-2xl
              xl:text-3xl
              2xl:text-4x"
        >
          <span className="font-sans text-yellow-400 dark:text-yellow-500">
            |
          </span>
          Tilbage
        </h2>
      </Link>
    </div>
  );
};

export default PinTitle;
