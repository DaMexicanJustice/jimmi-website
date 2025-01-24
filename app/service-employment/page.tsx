"use client"; // This is a client component
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import networkPic from "/public/images/network.jpg";
import journalPic from "/public/images/journal.jpg";
import addictionPic from "/public/images/addiction.jpg"
import Image from "next/image";
import { useRef } from "react";
import { Check } from "lucide-react"


// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircularDiagram from "../ui/CircularDiagram";
import ScrollFadeinList from "../ui/scroll-fadein-list";
import { ListItem } from "@mui/material";

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
    content: "Når en borger skal starte i praktik, lønnede timer eller ordinært arbejde, deltager vi altid i første møde mellem borgeren og virksomheden. Vi sørger for en åben og ærlig dialog, hvor vi afstemmer forventninger og taler om eventuelle udfordringer. Åbenhed skaber gensidig forståelse og respekt, hvilket sikrer det bedste forløb."
  },
  {
    title: "Løbende opfølgning sikrer succes",
    content: "Når en borger skal starte i praktik, lønnede timer eller ordinært arbejde, deltager vi altid i første møde mellem borgeren og virksomheden. Vi sørger for en åben og ærlig dialog, hvor vi afstemmer forventninger og taler om eventuelle udfordringer. Åbenhed skaber gensidig forståelse og respekt, hvilket sikrer det bedste forløb."
  },
  {
    title: "Netværk og nye muligheder",
    content: "Når en borger skal starte i praktHvis vi ikke allerede samarbejder med en virksomhed, der matcher borgerens behov, er vi dygtige til at finde nye muligheder. Vores stærke netværk gør, at vi kan finde de rette virksomheder, der tilbyder det bedste match. Vi sikrer os, at både borger og virksomhed får de bedste forudsætninger for et succesfuldt samarbejde."
  },
]

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
        pinReparent: true,
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
              Hos Mentorplan arbejder vi målrettet med at hjælpe borgere tilbage på arbejdsmarkedet eller ind i
              uddannelse. Vi tror på, at alle fortjener en chance for at bidrage og finde mening i hverdagen – uanset hvilke
              udfordringer de står overfor. Vi møder borgerne, hvor de er, og sammen finder vi vejen.
              <br></br> <br></br>
              Det handler om at skabe holdbare løsninger, der giver mening for den enkelte. Vores forløb tilpasses altid
              borgerens behov og situation og tager udgangspunkt i en helhedsorienteret tilgang, hvor vi både ser på
              ressourcer og udfordringer. Med en stærk kombination af erfaring, faglighed og en menneskelig tilgang
              skaber vi løsninger, der rykker mennesker.
              <br></br> <br></br>
              Hos Mentorplan er målet ikke bare at få folk i gang, men at sikre, at de bliver klar til at fastholde deres vej –
              uanset om det handler om arbejde, uddannelse eller begge dele.
              <br></br> <br></br>
              Nedenfor beskriver vi, hvordan vi arbejder, og hvilke forløb vi tilbyder. Det er vigtigt at understrege, at der
              ikke findes en færdig opskrift, der passer til alle. Alt kan justeres og tilpasses den enkelte borger og deres
              behov. De beskrevne forløb giver et indblik i, hvordan vi arbejder, men vi er altid fleksible og dynamiske for
              at sikre den bedste indsats.
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
                Hos Mentorplan arbejder vi ud fra tanken om, at virkeligheden virker – inspireret af JobFirst-metoden, som
                har vist gode resultater for udsatte borgere på arbejdsmarkedet. Vi tager udgangspunkt i nogle af
                principperne fra JobFirst og har tilpasset dem til vores måde at arbejde på, så vi bedst muligt møder de
                forskellige behov, vores borgere har.
                <br></br> <br></br>
                For nogle handler det om at træde direkte ud på arbejdsmarkedet, mens andre først skal opbygge de
                grundlæggende færdigheder, der gør dem klar til at tage næste skridt. Uanset hvor borgeren står, er målet
                at skabe udvikling gennem konkrete handlinger og træning i praksis.
                Når arbejdspladsen ikke er første skridt
                <br></br> <br></br>
                Ikke alle borgere er klar til at træde direkte ind i en virksomhedspraktik eller et job. For dem tilbyder vi
                træning og struktur på vores kontor i Kødbyen, kombineret med andre sociale og udviklende indsatser. Her
                arbejder vi med at styrke borgerens mødestabilitet, sociale færdigheder og evne til at overholde aftaler.
                <br></br> <br></br>
                Derudover kan vi iværksætte andre aktiviteter og indsatser, der understøtter borgerens vej mod
                arbejdsmarkedet, f.eks. motiverende samtaler, fysiske aktiviteter eller specifikke forløb, der udvikler både
                deres personlige og faglige kompetencer. Disse tilbud tilpasses altid borgerens behov og situation.
              </p>
            </div>
            <div className="lg:basis-4/12 image-container">
              <div id="svg-container" className="">
                <CircularDiagram></CircularDiagram>
              </div>
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
                RELATIONENS BETYDNING
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Hos Mentorplan er relationen mellem mentor og borger fundamentet for alt, hvad vi gør. Vi ved, at
                forandringer kun sker gennem tillid, og derfor prioriterer vi at opbygge en stærk relation fra første møde.
                <br></br> <br></br>
                Relationen skabes gennem respekt, åbenhed og ordentlighed. Vi møder borgerne, hvor de er og lytter aktivt
                til deres udfordringer og behov. Det handler om at skabe et trygt samarbejde, hvor borgeren føler sig set,
                hørt og støttet. Vi er ærlige og tydelige i vores kommunikation og gør os umage for at skabe en atmosfære,
                hvor borgeren tør åbne op.
                <br></br> <br></br>
                En stærk relation er ikke noget, der opstår automatisk – det kræver tid, indsats og menneskelig nærvær. Vi
                arbejder målrettet på at skabe et bånd, der gør det muligt at tackle selv de sværeste udfordringer sammen.
                Når relationen er på plads, bliver den drivkraften bag et ærligt og tillidsfuldt samarbejde, der fører til varige
                og meningsfulde forandringer.
              </p>
            </div>
            <div className="lg:basis-4/12 image-container">
              <Image
                src={networkPic}
                width={430}
                height={370}
                alt="Virksomhedsnetværk"
                className="object-cover  w-full"
                priority
              />
            </div>
          </div>

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
              Mentorplans kontor i SOHO, et moderne kontorfællesskab i hjertet af Kødbyen, er mere end blot et sted for
              møder – det er en vigtig del af vores tilgang til at støtte borgernes udvikling. Her bliver rammerne et aktivt
              værktøj til at bygge bro mellem borgernes nuværende situation og deres fremtidige mål.
            </p>
            <ScrollFadeinList useBackground={false} items={listItems} textAlign={"text-left"} />
            <p className="text-slate-900 dark:text-slate-50">
              Hos Mentorplan ser vi vores kontor som en vigtig del af indsatsen for at støtte borgerne – ikke bare som et
              sted at mødes, men som en aktiv del af deres udvikling.
            </p>
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
                Hos Mentorplan er det afgørende, at vores borgere bliver matchet med virksomheder, hvor de kan trives og udvikle sig. Vi samarbejder tæt med erfarne virksomheder, der har tid og overskud til at tage godt imod vores borgere. Et godt arbejdsmiljø og stærke kollegiale relationer er ofte vigtigere end selve arbejdsopgaven – det handler om, at borgeren føler sig velkommen og får en god start.
              </p>

            </div>
            <div className="lg:basis-4/12 image-container">
              <Image
                src={networkPic}
                width={430}
                height={370}
                alt="Virksomhedsnetværk"
                className="object-cover  w-full"
                priority
              />
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
                <h2
                  className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50
                  lg:text-4xl"
                >
                  Hurtigt i job
                </h2>
                <h3 className="font-bold uppercase text-slate-900 dark:text-slate-50">
                  Målgruppe
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  Borgere med få udfordringer, der er motiverede, mødestabile og klar til hurtigt at komme i arbejde.
                </p>
                <h3 className="font-bold uppercase text-slate-900 dark:text-slate-50">
                  Hvad vi gør
                </h3>
                <ul className="list-disc px-6 text-slate-900 dark:text-slate-50">
                  <li>CV og jobansøgning: Professionelt CV og målrettede ansøgninger.</li>
                  <li>Afdækning af interesser: Borgerens interesser og ønskede jobs afdækkes.</li>
                  <li>Virksomhedsnetværk: Brug af vores netværk eller opsøgning af nye virksomheder. Pletter på straffeattesten er ikke en barriere, så længe der er åben dialog.</li>
                </ul>
                <h3 className="font-bold text-slate-900 dark:text-slate-50">
                  Fokus
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  Ikke på relationer eller parallelindsatser, men udelukkende på en hurtig overgang til arbejdsmarkedet. Borgeren mærker progression og handling fra start.
                </p>
                <h3 className="font-bold text-slate-900 dark:text-slate-50">
                  Resultat
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  Borgeren kommer til én eller flere jobsamtaler inden for maksimalt fire uger.
                </p>
                <h2 className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50
                  lg:text-4xl">
                  MÅLRETTET STØTTE TIL BORGERE LÆNGERE VÆK FRA ARBEJDSMARKEDET
                </h2>
                <h3 className="font-bold uppercase text-slate-900 dark:text-slate-50">
                  Målgruppe
                </h3>
                <ul className="list-disc px-6 text-slate-900 dark:text-slate-50">
                  <li>Kriminalitetsbaggrund: Borgere med en baggrund i kriminalitet eller banderelationer, der har siddet i
                    fængsel i kortere eller længere perioder.</li>
                  <li>Udreagerende adfærd: Har svært ved at omgås andre, kort lunte og vanskeligheder med at forstå
                    sociale normer.</li>
                  <li>Misbrugsproblemer: Borgere med et aktivt misbrug af stoffer eller alkohol, som endnu ikke er
                    behandlet.</li>
                  <li>Psykiske udfordringer: Psykiske vanskeligheder, der gør det svært at fungere på arbejdsmarkedet eller
                    i sociale sammenhænge.</li>
                  <li>Social isolation: Har været isoleret, mangler et netværk og har svært ved at komme ud blandt
                    mennesker.</li>
                </ul>
                <h3 className="font-bold uppercase text-slate-900 dark:text-slate-50">
                  Hvad vi gør
                </h3>
                <ul className="list-disc px-6 text-slate-900 dark:text-slate-50">
                  <li>Afklaring af udfordringer: Vi afdækker de barrierer, der står i vejen for borgerens udvikling, som
                    misbrug, psykiske problemer eller sociale udfordringer.</li>
                  <li>Parallelle indsatser: Vi hjælper med at etablere parallelle indsatser som misbrugsbehandling,
                    psykologhjælp eller gældsrådgivning, eller samarbejder med nuværende parallelle indsatser.</li>
                  <li>Socialisering og mødestabilitet: Vi træner borgerne i at møde op til aftaler, bryde isolation og opbygge
                    sociale færdigheder gennem praktiske øvelser og struktureret støtte.</li>
                  <li>Psykisk og fysisk træning: Vi tilbyder aktiviteter som walk-and-talks, saunagus og fysisk træning, der
                    bidrager til borgerens mentale og fysiske velvære.</li>
                </ul>
                <h3 className="font-bold text-slate-900 dark:text-slate-50">
                  Fokus
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  Vi arbejder med borgernes specifikke udfordringer gennem parallelle indsatser og socialisering. Vi træner
                  deres evne til at være mødestabile og opbygger sociale færdigheder, mens vi gradvist forbereder dem til
                  arbejdsmarkedet eller uddannelse.
                </p>
                <h3 className="font-bold text-slate-900 dark:text-slate-50">
                  Resultat
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  Borgerne kommer tættere på arbejdsmarkedet i et tempo, de kan følge. Hele processen sker i tæt
                  samarbejde med sagsbehandlerne for at sikre, at borgeren udvikler sig uden at blive presset.
                </p>
                <h2 className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50
                  lg:text-4xl">
                  MÅLRETTET STØTTE TIL BORGERE LÆNGERE VÆK FRA ARBEJDSMARKEDET
                </h2>

                <h3 className="font-bold uppercase text-slate-900 dark:text-slate-50">
                  Målgruppe
                </h3>
                <ul className="list-disc px-6 text-slate-900 dark:text-slate-50">
                  <li>Kriminalitetsbaggrund: Borgere med en baggrund i kriminalitet eller banderelationer, der har siddet i
                    fængsel i kortere eller længere perioder.</li>
                  <li>Udreagerende adfærd: Har svært ved at omgås andre, kort lunte og vanskeligheder med at forstå
                    sociale normer.</li>
                  <li>Misbrugsproblemer: Borgere med et aktivt misbrug af stoffer eller alkohol, som endnu ikke er
                    behandlet.</li>
                  <li>Psykiske udfordringer: Psykiske vanskeligheder, der gør det svært at fungere på arbejdsmarkedet eller
                    i sociale sammenhænge.</li>
                  <li>Social isolation: Har været isoleret, mangler et netværk og har svært ved at komme ud blandt
                    mennesker.</li>
                </ul>

                <h3 className="font-bold uppercase text-slate-900 dark:text-slate-50">
                  Hvad vi gør
                </h3>
                <ul className="list-disc px-6 text-slate-900 dark:text-slate-50">
                  <li>Afklaring af udfordringer: Vi afdækker de barrierer, der står i vejen for borgerens udvikling, som
                    misbrug, psykiske problemer eller sociale udfordringer.</li>
                  <li>Parallelle indsatser: Vi hjælper med at etablere parallelle indsatser som misbrugsbehandling,
                    psykologhjælp eller gældsrådgivning, eller samarbejder med nuværende parallelle indsatser.</li>
                  <li>Socialisering og mødestabilitet: Vi træner borgerne i at møde op til aftaler, bryde isolation og opbygge
                    sociale færdigheder gennem praktiske øvelser og struktureret støtte.</li>
                  <li>Psykisk og fysisk træning: Vi tilbyder aktiviteter som walk-and-talks, saunagus og fysisk træning, der
                    bidrager til borgerens mentale og fysiske velvære.</li>
                </ul>

                <h3 className="font-bold text-slate-900 dark:text-slate-50">
                  Fokus
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  Vi arbejder med borgernes specifikke udfordringer gennem parallelle indsatser og socialisering. Vi træner
                  deres evne til at være mødestabile og opbygger sociale færdigheder, mens vi gradvist forbereder dem til
                  arbejdsmarkedet eller uddannelse.
                </p>

                <h3 className="font-bold text-slate-900 dark:text-slate-50">
                  Resultat
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  Borgerne kommer tættere på arbejdsmarkedet i et tempo, de kan følge. Hele processen sker i tæt
                  samarbejde med sagsbehandlerne for at sikre, at borgeren udvikler sig uden at blive presset.
                </p>

                <h2 className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50
                  lg:text-4xl">
                  ARBEJDSEVNEAFKLARINGSFORLØB
                </h2>

                <h3 className="font-bold uppercase text-slate-900 dark:text-slate-50">
                  Målgruppe
                </h3>
                <ul className="list-disc px-6 text-slate-900 dark:text-slate-50">
                  <li>Borgere på sygedagpenge, i jobafklaringsforløb eller ressourceforløb, der har behov for en afklaring af
                    deres arbejdsevne med henblik på fleksjob, førtidspension eller tilbagevenden til fuldtidsarbejde.</li>
                </ul>

                <h3 className="font-bold uppercase text-slate-900 dark:text-slate-50">
                  Hvad vi gør
                </h3>
                <ul className="list-disc px-6 text-slate-900 dark:text-slate-50">
                  <li>Vi vurderer borgernes ressourcer, udfordringer og ønsker og afdækker, hvor de står i forhold til
                    arbejdsmarkedet. Forløbet er en kombination af “Hurtigt i job” og “Målrettet støtte,” afhængigt af borgerens
                    situation:</li>
                  <ul className="list-disc px-12 text-slate-900 dark:text-slate-50">
                    <li>Få udfordringer: Borgeren kan hurtigt komme ud på en arbejdsplads i praktik eller lønnede timer,
                      afhængigt af hvor de er i deres proces. Praktikkens varighed afstemmes løbende med sagsbehandler.</li>
                    <li>Flere udfordringer: Vi arbejder med de barrierer, der fylder, og støtter borgerne i at håndtere dem.
                      Det kan indebære støtte i eksisterende parallelindsatser eller opstart af nye.</li>
                  </ul>
                  <li>Vi tilbyder aktiviteter som fysisk træning og saunagus, der styrker borgernes fysiske og psykiske velvære.
                    Samtidig fungerer møder i Kødbyen som eksponeringsforløb, hvor borgerne kan træne sociale færdigheder,
                    opbygge selvtillid og tro på egne evner. Dette er særligt relevant for borgere, der oplever angst, har svært
                    ved at forlade hjemmet, eller har andre udfordringer, som kræver en gradvis tilgang til arbejdsmarkedet.</li>
                </ul>

                <h3 className="font-bold text-slate-900 dark:text-slate-50">
                  Fokus
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  Hvordan borgeren har det, afgør tempoet i forløbet og tidspunktet for, hvornår de kan komme ud på en
                  arbejdsplads. Forløbet tilpasses borgerens behov og ressourcer med fokus på at støtte dem på vej mod
                  arbejdsmarkedet.
                </p>

                <h3 className="font-bold text-slate-900 dark:text-slate-50">
                  Resultat
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  Vi udarbejder en arbejdsevnebeskrivelse, som er en afsluttende rapport, der kan bruges på
                  rehabiliteringsmødet i forbindelse med en afklaring.
                </p>
                <h2 className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50 lg:text-4xl">
                  FASTHOLDELSESFORLØB
                </h2>
                <h3 className="font-bold uppercase text-slate-900 dark:text-slate-50">
                  Målgruppe
                </h3>
                <ul className="list-disc px-6 text-slate-900 dark:text-slate-50">
                  <li>Borgere, der er kommet i job eller uddannelse, men som mangler et netværk eller ressourcepersoner at trække på. Forløbet er til dem, der har brug for støtte i en overgangsperiode for at minimere risikoen for tilbagefald.</li>
                </ul>
                <h3 className="font-bold uppercase text-slate-900 dark:text-slate-50">
                  Hvad vi gør
                </h3>
                <ul className="list-disc px-6 text-slate-900 dark:text-slate-50">
                  <li>Mentoren fortsætter som støtte i en nedjusteret indsats for at sikre, at borgeren har en kendt og tillidsfuld kontaktperson ved behov. Indsatsen inkluderer:</li>
                  <li>Telefonisk kontakt og rådgivning efter behov.</li>
                  <li>Fysiske møder i konkrete situationer.</li>
                  <li>Tilgængelighed for sparring ved opståede udfordringer.</li>
                  <li>Mulighed for at opjustere indsatsen, hvis der er behov.</li>
                </ul>
                <h3 className="font-bold text-slate-900 dark:text-slate-50">
                  Fokus
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  At sikre, at borgeren fastholdes i job eller uddannelse gennem en tryg overgang, hvor tilbagefald undgås.
                </p>
                <h3 className="font-bold text-slate-900 dark:text-slate-50">
                  Resultat
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  Borgeren opnår en stabil og selvstændig hverdag uden behov for yderligere
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-6 items-center 
           lg:w-12/12 lg:items-start"
          >
            <h2
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold
                  xl:text-4xl"
            >
              PAKKER OG PRISER
            </h2>
            <p className="text-slate-900 dark:text-slate-100">
              Vi tilbyder fleksible forløb, hvor prisen afhænger af antallet af møder med borgeren og typen af forløb.
              Mødefrekvensen kan variere fra én gang om ugen til flere gange om ugen, alt efter behov. I intensive forløb
              kan der være flere konsulenter tilknyttet samme borger for at sikre optimal støtte.
            </p>
            <div>
              <h3 className="uppercase text-slate-900 dark:text-slate-100 text-xl font-conduitbold
                  xl:text-3xl">
                Inkluderet i prisen
              </h3>
              <ul className="space-y-2 mt-4">
                <ListItem>Transport og udgifter til aktiviteter som træning og saunagus.</ListItem>
                <ListItem>Forplejning til møder med borger.</ListItem>
                <ListItem>
                  Statusmøder i Kødbyen eller i kommunen – alt efter hvad der passer bedst for sagsbehandleren.
                </ListItem>
                <ListItem>
                  Tilgængelighed 24/7 for både borgere, sagsbehandlere og samarbejdspartnere – vi er altid klar til at støtte,
                  rådgive og hjælpe, uanset tidspunktet.
                </ListItem>
                <ListItem>
                  Fleksibilitet i mødetidspunkter – vi bestræber os på at holde møder i hverdagen mellem kl. 8 og 16, men kan
                  efter behov afholde møder om aftenen og i weekenden.
                </ListItem>
              </ul>
            </div>

          </div>

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
                dofkumentation, så det understøtter jeres behov bedst muligt.
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
                <li>
                  Løbende statusmails og opkald, månedlig statusrapport og
                  afsluttende rapport - efter aftale
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
  function ListItem({ children }: { children: React.ReactNode }) {
    return (
      <li className="flex items-start">
        <Check className="w-5 h-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
        <span>{children}</span>
      </li>
    )
  }
}
