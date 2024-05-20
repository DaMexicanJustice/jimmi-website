"use client"; // This is a client component
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, TextPlugin);

const texts: string[] = [
  " Alt godt samarbejde starter med en god kop kaffe",
  " Erfarne mentorer i trygge rammer",
  " Individuel tilgang, der tager udgangspunkt i borgers behov",
  " En relation, der bygger på ligeværd, respekt og tillid.",
];

const Typewriter = () => {
  const [idx, setIdx] = useState(0);
  const [delayAmount, setDelayAmount] = useState(0);
  useEffect(() => {
    gsap.defaults({ ease: "none" });
    const tl = gsap.timeline({
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
      onRepeat: () => {
        setIdx((idx + 1) % texts.length);
        setDelayAmount(2);
      },
    });
    tl.to("h2 #slogan", {
      duration: 2,
      delay: delayAmount,
      text: texts[idx],
    });
  });
  return (
    <h2>
      <span
        id="slogan"
        className="relative text-base font-semibold font-conduit text-slate-50
  md:text-2xl"
      ></span>
      <span className="font-sans text-2xl text-slate-50 animate-ping">|</span>
    </h2>
  );
};

export default Typewriter;
