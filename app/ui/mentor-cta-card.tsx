import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function MentorCtaCard() {
  return (
    <div className="relative bg-slate-50 flex flex-col shadow-xl group overflow-hidden">
      <div className="mb-5 h-64 2xl:h-96">
        <Image
          src="/images/silhouette.png"
          width={512}
          height={512}
          alt="Silhouette representing a potential mentor"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="px-5">
        <p className="uppercase font-conduitbold text-xl text-slate-700 xl:text-base">
          Du kunne være her
        </p>
        <p className="uppercase font-conduitbold text-xs xl:text-sm 2xl:text-base text-slate-500 xl:text-xs">
          Bliv mentor i vores team
        </p>
      </div>
      <div className="flex flex-row justify-between p-5">
        <div>
          <div className="flex flex-row gap-1 items-center">
            <EnvelopeIcon className="text-slate-950 w-5" aria-hidden="true" />
            <p className="font-conduit text-xs xl:text-sm 2xl:text-base text-slate-800 xl:text-xs">
              jl@mentorplan.dk
            </p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <PhoneIcon className="text-slate-950 w-5" aria-hidden="true" />
            <a
              href="tel:+4542955969"
              className="font-conduit text-slate-800 text-xs xl:text-sm 2xl:text-base"
            >
              42 95 59 69
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-slate-50 opacity-0 overflow-hidden group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-5">
        <p className="uppercase text-slate-700 font-conduitbold mt-4">
          Bliv en del af vores team
        </p>
        <p className="uppercase text-slate-700 font-conduit bg-slate-200 dark:bg-stone-200 mt-2">
          Muligheder
        </p>
        <ul className="list-disc list-inside mt-1 text-xs xl:text-sm 2xl:text-base">
          <li className="text-slate-950">Fleksible arbejdstider</li>
          <li className="text-slate-950 ">Professionel udvikling</li>
          <li className="text-slate-950">Meningsfuldt arbejde</li>
        </ul>
        <p className="uppercase text-slate-700 font-conduit bg-slate-200 dark:bg-stone-200 mt-2">
          Krav
        </p>
        <ul className="list-disc list-inside mt-1 text-xs xl:text-sm 2xl:text-base">
          <li className="text-slate-950">Relevant uddannelse</li>
          <li className="text-slate-950">Erfaring med mentoring</li>
          <li className="text-slate-950">Gode kommunikationsevner</li>
        </ul>
        <Link
          href="/contact"
          className="absolute bottom-0 right-0 font-conduit text-slate-100 text-lg text-center text-wrap size-20 lg:size-20 xl:size-16 2xl:size-20"
        >
          <div className="size-40 rounded-full border-2 bg-yellow-400 dark:bg-yellow-500 text-slate-950 p-5 uppercase font-conduitbold text-sm rounded-full -rotate-45 lg:size-48 xl:size-36 xl:p-4 xl:text-xs 2xl:text-base">
            Kontakt
          </div>
        </Link>
      </div>
    </div>
  );
}
