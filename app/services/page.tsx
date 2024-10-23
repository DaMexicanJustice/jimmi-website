import Image from "next/image";
import CtaButton from "../ui/cta-button";
import employmentPic from "/public/images/beskæftigelsesindsatser.jpg";
import youthPic from "/public/images/ungeindsatser.jpg";
import socialPic from "/public/images/Konsulenter.jpg";
import virksomhedssamarbejde from "/public/images/virksomhedssamarbejde.jpg";

export default function Services() {
  return (
    <>
      <section
        id="Services"
        className="p-5 bg-slate-200 dark:bg-neutral-800 rounded-[3rem]
        sm:px-32
        lg:px-16"
      >
        <main
          className="flex flex-col gap-6 py-8 h-full justify-center items-center
        md:flex-row md:flex-wrap
        xl:flex-nowrap"
        >
          <div
            className="flex flex-col w-full w-full relative gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none
            md:basis-5/12
            xl:basis-3/12"
          >
            <Image
              src={employmentPic}
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h2
              className="text-slate-700 font-bold text-lg font-conduit px-5 uppercase break-words
              2xl:text-base"
            >
              Beskæftigelsesindsatser
            </h2>
            <CtaButton
              text="Læs Mere"
              href="/service-employment"
              type="button"
            ></CtaButton>
            {/* Overlay */}
            <div
              id="overlay"
              className="flex-col gap-32 hidden pb-5 justify-end items-center absolute w-full h-full
                backdrop-brightness-[0.25] opacity-0 hover:opacity-100 transition-opacity
                duration-300
                md:flex"
            >
              <p
                className="text-slate-50 text-center px-5
                  lg:text-base
                  2xl:text-sm"
              >
                Ullamco Lorem fugiat aliqua duis laboris dolor ad dolore.
                Consequat eiusmod ut Lorem laboris laboris mollit sunt ad nisi
                incididunt. Culpa nostrud commodo Lorem irure Lorem.
              </p>
              <CtaButton
                text="Læs Mere"
                href="/service-employment"
                type="button"
              ></CtaButton>
            </div>
          </div>

          <div
            className="flex flex-col w-full relative gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none 
            md:basis-5/12
            xl:basis-3/12"
          >
            <Image
              src={youthPic}
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
            <CtaButton
              text="Læs Mere"
              href="/service-youth"
              type="button"
            ></CtaButton>

            <div
              id="overlay"
              className="flex flex-col gap-32 hidden pb-5 justify-end items-center absolute w-full h-full
                backdrop-brightness-[0.25] opacity-0 hover:opacity-100 transition-opacity
                duration-300
                md:flex"
            >
              <p
                className="text-slate-50 text-center px-5
                  lg:text-base
                  2xl:text-sm"
              >
                Exercitation occaecat excepteur aliquip aute cillum do. Ad duis
                ullamco consequat aliqua nostrud laborum amet ullamco Lorem.
              </p>
              <CtaButton
                text="Læs Mere"
                href="/service-youth"
                type="button"
              ></CtaButton>
            </div>
          </div>

          <div
            className="flex flex-col w-full relative gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none 
            md:basis-5/12
            xl:basis-3/12"
          >
            <Image
              src={socialPic}
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h2
              className="text-slate-700 font-bold text-lg font-conduit px-5 uppercase
              2xl:text-base"
            >
              Socialindsatser
            </h2>
            <CtaButton
              text="Læs Mere"
              href="/service-social"
              type="button"
            ></CtaButton>
            {/* Overlay */}
            <div
              id="overlay"
              className="flex flex-col gap-32 hidden pb-5 justify-end items-center absolute w-full h-full
                backdrop-brightness-[0.25] opacity-0 hover:opacity-100 transition-opacity
                duration-300
                md:flex"
            >
              <p
                className="text-slate-50 text-center px-5
                  lg:text-base
                  2xl:text-sm"
              >
                Adipisicing culpa incididunt ullamco eiusmod nisi magna ad aute
                ea exercitation do ullamco. Eiusmod labore nulla fugiat pariatur
                sit commodo nulla. Quis enim et fugiat enim. Ea veniam elit
                incididunt cillum.
              </p>
              <CtaButton
                text="Læs Mere"
                href="/service-social"
                type="button"
              ></CtaButton>
            </div>
          </div>

          <div
            className="flex flex-col w-full relative gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none 
            md:basis-5/12
            xl:basis-3/12"
          >
            <Image
              src={virksomhedssamarbejde}
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h2
              className="text-slate-700 font-bold text-lg px-5 font-conduit uppercase
              2xl:text-base"
            >
              Virksomhedssamarbejde
            </h2>
            <CtaButton
              text="Læs Mere"
              href="/social-feed"
              type="button"
            ></CtaButton>
            {/* Overlay */}
            <div
              id="overlay"
              className="flex flex-col gap-32 hidden pb-5 justify-end items-center absolute w-full h-full
                backdrop-brightness-[0.25] opacity-0 hover:opacity-100 transition-opacity
                duration-300
                md:flex"
            >
              <p
                className="text-slate-50 text-center px-5
                  lg:text-base
                  2xl:text-sm"
              >
                Elit ipsum sint tempor eu minim tempor eu et sit labore in nisi
                est amet.
              </p>
              <CtaButton
                text="Læs Mere"
                href="/corporate-collaboration"
                type="button"
              ></CtaButton>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
