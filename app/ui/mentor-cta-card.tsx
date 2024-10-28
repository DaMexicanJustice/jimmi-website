import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { UserPlus } from "lucide-react";

export default function MentorCtaCard() {
  return (
    <div className="relative bg-slate-50 flex flex-col shadow-xl group overflow-hidden lg:basis-3/12 xl:p-0 xl:basis-1/5">
      <div id="image-container" className="mb-5 lg:h-full">
        <div className="relative h-72 bg-neutral-800 w-full">
          <Image
            src="/images/silhouette.png"
            width={512}
            height={512}
            alt="Medarbejder billed"
            className="w-full h-full object-cover grayscale
                      "
          />
        </div>
      </div>
      <div id="personal-info" className="px-5">
        <p className="uppercase font-conduitbold text-xl text-slate-700 xl:text-base">
          Du kunne være her
        </p>
        <p className="uppercase font-conduitbold text-sm text-slate-500 xl:text-xs">
          Bliv mentor i vores team
        </p>
      </div>
      <div id="contact-info" className="flex flex-row justify-between">
        <div className="p-5">
          <div className="flex flex-row gap-1 items-center">
            <EnvelopeIcon className="text-slate-950 w-5" />
            <p className="font-conduit text-sm text-slate-800 xl:text-xs">
              jl@mentorplan.dk
            </p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <PhoneIcon className="text-slate-950 w-5" />
            <a
              href="tel:+4542955969"
              className="font-conduit text-slate-800 text-sm xl:text-xs"
            >
              42 95 59 69
            </a>
          </div>
        </div>
        <Link
          href="/contact"
          className="absolute bottom-0 right-0 font-conduit text-slate-100 text-lg text-center text-wrap size-20 lg:size-20 xl:size-16"
        >
          <div className="size-40 rounded-full border-2 bg-yellow-400 dark:bg-yellow-500 text-slate-950 p-5 uppercase font-conduitbold text-sm rounded-full -rotate-45 lg:size-48 xl:size-36 xl:p-4 xl:text-xs">
            Ansøg Nu
          </div>
        </Link>
      </div>
      <div
        id="overlay"
        className="absolute w-full h-full bg-slate-50 opacity-0 overflow-hidden group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-5 group-hover:block"
      >
        <p className="uppercase text-slate-700 font-conduitbold">
          Bliv en del af vores team
        </p>
        <p className="uppercase text-slate-700 font-conduit bg-slate-200 dark:bg-stone-200">
          Muligheder
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-slate-950 text-xs">Fleksible arbejdstider</p>
          <p className="text-slate-950 text-xs">Professionel udvikling</p>
          <p className="text-slate-950 text-xs">Meningsfuldt arbejde</p>
        </div>
        <p className="uppercase text-slate-700 font-conduit bg-slate-200 dark:bg-stone-200">
          Krav
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-slate-950 text-xs">Relevant uddannelse</p>
          <p className="text-slate-950 text-xs">Erfaring med mentoring</p>
          <p className="text-slate-950 text-xs">Gode kommunikationsevner</p>
        </div>
        <Link
          href="/contact"
          className="absolute bottom-0 right-0 font-conduit text-slate-100 text-lg text-center text-wrap size-20 lg:size-20 xl:size-16"
        >
          <div className="size-40 rounded-full border-2 bg-yellow-400 dark:bg-yellow-500 text-slate-950 p-5 uppercase font-conduitbold text-sm rounded-full -rotate-45 lg:size-48 xl:size-36 xl:p-4 xl:text-xs">
            Ansøg Nu
          </div>
        </Link>
      </div>
    </div>
  );
}
