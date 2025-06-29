"use client";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import Image from "next/image";
import pageOne from "/public/images/Side_1.jpg";
import pageTwo from "/public/images/Side_2.jpg";

export default function PresentationCard() {
  return (
    <>
      <Navbar useScrollBehavior={false} />
      <section
        className="p-5 mt-12 bg-slate-50 dark:bg-neutral-900 sm:px-32 lg:px-16 lg:mt-16
        text-slate-900 dark:text-slate-50"
      >
        <main className="flex flex-col gap-6 h-full justify-center items-left cursor-default">
          <div>
            <h1 className="uppercase font-conduitbold text-2xl xl:text-4xl">
              KONSULENTPRÆSENTATION
            </h1>
            <div className="w-24 h-1 bg-yellow-400"></div>
          </div>
          <p>
            Overblik over Mentorplans konsulenter, som kan downloades eller
            printes.
          </p>
          <div className="flex flex-row gap-6 justify-center items-center">
            <a href="/pdf/side_1.pdf">
              <Image
                src={pageOne || "/placeholder.svg"}
                width={512}
                height={512}
                alt="Medarbejder billed"
                className="w-full h-full object-cover cursor-pointer"
              />
            </a>
            <a href="/pdf/side_2.pdf">
              <Image
                src={pageTwo || "/placeholder.svg"}
                width={512}
                height={512}
                alt="Medarbejder billed"
                className="w-full h-full object-cover cursor-pointer"
              />
            </a>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
