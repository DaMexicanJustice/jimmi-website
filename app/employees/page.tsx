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

// Defining the object structure
interface Employee {
  name: string;
  img: "jimmiPic" | "maltePic" | "marckPic" | "musaPic" | "esraPic";
  role: string;
  email: string;
  phone: string;
  competences: {
    languages: {
      [key: string]: string;
    };
    education: {
      [key: string]: string;
    };
    experience: {
      [key: string]: string;
    };
  };
}

const imageMap = {
  jimmiPic: jimmiPic,
  maltePic: maltePic,
  marckPic: marckPic,
  musaPic: musaPic,
  esraPic: esraPic,
};

export default async function Employees() {
  const employeeData = await getEmployeeData();
  // Generating array of JS objects based on defined interface structure
  const employees: Employee[] = employeeData.employees;
  const maxEducationParagraphs = 4;

  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        id="Employees"
        className="p-5 mt-12 bg-slate-100 dark:bg-neutral-900
        sm:px-32
        lg:px-16 lg:mt-16"
      >
        <main className="flex flex-col h-full justify-center items-center cursor-default">
          <div className="flex flex-col gap-12 py-5">
            <div className="bg-yellow-400 dark:bg-yellow-500 grow p-5 flex flex-col gap-5 shadow-xl">
              <h1 className="uppercase font-bold text-2xl text-slate-900 font-conduit">
                Konsulenter
              </h1>
              {/* <hr className="border border-solid border-slate-900"></hr> */}
              <p className="text-slate-900 text-xl">
                Vi mener, at faglighed er en afgørende forudsætning for at
                udføre et godt stykke arbejde. Denne brede vifte af erfaringer
                inden for vores team giver os mulighed for at tilbyde
                skræddersyet støtte og rådgivning til vores målgrupper. Læs mere
                under den enkelte konsulent.
              </p>
              {/* <hr className="border border-solid border-slate-900 "></hr> */}
            </div>
            <div
              className="flex flex-col gap-6
              lg:flex-row lg:justify-start lg:flex-wrap
              xl:flex-nowrap"
            >
              {employees.map((e: Employee, index: number) => (
                <div
                  key={index}
                  className="relative bg-slate-50 flex flex-col shadow-xl group overflow-hidden
                  lg:basis-3/12
                  xl:p-0 xl:basis-1/5"
                >
                  <div
                    id="image-container"
                    className="mb-5
                  lg:h-full"
                  >
                    <Image
                      src={imageMap[e.img]}
                      width={512}
                      height={512}
                      alt="Medarbejder billed"
                      className="w-full h-full object-cover grayscale
                      "
                    />
                  </div>
                  <div id="personal-info" className="px-5">
                    <p
                      className="uppercase font-conduitboldbold text-xl text-slate-700
                    xl:text-base"
                    >
                      {e.name}
                    </p>
                    <p
                      className="uppercase font-conduitbold text-sm text-slate-500
                    xl:text-xs"
                    >
                      {e.role}
                    </p>
                  </div>
                  <div
                    id="contact-info"
                    className="flex flex-row justify-between"
                  >
                    <div className="p-5">
                      <div className="flex flex-row gap-1 items-center">
                        <EnvelopeIcon className="text-slate-950 w-5"></EnvelopeIcon>
                        <p
                          className="font-conduit text-sm text-slate-800
                        xl:text-xs"
                        >
                          {e.email}
                        </p>
                      </div>
                      <div className="flex flex-row gap-1 items-center">
                        <PhoneIcon className="text-slate-950 w-5"></PhoneIcon>
                        <a
                          href={`tel:${e.phone}`}
                          className="font-conduit text-slate-800 text-sm
                          xl:text-xs"
                        >
                          {e.phone
                            .substring(3)
                            .replace(/(\d{4})(\d{4})/, "$1 $2")}
                        </a>
                      </div>
                    </div>
                    <Link
                      href={{
                        pathname: "/employee-details",
                        query: { id: index },
                      }}
                      className="absolute bottom-0 right-0 font-conduit text-slate-100 text-lg text-center text-wrap size-20
                      lg:size-20
                      xl:size-16"
                    >
                      <div
                        className="size-40 rounded-full border-2 bg-yellow-400 dark:bg-yellow-500 text-slate-950 p-5
                        uppercase font-conduitbold text-sm rounded-full -rotate-45
                        lg:size-48
                        xl:size-36 xl:p-4 xl:text-xs"
                      >
                        Læs Mere
                      </div>
                    </Link>
                  </div>

                  <div
                    id="overlay"
                    className="absolute w-full h-full bg-slate-50 opacity-0 overflow-hidden
                    group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-5 group-hover:block"
                  >
                    <p className="uppercase text-slate-700 font-conduitbold">
                      Kompetencedækning
                    </p>
                    <p className="uppercase text-slate-700 font-conduit bg-slate-200 dark:bg-stone-200">
                      Sprog
                    </p>
                    <div className="flex flex-row flex-wrap gap-1">
                      {Object.keys(e.competences.languages)
                        .reverse()
                        .map((key: string, index: number) => (
                          <p className="text-slate-950 text-xs" key={index}>
                            {e.competences.languages[key]}
                          </p>
                        ))}
                    </div>

                    <p className="uppercase text-slate-700 font-conduit bg-slate-200 dark:bg-stone-200">
                      Uddannelse
                    </p>
                    <div className="flex flex-col gap-1">
                      {Object.keys(e.competences.education)
                        .reverse()
                        .slice(0, maxEducationParagraphs)
                        .map((key: string, index: number) => (
                          <p
                            className="text-slate-950 text-xs truncate"
                            key={index}
                          >
                            {e.competences.education[key]}
                          </p>
                        ))}
                    </div>
                    <p className="uppercase text-slate-700 font-conduit bg-slate-200 dark:bg-stone-200">
                      Erfaring
                    </p>
                    <div className="flex flex-col gap-1">
                      {Object.keys(e.competences.experience)
                        .reverse()
                        .slice(0, maxEducationParagraphs)
                        .map((key: string, index: number) => (
                          <p
                            className="text-slate-950 text-xs truncate"
                            key={index}
                          >
                            {e.competences.experience[key]}
                          </p>
                        ))}
                    </div>
                    <Link
                      href={{
                        pathname: "/employee-details",
                        query: { id: index },
                      }}
                      className="absolute bottom-0 right-0 font-conduit text-slate-100 text-lg text-center text-wrap size-20
                      lg:size-20
                      xl:size-16"
                    >
                      <div
                        className="size-40 rounded-full border-2 bg-yellow-400 dark:bg-yellow-500 text-slate-950 p-5
                        uppercase font-conduitbold text-sm rounded-full -rotate-45
                        lg:size-48
                        xl:size-36 xl:p-4 xl:text-xs"
                      >
                        Læs Mere
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
