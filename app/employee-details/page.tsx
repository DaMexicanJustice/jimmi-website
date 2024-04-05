"use client"; // This is a client component"use client";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import Image from "next/image";
import React, { useState, useEffect, Suspense } from "react";
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

function getURLSearchParamsID() {
  // Acess search query
  const searchParams = new URLSearchParams(document.location.search);
  // Grab ?ID
  const search = searchParams.get("id");
  // Parse string id "10" to int
  const id = parseInt(search || "0", 10);
  return id;
}

export default function EmployeeDetails() {
  const [data, setData] = useState<null | Employee>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const id = getURLSearchParamsID();
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
        setLoading(false);
        //console.log(data.employees[id].name);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        id="Employee-details"
        className="px-5 min-h-[calc(100svh-6rem)] mt-24 bg-slate-700 py-5
      md:px-20"
      >
        <main
          className="flex flex-col h-full gap-5 z-40 font-conduit text-center
        "
        >
          <div
            className="flex flex-col gap-10 bg-slate-100 p-5
          xl:gap-5 xl:flex-row"
          >
            <div
              className="flex flex-col
            xl:self-start"
            >
              <p className="uppercase font-bold font-conduitbold text-2xl text-slate-700"></p>
              <div id="image-container" className="w-full h-96 mb-5">
                <Image
                  src={data ? data.img : "no-img"}
                  width={390}
                  height={260}
                  alt="Medarbejder billed"
                  className="w-full h-full grayscale object-cover"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="bg-slate-200">
                  <p className="uppercase font-bold font-conduitbold text-xl text-slate-700 ">
                    {data ? data.name : "no-data"}
                  </p>
                  <p className="uppercase font-bold font-conduitbold text-lg text-orange-500">
                    {data ? data.role : "no-data"}
                  </p>

                  <div className="flex flex-row gap-2 justify-center items-center">
                    <EnvelopeIcon className="text-slate-900 w-5"></EnvelopeIcon>
                    <p className="font-conduit text-slate-800">
                      {data ? data.email : "no-data"}
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <PhoneIcon className="text-slate-900 w-5"></PhoneIcon>
                    <a
                      href="tel:4512345678"
                      className="font-conduit text-slate-800"
                    >
                      {data ? data.phone : "no-data"}
                    </a>
                  </div>
                </div>

                <div className="bg-slate-200">
                  <p className="uppercase font-bold font-conduitbold text-lg text-orange-500">
                    Sprog
                  </p>
                  <p className="text-slate-900">
                    {data ? data.competences.languages.Danish : "no-data"}
                  </p>
                  <p className="text-slate-900">
                    {data ? data.competences.languages.English : "no-data"}
                  </p>
                </div>
                <div className="flex flex-col bg-slate-200">
                  <p className="uppercase font-bold font-conduitbold text-xl text-slate-700">
                    Kompetence dækning
                  </p>
                  <div>
                    <p className="uppercase font-bold font-conduitbold text-lg text-orange-500">
                      Uddannelse/Kurser
                    </p>
                    <div>
                      {Object.keys(data.competences.education).map(
                        (key: string, index: number) => (
                          <p className="text-slate-900" key={index}>
                            {data ? data.competences.education[key] : "no-data"}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="uppercase font-bold font-conduitbold text-lg text-orange-500">
                      Erfaring
                    </p>
                    <div>
                      {Object.keys(data.competences.experience).map(
                        (key: string, index: number) => (
                          <p className="text-slate-900" key={index}>
                            {data
                              ? data.competences.experience[key]
                              : "no-data"}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col gap-5
            md:basis-6/12 md:grow"
            >
              <hr className="border border-solid border-slate-900"></hr>
              <p className="text-blue-950 text-xl text-justify">
                {data ? data.competences.article.headline : "no-data"}
              </p>
              <hr className="border border-solid border-slate-900"></hr>
              <p className="text-justify text-slate-900 whitespace-pre-line">
                {data ? data.competences.article.text : "no-data"}
              </p>
              <p className="uppercase font-conduitbold text-xl text-blue-950">
                Hvilke borgere er jeg god til
              </p>
              <p className="text-justify text-slate-900">
                {data ? data.competences["citizen-type"] : "no-data"}
              </p>
              <p className="text-justify text-slate-950 text-lg">
                {data ? data.competences.resume : "no-data"}
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
