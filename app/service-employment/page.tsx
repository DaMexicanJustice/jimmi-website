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
      },
      x: 0,
      duration: 1,
    });

    ScrollTrigger.create({
      trigger: ".scroll-section",
      start: "top center",
      end: "bottom center",
      scrub: true,
      pin: ".scroll-target",
      anticipatePin: 1,
      pinReparent: true,
    });
  });
  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        id="service-employment"
        className="min-h-[calc(100svh-3rem)] p-5 mt-16 bg-slate-50 dark:bg-neutral-950 overflow-x-hidden
        lg:px-32 lg:py-14"
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
              Beskæftigelsesindsats
            </h1>
            <p>
              I Mentorplan tilbyder vi forløb inden for beskæftigelse.
              Udgangspunktet i disse forløb er altid tilbagevenden til
              arbejdsmarkedet. I forløbet arbejder vi med etablering af
              virksomhedspraktik med fokus på konvertering til lønnede timer
              hurtigst muligt. Det er dog ikke en forudsætning med praktik før
              lønnede timer. <br></br> <br></br>
              Samtidig møder vi altid borgeren dér, hvor borgeren reelt kan
              rykkes. Når vi siger, at forløbet er tilrettelagt individuelt, så
              er det helt bogstaveligt. Det vil sige, hvis der er tale om en
              borger, som er meget langt fra arbejdsmarkedet, bliver vores fokus
              at skabe relationen fra start for at komme i mål med de mere bløde
              ting. Herefter vil vi rette fokus mod beskæftigelse.
            </p>
          </div>

          <div
            className="flex flex-col gap-6 lg:gap-4
          lg:flex-row lg:basis-4/12 lg:justify-between lg:items-center"
          >
            <div
              className="flex flex-col gap-6 items-center
              lg:items-start lg:gap-4 lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl"
              >
                Metode – hvordan og hvorfor det giver mening
              </h2>
              <p>
                I Mentorplan er vores metode at gå 360 grader rundt om borgeren.
                Med afdækning af helhedsbilledet bliver vi klogere på borgerens
                situation med henblik på at skabe det rigtige match fra start.
                Som vi ser det, er det grundlæggende at sætte barren rigtigt fra
                start, både i forhold til virksomhedens eventuelle
                optrapningsplan og forventningsafstemning, både med virksomhed,
                borger og sagsbehandler. <br></br>
                <br></br>
                Afdækning af disse ønsker, forventninger, ressourcer og
                barrierer kan kræve kortere eller længere tid og afhænger i høj
                grad af det, vi er rigtig gode til, nemlig relationsarbejde. Det
                er her, borgeren har tillid og åbner op. Som en del af vores DNA
                er vi tilgængelige for borgere og virksomheder 24/7, så vi kan
                tage udfordringerne i opløbet, og virksomheden ikke står alene
                med eventuelle udfordringer, også på de skæve tidspunkter.
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
            className="flex flex-col gap-6 items-center
          lg:gap-4 lg:w-8/12 lg:items-start"
          >
            <h2
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold
                  xl:text-4xl"
            >
              JobFirst-metoden kort
            </h2>
            <h3 className="uppercase font-conduit text-xl text-center">
              I Mentorplan ved vi af erfaring, at ”Virkeligheden virker”.
            </h3>
            <p>
              Vores værdisæt minder meget om de tanker, som ligger bag
              JobFirst-metoden, som i dag anvendes i mange af landets jobcentre.
            </p>
            <p>
              Vi arbejder hver dag efter den tanke, at der findes en
              arbejdsplads til langt de fleste, at alle kan bidrage og blive en
              del af fællesskabet, og at borgerne ikke længere skal vente på, at
              udredning eller behandling er færdiggjort, før de kan komme videre
              i deres liv. Så længe indsatserne afstemmes løbende, er det
              sjældent et problem at køre dem parallelt.
            </p>
          </div>

          <div
            className="flex flex-col gap-6
            lg:flex-row lg:gap-4"
          >
            <div
              className="flex flex-col gap-6
              lg:gap-4 lg:basis-4/12"
            >
              <div
                className="flex flex-col gap-6 min-h-52
                lg:gap-4"
              >
                <div className="flex flex-col">
                  <h2
                    className="bg-yellow-400 dark:bg-yellow-500 shadow-xl p-1
                  uppercase text-slate-900 text-xl font-conduit text-center
                  lg:h-16 2xl:h-auto
                  2xl:h-auto"
                  >
                    FØLELSE AF KONTROL SKABER MOTIVATION
                  </h2>
                </div>
                <p>
                  Når borgeren oplever igen at få en følelse af kontrol, skaber
                  det motivation hos langt de fleste, da de nu ikke længere
                  sidder bagerst i bussen. De sidder på førersædet og har
                  muligheden for at have indflydelse på, hvilken retning deres
                  liv skal tage.
                </p>
              </div>

              <div
                className="flex flex-col gap-6 min-h-52
                lg:gap-4"
              >
                <h2
                  className="bg-yellow-400 dark:bg-yellow-500 shadow-xl p-1
                  uppercase text-slate-900 text-xl font-conduit text-center
                  lg:h-16 2xl:h-auto"
                >
                  HJÆLP TIL SÅRBARE BORGERE GENNEM RELATIONER
                </h2>
                <p>
                  Det kan fx være de borgere, som har det så svært, at bare det
                  at komme ud af sengen om morgenen er vanskeligt – dem griber
                  vi også. Her bliver relationen særligt vigtig, da vi ved, at
                  det forpligter, at man kommer ud ad døren. Vi skaber rammerne
                  for, at borgeren ved, at der venter noget rart. Det kan være
                  en god kop kaffe, at borgeren kommer ind til København,
                  oplever livet i Kødbyen, møder mennesker og mærker mødet med
                  andre.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col gap-6
              lg:gap-4 lg:basis-4/12"
            >
              <div
                className="flex flex-col gap-6 min-h-52
                lg:gap-4"
              >
                <h2
                  className="bg-yellow-400 dark:bg-yellow-500 shadow-xl p-1
                  uppercase text-slate-900 text-xl font-conduit text-center
                  lg:h-16 2xl:h-auto"
                >
                  DYRK ARBEJDSIDENTITET HOS DE UDSATTE BORGERE
                </h2>
                <p>
                  Et andet perspektiv i vores 360-graders metode er at ramme de
                  borgere, som mange andre måske ville opgive: De, som er så
                  langt fra beskæftigelse, at deres arbejdsidentitet først skal
                  dyrkes. Vanerne og dermed forudsætningerne for et arbejdsliv
                  skal skabes.
                </p>
              </div>

              <div
                className="flex flex-col gap-6 min-h-52
                lg:gap-4"
              >
                <h2
                  className="bg-yellow-400 dark:bg-yellow-500 shadow-xl p-1
                  uppercase text-slate-900 text-xl font-conduit text-center
                  lg:h-16 2xl:h-auto"
                >
                  STYRK BORGERENS SUNDHED OG RELATIONER
                </h2>
                <p>
                  I den relationsopbyggende fase tager vi de greb i brug, som vi
                  af erfaring ved virker. For eksempel er det ikke unormalt, at
                  mentoren tager borgeren med i SATS træningscenter. Her
                  arbejder vi både med de fysiske og psykiske udfordringer samt
                  med borgerens energiniveau. Dette er inkluderet som en del af
                  henvisningen hos Mentorplan.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col gap-6
              lg:gap-4 lg:basis-4/12"
            >
              <h2
                className="bg-yellow-400 dark:bg-yellow-500 shadow-xl p-1
                uppercase text-slate-900 text-xl font-conduit text-center
                lg:h-16 2xl:h-auto"
              >
                WALK AND TALK
              </h2>
              <p>
                Vi benytter os i høj grad af walk and talks. På disse gåture
                bringer vi også det beskæftigelsesrettede i spil, da vi benytter
                muligheden for at stikke hovedet inden for på virksomhederne i
                lokalområdet. Dette gør, at vi i en uformel ramme kan
                introducere borgeren for virksomhederne. Ofte ender det med, at
                den pågældende vender tilbage og peger på en virksomhed, som
                fangede hans/hendes interesse under vores besøg. Dette medvirker
                til, at vi skaber relationen fra starten, samtidig med at vi får
                set borgeren i en anden kontekst, og dermed ved, hvordan de skal
                mødes, også hvis det hele bliver lidt svært.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col gap-6 space-between items-center
            lg:flex-row lg:gap-4"
          >
            <div
              className="flex flex-col gap-6 items-center
              lg:items-start lg:gap-4 lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl"
              >
                Virksomhedsnetværk
              </h2>
              <p>
                Vi er eksperter i at finde de helt rigtige virksomheder, der har
                lyst til at være med på rejsen. Hos Mentorplan er vores
                absolutte styrke, at vi har et godt virksomhedsnetværk, som gør
                det muligt at etablere en opstart, så snart borgerens situation
                er til det. En plettet straffeattest behøver ikke være en
                hindring, da virksomhederne, vi samarbejder med, kender vores
                målgruppe, og vi arbejder med åbenhed og dialog. Vi finder som
                regel en løsning, og folk får chancen for at vise deres værd.
                Hvis ikke de virksomheder, vi har, matcher borgeren, skaber vi
                nye veje. Vi kan være frække som slagterhunde, er autentiske og
                ikke bange for at sælge borgeren, så vi får etableret samarbejde
                i nye netværk. Altid ud fra et ærligt perspektiv, så alle parter
                ved, hvad de siger ja til. <br></br>
                <br></br>
                Vores virksomhedsnetværk er nøje udvalgt ud fra tanken om, at
                ”en virksomhed er ikke bare en virksomhed.” Forud for praktikken
                vurderes virksomheden ud fra fx de rigtige opgaver,
                tidsperspektivet for praktikken, ordentligheden hos den
                ansvarlige, at de køber ind på missionen, synes arbejdet med
                Mentorplan er fedt, at de er villige til at gå den ekstra mil.
                Vi lægger stor vægt på deres tilgang til mennesker, som har brug
                for en hjælpende hånd for at (gen-)etablere tilknytning til
                arbejdsmarkedet, herunder udfordringer ud over ledighed.{" "}
                <br></br>
                <br></br>
                Derfor er de virksomheder, Mentorplan samarbejder med,
                kendetegnet ved, at de vil tage socialt ansvar og brænder for at
                gøre en forskel. De er alle med på rejsen om at få borgeren
                videre i livet. Med indgående kendskab til virksomhedsnetværket
                og borgeren kan vi dermed skabe det gode match fra start.
              </p>
            </div>
            <Image
              src="/images/network.jpg"
              width={430}
              height={370}
              alt="hurtigt i job"
              className="object-cover grayscale lg:basis-4/12 image-right"
            />
          </div>

          <div
            className="scroll-target hidden
            lg:block"
          >
            <h2
              className="uppercase font-conduitbold text-2xl
              lg:text-6xl"
            >
              Forløb
              <span className="font-sans text-yellow-400 dark:text-yellow-500">
                |
              </span>
            </h2>
          </div>

          {/* Joindeleteme layout */}
          <div
            className="flex flex-col gap-6 scroll-section 
            lg:flex-row lg:gap-4 lg:justify-end"
          >
            <div
              className="flex flex-col gap-6 container items-center
              lg:gap-4 lg:basis-9/12 lg:items-start"
            >
              {/* Service */}
              <div
                className="flex flex-col gap-6 first items-center
                lg:gap-4 lg:items-start"
              >
                <h2
                  className="uppercase font-conduitbold text-2xl
                  lg:text-4xl"
                >
                  AFKLARINGS- OG UDVIKLINGSFORLØB
                </h2>
                <h3
                  className="text-xl
                  lg:text-xl"
                >
                  Afklarings- og udviklingsforløb henvender sig til borgere, der
                  har brug for hjælp til at få afdækket og beskrevet
                  udfordringer i forhold til at kunne genindtræde på
                  arbejdsmarkedet, i det omfang det er muligt. Her er der tale
                  om borgere, som har behov for at få beskrevet deres
                  arbejdsevne, herunder afprøvet evt. hjælpemidler,
                  arbejdspladsindretning, personlig assistance mv., naturligvis
                  sammenholdt med de ressourcer, den enkelte besidder. Dette
                  foregår i tæt samarbejde med den enkelte og sammenholdt med
                  evt. allerede beskrevne skånebehov fra sagsbehandler. Perioden
                  for disse praktikker afstemmes løbende med sagsbehandler.
                  Vores fokus er at udarbejde solid dokumentation, som kan
                  anvendes til behandling i fx kommunens rehabiliteringsteam.
                  Desuden har vi fokus på at understøtte en langvarig plan for
                  den enkelte, så der fx ved tilkendelse af fleksjob så vidt
                  muligt kan etableres en ansættelse efterfølgende.
                </h3>
              </div>

              {/* Service */}
              <div
                className="flex flex-col gap-6 second items-center
                lg:gap-4 lg:items-start"
              >
                <h2
                  className="uppercase font-conduitbold text-2xl
                  lg:text-4xl"
                >
                  HURTIGT I JOB
                </h2>
                <h3
                  className="text-xl
                  lg:text-xl"
                >
                  Hurtigt i job henvender sig til borgere, der har brug for
                  hjælp til at komme ind på arbejdsmarkedet og ikke har
                  problemer ud over ledighed. Disse borgere kan have svært ved
                  at skrive ansøgninger eller lave et CV og mangler blot det
                  sidste for at komme i job. Inden for en tidsramme på 4 uger
                  bistår vi med at finde praktikplads eller jobmulighed, der
                  tilpasses den enkeltes kvalifikationer og interesser. Vores
                  mål er at sikre en hurtig og glidende overgang til
                  beskæftigelse med fokus på at opnå lønnede timer hurtigst
                  muligt. Her kommer vores virksomhedsnetværk i spil, da vi kan
                  finde de rette match til borgerne hurtigt og effektivt.
                </h3>
              </div>

              {/* Service */}
              <div
                className="flex flex-col gap-6 third items-center
                lg:gap-4 lg:items-start"
              >
                <h2
                  className="uppercase font-conduit text-2xl
                  lg:text-4xl"
                >
                  HÅNDHOLDT INDSATS
                </h2>
                <h3
                  className="text-xl
                  lg:text-xl"
                >
                  Dette forløb er for særligt udsatte borgere, såsom dem med
                  misbrugsproblemer, kriminalitetsbaggrund, psykiske
                  udfordringer og andre komplekse problemstillinger, der derfor
                  er længere væk fra uddannelse eller arbejdsmarkedet. Vi
                  tilpasser mentorforløbet til den enkeltes behov. Vi arbejder
                  tæt sammen med sagsbehandlere og andre relevante instanser som
                  misbrugscentre og psykiatri for at sikre omfattende støtte. Vi
                  har stor erfaring med borgere, der kan have en kort lunte
                  eller udfordre rammerne. Med fokus på deeskalering af
                  konflikter og tydelighed i vores kommunikation fastholder vi
                  rammen, selvom borgeren udfordrer den. Vores tilgang er at
                  møde borgeren med respekt og empati, hvilket hjælper med at
                  opbygge tillid og relationer. Vi fokuserer på at skabe en
                  struktureret men fleksibel ramme, der kan tilpasses efter
                  behov. Konflikthåndteringsteknikker og trygge, forudsigelige
                  rammer hjælper borgeren med at vide, hvad der forventes, og
                  hvad der sker ved næste møde. Et af de centrale fokuspunkter i
                  disse forløb er mødestabilitet, da dette er en forudsætning
                  for en realistisk indtræden på arbejdsmarkedet. Det kan være
                  svært for mange af disse borgere. Et andet fokuspunkt er
                  parallelindsatser, hvor vi sikrer, at borgerens forskellige
                  behov afstemmes og håndteres samtidig, fx misbrugsbehandling,
                  fodlænkeordning eller psykiatrisk behandling. Dette forhindrer
                  unødig ventetid og sikrer, at borgeren ikke står stille i
                  deres udvikling.
                </h3>
              </div>
            </div>
          </div>

          <div
            id="sliderTarget"
            className="flex flex-col gap-6 space-between items-center
          lg:flex-row lg:gap-4"
          >
            <div
              className="flex flex-col gap-6 lg:gap-4 items-center
            lg:items-start lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl"
              >
                Grundig dokumentation
              </h2>
              <p>
                Vi mener, at et tæt samarbejde er altafgørende for et godt
                forløb. Det betyder, at vi kan korrigere med det samme, når
                noget afviger fra planen. Løbende dokumentation danner rammen
                for dette. Det aftales derfor individuelt, hvilken dokumentation
                vi skal levere til de jobcentre, vi samarbejder med, da vi
                oplever et meget forskelligt behov. Vi skræddersyr vores
                dokumentation, så det understøtter jeres behov bedst muligt. Men
                vi tilbyder:
              </p>
              <ol className="bg-yellow-400 dark:bg-yellow-500 text-slate-900 py-5 px-10 font-conduit font-bold list-disc image-left">
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
            <Image
              src="/images/journal.jpg"
              width={430}
              height={370}
              alt="hurtigt i job"
              className="object-cover grayscale image-right lg:basis-4/12"
            />
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
