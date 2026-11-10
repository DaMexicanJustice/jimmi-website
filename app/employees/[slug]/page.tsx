import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { employees, getEmployee } from "../../lib/employees";
import { pageMetadata } from "../../lib/metadata";
import { SITE } from "../../lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return employees.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const e = getEmployee(params.slug);
  if (!e) return {};
  return pageMetadata({
    title: `${e.name} - ${e.role}`,
    description: e.article.headline.slice(0, 155),
    path: `/employees/${e.slug}/`,
  });
}

const boxClass = "bg-slate-200 py-2 px-2 shadow-md";
const labelClass = "uppercase font-conduitbold text-lg text-slate-500";

export default function EmployeeDetails({ params }: Props) {
  const e = getEmployee(params.slug);
  if (!e) notFound();

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: e.name,
    jobTitle: e.role,
    email: e.email,
    telephone: e.phone,
    image: `${SITE.url}${e.image.src}`,
    url: `${SITE.url}/employees/${e.slug}/`,
    worksFor: { "@id": `${SITE.url}/#organization` },
    ...(e.linkedIn ? { sameAs: [e.linkedIn] } : {}),
  };

  return (
    <main
      id="Employee-details"
      className="mt-16 bg-slate-50 dark:bg-neutral-900 font-conduit"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <div className="container-page section-y split text-center">
        <div className="flex flex-col gap-5 lg:basis-4/12">
          <div className="w-full mt-5 shadow-md lg:mt-0">
            <Image src={e.image} alt={`${e.name}, ${e.role}`} priority className="w-full h-full object-cover grayscale" />
          </div>

          <div className={boxClass}>
            <h1 className="uppercase font-conduitbold text-xl text-slate-700">{e.name}</h1>
            <p className="uppercase font-conduitbold text-lg text-slate-500">{e.role}</p>
            <a href={`mailto:${e.email}`} className="flex flex-row gap-2 justify-center items-center text-slate-800">
              <Mail className="text-slate-900 w-5" aria-hidden="true" />
              {e.email}
            </a>
            <a href={`tel:${e.phone}`} className="flex flex-row gap-2 justify-center items-center text-slate-800">
              <Phone className="text-slate-900 w-5" aria-hidden="true" />
              {e.phoneDisplay}
            </a>
          </div>

          <div className={boxClass}>
            <h2 className={labelClass}>Sprog</h2>
            {e.languages.map((l, i) => (
              <p key={i} className="text-slate-900">{l}</p>
            ))}
          </div>

          <div className={`flex flex-col ${boxClass}`}>
            <h2 className="uppercase font-conduitbold text-xl text-slate-700">Kompetencedækning</h2>
            <h3 className={labelClass}>Uddannelse/kurser</h3>
            {e.education.map((x, i) => (
              <p key={i} className="text-slate-900">{x}</p>
            ))}
            <h3 className={labelClass}>Erfaring</h3>
            {e.experience.map((x, i) => (
              <p key={i} className="text-slate-900">{x}</p>
            ))}
          </div>
        </div>

        <div className="text-block text-left lg:basis-8/12">
          <p className="text-slate-900 dark:text-slate-50 text-xl 2xl:text-3xl">{e.article.headline}</p>
          <p className="text-slate-900 dark:text-slate-50 whitespace-pre-line">{e.article.text}</p>
          <h2 className="uppercase font-conduitbold text-xl 2xl:text-3xl text-blue-950 dark:text-slate-50">
            Hvilke borgere er jeg god til
          </h2>
          <p className="text-slate-900 dark:text-slate-50">{e.citizenType}</p>
          {e.quote && (
            <blockquote className="text-center whitespace-pre-line opacity-75 dark:text-slate-50">
              <p>&ldquo;{e.quote}&rdquo;</p>
            </blockquote>
          )}
          <p className="text-slate-950 bg-yellow-400 p-5 shadow-xl">{e.resume}</p>
          <Link
            href="/employees/"
            className="self-end uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50 xl:text-3xl 2xl:text-4xl"
          >
            Tilbage<span className="font-sans text-yellow-400">|</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
