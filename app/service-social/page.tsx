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

export default function ServiceSocial() {
  const container = useRef();
  const tl = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    const images: HTMLElement[] = gsap.utils.toArray(".grayscale");
    images.forEach((image) => {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
        },
        filter: "grayscale(0%)",
        x: 0,
        duration: 1,
      });
    });
    gsap.to(".image-down", {
      scrollTrigger: {
        trigger: "#sliderTarget",
        start: "top center",
        end: "top bottom",
        // Toggles Enters trigger, past trigger, resume when entering trigger, scroll up past trigger
        toggleActions: "play none none reverse",
      },
      y: 0,
      duration: 2,
    });
  });

  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        id="service-employment"
        className="min-h-[calc(100svh-3rem)] p-5 mt-16 bg-slate-50 dark:bg-stone-900
        overflow-hidden
        md:px-32 md:py-14"
      >
        <main
          className="h-full flex flex-col w-full justify-center gap-6
        md:gap-4"
        >
          <h1
            className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit self-center
            md:self-start
            xl:text-4xl"
          >
            Socialindsatser
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
            vores fokus at skabe relationen fra start, for at komme i mål med de
            mere ”bløde” ting. Herefter vil vi rette fokus mod beskæftigelse.
          </p>

          <div
            className="flex flex-col gap-4 justify-between items-center
          md:flex-row"
          >
            <div className="flex flex-col gap-4">
              <h2
                className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit 
                  xl:text-4xl xl:text-left"
              >
                Et andet perspektiv i vores 360-graders metode
              </h2>
              <p>
                Et andet perspektiv i vores 360-graders metode er at ramme de
                borgere, som mange andre måske ville opgive. De som er så langt
                fra beskæftigelse, at deres arbejdsidentitet først skal dyrkes.
                Vanerne og dermed forudsætningerne for et arbejdsliv skal
                skabes. Det kan fx være de borgere, som har det så svært, at
                bare det at komme ud af sengen om morgenen er vanskeligt – dem
                griber vi også. Her bliver relationen særligt vigtig, da vi ved
                at det forpligter, at man kommer ud ad døren. Vi skaber rammerne
                for at borgeren ved, at der venter noget rart, en god kop kaffe,
                at borger kommer ind til København, oplever liv i Kødbyen, møder
                mennesker og mærker mødet med andre. I den relations opbyggende
                fase tager vi de greb i brug, som vi af erfaring ved virker. Fx
                er det ikke unormalt at mentor tager borger med i SATS
                træningscenter. Her arbejder vi med både de fysiske og psykiske
                udfordringer, og med borgerens energiniveau. Dette er med i
                pakken, som en del af henvisningen hos mentorplan. Vi benytter
                os i høj grad af af walk and talks. På disse gåture bringer vi
                ligeledes det beskæftigelsesrettede i spil, da vi benytter
                muligheden for, at stikke hovedet inden for, på virksomhederne i
                lokalområdet. Dette gør at vi i en uformel ramme kan introducere
                borgeren for virksomhederne. Ofte ender det ud i, at den
                pågældende vender retur, og peger på en virksomhed, som fangede
                hans/hendes interesse ved vores besøg. Dette medvirker til at vi
                skaber relationen fra start, samtidig med at vi får set borgeren
                i en anden kontekst, og dermed ved, hvordan de skal mødes, også
                hvis det hele bliver lidt svært.
              </p>
            </div>
            <Image
              src="/images/360.png"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="object-cover grayscale image-right"
            />
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center
          md:flex-row"
          >
            <Image
              src="/images/network.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="object-cover grayscale image-left"
            />
            <div
              className="flex flex-col items-center gap-4
            md:items-start"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit 
                  xl:text-4xl"
              >
                Netværk
              </h2>
              <p>
                Vi er eksperter i at finde de helt rigtige virksomheder, der har
                lyst til at være med på rejsen. Hos Mentorplan er vores
                absolutte styrke at vi har et godt virksomhedsnetværk, som gør
                det muligt at etablere en opstart, så snart borgerens situation
                er til det. Hvis ikke de virksomheder vi har, er gode for
                borger, så skaber vi nye veje. Vi kan være frække som
                slagterhunde, er autentiske, og ikke bange for at sælge
                borgeren, så vi får etableret samarbejde i nye netværk. Altid ud
                fra et ærligt perspektiv, så alle parter ved, hvad de siger ja
                til. Vores virksomhedsnetværk er nøje udvalgt ud fra tanken om,
                at ”en virksomhed er ikke bare en virksomhed.” Forud for
                praktikken vurderes virksomheden ud fra fx de rigtige opgaver,
                tidsperspektivet for praktikken, ordentligheden hos den
                ansvarlige, at de køber ind på missionen, synes arbejdet med
                Mentorplan er fedt, at de er villige til at gå den ekstra mil.
                Vi lægger stor vægt på deres tilgang til mennesker, som har brug
                for en hjælpende hånd for at (gen-) etablere tilknytning til
                arbejdsmarkedet. Herunder udfordringer ud over ledighed. Derfor
                er de virksomheder Mentorplan samarbejder med kendetegnet ved,
                at de vil tage socialt ansvar og brænder for at gøre en forskel.
                De er alle med på rejsen om, at få borger videre i livet. Med
                indgående kendskab til virksomhedsnetværket og borger, kan vi
                dermed skabe det gode match fra start.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center
          md:flex-row"
          >
            <div
              id="sliderTarget"
              className="flex flex-col gap-4 justify-between
            md:basis-4/12"
            >
              <h2
                className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit 
                  xl:text-4xl xl:text-left"
              >
                AFKLARINGS OG UDVIKLINGSFORLØB
              </h2>
              <p>
                Afklarings- og udviklingsforløb henvender sig til borgere, der
                har brug for hjælp til at få afdækket samt beskrevet
                udfordringer i forhold til at kunne genindtræde på
                arbejdsmarkedet, i det omfang det er muligt. Her er der tale om
                borgere, som har behov for at få beskrevet deres arbejdsevne,
                herunder afprøve evt. hjælpemidler, arbejdspladsindretning,
                personlig assistance mv., naturligvis sammenholdt med de
                ressourcer den enkelte besidder. Dette foregår i tæt samarbejde
                med den enkelte, sammenholdt med evt. allerede beskrevne
                skånebehov fra sagsbehandler. Perioden for disse praktikker
                afstemmes løbende med sagsbehandler. Vores fokus er at udarbejde
                solid dokumentation, som kan anvendes til behandling i fx
                kommunens rehabiliteringsteam. Desuden har vi fokus på at
                understøtte en langvarig plan for den enkelte, så der ved fx
                tilkendelse af fleksjob, så vidt muligt kan etableres en
                ansættelse efterfølgende.
              </p>
              <Image
                src="/images/support-group.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover grayscale image-left"
              />
            </div>

            <div
              className="flex flex-col gap-4 justify-between
            md:basis-4/12 md:p-4 image-down"
            >
              <Image
                src="/images/commute_2.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover grayscale"
              />

              <div className="bg-slate-200 p-3">
                <h2
                  className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit 
                  xl:text-4xl xl:text-left"
                >
                  ”Virkeligheden virker”.
                </h2>
                <p className="font-bold">
                  Virkeligheden virker. - virksomhedsforløb på en ordinær
                  arbejdsplads med rigtige arbejdsopgaver, kolleger og ordinære
                  timer øger tilknytningen til arbejdsmarkedet!
                </p>
              </div>

              <Image
                src="/images/workman.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover grayscale"
              />
            </div>

            <div
              className="flex flex-col gap-4 justify-between items-center
            md:basis-4/12 md:items-start"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit 
                  xl:text-4xl"
              >
                HÅNDHOLDT INDSATS
              </h2>
              <p>
                Dette forløb er for særligt udsatte borgere, som har brug for en
                håndholdt indsats. Vi tilpasser mentorforløbet fuldstændigt til
                den enkeltes behov og ønsker, og lægger vægt på et tæt
                samarbejde med sagsbehandler i disse sager. Vi arbejder
                tværfagligt, og samarbejder efter behov med misbrugscentre,
                psykiatri, familie m.m. for at sikre den mest omfattende og
                relevante støtte, for at borgeren kan nå målene. Vi ved af
                erfaring, at særligt i disse sager, kan udfordringer opstå når
                som helst, og vi ønsker derfor at være der for vores borgere når
                som helst. Vi vil hellere slukke gnisterne, end når disse er
                blevet til en brand. Et af fokuspunkterne i disse forløb er som
                regel mødestabilitet, da dette er en forudsætning for en
                realistisk indtræden på arbejdsmarkedet. Dette er samtidig et
                punkt, som for en del af disse borgere kan være svært at mestre.
                Et andet fokuspunkt, som særligt her udfolder sig, er
                parallelindsatser. En del borgere har andre ting de skal følge,
                såsom misbrugsbehandling, fodlænkeordning, psykiatri mv. Her er
                vores tilgang at tingene naturligvis skal afstemmes løbende, men
                at borgeren profiterer af, at tingene foregår parallelt, så der
                ikke opstår unødig ventetid, hvor de står stille i deres eget
                liv.
              </p>
              <Image
                src="/images/barista.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover grayscale image-right"
              />
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
