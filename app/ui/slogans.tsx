"use client"; // This is a client component
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

const Slogans = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", (context) => {
      const tl = gsap.timeline();
      tl.to(".first", {
        text: {
          delimiter: " ",
          value: "˝Alt godt samarbejde starter med en god kop kaffe˝",
        },
        ease: "none",
      })
        .to(".second", {
          text: {
            delimiter: " ",
            value:
              "˝Individuel tilgang, der tager udgangspunkt i borgers behov˝",
          },
          ease: "none",
        })
        .to(".third", {
          text: {
            delimiter: " ",
            value: "˝En relation, der bygger på ligeværd, respekt og tillid.˝",
          },
          ease: "none",
        });
      ScrollTrigger.create({
        animation: tl,
        trigger: ".trigger",
        start: "top center",
        end: "+=1000",
        scrub: true,
        pin: "#DNA",
        anticipatePin: 1,
      });
    });
  });

  return (
    <div className="trigger flex flex-col gap-10 justify-center text-slate-900 dark:text-slate-50 basis-6/12">
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
