"use client";
/**
 * SPIKE: expanding consultant cards.
 * - Fewer columns (1 / 2 / 3, 4 only on 2xl) so cards are bigger.
 * - Click/tap a card to expand it to 2 columns with photo + full details;
 *   other cards animate out of the way (framer-motion `layout`).
 *
 * To undo: set USE_EXPANDING_GRID = false in app/employees/page.tsx
 * (or delete this file and the import there).
 */
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MousePointerClick, Phone, Plus, X } from "lucide-react";
import type { Employee } from "../lib/employees";

type Props = {
  employees: Employee[];
  /** Rendered as the last grid cell (e.g. the "become a mentor" card). */
  children?: React.ReactNode;
};

const spring = { type: "spring", stiffness: 300, damping: 32 } as const;

export default function EmployeeGridSpike({ employees, children }: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // Bring the expanded card into view once the layout animation has settled
  useEffect(() => {
    if (!openSlug) return;
    const t = setTimeout(() => {
      document.getElementById(`mentor-${openSlug}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 350);
    return () => clearTimeout(t);
  }, [openSlug]);

  // Close on Escape
  useEffect(() => {
    if (!openSlug) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenSlug(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openSlug]);

  return (
    <LayoutGroup>
      <p className="flex items-center gap-2 mb-4 lg:mb-6 !text-base text-slate-600 dark:text-slate-300">
        <MousePointerClick className="size-5 shrink-0 text-yellow-500" aria-hidden="true" />
        Klik på en konsulent for at se sprog, uddannelse og erfaring.
      </p>
      <ul className="grid grid-flow-row-dense grid-cols-1 gap-6 lg:gap-8 2xl:gap-10 w-full sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {employees.map((e) => {
          const open = openSlug === e.slug;
          return (
            <motion.li
              key={e.slug}
              id={`mentor-${e.slug}`}
              layout
              transition={spring}
              className={`relative bg-slate-50 shadow-xl overflow-hidden ${
                open ? "sm:col-span-2 ring-4 ring-yellow-400" : "hover:shadow-2xl transition-shadow"
              }`}
            >
              {open ? (
                <motion.div
                  layout="position"
                  className="flex flex-col md:flex-row h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                >
                  <div className="md:basis-5/12 h-72 md:h-auto">
                    <Image src={e.image} alt={`${e.name}, ${e.role}`} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="md:basis-7/12 p-6 lg:p-8 flex flex-col gap-4 text-slate-900">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h2 className="uppercase font-conduitbold text-2xl text-slate-800">{e.name}</h2>
                        <p className="uppercase font-conduitbold text-sm text-slate-500">{e.role}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpenSlug(null)}
                        aria-label={`Luk ${e.name}`}
                        className="shrink-0 rounded-full p-2 hover:bg-slate-200"
                      >
                        <X className="size-6" />
                      </button>
                    </div>

                    <Section title="Sprog">
                      <span className="text-base">{e.languages.join(", ")}</span>
                    </Section>
                    <Section title="Uddannelse">
                      <ul className="list-disc pl-5 space-y-1">
                        {e.education.map((x, i) => (
                          <li key={i} className="text-base">{x}</li>
                        ))}
                      </ul>
                    </Section>
                    <Section title="Erfaring">
                      <ul className="list-disc pl-5 space-y-1">
                        {[...e.experience].reverse().map((x, i) => (
                          <li key={i} className="text-base">{x}</li>
                        ))}
                      </ul>
                    </Section>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-base">
                      <a href={`mailto:${e.email}`} className="flex items-center gap-2 hover:underline">
                        <Mail className="w-5" aria-hidden="true" /> {e.email}
                      </a>
                      <a href={`tel:${e.phone}`} className="flex items-center gap-2 hover:underline">
                        <Phone className="w-5" aria-hidden="true" /> {e.phoneDisplay}
                      </a>
                      {e.linkedIn && (
                        <a href={e.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                          <Linkedin className="w-5 text-blue-500" aria-hidden="true" /> LinkedIn
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/employees/${e.slug}/`}
                      className="mt-auto self-start flex items-center gap-2 py-3 px-6 bg-yellow-400 uppercase font-conduitbold text-sm"
                    >
                      Læs hele profilen <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpenSlug(e.slug)}
                  aria-expanded={false}
                  aria-label={`Vis detaljer om ${e.name}`}
                  className="group flex flex-col w-full h-full text-left cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
                >
                  <motion.div layout="position" className="relative h-72 2xl:h-96 w-full overflow-hidden">
                    <Image
                      src={e.image}
                      alt={`${e.name}, ${e.role}`}
                      className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Expand affordance: always visible, not hover-only (works on touch) */}
                    <span
                      aria-hidden="true"
                      className="absolute top-3 right-3 grid place-items-center size-11 rounded-full bg-yellow-400 text-slate-900 shadow-lg
                      transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110"
                    >
                      <Plus className="size-6" strokeWidth={2.5} />
                    </span>
                  </motion.div>
                  <motion.div layout="position" className="p-5 flex flex-col gap-1 w-full">
                    <h2 className="uppercase font-conduitbold text-xl text-slate-700">{e.name}</h2>
                    <span className="uppercase font-conduitbold text-sm text-slate-500">{e.role}</span>
                    <span
                      className="mt-3 self-start flex items-center gap-2 py-2 px-4 border-2 border-yellow-400 uppercase font-conduitbold text-sm text-slate-900
                      transition-colors group-hover:bg-yellow-400"
                    >
                      Se kompetencer
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </motion.div>
                </button>
              )}
            </motion.li>
          );
        })}
        {children && (
          <motion.li layout transition={spring} className="flex [&>*]:w-full">
            {children}
          </motion.li>
        )}
      </ul>
    </LayoutGroup>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="uppercase font-conduitbold text-sm text-slate-500 bg-slate-200 px-2 py-0.5 mb-1">{title}</p>
      {children}
    </div>
  );
}
