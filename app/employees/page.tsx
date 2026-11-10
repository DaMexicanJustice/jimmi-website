import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import MentorCtaCard from "../ui/mentor-cta-card";
import LinkedInElement from "../ui/linked-in-element";
import { employees } from "../lib/employees";
import { pageMetadata } from "../lib/metadata";
import EmployeeGridSpike from "../ui/employee-grid-spike";

// SPIKE toggle: true = expanding cards (ui/employee-grid-spike.tsx), false = original hover grid
const USE_EXPANDING_GRID = true;

export const metadata: Metadata = pageMetadata({
  title: "Konsulenter",
  description:
    "Mød Mentorplans konsulenter med baggrund i socialt arbejde, politi, SSP og pædagogik. Se kompetencer, erfaring og kontaktoplysninger.",
  path: "/employees/",
});

const MAX_LINES = 4;

export default function Employees() {
  return (
    <main className="mt-16 bg-slate-50 dark:bg-neutral-900">
      <div className="container-page section-y flex flex-col gap-10 lg:gap-14 cursor-default">
        <div className="bg-yellow-400 grow p-5 lg:p-10 2xl:p-14 flex flex-col gap-5 shadow-xl">
          <h1 className="uppercase font-bold text-2xl text-slate-900 font-conduit">Konsulenter</h1>
          <p className="text-slate-900 text-xl">
            Vi mener, at faglighed er en afgørende forudsætning for at udføre et godt stykke arbejde. Denne brede vifte
            af erfaringer inden for vores team giver os mulighed for at tilbyde skræddersyet støtte og rådgivning til
            vores målgrupper. Læs mere under den enkelte konsulent.
          </p>
        </div>
        <div className="flex items-center justify-end">
          <Link
            href="/presentation-card/"
            className="bg-stone-500 text-white font-bold py-3 px-6 text-sm uppercase tracking-wider shadow-md
            transition-colors duration-300 ease-in-out hover:bg-white hover:text-black
            focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
          >
            Download præsentationskort
          </Link>
        </div>
        {USE_EXPANDING_GRID ? (
          <EmployeeGridSpike employees={employees}>
            <MentorCtaCard />
          </EmployeeGridSpike>
        ) : (
        <ul className="grid grid-cols-1 gap-6 lg:gap-8 2xl:gap-10 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {employees.map((e) => (
            <li key={e.slug} className="relative bg-slate-50 flex flex-col shadow-xl group overflow-hidden">
              <div className="mb-5 h-64 2xl:h-96">
                <Image
                  src={e.image}
                  alt={`${e.name}, ${e.role}`}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="px-5">
                <h2 className="uppercase font-conduitbold text-xl text-slate-700 xl:text-base">{e.name}</h2>
                <p className="uppercase font-conduitbold text-sm text-slate-500 xl:text-xs">{e.role}</p>
              </div>
              <div className="p-5">
                <a href={`mailto:${e.email}`} className="flex flex-row gap-1 items-center font-conduit text-base text-slate-800 xl:text-sm 2xl:text-base">
                  <Mail className="text-slate-950 w-5 shrink-0" aria-hidden="true" />
                  {e.email}
                </a>
                <a href={`tel:${e.phone}`} className="flex flex-row gap-1 items-center font-conduit text-base text-slate-800 xl:text-sm 2xl:text-base">
                  <Phone className="text-slate-950 w-5 shrink-0" aria-hidden="true" />
                  {e.phoneDisplay}
                </a>
              </div>

              {/* Hover overlay with competences */}
              <div className="absolute inset-0 bg-slate-50 opacity-0 overflow-hidden group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 ease-in-out px-5">
                <p className="uppercase text-slate-700 font-conduitbold">Kompetencedækning</p>
                <p className="uppercase text-slate-700 font-conduit bg-slate-200">Sprog</p>
                <div className="flex flex-row flex-wrap gap-1 w-3/5 xl:w-4/5">
                  {e.languages.map((lang, i) => (
                    <span key={i} className="text-slate-950 text-sm 2xl:text-base">{lang}</span>
                  ))}
                </div>
                <p className="uppercase text-slate-700 font-conduit bg-slate-200">Uddannelse</p>
                <div className="flex flex-col gap-1">
                  {e.education.slice(0, MAX_LINES).map((edu, i) => (
                    <span key={i} className="text-slate-950 text-sm 2xl:text-base truncate">{edu}</span>
                  ))}
                </div>
                <p className="uppercase text-slate-700 font-conduit bg-slate-200">Erfaring</p>
                <div className="flex flex-col gap-1">
                  {[...e.experience].reverse().slice(0, MAX_LINES).map((exp, i) => (
                    <span key={i} className="text-slate-950 text-sm 2xl:text-base truncate">{exp}</span>
                  ))}
                </div>
                {e.linkedIn && <LinkedInElement url={e.linkedIn} text="Følg på LinkedIn" />}
                <Link
                  href={`/employees/${e.slug}/`}
                  className="absolute bottom-0 right-0 font-conduit text-slate-100 text-center text-wrap size-20 xl:size-16 2xl:size-20"
                  aria-label={`Læs mere om ${e.name}`}
                >
                  <div className="size-40 rounded-full border-2 bg-yellow-400 text-slate-950 p-5 uppercase font-conduitbold text-sm -rotate-45 lg:size-48 xl:size-36 xl:p-4 xl:text-xs 2xl:text-base">
                    Læs mere
                  </div>
                </Link>
              </div>
            </li>
          ))}
          <li className="contents">
            <MentorCtaCard />
          </li>
        </ul>
        )}
      </div>
    </main>
  );
}
