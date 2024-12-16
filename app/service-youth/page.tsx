"use client"; // This is a client component
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import Image from "next/image";
import { useRef } from "react";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ServiceYouth() {
  const sectionRefs = useRef([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline>();

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
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        ref={containerRef}
        id="service-employment"
        className="min-h-[calc(100svh-3rem)] mt-16 overflow-hidden p-5 bg-slate-50 dark:bg-neutral-900
        lg:px-16

 lg:py-14"
      >
        <main className="h-full flex flex-col w-full justify-center gap-6">
          <div className="flex flex-col gap-4">
            <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
            lg:self-start
            xl:text-4xl"
            >
              Ungeindsatser hos Mentorplan
            </h1>
            <p className="text-slate-900 dark:text-slate-100">
              Hos Mentorplan arbejder vi målrettet med at støtte unge op til det
              fyldte 23. år, der har brug for hjælp til at skabe stabilitet og
              retning i deres liv. Vores team består af erfarne fagfolk med
              baggrund i socialt arbejde, pædagogisk arbejde på opholdssteder
              samt erfaring fra politiet, herunder nærpolitiet, SSP-arbejde og
              det nationale Bandexit-program. Denne kombination af kompetencer
              giver os et stærkt fundament til at hjælpe unge, der står overfor
              udfordringer som kriminalitet, skolevanskeligheder, misbrug eller
              udfordringer hjemme.
            </p>
            <p className="text-slate-900 dark:text-slate-100">
              Vi tror på, at de unge ofte har flere ressourcer og potentialer,
              end de selv er klar over. Derfor har vi klare forventninger til
              dem og støtter dem i at realisere deres potentiale gennem tæt
              samarbejde og tilstedeværelse i deres hverdag. Når vi laver en
              aftale med en ung, følger vi op på, at tingene bliver overholdt og
              kommer i mål, tilpasset hver enkelts behov. Tryghed er
              altafgørende for at opnå forandringer.
            </p>
          </div>

          <div
            className="flex flex-col gap-4 justify-center items-center
            lg:flex-row lg:gap-10 "
          >
            <div
              className="flex flex-col gap-4 text-left
            lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
              lg:self-start
              xl:text-4xl"
              >
                Vores tilgang og metoder
              </h2>
              <p className="text-slate-900 dark:text-slate-100">
                Relationen er kernen i vores arbejde – uden en stærk relation er
                det svært at skabe den nødvendige forandring. Hos Mentorplan
                arbejder vi relationsbaseret, hvilket betyder, at vi opbygger
                tillid og forståelse hos de unge. Dette gør vi gennem ærlig og
                tydelig kommunikation, kombineret med aktiviteter, der skaber en
                naturlig forbindelse.
              </p>
              <p className="text-slate-900 dark:text-slate-100">
                Vi møder de unge der, hvor det giver mest mening for dem – det
                kan være i deres hjem, nærområde eller på vores kontor i
                Kødbyen. Vi opfordrer dog ofte til, at de kommer ud af deres
                vante miljø for at opleve noget nyt og få et frisk perspektiv på
                deres liv. Her spiller vores kontorfællesskab i Kødbyen en
                særlig rolle. Kontoret ligger i et inspirerende og energisk
                miljø, omgivet af iværksættere og spændende virksomheder,
                hvilket giver de unge mulighed for at møde nye typer mennesker
                og opleve en atmosfære, der kan inspirere dem til at se nye
                muligheder for deres egen fremtid.
              </p>
              <p className="text-slate-900 dark:text-slate-100">
                Vi anvender også træning i SATS som en metode til både fysisk og
                mental træning, hvor vi sammen med de unge opnår en stærkere
                relation gennem fysisk aktivitet og sociale oplevelser. Træning
                er en måde at styrke deres selvtillid og mentale overskud på.
                Udover at opbygge relationer gennem aktiviteter som Walk & Talks
                og træning, lægger vi vægt på at være vedholdende, ordentlige og
                professionelle i vores tilgang. Vi er tydelige i vores
                kommunikation, og det vi aftaler, gør vi. Den vedholdenhed og
                konsekvente støtte, vi giver de unge, er med til at sikre, at de
                føler sig set og støttet, hvilket styrker relationen og skaber
                fundamentet for positiv udvikling.
              </p>
            </div>

            <div
              className="flex flex-col gap-4 justify-center items-center image-container
            lg:basis-4/12"
            >
              <Image
                src="/images/barista.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover w-full "
                priority
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-4 justify-center items-center
            lg:flex-row lg:gap-10 "
          >
            <div
              className="flex flex-col gap-4 text-left
              lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
              lg:self-start
              xl:text-4xl"
              >
                Støtte i overgangen til voksenlivet
              </h2>
              <p className="text-slate-900 dark:text-slate-100">
                Når de unge fylder 18 og bliver myndige, ændres vores samarbejde
                til at være mere frivilligt og baseret på deres engagement.
                Støtten fortsætter, men vi forventer mere ansvar fra deres side
                og arbejder tæt sammen med dem for at sikre, at de tager ansvar
                for deres fremtid. For unge, der er kommet i egen bolig,
                tilbyder vi ADL-træning (Almen Daglig Livsførelse), hvor vi
                hjælper dem med praktiske færdigheder som oprydning,
                budgetplanlægning, håndtering af e-Boks og andre
                hverdagsopgaver. Vi sørger for, at de unge får struktur på deres
                hjemmeliv og støtte til at skabe en selvstændig tilværelse.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 justify-center image-container
              lg:basis-4/12"
            >
              <Image
                src="/images/counseling.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover w-full  "
                priority
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-4
            xl:flex-row xl:gap-10
            2xl:gap-16"
          >
            <div className="flex flex-col gap-4 basis-4/12 text-left">
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
                lg:self-start
                xl:text-4xl"
              >
                Fritidsjob og beskæftigelse
              </h2>
              <p className="text-slate-900 dark:text-slate-100">
                Hos Mentorplan har vi et særligt fokus på at hjælpe de unge med
                at komme ud på arbejdsmarkedet, både i form af fritidsjob for
                dem under 18 og almindelig beskæftigelse for dem over 18. Vi
                ved, hvor vigtigt det er for de unge at få mulighed for at prøve
                kræfter med arbejdsmarkedet, da det giver dem sociale
                færdigheder, ansvar og succesoplevelser, som er essentielle for
                deres personlige udvikling.
              </p>
              <p className="text-slate-900 dark:text-slate-100">
                Vi hjælper de unge med hele processen – fra at finde de rette
                jobmuligheder til at skrive CV og forberede sig til samtaler. Vi
                har et stort virksomhedsnetværk, som vi trækker på, men hvis vi
                ikke allerede har samarbejde med en virksomhed, der passer til
                den unges behov, er vi opsøgende og gode til at etablere nye
                kontakter. Det kan være gennem fysiske besøg, opkald eller
                online research. Vi sørger for at finde det rette match, hvor
                både arbejdskultur, kollegaer og arbejdsmiljø passer godt til
                den unge.
              </p>
              <p className="text-slate-900 dark:text-slate-100">
                Når den unge starter i et job, er vi fortsat med i processen. Vi
                følger op, deltager i møder efter behov og sikrer, at tingene
                fungerer godt. Hvis der opstår udfordringer, træder vi til og
                hjælper med at finde løsninger. Vores mål er altid at sikre en
                succesfuld jobstart for den unge, og vi ser det som en afgørende
                del af deres vej mod en stabil og selvstændig tilværelse.
              </p>
            </div>

            <div className="flex flex-col gap-4 basis-4/12 text-left">
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
                lg:self-start
                xl:text-4xl"
              >
                Kriminalitetsforebyggelse, UKN-sager og støtte i retssager
              </h2>
              <p className="text-slate-900 dark:text-slate-100">
                Nogle af de unge, vi arbejder med, står over for udfordringer
                med kriminalitet. Vores erfaring fra politiet giver os et
                indgående kendskab til de konsekvenser, de unge risikerer. Vi
                hjælper dem med at forstå konsekvenserne af deres handlinger og
                arbejder på at lede dem mod positive alternativer, så de kan
                skabe en fremtid uden kriminalitet. Hvis en ung står over for en
                retssag eller har modtaget en sanktion fra UKN, hjælper vi dem
                med at navigere i systemet og sikre, at de overholder de krav,
                der stilles til dem.
              </p>

              <div
                className="flex flex-col gap-4
            xl:flex-row xl:gap-10
            2xl:gap-16"
              >
                <div className="flex flex-col gap-4 text-left">
                  <h2
                    className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
                lg:self-start
                xl:text-4xl"
                  >
                    Tilgængelighed 24/7 og fleksibilitet
                  </h2>
                  <p className="text-slate-900 dark:text-slate-100">
                    Vi er tilgængelige 24/7 for de unge, deres familier og
                    sagsbehandlere, hvis der opstår akutte problemer eller
                    udfordringer, der kræver hurtig handling. Vores indsats er
                    fleksibel og tilpasses den enkelte unge, og vi arbejder alle
                    ugens dage, både i dagtimerne, om aftenen og i weekenderne,
                    alt efter hvad der passer den unge bedst.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 basis-4/12 text-left">
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
                lg:self-start
                xl:text-4xl"
              >
                Tværfagligt samarbejde – Vi er med hele vejen
              </h2>
              <p className="text-slate-900 dark:text-slate-100">
                Vi arbejder helhedsorienteret og går aktivt ind i de forskellige
                områder af den unges liv, hvor der er behov for støtte. Vi
                samarbejder tæt med skoler, misbrugscentre, Kriminalforsorgen,
                sagsbehandlere, forældre og andre relevante aktører for at
                sikre, at den unge får den nødvendige hjælp og støtte.
              </p>
              <p className="text-slate-900 dark:text-slate-100">
                Vores tilgang er at være med hele vejen, uanset om det handler
                om møder på skoler for at løse problemer med fravær, deltagelse
                i samtaler på arbejdspladsen eller støtte i forhold til
                misbrugsbehandling. Vi er også til stede ved møder med
                Kriminalforsorgen eller i retssager, hvor vi hjælper den unge
                med at forstå processen og sikre, at de overholder deres
                forpligtelser.
              </p>
              <p className="text-slate-900 dark:text-slate-100">
                Vi ved, at mange unge mangler en stabil voksen omkring sig, og
                derfor træder vi til som den støtte, der sikrer, at de
                nødvendige skridt bliver taget. Vores mål er at skabe sammenhæng
                og sikre, at alle aktører arbejder i samme retning for den unges
                bedste. Vi er med til at finde løsninger, når der opstår
                udfordringer, og vi sikrer, at den unge får den støtte, de har
                brug for – hele vejen.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col gap-4 justify-center items-center
            lg:flex-row lg:gap-10 "
          >
            <div
              className="flex flex-col gap-4 text-left
              lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
              lg:self-start
              xl:text-4xl"
              >
                Familiebehandling som supplement til ungeindsatsen
              </h2>
              <p className="text-slate-900 dark:text-slate-100">
                Hos Mentorplan tilbyder vi også familiebehandling som et
                værdifuldt supplement til vores ungeindsats. Vi tror på, at en
                stærk familie kan være nøglen til en ung persons udvikling, og
                derfor ser vi en stor fordel i at kombinere vores
                kontaktpersonsforløb med en familiebehandler, når det er
                relevant. Ved at have begge dele samlet under samme tag sikrer
                vi en tæt koordinering og et fælles fokus på at skabe de bedste
                rammer for både den unge og familien.
              </p>
              <p className="text-slate-900 dark:text-slate-100">
                Familiebehandlingen handler om at styrke relationerne og
                kommunikationen i familien. Vi hjælper med at identificere
                udfordringer og finde løsninger, der skaber ro og balance. Vores
                tilgang er praktisk og målrettet – vi arbejder på at bryde
                negative mønstre, opbygge positive vaner og skabe varige
                forandringer. Samtidig tager vi altid udgangspunkt i familiens
                og den unges specifikke behov, så indsatsen tilpasses deres
                unikke situation.
              </p>
              <p className="text-slate-900 dark:text-slate-100">
                Fordelen ved at kombinere ungeindsatsen med familiebehandling
                er, at vi kan arbejde helhedsorienteret. Mens kontaktpersonen
                fokuserer på at støtte den unge i deres personlige og sociale
                udvikling, arbejder familiebehandleren med familiens dynamik. På
                den måde kan vi sammen skabe en fælles retning og sikre, at alle
                parter føler sig hørt og støttet. Vores erfaring viser, at det
                kan gøre en stor forskel, når familie og kontaktpersoner
                arbejder sammen med en familiebehandler om at skabe positive
                forandringer.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 justify-center image-container
              lg:basis-4/12"
            >
              <Image
                src="/images/familiebehandling.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover w-full  "
                priority
              />
            </div>
          </div>

          {/* <div
            className="flex flex-col gap-4 justify-between
            lg:flex-row
            xl:gap-10
            2xl:gap-16"
          >
            <div
              className="flex flex-col gap-4 image-container
              lg:basis-4/12"
            >
              <Image
                src="/images/inspiration.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover w-full "
                priority
              />
            </div>

            <div
              className="flex flex-col gap-4 image-container
              lg:basis-4/12"
            >
              <Image
                src="/images/youth.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover w-full "
                priority
              />
            </div>
          </div> */}
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
