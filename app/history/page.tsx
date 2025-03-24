"use client";
import HistoryCard from "../ui/history-card";
import Image from "next/image";

import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function History() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const imageContainers: HTMLElement[] =
        gsap.utils.toArray(".image-container");

      console.log("Number of elements: " + imageContainers.length);

      imageContainers.forEach((container) => {
        gsap.fromTo(
          container,
          { x: "150%" },
          {
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "top top",
              toggleActions: "play none none reverse",
            },
            x: 0,
            duration: 1,
            ease: "power2.out",
          }
        );
      });
    },
    { scope: containerRef }
  );
  return (
    <>
      <section
        ref={containerRef}
        id="History"
        className="p-5 bg-slate-50 dark:bg-neutral-900
        sm:px-32
        lg:px-16"
      >
        <main
          className="flex flex-col items-center justify-evenly gap-6 py-6 h-full
          xl:gap-10 xl:flex-row xl:justify-between xl:items-center"
        >
          {/* <Image
            src="/images/Jimmi2.jpg"
            width={280}
            height={328}
            alt="Jimmi billed"z
            className="drop-shadow-md
            xl:order-3 xl:w-full
            xl:basis-3/12"
          /> */}

          {/* Left panel / Top Panel */}
          <div
            className="flex flex-col gap-10 items-center
            lg:basis-6/12
            xl:items-start xl:justify-evenly xl:basis-8/12"
          >
            <HistoryCard />
            {/* <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold
          xl:text-4xl"
            >
              Velkommen Til Mentorplan
            </h1>
            <p className="text-slate-900 dark:text-slate-100 text-lg text-left leading-6">
              <span
                className="uppercase text-slate-900 dark:text-slate-100 text-lg font-conduitbold
          xl:text-xl"
              >
                Mentorplan
              </span>
              <br></br> Hos Mentorplan, der har eksisteret siden 2016, brænder
              vi for at gøre en forskel – med sociale og beskæftigelsesrettede
              indsatser, der støtter unge, voksne og familier i at skabe varige,
              positive forandringer i deres liv.<br></br>
              <br></br>
              <span
                className="uppercase text-slate-900 dark:text-slate-100 text-lg font-conduitbold
          xl:text-xl"
              >
                Baggrund
              </span>
              <br></br> Med baggrund i politi, socialrådgivning og pædagogisk
              arbejde ved vi, hvordan vi møder mennesker, hvor de er, og hjælper
              dem videre mod deres mål. Vores tværfaglige tilgang giver os
              forskellige perspektiver og værktøjer, som styrker vores arbejde
              med at skræddersy løsninger, der møder den enkeltes behov.
              <br></br>
              <br></br>
              <span
                className="uppercase text-slate-900 dark:text-slate-100 text-lg font-conduitbold
          xl:text-xl"
              >
                Beliggenhed
              </span>
              <br></br>
              Vi holder til i et levende kontorfællesskab i Kødbyen, hvor den
              gode energi og inspirerende atmosfære giver et ekstra løft til
              borgerne, når de kommer ind. Miljøet smitter positivt af og gør en
              forskel for dem, vi arbejder med. <br></br> <br></br>
              <span
                className="uppercase text-slate-900 dark:text-slate-100 text-lg font-conduitbold
          xl:text-xl"
              >
                Beliggenhed
              </span>
              <br></br>
              Er du sagsbehandler, samarbejdspartner eller bare nysgerrig? Så er
              du mere end velkommen til at kigge forbi til en kop kaHe og en
              snak om, hvem vi er, og hvordan vi arbejder. Du kan i øvrigt læse
              mere om vores indsatser, metoder og dygtige konsulenter her på
              hjemmesiden. Vi glæder os til at byde dig velkommen hos
              Mentorplan!<br></br> <br></br>
            </p> */}
          </div>
          <div
            className="overflow-hidden image-container
            lg:basis-6/12 lg:mb-0
            xl:basis-4/12"
          >
            <Image
              alt="vores team"
              src="/images/team.jpg"
              width={1920}
              height={1080}
              priority
              className="object-cover w-full"
            />
          </div>
        </main>
      </section>
    </>
  );
}
