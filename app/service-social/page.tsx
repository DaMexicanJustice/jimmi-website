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

const listItems = [
  {
    title: "ADL-træning (Almen Daglig Livsførelse):",
    content:
      "Vi støtter borgerne i at håndtere basale dagligdagsopgaver som oprydning, madlavning, budgettering og e-Boks, så de kan skabe en mere struktureret og selvstændig tilværelse i egen bolig.",
  },
  {
    title: "Aktiviteter udenfor hjemmet:",
    content:
      "For de borgere, der har mulighed for det, tilbyder vi aktiviteter, der hjælper dem med at bryde isolation og skabe sociale relationer:",
  },
  {
    title: "Walk & Talks:",
    content:
      "Vi kombinerer samtale med gåture, enten i borgerens nærområde eller i Kødbyen, hvor vores kontor ligger. Kødbyen er et hyggeligt område, der giver mulighed for at opleve et andet miljø og samtidig få en uformel snak.",
  },
  {
    title: "Træning i SATS:",
    content:
      "Vi tilbyder træningsforløb, hvor borgerne kan træne sammen med deres støttekontaktperson og styrke både deres fysiske og mentale sundhed.",
  },
  {
    title: "Sauna-gus:",
    content:
      "Efter træning tilbyder vi sauna-gus for at fremme afslapning og mental balance.",
  },
  {
    title: "Kontorfællesskab i Kødbyen:",
    content:
      "Vi inviterer borgerne til vores kontor i Kødbyen, hvor dekan få en kop kae, opleve et inspirerende miljø og møde nye mennesker. Dette giver dem mulighed for at komme ud af deres hjem og opleve noget andet.",
  },
];
const listItemsTwo = [
  {
    title: "Samarbejde med eksisterende indsatser:",
    content:
      "Vi koordinerer vores støtte med borgerens nuværende forløb, som f.eks. misbrugsbehandling, psykiatrisk behandling eller andre indsatser, for at skabe en sammenhængende indsats. Vi deltager også i møder med kommunen og andre relevante aktører for at sikre, at der er fælles retning i borgerens forløb.",
  },
  {
    title: "Henvisning til nye samarbejdspartnere:",
    content:
      "Når det er nødvendigt, henviser vi til relevante samarbejdspartnere som:",
  },
  {
    title: "Gadejuristen:",
    content: " Juridisk rådgivning og støtte.",
  },
  {
    title: "Café Exit:",
    content:
      "Et fællesskab for tidligere indsatte, hvor de kan deltage i madklubber og kultureftermiddage, der hjælper dem med at bryde med deres gamle miljø. Café Exit tilbyder også psykologsamtaler for at støtte deres mentale velvære.  ",
  },
  {
    title: "Retshjælpen:",
    content: "Rådgivning om gæld og andre juridiske sager.",
  },
];

export default function SocialIndasats() {
  const tl = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    const images: HTMLElement[] = gsap.utils.toArray(".grayscale");
    images.forEach((image) => {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: "top 70%",
          end: "top top",
          toggleActions: "play none none reverse",
        },
        filter: "grayscale(0%)",
        x: 0,
        duration: 1,
      });
    });
  });

  return (
    <>
      <Navbar useScrollBehavior={false} />
      <section className="mt-16 overflow-hidden p-5 bg-slate-100 dark:bg-neutral-900 lg:px-16 lg:py-14">
        <main className="h-full flex flex-col w-full justify-center gap-6 lg:gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center lg:self-start xl:text-4xl">
              Social indsats under § 85
            </h1>
            <p>
              Hos Mentorplan tilbyder vi bostøtte i henhold til Servicelovens §
              85, hvor vi hjælper voksne borgere med psykiske, fysiske eller
              sociale udfordringer med at skabe stabilitet og struktur i deres
              hverdag. Vores indsats er ikke blot praktisk hjælp, men en
              helhedsorienteret støtte, der skaber muligheder for personlig
              udvikling og sociale relationer.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-between items-center lg:flex-row">
            <div className="flex flex-col gap-4 xl:basis-8/12">
              <h2 className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold xl:text-4xl xl:text-left">
                Vores baggrund
              </h2>
              <p>
                Mentorplans team består af erfarne fagfolk inden for socialt
                arbejde, pædagogisk arbejde og politi. Vi arbejder med en bred
                vifte af socialt udsatte borgere, der kan have psykiske
                udfordringer, sociale vanskeligheder eller en kriminel baggrund.
                Uanset om borgeren har brug for støtte på grund af mentale
                udfordringer eller sociale problemer, har vi erfaring med at
                hjælpe dem gennem deres individuelle livssituation.
              </p>
              <p>
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
            <Image
              src="/images/commute.jpg?height=370&width=430"
              width={430}
              height={370}
              alt="Mentorplan team"
              className="object-cover grayscale image-right xl:basis-4/12"
            />
          </div>

          <div className="flex flex-col gap-4 justify-between items-center lg:flex-row">
            <div className="flex flex-col items-center gap-4 lg:items-start xl:basis-8/12">
              <h2 className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold xl:text-4xl">
                Vores tilgang
              </h2>
              <p>
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
              <ul className="list-disc px-4">
                <li>
                  Relation og støtte: Vi bygger en tæt relation til borgerne og
                  støtter dem gennem både store og små udfordringer.
                </li>
                <li>
                  Aktiviteter med mening: Vi opfordrer borgerne til at deltage i
                  meningsfulde aktiviteter udenfor hjemmet, når det er muligt,
                  for at styrke deres sociale netværk og forbedre deres
                  livskvalitet. Det giver borgerne mulighed for at opleve nye
                  perspektiver og bryde med isolation.
                </li>
              </ul>
            </div>
            <Image
              src="/images/youth.jpg?height=370&width=430"
              width={430}
              height={370}
              alt="Vores tilgang"
              className="object-cover grayscale image-right xl:basis-4/12"
            />
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center 
          lg:flex-row lg:items-center"
          >
            <div
              className="flex flex-col gap-4 justify-between 
              lg:basis-6/12"
            >
              <h2 className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold xl:text-4xl xl:text-left xl:basis-8/12">
                Hvad tilbyder vi
              </h2>
              <p>
                Mentorplan tilbyder en kombination af praktisk støtte og
                aktiviteter, der gør det muligt for borgerne at udvikle sig
                socialt og personligt. Vores indsats er skræddersyet til den
                enkelte borgers behov, så vi sikrer, at de får præcis den
                støtte, de har brug for.
              </p>
              <p>
                Vi er tilgængelige 24/7 og arbejder fleksibelt på forskellige
                tidspunkter af ugen, så vi kan tilpasse vores indsats efter
                borgerens behov. Uanset om der er brug for støtte i dagtimerne,
                om aftenen eller i weekenden, er vi til stede.
              </p>
            </div>
            <div className="lg:basis-6/12">
              <ScrollFadeinList items={listItems} />
            </div>
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center 
          lg:flex-row lg:items-center"
          >
            <div className="lg:basis-6/12">
              <ScrollFadeinList items={listItemsTwo} />
            </div>
            <div
              className="flex flex-col gap-4 justify-between 
              lg:basis-6/12"
            >
              <h2 className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold xl:text-4xl xl:text-left xl:basis-8/12">
                Tværfagligt samarbejde
              </h2>
              <p>
                Vi arbejder tæt sammen med relevante aktører for at sikre, at
                borgerne får den bedst mulige støtte. Vores tværfaglige
                samarbejde involverer både eksisterende og nye indsatser, der
                kan hjælpe borgeren bedst muligt:
              </p>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
