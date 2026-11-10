import Image from "next/image";
import CtaButton from "../cta-button";
import { SERVICES } from "../../lib/site";

export default function Services() {
  return (
    <section
      id="Services"
      aria-labelledby="services-heading"
      className="bg-slate-200 dark:bg-neutral-800 rounded-[3rem]"
    >
      <h2 id="services-heading" className="sr-only">
        Vores ydelser
      </h2>
      <ul className="container-page section-y grid gap-6 lg:gap-8 2xl:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((s) => (
          <li
            key={s.href}
            className="group flex flex-col w-full relative gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none"
          >
            <Image src={s.image} width={430} height={370} alt={s.alt} className="w-full object-cover" />
            <h3 className="text-slate-700 font-bold text-lg font-conduit px-5 uppercase break-words 2xl:text-base">
              {s.title}
            </h3>
            <CtaButton text="Læs mere" href={s.href} size="sm" />
            {/* Hover overlay (desktop) */}
            <div
              className="hidden md:flex flex-col gap-4 md:gap-8 lg:gap-12 pb-5 justify-end items-center absolute inset-0
              backdrop-brightness-[0.25] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            >
              <p className="text-slate-50 text-center px-5 line-clamp-4 lg:text-sm lg:line-clamp-6">{s.summary}</p>
              <CtaButton text="Læs mere" href={s.href} size="sm" tabIndex={-1} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
