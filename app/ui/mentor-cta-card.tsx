import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import silhouettePic from "@/public/images/silhouette.png";
import { SITE } from "../lib/site";

export default function MentorCtaCard() {
  return (
    <div className="relative bg-slate-50 flex flex-col shadow-xl group overflow-hidden">
      <div className="mb-5 h-64 2xl:h-96">
        <Image src={silhouettePic} alt="Silhuet - bliv mentor hos Mentorplan" className="w-full h-full object-cover" />
      </div>
      <div className="px-5">
        <h2 className="uppercase font-conduitbold text-xl text-slate-700 xl:text-base">Du kunne være her</h2>
        <p className="uppercase font-conduitbold text-sm text-slate-500 xl:text-xs">Bliv mentor i vores team</p>
      </div>
      <div className="p-5">
        <a href={`mailto:${SITE.email}`} className="flex flex-row gap-1 items-center font-conduit text-base text-slate-800 xl:text-sm 2xl:text-base">
          <Mail className="text-slate-950 w-5 shrink-0" aria-hidden="true" />
          {SITE.email}
        </a>
        <a href={SITE.phone.href} className="flex flex-row gap-1 items-center font-conduit text-base text-slate-800 xl:text-sm 2xl:text-base">
          <Phone className="text-slate-950 w-5 shrink-0" aria-hidden="true" />
          {SITE.phone.display}
        </a>
      </div>
      <div className="absolute inset-0 bg-slate-50 opacity-0 overflow-hidden group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 ease-in-out px-5">
        <p className="uppercase text-slate-700 font-conduitbold mt-4">Bliv en del af vores team</p>
        <p className="uppercase text-slate-700 font-conduit bg-slate-200 mt-2">Muligheder</p>
        <ul className="list-disc list-inside mt-1 text-slate-950 text-sm 2xl:text-base">
          <li>Fleksible arbejdstider</li>
          <li>Professionel udvikling</li>
          <li>Meningsfuldt arbejde</li>
        </ul>
        <p className="uppercase text-slate-700 font-conduit bg-slate-200 mt-2">Krav</p>
        <ul className="list-disc list-inside mt-1 text-slate-950 text-sm 2xl:text-base">
          <li>Relevant uddannelse</li>
          <li>Erfaring med mentoring</li>
          <li>Gode kommunikationsevner</li>
        </ul>
        <Link
          href="/contact/"
          className="absolute bottom-0 right-0 font-conduit text-slate-100 text-center text-wrap size-20 xl:size-16 2xl:size-20"
        >
          <div className="size-40 rounded-full border-2 bg-yellow-400 text-slate-950 p-5 uppercase font-conduitbold text-sm -rotate-45 lg:size-48 xl:size-36 xl:p-4 xl:text-xs 2xl:text-base">
            Kontakt
          </div>
        </Link>
      </div>
    </div>
  );
}
