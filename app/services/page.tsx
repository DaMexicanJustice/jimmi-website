import Image from "next/image";
import CtaButton from "../ui/cta-button";

export default function Services() {
  return (
    <>
      <section
        id="Services"
        className="px-5 bg-slate-50 dark:bg-slate-950 min-h-[calc(100svh-3rem)] max-h-max
        md:px-32
        xl:py-12"
      >
        <main
          className="flex flex-col gap-8 py-8 h-full justify-center items-center
        md:flex-row md:flex-wrap
        xl:flex-nowrap"
        >
          <div
            className="flex flex-col gap-5 justify-center items-center pb-5 
            bg-slate-50 shadow-xl shadow-slate-500/50 dark:shadow-none
          md:basis-5/12 md:grow
          xl:basis-3/12 xl:grow-0"
          >
            <Image
              src="/images/beskæftigelsesindsatser.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h1 className="text-slate-700 font-bold text-lg font-conduit px-5 uppercase">
              Beskæftigelsesindsatser
            </h1>
            <p
              className="text-slate-900 text-center px-5
            md:text-base"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <CtaButton text="Læs Mere" href="/service-employment"></CtaButton>
          </div>

          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-50 shadow-xl shadow-slate-500/50 dark:shadow-none
          md:basis-5/12 md:grow
          xl:basis-3/12 xl:grow-0"
          >
            <Image
              src="/images/ungeindsatser.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h1 className="text-slate-700 font-bold text-lg font-conduit px-5 uppercase">
              Ungeindsatser
            </h1>
            <p
              className="text-slate-900 text-center px-5
            md:text-base"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <CtaButton text="Læs Mere" href="/service-youth"></CtaButton>
          </div>

          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-50 shadow-xl shadow-slate-500/50 dark:shadow-none
          md:basis-5/12 md:grow
          xl:basis-3/12 xl:grow-0"
          >
            <Image
              src="/images/Konsulenter.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h1 className="text-slate-700 font-bold text-lg font-conduit px-5 uppercase">
              Socialindsatser
            </h1>
            <p
              className="text-slate-900 text-center px-5
            md:text-base"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <CtaButton text="Læs Mere" href="/service-social"></CtaButton>
          </div>

          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-50 shadow-xl shadow-slate-500/50 dark:shadow-none
          md:basis-5/12 md:grow
          xl:basis-3/12 xl:grow-0 "
          >
            <Image
              src="/images/Den_gode_historie.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h1 className="text-slate-700 font-bold text-lg px-5 font-conduit uppercase">
              Den Gode Historie
            </h1>
            <p
              className="text-slate-900 text-center px-5
            md:text-base"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <CtaButton text="Læs Mere" href="/social-feed"></CtaButton>
          </div>
        </main>
      </section>
    </>
  );
}
