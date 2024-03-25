"use client"; // This is a client component"use client";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import Link from "next/link";

// Augment the palette to include an ochre color
declare module "@mui/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}

const theme = createTheme({
  palette: {
    ochre: {
      main: "#eab308",
      light: "#facc15",
      dark: "#ca8a04",
      contrastText: "#242105",
    },
  },
});

// Defining the object structure
interface Employee {
  name: string;
  img: string;
  role: string;
  email: string;
  phone: string;
  competences: {
    languages: {
      Danish: string;
      English: string;
    };
    education: {
      [key: string]: string;
    };
    experience: {
      [key: string]: string;
    };
    article: {
      headline: string;
      text: string;
    };
    "citizen-type": string;
    resume: string;
  };
}

export default function EmployeeDetails() {
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  const id = parseInt(search || "0", 10); //
  const [data, setData] = useState<Employee | null>(null);

  useEffect(() => {
    // If you're using Create React App and the file is in the public folder
    fetch("/json/employees.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.employees[id]);
        //console.log(data.employees[id].name);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, [id]);

  return (
    <>
      <Navbar></Navbar>
      <section
        id="Employee-details"
        className="px-5 min-h-[calc(100svh-6rem)] mt-24 bg-slate-300 py-5
      md:px-20"
      >
        <main
          className="flex flex-col h-full gap-5 z-40 font-conduit text-center
        md:gap-10"
        >
          <div
            className="flex flex-col gap-10 bg-slate-100 p-5
          md:gap-12 md:flex-row"
          >
            {/* Employee name: {data && <pre>{data.employees[id].name}</pre>} */}
            <div
              className="flex flex-col
            md:self-start md:gap-5"
            >
              <p className="uppercase font-bold font-conduitbold text-2xl text-slate-700">
                {data && data.name}
              </p>
              <div
                id="image-container"
                className="w-full h-96 mb-5
            md:h-full md:size-3/12
            lg:size-72"
              >
                {data && data.img && (
                  <Image
                    src={data.img}
                    width={390}
                    height={260}
                    alt="Medarbejder billed"
                    className="w-full h-full grayscale
                  lg:size-96"
                  />
                )}
              </div>
              <div>
                <p className="uppercase font-bold font-conduitbold text-xl text-slate-700">
                  {data && data.name}
                </p>
                <p className="uppercase font-bold font-conduitbold text-lg text-orange-500">
                  {data && data.role}
                </p>
              </div>
              <div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <EnvelopeIcon className="text-slate-900 w-5"></EnvelopeIcon>
                  <p className="font-conduit text-slate-800">
                    {data && data.email}
                  </p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <PhoneIcon className="text-slate-900 w-5"></PhoneIcon>
                  <a
                    href={`tel:${data && data.phone}`}
                    className="font-conduit text-slate-800"
                  >
                    {data && data.phone}
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <p className="uppercase font-bold font-conduitbold text-xl text-slate-700">
                    Kompetence dækning
                  </p>
                  <p className="uppercase font-bold font-conduitbold text-lg text-orange-500">
                    Sprog
                  </p>
                  <p className="text-slate-900">
                    {data && data.competences.languages.Danish}
                  </p>
                  <p className="text-slate-900">
                    {data && data.competences.languages.English}
                  </p>
                  <p className="uppercase font-bold font-conduitbold text-lg text-orange-500">
                    Uddannelse/Kurser
                  </p>
                  {data && data.competences.education && (
                    <div>
                      {Object.keys(data.competences.education).map(
                        (key: string, index: number) => (
                          <p className="text-slate-900" key={index}>
                            {data.competences.education[key]}
                          </p>
                        )
                      )}
                    </div>
                  )}
                  <p className="uppercase font-bold font-conduitbold text-lg text-orange-500">
                    Erfaring
                  </p>
                  {data && data.competences.experience && (
                    <div>
                      {Object.keys(data.competences.experience).map(
                        (key: string, index: number) => (
                          <p className="text-slate-900" key={index}>
                            {data.competences.experience[key]}
                          </p>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <hr className="border border-solid border-slate-900"></hr>
              <p className="text-blue-950 text-xl text-justify">
                {data && data.competences.article.headline}
              </p>
              <hr className="border border-solid border-slate-900"></hr>
              <p className="text-justify text-slate-900 whitespace-pre-line">
                {data && data.competences.article.text}
              </p>
              <p className="uppercase font-conduitbold text-xl text-blue-950">
                Hvilke borgere er jeg god til
              </p>
              <p className="text-justify text-slate-900">
                {data && data.competences["citizen-type"]}
              </p>
              <p className="text-justify text-slate-950 text-lg">
                {data && data.competences.resume}
              </p>
            </div>
          </div>
          <ThemeProvider theme={theme}>
            <Link href="/employees">
              <Button
                className="p-3 uppercase font-bold text-xl bg-yellow-500
                  md:text-sm md:p-2
                  xl:hidden"
                variant="contained"
                color="ochre"
              >
                Tilbage Til Oversigt
              </Button>
            </Link>
          </ThemeProvider>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
