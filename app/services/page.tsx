import Image from "next/image";
import CtaButton from "../ui/cta-button";

export default function Services() {
  return (
    <>
      <section
        id="Services"
        className="p-5 bg-slate-200 dark:bg-neutral-800 rounded-[3rem]
        lg:px-32"
      >
        <main
          className="flex flex-col gap-4 py-8 h-full justify-between items-center
        lg:flex-row lg:flex-wrap
        2xl:flex-nowrap"
        >
          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none shrink-0
            lg:basis-5/12
            2xl:basis-3/12"
          >
            <Image
              src="/images/beskæftigelsesindsatser.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h2
              className="text-slate-700 font-bold text-lg font-conduit px-5 uppercase break-words
              2xl:text-sm"
            >
              Beskæftigelsesindsatser
            </h2>
            <p
              className="text-slate-900 text-center px-5
              lg:text-base
              2xl:text-sm
              "
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <CtaButton
              text="Læs Mere"
              href="/service-youth"
              type="button"
            ></CtaButton>
          </div>

          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none shrink-0
            lg:basis-5/12
            2xl:basis-3/12"
          >
            <Image
              src="/images/ungeindsatser.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h2
              className="text-slate-700 font-bold text-lg font-conduit px-5 uppercase
              2xl:text-base"
            >
              Ungeindsatser
            </h2>
            <p
              className="text-slate-900 text-center px-5
              lg:text-base
              2xl:text-sm"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <CtaButton
              text="Læs Mere"
              href="/service-youth"
              type="button"
            ></CtaButton>
          </div>

          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none shrink-0
            lg:basis-5/12
            2xl:basis-3/12"
          >
            <Image
              src="/images/Konsulenter.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h2
              className="text-slate-700 font-bold text-lg font-conduit px-5 uppercase
              2xl:text-sm"
            >
              Socialindsatser
            </h2>
            <p
              className="text-slate-900 text-center px-5
              2xl:text-sm
              lg:text-base"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <CtaButton
              text="Læs Mere"
              href="/service-social"
              type="button"
            ></CtaButton>
          </div>

          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none shrink-0
            lg:basis-5/12
            2xl:basis-3/12"
          >
            <Image
              src="/images/Den_gode_historie.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h2
              className="text-slate-700 font-bold text-lg px-5 font-conduit uppercase
              2xl:text-base"
            >
              Den Gode Historie
            </h2>
            <p
              className="text-slate-900 text-center px-5
              lg:text-base
              2xl:text-sm"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <CtaButton
              text="Læs Mere"
              href="/social-feed"
              type="button"
            ></CtaButton>
          </div>
        </main>
      </section>
    </>
  );
}
