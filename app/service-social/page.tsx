"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import ScrollFadeinList from "../ui/scroll-fadein-list";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const bulletItems = [
  {
    title: "Relation og støtte",
    content:
      "Vi bygger en tæt relation til borgerne og støtter dem gennem både store og små udfordringer.",
  },
  {
    title: "Aktiviteter med mening",
    content:
      "Vi opfordrer borgerne til at deltage i meningsfulde aktiviteter udenfor hjemmet, når det er muligt, for at styrke deres sociale netværk og forbedre deres livskvalitet. Det giver borgerne mulighed for at opleve nye perspektiver og bryde med isolation.",
  },
];
const listItems = [
  {
    title: "ADL-træning (Almen Daglig Livsførelse)",
    content:
      "Vi støtter borgerne i at håndtere basale dagligdagsopgaver som oprydning, madlavning, budgettering og e-Boks, så de kan skabe en mere struktureret og selvstændig tilværelse i egen bolig.",
  },
  {
    title: "Kontorfællesskab i Kødbyen",
    content:
      "Vi inviterer borgerne til vores kontor i Kødbyen, hvor de kan få en kop kaffe, opleve et inspirerende miljø og møde nye mennesker. Dette giver dem mulighed for at komme ud af deres hjem og opleve noget andet.",
  },
  {
    title: "Walk & Talks",
    content:
      "Vi kombinerer samtale med gåture, enten i borgerens nærområde eller i Kødbyen, hvor vores kontor ligger. Kødbyen er et hyggeligt område, der giver mulighed for at opleve et andet miljø og samtidig få en uformel snak.",
  },
  {
    title: "Træning i SATS",
    content:
      "Vi tilbyder træningsforløb, hvor borgerne kan træne sammen med deres støttekontaktperson og styrke både deres fysiske og mentale sundhed.",
  },
  {
    title: "Sauna-gus",
    content:
      "Efter træning tilbyder vi sauna-gus for at fremme afslapning og mental balance.",
  },

  {
    title: "Aktiviteter udenfor hjemmet",
    content:
      "For de borgere, der har mulighed for det, tilbyder vi aktiviteter, der hjælper dem med at bryde isolation og skabe sociale relationer:",
  },
];
const listItemsTwo = [
  {
    title: "Samarbejde med eksisterende indsatser",
    content:
      "Vi koordinerer vores støtte med borgerens nuværende forløb, som f.eks. misbrugsbehandling, psykiatrisk behandling eller andre indsatser, for at skabe en sammenhængende indsats. Vi deltager også i møder med kommunen og andre relevante aktører for at sikre, at der er fælles retning i borgerens forløb.",
  },
  {
    title: "Café Exit",
    content:
      "Café Exit er et fællesskab for tidligere indsatte, der tilbyder madklubber, kultureftermiddage og psykologsamtaler. Indsatsen fokuserer på at hjælpe borgere med at skabe et nyt netværk, bryde med gamle miljøer og opbygge en stabil hverdag. Mentorplan etablerer kontakten til Café Exit og deltager gerne i de første møder, indtil borgeren er tryg ved selv at deltage.",
  },
  {
    title: "Retshjælpen",
    content:
      "Retshjælpen tilbyder gratis juridisk rådgivning med fokus på spørgsmål som boligforhold, kontrakter og sociale rettigheder. De hjælper med at skabe klarhed og finde løsninger på komplekse juridiske udfordringer. Mentorplan sikrer kontakten til Retshjælpen og støtter borgeren ved at deltage i nødvendige møder.",
  },
  {
    title: "Gadejuristen",
    content:
      "Gadejuristen yder juridisk bistand til socialt udsatte med fokus på gældsrådgivning og boligproblemer. De arbejder fleksibelt og er kendt for deres opsøgende tilgang. Mentorplan opretter kontakten til Gadejuristen og deltager i møderne efter behov, indtil borgeren selv kan varetage kontakten.",
  },
];

export default function ServiceSocial() {
  const tl = useRef<gsap.core.Timeline>();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const imageContainers: HTMLElement[] =
        gsap.utils.toArray(".image-container");
      imageContainers.forEach((container) => {
        gsap.fromTo(
          container,
          { x: "150%" },
          {
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
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
      <Navbar useScrollBehavior={false} />
      <section
        ref={containerRef}
        className="mt-16 overflow-hidden p-5 bg-slate-50 dark:bg-neutral-900 lg:px-16 lg:py-14"
      >
        <main className="h-full flex flex-col w-full justify-center gap-6 lg:gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center lg:self-start lg:text-4xl">
              Social indsats under § 85
            </h1>
            <p className="text-slate-900 dark:text-slate-50">
              Hos Mentorplan tilbyder vi bostøtte i henhold til Servicelovens §
              85, hvor vi hjælper voksne borgere med psykiske, fysiske eller
              sociale udfordringer med at skabe stabilitet og struktur i deres
              hverdag. Vores indsats er ikke blot praktisk hjælp, men en
              helhedsorienteret støtte, der skaber muligheder for personlig
              udvikling og sociale relationer.
            </p>
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center 
          lg:flex-row"
          >
            <div className="flex flex-col gap-4 lg:basis-8/12">
              <h2 className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold lg:text-4xl lg:text-left">
                Vores baggrund
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Mentorplans team består af erfarne fagfolk inden for socialt
                arbejde, pædagogisk arbejde og politi. Vi arbejder med en bred
                vifte af socialt udsatte borgere, der kan have psykiske
                udfordringer, sociale vanskeligheder eller en kriminel baggrund.
                Uanset om borgeren har brug for støtte på grund af mentale
                udfordringer eller sociale problemer, har vi erfaring med at
                hjælpe dem gennem deres individuelle livssituation.
              </p>
              <p className="text-slate-900 dark:text-slate-50">
                For de borgere, der har levet et liv med kriminalitet eller
                været en del af et bandemiljø, trækker vi på vores særlige
                erfaring fra politiarbejde og bande-exitprogrammer. Denne
                erfaring gør os i stand til at hjælpe dem med at bryde med det
                kriminelle miljø og skabe et stabilt liv uden kriminalitet.
                Vores indsats er dog ikke begrænset til denne gruppe – vi
                tilpasser vores støtte til den enkelte borgers behov, uanset
                baggrund.
              </p>
            </div>
            <div className="lg:basis-4/12 image-container overflow-hidden">
              <Image
                src="/images/specialister.jpg"
                width={430}
                height={370}
                alt="journal"
                className="object-cover  w-full"
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center 
          lg:flex-row"
          >
            <div
              className="flex flex-col items-center gap-4 
            lg:items-start lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
              lg:text-4xl"
              >
                Vores tilgang
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Hos Mentorplan møder vi borgerne med respekt, åbenhed og
                ordentlighed. Vi tror på, at en stærk relation er nøglen til at
                skabe varige forandringer i borgerens liv. Vi arbejder tæt
                sammen med borgeren og sikrer, at de føler sig set og hørt –
                både i hjemmet og når det kommer til deres livsforløb. Vores
                tilgang er at tilbyde en helhedsorienteret indsats, der hjælper
                borgerne med at få struktur i hverdagen, samtidig med at de får
                mulighed for at deltage i sociale aktiviteter, der kan give dem
                en større livskvalitet.
              </p>
              <ScrollFadeinList useBackground={true} items={bulletItems} />
            </div>
            <div className="lg:basis-4/12 image-container overflow-hidden">
              <Image
                src="/images/udsatte.jpg"
                width={430}
                height={370}
                alt="journal"
                className="w-full object-cover  w-full"
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center
            lg:items-start"
          >
            <div
              className="flex flex-col gap-4 justify-between
              lg:w-6/12"
            >
              <h2 className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold lg:text-4xl lg:text-left lg:basis-8/12">
                Hvad tilbyder vi
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Mentorplan tilbyder en kombination af praktisk støtte og
                aktiviteter, der gør det muligt for borgerne at udvikle sig
                socialt og personligt. Vores indsats er skræddersyet til den
                enkelte borgers behov, så vi sikrer, at de får præcis den
                støtte, de har brug for.
              </p>
              <p className="text-slate-900 dark:text-slate-50">
                Vi er tilgængelige 24/7 og arbejder fleksibelt på forskellige
                tidspunkter af ugen, så vi kan tilpasse vores indsats efter
                borgerens behov. Uanset om der er brug for støtte i dagtimerne,
                om aftenen eller i weekenden, er vi til stede.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2">
              {listItems.map((item, index) => (
                <div key={index}>
                  <div className="flex h-full">
                    <ScrollFadeinList useBackground={false} items={[item]} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center 
            lg:items-start"
          >
            <div
              className="flex flex-col gap-4 justify-between
              lg:w-6/12"
            >
              <h2 className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold lg:text-4xl lg:text-left lg:basis-8/12">
                Tværfagligt samarbejde
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Vi arbejder tæt sammen med relevante aktører for at sikre, at
                borgerne får den bedst mulige støtte. Vores tværfaglige
                samarbejde involverer både eksisterende og nye indsatser, der
                kan hjælpe borgeren bedst muligt:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-1">
              {listItemsTwo.map((item, index) => (
                <div key={index}>
                  <div className="flex h-full">
                    <ScrollFadeinList useBackground={false} items={[item]} />
                  </div>
                </div>
              ))} 
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
