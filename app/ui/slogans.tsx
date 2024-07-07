"use client"; // This is a client component
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

const Slogans = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".first", {
      text: "˝Alt godt samarbejde starter med en god kop kaffe.˝",
      ease: "none",
    })
      .to(".second", {
        text: "˝Individuel tilgang, der tager udgangspunkt i borgers behov˝",
        ease: "none",
      })
      .to(".third", {
        text: "˝En relation, der bygger på ligeværd, respekt og tillid.˝",
        ease: "none",
      });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".trigger",
      start: "top top",
      end: "+=1500",
      scrub: true,
      pin: "#DNA",
      anticipatePin: 1,
      onScrubComplete: function () {},
    });
  });

  return (
    <div
      className="hidden justify-center items-start basis-5/12 gap-6 trigger h-full
          xl:flex xl:flex-col"
    >
      <h2
        className="uppercase font-conduitbold first
            lg:text-2xl
            xl:text-3xl
            2xl:text-4xl"
      ></h2>
      <h2
        className="uppercase font-conduitbold second
            lg:text-2xl
            xl:text-3xl
            2xl:text-4xl"
      ></h2>
      <h2
        className="uppercase font-conduitbold third
            lg:text-2xl
            xl:text-3xl
            2xl:text-4xl"
      ></h2>
    </div>
  );
};

export default Slogans;
