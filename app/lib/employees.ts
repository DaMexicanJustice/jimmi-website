import type { StaticImageData } from "next/image";
import data from "@/app/data/employees.json";
import jimmiPic from "@/public/images/Jimmi.jpg";
import maltePic from "@/public/images/Malte.jpg";
import marckPic from "@/public/images/Marck.jpg";
import emiliePic from "@/public/images/Emilie.jpg";
import madsPic from "@/public/images/Mads.jpg";
import ninaPic from "@/public/images/Nina.jpg";
import daliborPic from "@/public/images/Dalibor.jpg";
import rebeccaPic from "@/public/images/Rebecca.jpg";
import safinePic from "@/public/images/Safine.jpg";
import silhouettePic from "@/public/images/silhouette.png";

const IMAGES: Record<string, StaticImageData> = {
  jimmiPic,
  maltePic,
  marckPic,
  emiliePic,
  madsPic,
  ninaPic,
  daliborPic,
  rebeccaPic,
  safinePic,
  silhouettePic,
};

type RawEmployee = {
  name: string;
  img: string;
  role: string;
  email: string;
  phone: string;
  linkedIn?: string;
  competences: {
    languages: Record<string, string>;
    education: Record<string, string>;
    experience: Record<string, string>;
    article: { headline: string; text: string };
    quote?: string;
    "citizen-type": string;
    resume: string;
  };
};

export type Employee = {
  slug: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  linkedIn?: string;
  image: StaticImageData;
  languages: string[];
  education: string[];
  experience: string[];
  article: { headline: string; text: string };
  quote?: string;
  citizenType: string;
  resume: string;
};

const slugify = (name: string) =>
  name
    .trim()
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** "+4542955969" -> "4295-5969" */
const formatPhone = (phone: string) =>
  phone.replace(/^\+45/, "").replace(/(\d{4})(\d{4})/, "$1-$2");

export const employees: Employee[] = (data.employees as unknown as RawEmployee[]).map((e) => ({
  slug: slugify(e.name),
  name: e.name.trim(),
  role: e.role,
  email: e.email,
  phone: e.phone,
  phoneDisplay: formatPhone(e.phone),
  linkedIn: e.linkedIn || undefined,
  image: IMAGES[e.img] ?? silhouettePic,
  languages: Object.values(e.competences.languages),
  education: Object.values(e.competences.education),
  experience: Object.values(e.competences.experience),
  article: e.competences.article,
  quote: e.competences.quote || undefined,
  citizenType: e.competences["citizen-type"],
  resume: e.competences.resume,
}));

export const getEmployee = (slug: string) => employees.find((e) => e.slug === slug);
