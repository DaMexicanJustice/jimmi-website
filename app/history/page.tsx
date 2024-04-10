import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function History() {
  return (
    <>
      <section
        id="History"
        className="px-5 min-h-[calc(100svh-6rem)] bg-slate-200 dark:bg-slate-800 overflow-hidden
        md:px-20 md:py-40
        xl:py-0"
      >
        <main
          className="flex flex-col items-center justify-evenly gap-6 py-6
        xl:gap-10 xl:flex-row xl:justify-between xl:items-center
        xl:gap-1"
        >
          <Image
            src="/images/Jimmi2.jpg"
            width={428}
            height={500}
            alt="Jimmi billed"
            className="drop-shadow-md
            xl:order-3 xl:w-full
            xl:basis-3/12 "
          />

          <div
            className="flex flex-col gap-10 items-center
          xl:items-start xl:justify-evenly
          xl:order-2 xl:basis-7/12"
          >
            <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-3xl font-bold font-conduit
          xl:text-5xl"
            >
              Historik
            </h1>
            <p className="text-slate-900 dark:text-slate-100 text-base text-justify leading-6">
              Mentorplan har eksisteret siden 2016, og igennem årene har vi
              arbejdet dynamisk, vedholdende og med fokus på at skabe
              resultater. Vi tilbyder en individuel tilgang, der tager
              udgangspunkt i den enkelte borgers behov. Vi starter altid
              samarbejdet med at opbygge en relation, der bygger på ligeværd,
              respekt og tillid. <br></br>
              <br></br>Mentorplan har kontor på SOHO, som er et kontorfællesskab
              beliggende i Kødbyen på Vesterbro i København. Her vil du finde et
              kontor, der er indrettet med inspirerende mødelokaler, egen café
              og kantine. <br></br>
              <br></br>Der er en særlig energi på kontoret, som smitter af på
              borgerne og samarbejdspartnerne. Du vil føle dig velkommen i det
              øjeblik, du træder ind ad døren. <br></br>
              <br></br> Mere om Jimmi Liljehult på LinkedIn
            </p>
            <Link href="https://www.linkedin.com/in/jimmililjehult/">
              <FaLinkedin className="size-16 fill-blue-700 dark:fill-slate-100"></FaLinkedin>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}
