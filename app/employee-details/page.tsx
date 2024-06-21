"use client"; // This is a client component"use client";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import Image from "next/image";
import React, { useState, useEffect, Suspense } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);

  if (isLoading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        id="Employee-details"
        className="px-5 min-h-[calc(100svh-3rem)] max-h-max mt-12 bg-slate-50 dark:bg-slate-950 py-5 
      md:px-32
      xl:py-12"
      >
        <main
          className="flex flex-col h-full gap-5 z-40 font-conduit text-center justify-center items-center
        "
        >
          <div
            className="flex flex-col gap-10 bg-white dark:bg-stone-100 p-5 shadow-xl
          xl:gap-5 xl:flex-row"
          >
            <div
              className="flex flex-col
            xl:self-start"
            >
              <p className="uppercase font-bold font-conduitbold text-2xl text-slate-700"></p>
              <div id="image-container" className="w-full mb-5">
                <Image
                  src={data ? data.img : "no-img"}
                  width={512}
                  height={512}
                  alt="Medarbejder billed"
                  className="w-full h-full grayscale object-cover"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="bg-slate-200 dark:bg-stone-200 py-2">
                  <p className="uppercase font-bold font-conduitbold text-xl text-slate-700 ">
                    {data ? data.name : "no-data"}
                  </p>
                  <p className="uppercase font-bold font-conduitbold text-lg text-slate-500">
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

                <div className="bg-slate-200 dark:bg-stone-200 py-2">
                  <p className="uppercase font-bold font-conduitbold text-lg text-slate-500">
                    Sprog
                  </p>
                  {Object.keys(data.competences.languages).map(
                    (key: string, index: number) => (
                      <p className="text-slate-900" key={index}>
                        {data.competences.languages[key]}
                      </p>
                    )
                  )}
                </div>
                <div className="flex flex-col bg-slate-200 dark:bg-stone-200 py-2">
                  <p className="uppercase font-bold font-conduitbold text-xl text-slate-700">
                    Kompetence dækning
                  </p>
                  <div>
                    <p className="uppercase font-bold font-conduitbold text-lg text-slate-500">
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
                    <p className="uppercase font-bold font-conduitbold text-lg text-slate-500">
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
              <p className="text-blue-950 text-xl text-left">
                {data ? data.competences.article.headline : "no-data"}
              </p>
              <hr className="border border-solid border-slate-900"></hr>
              <p className="text-left text-slate-900 whitespace-pre-line">
                {data ? data.competences.article.text : "no-data"}
              </p>
              <p className="uppercase font-conduitbold text-xl text-blue-950">
                Hvilke borgere er jeg god til
              </p>
              <p className="text-left text-slate-900">
                {data ? data.competences["citizen-type"] : "no-data"}
              </p>
              <p className="text-left text-slate-950 bg-yellow-400 p-5  text-xl">
                {data ? data.competences.resume : "no-data"}
              </p>
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
