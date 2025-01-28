"use client"; // This is a client component"use client";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Link from "next/link";
import jimmiPic from "/public/images/Jimmi.jpg";
import maltePic from "/public/images/Malte.jpg";
import marckPic from "/public/images/Marck.jpg";
import musaPic from "/public/images/Musa.jpg";
import esraPic from "/public/images/Esra.jpg";
import ceciliePic from "/public/images/Cecilie.jpg";
import ninaPic from "/public/images/Nina.jpg";
import daliborPic from "/public/images/Dalibor.jpg";
import madsPic from "/public/images/Mads.jpg";

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
    article: {
      headline: string;
      text: string;
    };
    "citizen-type": string;
    resume: string;
  };
}

const imageMap = {
  jimmiPic: jimmiPic,
  maltePic: maltePic,
  marckPic: marckPic,
  musaPic: musaPic,
  esraPic: esraPic,
  ceciliePic: ceciliePic,
  daliborPic: daliborPic,
  ninaPic: ninaPic,
  madsPic: madsPic,
};

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
        className="mt-12 p-5 bg-slate-50 dark:bg-neutral-900
        sm:px-32
        lg:px-16 lg:py-14"
      >
        <main
          className="flex flex-col h-full gap-5 z-40 font-conduit text-center justify-center items-center
        "
        >
          <div
            className="flex flex-col gap-10
            lg:gap-5 lg:flex-row"
          >
            <div
              className="flex flex-col
              lg:basis-4/12"
            >
              <div
                id="image-container"
                className="w-full mb-5 mt-5 shadow-md 
              lg:mt-0"
              >
                <Image
                  src={data ? imageMap[data.img] : jimmiPic}
                  width={512}
                  height={512}
                  alt="Medarbejder billed"
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="bg-slate-200 dark:bg-stone-200 py-2 shadow-md">
                  <p className="uppercase font-conduitboldbold text-xl text-slate-700">
                    {data ? data.name : "no-data"}
                  </p>
                  <p className="uppercase font-conduitboldbold text-lg text-slate-500">
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
                      href={data ? data.phone : "12345678"}
                      className="font-conduit text-slate-800"
                    >
                      {data.phone
                        .substring(3)
                        .replace(/(\d{4})(\d{4})/, "$1-$2")}
                    </a>
                  </div>
                </div>

                <div className="bg-slate-200 dark:bg-stone-200 py-2 shadow-md">
                  <p className="uppercase font-conduitboldbold text-lg text-slate-500">
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
                <div className="flex flex-col bg-slate-200 dark:bg-stone-200 py-2 px-2 shadow-md">
                  <p className="uppercase font-conduitboldbold text-xl text-slate-700">
                    Kompetence dækning
                  </p>
                  <div>
                    <p className="uppercase font-conduitboldbold text-lg text-slate-500">
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
                    <p className="uppercase font-conduitboldbold text-lg text-slate-500">
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
              lg:basis-8/12
              2xl:basis-8/12"
            >
              <p className="text-slate-900 dark:text-slate-50 text-xl text-center">
                {data ? data.competences.article.headline : "no-data"}
              </p>
              <p className="text-left text-slate-900 dark:text-slate-50 whitespace-pre-line text-lg">
                {data ? data.competences.article.text : "no-data"}
              </p>
              <p className="uppercase font-conduitbold text-xl text-blue-950 dark:text-slate-50">
                Hvilke borgere er jeg god til
              </p>
              <p className="text-left text-slate-900 dark:text-slate-50 text-lg">
                {data ? data.competences["citizen-type"] : "no-data"}
              </p>
              <p className="text-left text-slate-950 bg-yellow-400 p-5 text-xl shadow-xl">
                {data ? data.competences.resume : "no-data"}
              </p>
              <div className="self-end">
                <Link href="/employees">
                  <h2
                    className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50
                    lg:text-2xl
                    xl:text-3xl
                    2xl:text-4xl"
                  >
                    Tilbage
                    <span className="font-sans text-yellow-400 dark:text-yellow-500">
                      |
                    </span>
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
