"use client"; // This is a client component
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import Image from "next/image";
import { useRef } from "react";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaYenSign } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ServiceEmployment() {
  const container = useRef();
  const tl = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    const images: HTMLElement[] = gsap.utils.toArray(".grayscale");
    images.forEach((image) => {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
          end: "top top",
          toggleActions: "play none none reverse",
        },
        filter: "grayscale(0%)",
        x: 0,
        duration: 1,
      });
    });
    gsap.to(".slider", {
      scrollTrigger: {
        trigger: ".slider",
        start: "top 80%",
        end: "top top",
        toggleActions: "play none none reverse",
      },
      x: 0,
      duration: 1,
    });
  });
  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        id="service-employment"
        className="min-h-[calc(100svh-3rem)] p-5 mt-16 bg-slate-50 dark:bg-neutral-950 overflow-x-hidden
        md:px-32 md:py-14"
      >
        <main
          className="h-full flex flex-col w-full justify-center items-center gap-10
        md:items-start"
        >
          <div className="flex flex-col gap-4">
            <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit
            xl:text-4xl"
            >
              Beskæftigelsesindsats
            </h1>
            <p>
              I Mentorplan tilbyder vi forløb inden for beskæftigelse.
              Udgangspunktet i disse forløb er altid tilbagevenden til
              arbejdsmarkedet. I forløbet arbejder vi med etablering af
              virksomhedspraktik med fokus på konvertering til lønnede timer,
              hurtigst muligt. Det er dog ikke en forudsætning med praktik før
              lønnede timer. Samtidig møder vi altid borgeren dér, hvor borgeren
              reelt skal rykkes. Når vi siger at forløbet er tilrettelagt
              individuelt, så er det helt bogstaveligt. Det vil sige er der tale
              om en borger, som er meget langt væk fra arbejdsmarkedet, bliver
              vores fokus at skabe relationen fra start, for at komme i mål med
              de mere ”bløde” ting. Herefter vil vi rette fokus mod
              beskæftigelse.
            </p>
          </div>

          <div
            className="flex flex-col gap-6 md:gap-4 justify-between items-center
          md:flex-row md:basis-4/12"
          >
            <Image
              src="/images/360.png"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="object-cover grayscale image-left"
            />
            <div
              className="flex flex-col gap-6 items-center
            md:items-start md:gap-4 md:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit 
                  xl:text-4xl"
              >
                360 grader rundt om borgeren
              </h2>
              <p>
                I Mentorplan er vores metode at gå 360 grader rundt om borgeren.
                Med afdækning af helhedsbilledet bliver vi klogere på borgerens
                situation, med henblik på at skabe det det rigtige match fra
                start. Som vi ser det, er det grundlæggende at sætte barren
                rigtigt fra start, både i forhold til virksomheden, evt.
                optrapningsplan og forventningsafstemning, både med virksomhed,
                borger og sagsbehandler. Afdækning af disse ønsker,
                forventninger, ressourcer og barrierer kan kræve kortere eller
                længere tid, og afhænger i høj grad af det vi er rigtig gode
                til, nemlig relationsarbejde, hvor borgeren har tillid og åbner
                op. Som en del af vores DNA er vi tilgængelige for borgere og
                virksomheder 24/7, så vi kan tage udfordringerne i opløbet, og
                virksomheden ikke står alene med evt. udfordringer, også på de
                skæve tidspunkter. Vores værdisæt minder meget om de tanker, som
                ligger bag JobFirst-metoden, som i dag anvendes i mange af
                landets jobcentre, og som Styrelsen for Arbejdsmarked og
                Rekruttering lavede som kontrolleret forsøg.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col gap-6 md:gap-4 items-center
          md:items-start md:gap-4"
          >
            <h2
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit
                  xl:text-4xl"
            >
              Job-first metoden
            </h2>
            <div
              className="flex flex-col gap-6 md:gap-4 justify-center
            md:flex-row md:gap-4 "
            >
              <div className="flex flex-col gap-6 md:gap-4 basis-4/12">
                <div className="flex flex-row gap-1 bg-yellow-400 dark:bg-yellow-500 shadow-xl p-1 items-center">
                  <h2
                    className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit
                    xl:text-2xl"
                  >
                    1
                  </h2>
                  <p
                    className="uppercase text-slate-900 dark:text-slate-100 text-xl font-conduit
                    xl:text-xl"
                  >
                    Pariatur laboris commodo aliquip anim adipisicing
                  </p>
                </div>
                <p>
                  Mollit eu nostrud dolor esse. Do cupidatat magna enim id
                  veniam nostrud fugiat voluptate aliqua laboris ex. Esse velit
                  aliquip excepteur aliqua dolor. Nisi aliquip culpa nulla id
                  voluptate aliqua aliqua aliqua incididunt laborum et. Cillum
                  ipsum veniam nostrud minim qui reprehenderit consequat. Nulla
                  minim dolore nulla reprehenderit eu exercitation ut ea mollit
                  irure aute cillum culpa.
                </p>
              </div>

              <div
                className="flex flex-col gap-6 md:gap-4 basis-4/12
              md:gap-4"
              >
                <div className="flex flex-row gap-1 bg-yellow-400 dark:bg-yellow-500 shadow-xl p-1 items-center">
                  <h2
                    className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit
                  xl:text-2xl"
                  >
                    2
                  </h2>
                  <p
                    className="uppercase text-slate-900 dark:text-slate-100 text-xl font-conduit
                  xl:text-xl"
                  >
                    Velit ad dolore enim commodo cillum pariatur.
                  </p>
                </div>
                <p>
                  Eu excepteur est occaecat deserunt est ex duis ad eiusmod
                  irure commodo est amet dolor. Occaecat aliquip excepteur
                  pariatur velit duis voluptate incididunt commodo tempor
                  consequat dolore cupidatat qui. Qui velit ipsum sit
                  adipisicing esse magna amet sint incididunt ut eu laborum non
                  ipsum.
                </p>
              </div>

              <div
                className="flex flex-col gap-6 basis-4/12
              md:gap-4"
              >
                <div className="flex flex-row gap-1 bg-yellow-400 dark:bg-yellow-500 shadow-xl p-1 items-center">
                  <h2
                    className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit
                  xl:text-2xl"
                  >
                    3
                  </h2>
                  <p
                    className="uppercase text-slate-900 dark:text-slate-100 text-xl font-conduit
                  xl:text-xl"
                  >
                    Eu labore pariatur sit eu velit excepteur
                  </p>
                </div>
                <p>
                  Cillum incididunt sint Lorem irure officia qui deserunt
                  consequat ex enim elit sunt fugiat ut. Fugiat aliquip Lorem
                  consectetur proident nisi deserunt. Anim sint est elit tempor
                  est deserunt reprehenderit officia mollit tempor aliquip.
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-6 space-between items-center
          md:flex-row md:gap-4"
          >
            <div
              className="flex flex-col gap-6 items-center
              md:items-start md:gap-4 md:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit 
                  xl:text-4xl"
              >
                Hurtigt i job
              </h2>
              <p>
                Hurtigt i job henvender sig til borgere, der har brug for hjælp
                til at komme ind på arbejdsmarkedet, og hvor der ikke er
                problemer ud over ledighed. Her er der tale om borgere, som har
                behov for at få genoptrænet arbejdsevnen, afdækning af evt.
                arbejdspladsindretning eller andre støttende foranstaltninger
                for at borgeren kan raskmeldes til det ordinære arbejdsmarked.
                Inden for en tidsramme på 4 uger bistår vi med at finde
                praktikplads eller jobmulighed, der tilpasses til den enkeltes
                kvalifikationer og interesser. Vores mål er at sikre en hurtig
                og glidende overgang til beskæftigelse. Vores fokus er i
                udgangspunktet at opnå lønnede timer hurtigst muligt.
              </p>
            </div>
            <Image
              src="/images/commute.jpg"
              width={430}
              height={370}
              alt="hurtigt i job"
              className="object-cover grayscale md:basis-4/12 image-right"
            />
          </div>

          <div
            id="sliderTarget"
            className="flex flex-col gap-6 space-between items-center
          md:flex-row md:gap-4"
          >
            <Image
              src="/images/journal.jpg"
              width={430}
              height={370}
              alt="hurtigt i job"
              className="object-cover grayscale image-left md:basis-4/12"
            />
            <div
              className="flex flex-col gap-6 md:gap-4 items-center
            md:items-start md:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit 
                  xl:text-4xl"
              >
                Grundig dokumentation
              </h2>
              <p>
                Vi mener at et tæt samarbejde er altafgørende for et godt
                forløb. Det betyder at vi kan korrigere med det samme, når noget
                afviger fra planen. Løbende dokumentation danner rammen for
                dette. Det aftales derfor individuelt, hvilken dokumentation vi
                skal levere til de jobcentre, vi samarbejder med, da vi oplever
                et meget forskelligt behov. Vi skræddersyr vores dokumentation,
                så det understøtter jeres behov bedst muligt. Men vi tilbyder:
              </p>
              <ol className="bg-yellow-400 dark:bg-yellow-500 text-slate-900 py-5 px-10 font-conduit font-bold list-disc image-right slider">
                <li>Registrering af fremmøde</li>
                <li>
                  Støtte til udarbejdelse af forberedende del til
                  rehabiliteringsteamet
                </li>
                <li>
                  Ugentlig/månedlig status på samarbejde mellem mentor og borger
                  efter aftale
                </li>
                <li>
                  Løbende statusmails og opkald, månedligt statusrapport og
                  afsluttende rapport efter aftale.
                </li>
                <li>Løbende opfølgning på praktikstedet efter behov</li>
                <li>Ugentlig kontakt med borger</li>
                <li>Afsluttende rapport efter endt forløb</li>
                <li>Arbejdsevnebeskrivelse</li>
              </ol>
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
