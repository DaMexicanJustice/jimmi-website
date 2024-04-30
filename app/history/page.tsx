import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import LinkedIn from "../ui/linkedin";

export default function History() {
  return (
    <>
      <section
        id="History"
        className="px-5 min-h-[calc(100svh-6rem)] bg-slate-200 dark:bg-slate-800 overflow-hidden
        md:px-32 md:py-40 md:h-[calc(100svh-6rem)]
        xl:py-0"
      >
        <main
          className="flex flex-col items-center justify-evenly gap-6 py-6 h-full
        xl:gap-10 xl:flex-row xl:justify-between xl:items-center
        xl:gap-1"
        >
          <Image
            src="/images/Jimmi2.jpg"
            width={280}
            height={328}
            alt="Jimmi billed"
            className="drop-shadow-md
            xl:order-3 xl:w-full
            xl:basis-3/12"
          />

          <div
            className="flex flex-col gap-10 items-center
          xl:items-start xl:justify-evenly
          xl:order-2 xl:basis-7/12"
          >
            <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit
          xl:text-4xl"
            >
              Om Mentorplan
            </h1>
            <p className="text-slate-900 dark:text-slate-100 text-lg text-justify leading-6">
              Jimmi Liljehult, grundlægger og ejer af Mentorplan, en
              konsulentvirksomhed med fokus på mentorhjælp og
              støttekontaktordninger til socialt udsatte borgere. Vi stræber
              efter at skabe en meningsfuld hverdag, der leder til uddannelse og
              arbejde, og vi arbejder passioneret for at hjælpe vores borgere
              med at nå deres fulde potentiale. <br></br>
              <br></br>
              Siden 2016 har Mentorplan dynamisk og vedholdende arbejdet for at
              skabe resultater gennem en individuel tilgang, der tager hensyn
              til den enkelte borgers behov. Vi lægger vægt på at opbygge
              relationer baseret på ligeværd, respekt og tillid. <br></br>
              <br></br>
              Vores kontor på SOHO i Kødbyen, København, er indrettet med
              inspirerende mødelokaler, café og kantine. Kontoret emmer af
              energi, som smitter af på vores borgere og samarbejdspartnere.
              Velkommen til en motiverende atmosfære, hvor personlige mål kan
              opnås. <br></br>
              <br></br>
              Læs mere om Jimmi Liljehult på LinkedIn.
            </p>
            <Link href="https://www.linkedin.com/in/jimmililjehult/">
              <FaLinkedin className="size-14 fill-blue-700 dark:fill-slate-100"></FaLinkedin>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}
