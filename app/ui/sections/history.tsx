import Image from "next/image";
import HistoryCard from "../history-card";
import SlideIn from "../slide-in";
import teamPic from "@/public/images/team.jpg";

export default function History() {
  return (
    <section id="History" className="bg-slate-50 dark:bg-neutral-900 overflow-x-hidden">
      <div
        className="container-page section-y flex flex-col items-center gap-10
        xl:flex-row xl:justify-between xl:gap-16 2xl:gap-24"
      >
        <div className="flex flex-col gap-10 items-center lg:basis-6/12 xl:items-start xl:justify-evenly xl:basis-7/12 2xl:basis-6/12">
          <HistoryCard />
        </div>
        <SlideIn className="overflow-hidden lg:basis-6/12 xl:basis-5/12 2xl:basis-6/12">
          <Image
            alt="Mentorplans team samlet i Kødbyen"
            src={teamPic}
            sizes="(min-width: 1280px) 33vw, 100vw"
            className="object-cover w-full h-auto"
          />
        </SlideIn>
      </div>
    </section>
  );
}
