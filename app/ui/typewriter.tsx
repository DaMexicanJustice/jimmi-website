"use client"; // This is a client component
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, TextPlugin);

const texts: string[] = [
  "Alt godt samarbejde starter med en god kop kaffe",
  "Erfarne mentorer i trygge rammer",
  "Individuel tilgang, der tager udgangspunkt i borgers behov",
  "En relation, der bygger på ligeværd, respekt og tillid.",
];

const Typewriter = () => {
  const container = useRef();
  const tl = useRef();
  useGSAP(() => {}, { scope: container });

  return (
    <h2>
      <span
        id="slogan"
        className="relative text-base font-semibold font-conduit text-slate-50
  md:text-2xl"
      >
        Alt godt samarbejde starter med en god kop kaffe
      </span>
      {/* <span className="font-sans text-2xl text-slate-50 animate-ping">|</span> */}
    </h2>
  );
};

export default Typewriter;