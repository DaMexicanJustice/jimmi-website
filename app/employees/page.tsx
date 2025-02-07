import Image from "next/image";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getEmployeeData } from "../utils/dataHandler";
import jimmiPic from "/public/images/Jimmi.jpg";
import maltePic from "/public/images/Malte.jpg";
import marckPic from "/public/images/Marck.jpg";
import musaPic from "/public/images/Musa.jpg";
import esraPic from "/public/images/Esra.jpg";
import ceciliePic from "/public/images/Cecilie.jpg";
import madsPic from "/public/images/Mads.jpg";
import ninaPic from "/public/images/Nina.jpg";
import daliborPic from "/public/images/Dalibor.jpg";
import silhouettePic from "/public/images/silhouette.png";
import MentorCtaCard from "../ui/mentor-cta-card";
import DownloadButton from "../ui/DownloadButton";

interface Employee {
  name: string;
  img:
    | "jimmiPic"
    | "maltePic"
    | "marckPic"
    | "musaPic"
    | "esraPic"
    | "ceciliePic"
    | "madsPic"
    | "ninaPic"
    | "daliborPic"
    | "silhouettePic";
  role: string;
  email: string;
  phone: string;
  competences: {
    languages: { [key: string]: string };
    education: { [key: string]: string };
    experience: { [key: string]: string };
  };
}

const imageMap = {
  jimmiPic,
  maltePic,
  marckPic,
  musaPic,
  esraPic,
  ceciliePic,
  madsPic,
  ninaPic,
  daliborPic,
  silhouettePic,
};

export default async function Component() {
  const employeeData = await getEmployeeData();
  const employees: Employee[] = employeeData.employees;
  const maxEducationParagraphs = 4;

  return (
    <>
      <Navbar useScrollBehavior={false} />
      <section className="p-5 mt-12 bg-slate-50 dark:bg-neutral-900 sm:px-32 lg:px-16 lg:mt-16">
        <main className="flex flex-col h-full justify-center items-center cursor-default">
          <div className="flex flex-col gap-12 py-5 w-full">
            <div className="bg-yellow-400 dark:bg-yellow-500 grow p-5 flex flex-col gap-5 shadow-xl">
              <h1 className="uppercase font-bold text-2xl text-slate-900 font-conduit">
                Konsulenter
              </h1>
              <p className="text-slate-900 text-xl">
                Vi mener, at faglighed er en afgørende forudsætning for at
                udføre et godt stykke arbejde. Denne brede vifte af erfaringer
                inden for vores team giver os mulighed for at tilbyde
                skræddersyet støtte og rådgivning til vores målgrupper. Læs mere
                under den enkelte konsulent.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <DownloadButton />
            </div>
            <div
              className="grid grid-cols-1 gap-6 w-full
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5"
            >
              {employees.map((e: Employee, index: number) => (
                <div
                  key={index}
                  className="relative bg-slate-50 flex flex-col shadow-xl group overflow-hidden"
                >
                  <div className="mb-5 h-64">
                    <Image
                      src={imageMap[e.img]}
                      width={512}
                      height={512}
                      alt="Medarbejder billed"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div className="px-5">
                    <p className="uppercase font-conduitbold text-xl text-slate-700 xl:text-base">
                      {e.name}
                    </p>
                    <p className="uppercase font-conduitbold text-sm text-slate-500 xl:text-xs">
                      {e.role}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between p-5">
                    <div>
                      <div className="flex flex-row gap-1 items-center">
                        <EnvelopeIcon className="text-slate-950 w-5" />
                        <p className="font-conduit text-base text-slate-800 xl:text-sm">
                          {e.email}
                        </p>
                      </div>
                      <div className="flex flex-row gap-1 items-center">
                        <PhoneIcon className="text-slate-950 w-5" />
                        <a
                          href={`tel:${e.phone}`}
                          className="font-conduit text-slate-800 text-base xl:text-sm"
                        >
                          {e.phone
                            .substring(3)
                            .replace(/(\d{4})(\d{4})/, "$1-$2")}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-slate-50 opacity-0 overflow-hidden group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-5">
                    <p className="uppercase text-slate-700 font-conduitbold">
                      Kompetencedækning
                    </p>
                    <p className="uppercase text-slate-700 font-conduit bg-slate-200 dark:bg-stone-200">
                      Sprog
                    </p>
                    <div className="flex flex-row flex-wrap gap-1">
                      {Object.values(e.competences.languages)
                        .reverse()
                        .map((lang, i) => (
                          <p key={i} className="text-slate-950 text-xs">
                            {lang}
                          </p>
                        ))}
                    </div>
                    <p className="uppercase text-slate-700 font-conduit bg-slate-200 dark:bg-stone-200">
                      Uddannelse
                    </p>
                    <div className="flex flex-col gap-1">
                      {Object.values(e.competences.education)
                        .reverse()
                        .slice(0, maxEducationParagraphs)
                        .map((edu, i) => (
                          <p
                            key={i}
                            className="text-slate-950 text-xs truncate"
                          >
                            {edu}
                          </p>
                        ))}
                    </div>
                    <p className="uppercase text-slate-700 font-conduit bg-slate-200 dark:bg-stone-200">
                      Erfaring
                    </p>
                    <div className="flex flex-col gap-1">
                      {Object.values(e.competences.experience)
                        .reverse()
                        .slice(0, maxEducationParagraphs)
                        .map((exp, i) => (
                          <p
                            key={i}
                            className="text-slate-950 text-xs truncate"
                          >
                            {exp}
                          </p>
                        ))}
                    </div>
                    <Link
                      href={{
                        pathname: "/employee-details",
                        query: { id: index },
                      }}
                      className="absolute bottom-0 right-0 font-conduit text-slate-100 text-lg text-center text-wrap size-20 lg:size-20 xl:size-16"
                      aria-label={`Læs mere om ${e.name}`}
                    >
                      <div className="size-40 rounded-full border-2 bg-yellow-400 dark:bg-yellow-500 text-slate-950 p-5 uppercase font-conduitbold text-sm rounded-full -rotate-45 lg:size-48 xl:size-36 xl:p-4 xl:text-xs">
                        Læs Mere
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
              <MentorCtaCard />
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
