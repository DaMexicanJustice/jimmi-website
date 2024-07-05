import Image from "next/image";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getEmployeeData } from "../utils/dataHandler";

// Defining the object structure
interface Employee {
  name: string;
  img: string;
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

export default async function Employees() {
  const employeeData = await getEmployeeData();
  // Generating array of JS objects based on defined interface structure
  const employees: Employee[] = employeeData.employees;
  const maxEducationParagraphs = 7;

  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        id="Employees"
        className="min-h-[calc(100svh-3rem)] max-h-max mt-12 p-5
        lg:px-32 lg:py-14"
      >
        <main className="flex flex-col h-full justify-center items-center">
          <div className="flex flex-col gap-10 py-5">
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
              className="flex flex-col gap-5
            xl:flex-row gap-1"
            >
              {employees.map((e: Employee, index: number) => (
                <div
                  key={index}
                  className="relative bg-white grow flex flex-col shadow-xl group overflow-hidden
                  xl:grow-0 xl:p-0 xl:basis-1/5"
                >
                  <div
                    id="image-container"
                    className="mb-5
                  lg:h-full"
                  >
                    <Image
                      src={e.img}
                      width={512}
                      height={512}
                      alt="Medarbejder billed"
                      className="w-full h-full object-cover grayscale
                      "
                    />
                  </div>
                  <div id="personal-info" className="px-5">
                    <p className="uppercase font-conduitboldbold text-xl text-slate-700">
                      {e.name}
                    </p>
                    <p className="uppercase font-conduitboldbold text-sm text-slate-500">
                      {e.role}
                    </p>
                  </div>
                  <div
                    id="contact-info"
                    className="flex flex-row justify-between"
                  >
                    <div className="  p-5">
                      <div className="flex flex-row gap-2 items-center">
                        <EnvelopeIcon className="text-slate-950 w-5"></EnvelopeIcon>
                        <p className="font-conduit text-sm text-slate-800">
                          {e.email}
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <PhoneIcon className="text-slate-950 w-5"></PhoneIcon>
                        <a
                          href={`tel:${e.phone}`}
                          className="font-conduit text-slate-800 text-sm"
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
                    lg:size-24
                    xl:size-16"
                    >
                      <div
                        className="size-40 rounded-full border-2 bg-yellow-400 dark:bg-yellow-500 text-slate-950 p-5
                    uppercase font-conduitbold text-sm rounded-full -rotate-45
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
                    <p className="uppercase text-slate-700 font-conduit">
                      Kompetencedækning
                    </p>
                    <p className="uppercase text-yellow-400 font-conduit">
                      Sprog
                    </p>
                    <div className="flex flex-row gap-1">
                      {Object.keys(e.competences.languages).map(
                        (key: string, index: number) => (
                          <p className="text-slate-950 text-xs" key={index}>
                            {e.competences.languages[key]}
                          </p>
                        )
                      )}
                    </div>

                    <p className="uppercase text-yellow-400 font-conduit">
                      Uddannelse
                    </p>
                    {Object.keys(e.competences.education).map(
                      (key: string, index: number) => (
                        <p className="text-slate-950 text-xs" key={index}>
                          {e.competences.education[key]}
                        </p>
                      )
                    )}
                    <p className="uppercase text-yellow-400 font-conduit">
                      Erfaring
                    </p>
                    {Object.keys(e.competences.experience).map(
                      (key: string, index: number) =>
                        index <= maxEducationParagraphs && (
                          <p
                            className="text-slate-950 text-xs truncate"
                            key={index}
                          >
                            {e.competences.experience[key]}
                          </p>
                        )
                    )}

                    <Link
                      href={{
                        pathname: "/employee-details",
                        query: { id: index },
                      }}
                      className="absolute bottom-0 right-0 font-conduit text-slate-100 text-lg text-center text-wrap size-20
                      lg:size-24
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
