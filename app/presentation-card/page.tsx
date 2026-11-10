import type { Metadata } from "next";
import Image from "next/image";
import pageOne from "@/public/images/A4_page_1.jpg";
import pageTwo from "@/public/images/A4_page_2.jpg";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Konsulentpræsentation",
  description: "Overblik over Mentorplans konsulenter, som kan downloades eller printes som PDF.",
  path: "/presentation-card/",
});

const PAGES = [
  { href: "/pdf/side_1.pdf", img: pageOne, label: "Konsulentpræsentation side 1 (PDF)" },
  { href: "/pdf/side_2.pdf", img: pageTwo, label: "Konsulentpræsentation side 2 (PDF)" },
];

export default function PresentationCard() {
  return (
    <main className="mt-16 bg-slate-50 dark:bg-neutral-900 text-slate-900 dark:text-slate-50">
      <div className="container-page section-y text-block justify-center cursor-default">
        <div>
          <h1 className="uppercase font-conduitbold text-2xl xl:text-4xl">Konsulentpræsentation</h1>
          <div className="w-24 h-1 bg-yellow-400" />
        </div>
        <p>Overblik over Mentorplans konsulenter, som kan downloades eller printes.</p>
        <div className="flex flex-row gap-6 lg:gap-10 justify-center items-center">
          {PAGES.map((p) => (
            <a key={p.href} href={p.href} target="_blank" rel="noopener" aria-label={p.label}>
              <Image src={p.img} alt={p.label} className="w-full h-full object-cover" />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
