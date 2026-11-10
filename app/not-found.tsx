import type { Metadata } from "next";
import CtaButton from "./ui/cta-button";

export const metadata: Metadata = {
  title: "Siden blev ikke fundet",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="container-page section-y min-h-[60svh] mt-16 flex flex-col gap-6 items-center justify-center text-center bg-slate-50 dark:bg-neutral-900 text-slate-900 dark:text-slate-50">
      <h1 className="uppercase font-conduitbold text-3xl lg:text-5xl">Siden blev ikke fundet</h1>
      <p>Siden findes ikke længere eller er flyttet.</p>
      <CtaButton text="Til forsiden" href="/" />
    </main>
  );
}
