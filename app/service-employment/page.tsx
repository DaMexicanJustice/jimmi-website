"use client"; // This is a client component
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import networkPic from "/public/images/network.jpg";
import journalPic from "/public/images/journal.jpg";
import sohoPic from "/public/images/soho_face.jpg";
import possiblePic from "/public/images/possible.jpg";
import growthPic from "/public/images/growth.jpg";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircularDiagram from "../ui/CircularDiagram";
import ScrollFadeinList from "../ui/scroll-fadein-list";
import { Accordion } from "../ui/accordion";
import Prices from "../ui/prices";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const listItems = [
  {
    title: "Et professionelt og inspirerende miljø",
    content:
      "SOHO tilbyder lyse og moderne lokaler, hyggelige kroge til samtaler og inspirerende mødefaciliteter. Borgerne bliver mødt med et smil fra receptionen og kan nyde en kop kaffe i husets café. Disse omgivelser skaber en atmosfære, der både er professionel og motiverende, hvilket gør det til et behageligt sted at mødes og arbejde på sig selv.",
  },
  {
    title: "Et sted, der skaber muligheder",
    content:
      "For nogle borgere handler det om at træne praktiske ting som at møde op til aftaler, navigere i en professionel atmosfære eller spejle sig i andre mennesker. For andre handler det om at opleve nye omgivelser og få energi fra et miljø fyldt med kreativitet og aktivitet. Kontoret giver borgerne en mulighed for at bryde vante rammer og tage skridt mod deres mål i deres eget tempo.",
  },
  {
    title: "Netværk og fremtidsmuligheder",
    content:
      "Når det er relevant, trækker vi på netværket i huset og samarbejder med virksomheder om praktikker, jobsamtaletræning eller konkrete jobmuligheder. Det giver borgerne adgang til erfaring og indsigt i virkelige arbejdssituationer og hjælper dem med at tage skridtet videre.",
  },
  {
    title: "En social og motiverende ramme",
    content:
      "Det livlige miljø i SOHO giver borgerne mulighed for at opleve, hvordan det er at være en del af et større fællesskab. Det er ikke bare en fysisk ramme, men en platform, hvor borgerne kan blive inspireret, spejle sig i andre og finde motivation til at tage de næste skridt mod arbejdsmarkedet eller uddannelse.",
  },
];
const listItemsTwo = [
  {
    title: "Samarbejdet starter med forventningsafstemning",
    content:
      "Når en borger skal starte i praktik, lønnede timer eller ordinært arbejde, deltager vi altid i første møde mellem borgeren og virksomheden. Vi sørger for en åben og ærlig dialog, hvor vi afstemmer forventninger og taler om eventuelle udfordringer. Åbenhed skaber gensidig forståelse og respekt, hvilket sikrer det bedste forløb.",
  },
  {
    title: "Løbende opfølgning sikrer succes",
    content:
      "Når en borger skal starte i praktik, lønnede timer eller ordinært arbejde, deltager vi altid i første møde mellem borgeren og virksomheden. Vi sørger for en åben og ærlig dialog, hvor vi afstemmer forventninger og taler om eventuelle udfordringer. Åbenhed skaber gensidig forståelse og respekt, hvilket sikrer det bedste forløb.",
  },
  {
    title: "Netværk og nye muligheder",
    content:
      "Når en borger skal starte i praktHvis vi ikke allerede samarbejder med en virksomhed, der matcher borgerens behov, er vi dygtige til at finde nye muligheder. Vores stærke netværk gør, at vi kan finde de rette virksomheder, der tilbyder det bedste match. Vi sikrer os, at både borger og virksomhed får de bedste forudsætninger for et succesfuldt samarbejde.",
  },
];

export default function ServiceEmployment() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const imageContainers: HTMLElement[] =
        gsap.utils.toArray(".image-container");

      console.log("Number of elements: " + imageContainers.length);

      ScrollTrigger.create({
        trigger: ".scroll-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        pin: ".scroll-target",
        anticipatePin: 1,
        pinReparent: false,
      });

      // Refresh ScrollTrigger on accordion item toggle
      const accordionItems = document.querySelectorAll(".scroll-section");

      accordionItems.forEach((item) => {
        item.addEventListener("click", () => {
          // Give GSAP time to adjust after accordion toggle
          setTimeout(() => ScrollTrigger.refresh(), 300);
        });
      });

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

      return () => {
        // Clean up event listeners on unmount
        accordionItems.forEach((item) => {
          item.removeEventListener("click", () => ScrollTrigger.refresh());
        });
      };
    },
    { scope: containerRef }
  );

  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        ref={containerRef}
        id="service-employment"
        className="min-h-[calc(100svh-3rem)] mt-16 overflow-x-hidden p-5 
        bg-slate-50 dark:bg-neutral-900
        sm:px-32
        lg:px-16 lg:py-14"
      >
        <main
          className="h-full flex flex-col w-full justify-center items-center gap-10 
        lg:items-start"
        >
          <div
            className="flex flex-col gap-4 items-center
          lg:items-start"
          >
            <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
            xl:text-4xl"
            >
              BESKÆFTIGELSES- OG UDDANNELSESINDSATS
            </h1>
            <p className="text-slate-900 dark:text-slate-50">
              Hos Mentorplan arbejder vi ud fra tanken om, at virkeligheden
              virker – inspireret af JobFirst- metoden, som har vist gode
              resultater med at få udsatte borgere tilbage på arbejdsmarkedet.
              Vi tager udgangspunkt i principperne fra JobFirst og har tilpasset
              dem til vores måde at arbejde på, så vi bedst muligt møder
              borgernes forskellige behov.
              <br></br> <br></br>
              Det handler om at skabe holdbare løsninger, der giver mening for
              den enkelte. Vores forløb tilpasses altid borgerens behov og
              situation og tager udgangspunkt i en helhedsorienteret tilgang,
              hvor vi både ser på ressourcer og udfordringer. Med en stærk
              kombination af erfaring, faglighed og en menneskelig tilgang
              skaber vi løsninger, der rykker mennesker.
              <br></br> <br></br>
              Hos Mentorplan er målet ikke bare at få folk i gang, men at sikre,
              at de bliver klar til at fastholde deres vej – uanset om det
              handler om arbejde, uddannelse eller begge dele.
              <br></br> <br></br>
              Nedenfor beskriver vi, hvordan vi arbejder, og hvilke forløb vi
              tilbyder. Det er vigtigt at understrege, at der ikke findes en
              færdig opskrift, der passer til alle. Alt kan justeres og
              tilpasses den enkelte borger og deres behov. De beskrevne forløb
              giver et indblik i, hvordan vi arbejder, men vi er altid fleksible
              og dynamiske for at sikre den bedste indsats.
            </p>
          </div>

          <div
            className="flex flex-col gap-6
          lg:flex-row  lg:justify-between lg:items-center"
          >
            <div
              className="flex flex-col gap-6 items-center
              lg:items-start  lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl"
              >
                METODE: VIRKELIGHEDEN VIRKER
              </h2>
              <p className="text-slate-900 dark:text-slate-50">

                JobFirst bygger på tre principper:
              </p>
              <ul className="text-slate-900 dark:text-slate-50 list-disc px-6">
                <li>
                  Borgeren får fodfæste på arbejdsmarkedet ved at komme i gang
                  med ordinære arbejdsopgaver fra dag ét.
                </li>
                <li>
                  Afklaring og motivation skabes bedst i jobbet, hvor borgeren
                  bliver en del af et kollegialt fællesskab.
                </li>
                <li>
                  De fleste borgere kan bidrage på arbejdsmarkedet, hvis
                  rammerne er de rette, og der tages de nødvendige hensyn.
                </li>
              </ul>
              <p className="text-slate-900 dark:text-slate-50">
                Ikke alle borgere er dog klar til at starte direkte på
                arbejdsmarkedet, selv med få timer. For denne målgruppe tilbyder
                vi håndholdte indsatser, der klæder dem på til at tage det næste
                skridt. Der henvises til vores forløbsbeskrivelser længere nede
                på siden.
                <br></br> <br></br>
                Vores 360°-hjul giver indblik i nogle af de udfordringer, vores
                borgere kan opleve. Klik på hjulet for at læse mere om, hvordan
                vi støtter borgerne i at håndtere disse udfordringer.
              </p>
            </div>
            <div className="lg:basis-4/12 image-container image-right z-50">
              <div id="svg-container">
                <CircularDiagram></CircularDiagram>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-6
          lg:flex-row  lg:justify-between lg:items-center"
          >
            <div
              className="flex flex-col gap-6 items-center bg-yellow-400 p-5
           lg:w-8/12 lg:items-start"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold
                  xl:text-4xl"
              >
                RELATIONENS BETYDNING
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Hos Mentorplan er relationen mellem mentor og borger fundamentet
                for alt, hvad vi gør. Vi ved, at forandringer kun sker gennem
                tillid, og derfor prioriterer vi at opbygge en stærk relation
                fra første møde.
                <br></br> <br></br>
                Relationen skabes gennem respekt, åbenhed og ordentlighed. Vi
                møder borgerne, hvor de er og lytter aktivt til deres
                udfordringer og behov. Det handler om at skabe et trygt
                samarbejde, hvor borgeren føler sig set, hørt og støttet. Vi er
                ærlige og tydelige i vores kommunikation og gør os umage for at
                skabe en atmosfære, hvor borgeren tør åbne op.
                <br></br> <br></br>
                En stærk relation er ikke noget, der opstår automatisk – det
                kræver tid, indsats og menneskelig nærvær. Vi arbejder målrettet
                på at skabe et bånd, der gør det muligt at tackle selv de
                sværeste udfordringer sammen. Når relationen er på plads, bliver
                den drivkraften bag et ærligt og tillidsfuldt samarbejde, der
                fører til varige og meningsfulde forandringer.
              </p>
            </div>
            <div className="lg:basis-4/12 image-container">
              <Image
                src={networkPic}
                width={430}
                height={370}
                alt="Virksomhedsnetværk"
                className="object-cover w-full"
                priority
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-6
          lg:flex-row  lg:justify-between lg:items-center"
          >
            <div
              className="flex flex-col gap-6 items-center
           lg:w-8/12 lg:items-start"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold
                  xl:text-4xl"
              >
                VORES BASE I KØDBYEN – RAMMER DER INSPIRERER OG UDVIKLER
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Mentorplans kontor i SOHO, et moderne kontorfællesskab i hjertet
                af Kødbyen, er mere end blot et sted for møder – det er en
                vigtig del af vores tilgang til at støtte borgernes udvikling.
                Her bliver rammerne et aktivt værktøj til at bygge bro mellem
                borgernes nuværende situation og deres fremtidige mål.
              </p>
              <ScrollFadeinList
                useBackground={false}
                items={listItems}
                textAlign={"text-left"}
                textColor="text-slate-900 dark:text-slate-50"
              />
              <p className="text-slate-900 dark:text-slate-50">
                Hos Mentorplan ser vi vores kontor som en vigtig del af
                indsatsen for at støtte borgerne – ikke bare som et sted at
                mødes, men som en aktiv del af deres udvikling.
              </p>
            </div>
            <div className="lg:basis-4/12 image-container">
              <Image
                src={sohoPic}
                width={430}
                height={370}
                alt="Virksomhedsnetværk"
                className="object-cover w-full"
                priority
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-6 space-between items-center 
            lg:flex-row"
          >
            <div
              className="flex flex-col gap-6 items-center
              lg:items-start  lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl"
              >
                DET RIGTIGE VIRKSOMHEDSMATCH GØR FORSKELLEN
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Hos Mentorplan er det afgørende, at vores borgere bliver matchet
                med virksomheder, hvor de kan trives og udvikle sig. Vi
                samarbejder med virksomheder, der har et godt arbejdsmiljø,
                tager socialt ansvar og har tid og lyst til at tage imod
                borgere, som har brug for en håndholdt indsats. <br></br>
                <br></br>
                Et stærkt kollegialt fællesskab og en god opstart er ofte
                vigtigere end selve arbejdsopgaven – det handler om, at borgeren
                føler sig velkommen og får en god start.
              </p>
            </div>
            <div className="lg:basis-4/12 image-container">
              {/* <Image
                src={growthPic}
                width={430}
                height={370}
                alt="Virksomhedsnetværk"
                className="object-cover w-full"
                priority
              /> */}
            </div>
          </div>

          <div
            className="flex flex-col gap-6 space-between items-center 
            lg:flex-row"
          >
            <div
              className="flex flex-col gap-6 items-center
              lg:items-start  lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl"
              >
                SAMARBEJDET STARTER MED FORVENTNINGSAFSTEMNING
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Når en borger skal starte i praktik, løntilskud eller ordinært
                arbejde, deltager vi altid i første møde mellem borgeren og
                virksomheden. Vi sørger for en åben og ærlig dialog, hvor vi
                afstemmer forventninger og taler om eventuelle udfordringer.{" "}
                <br></br> <br></br>
                Vores erfaring er, at udfordringer – uanset om de handler om
                sociale forhold, misbrugshistorik, fysiske udfordringer, en
                plettet straffeattest eller andre personlige forhold – ikke
                behøver at være en hindring, når de håndteres med åbenhed. Vi
                arbejder tæt sammen med virksomheder, der ser på borgerens
                potentiale frem for begrænsninger. Denne tilgang skaber gensidig
                forståelse og sikrer et godt fundament for et succesfuldt
                forløb.
              </p>
            </div>
            <div className="lg:basis-4/12 image-container">
              {/* <Image
                src={possiblePic}
                width={430}
                height={370}
                alt="Virksomhedsnetværk"
                className="object-cover w-full"
                priority
              /> */}
            </div>
          </div>

          <div
            className="flex flex-col gap-6 space-between items-center 
            lg:flex-row"
          >
            <div
              className="flex flex-col gap-6 items-center
              lg:items-start  lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl"
              >
                FLEKSIBLE OPSTARTSMULIGHEDER
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Vi arbejder med forskellige opstartsforløb, afhængigt af
                borgerens behov
              </p>
              <ul className="list-none text-slate-900 dark:text-slate-50">
                <li>
                  <span className="font-bold">Snusepraktik (1-2 uger)</span>
                  <br></br> En kortvarig praktik, hvor borgeren og virksomheden
                  kan afstemme kemi og arbejdsopgaver, før der træffes en
                  beslutning om et længere samarbejde.
                </li>
                <li>
                  <span className="font-bold">Længere praktikforløb</span>
                  <br></br> Hvis borgeren har brug for en blødere opstart eller
                  en gradvis optrapning af arbejdstiden, kan vi etablere
                  længerevarende praktikforløb.
                </li>
                <li>
                  <span className="font-bold">Løntilskud</span> <br></br> En
                  mulighed for borgere, der har brug for ekstra oplæring og
                  støtte i opstarten.
                </li>
                <li>
                  <span className="font-bold">Direkte ansættelse</span>{" "}
                  <br></br>Nogle borgere har allerede de nødvendige kompetencer
                  og har ikke brug for ekstra støtte eller træning for at starte
                  i job.
                </li>
                <li>
                  <span className="font-bold">VITAS</span>
                  <br></br> Vi er vant til at arbejde med VITAS og kan håndtere
                  processen med oprettelse af praktikker og løntilskud, så det
                  er nemt for både virksomheder og jobcentre.
                </li>
              </ul>
            </div>
          </div>

          <div
            className="scroll-target hidden
            lg:block"
          >
            <h2
              className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50
              lg:text-6xl"
            >
              Forløb
              <span className="font-sans text-yellow-400 dark:text-yellow-500">
                |
              </span>
            </h2>
          </div>

          {/* layout */}
          <div
            className="flex flex-col gap-6 scroll-section 
            lg:flex-row  lg:justify-end"
          >
            <div
              className="flex flex-col gap-6 container items-center
               lg:basis-9/12 lg:items-start"
            >
              {/* Service */}
              <div
                className="flex flex-col gap-6 first items-center
                 lg:items-start"
              >
                <Accordion />
              </div>
            </div>
          </div>

          <Prices />

          <div
            className="flex flex-col gap-6 space-between items-center
          lg:flex-row "
          >
            <div
              className="flex flex-col gap-6  items-center
            lg:items-start lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl"
              >
                Grundig dokumentation
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Vi mener, at et tæt samarbejde er altafgørende for et godt
                forløb. Det betyder, at vi kan korrigere med det samme, når
                noget afviger fra planen. Løbende dokumentation danner rammen
                for dette. Det aftales derfor individuelt, hvilken dokumentation
                vi skal levere til de jobcentre, vi samarbejder med, da vi
                oplever et meget forskelligt behov. Vi skræddersyr vores
                dokumentation, så det understøtter jeres behov bedst muligt.
                Men vi tilbyder:
              </p>
              <ol
                className="bg-yellow-400 dark:bg-yellow-500 text-slate-900 py-5 px-10 
              font-conduitbold uppercase list-disc slider shadow-lg text-lg image-container"
              >
                <li>Registrering af fremmøde</li>
                <li>
                  Støtte til udarbejdelse af forberedende del til
                  rehabiliteringsteamet
                </li>
                <li>
                  Ugentlig/månedlig status på samarbejde mellem mentor og borger
                  - efter aftale
                </li>
                <li>Løbende opfølgning på praktikstedet - efter behov</li>
                <li>Ugentlig kontakt med borger</li>
                <li>Afsluttende rapport efter endt forløb</li>
                <li>Arbejdsevnebeskrivelse</li>
              </ol>
            </div>
            <div className="lg:basis-4/12 image-container">
              <Image
                src={journalPic}
                width={430}
                height={370}
                alt="journal"
                className="object-cover w-full lg:basis-4/12"
                priority
              />
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
