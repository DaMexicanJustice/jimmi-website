import type { Metadata } from "next";
import Hero from "./ui/sections/hero";
import History from "./ui/sections/history";
import Services from "./ui/sections/services";
import Dna from "./ui/sections/dna";
import Divider from "./ui/sections/divider";
import Environment from "./ui/sections/environment";
import { pageMetadata } from "./lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Mentorplan - Sociale indsatser og støtte til borgere i København",
    description:
      "Sammen med borger finder vi vejen. Mentorplan tilbyder ungeindsatser, beskæftigelsesindsatser, social støtte under § 85 og virksomhedssamarbejde i Københavnsområdet.",
    path: "/",
  }),
  // Avoid "… | Mentorplan | Mentorplan" from the title template
  title: { absolute: "Mentorplan - Sociale indsatser og støtte til borgere i København" },
};

export default function Home() {
  return (
    <>
      <main id="main" className="min-h-svh bg-slate-50 dark:bg-neutral-900 overflow-x-hidden">
        <Hero />
        <History />
        <Services />
        <Dna />
      </main>
      <Divider />
      <Environment />
    </>
  );
}
