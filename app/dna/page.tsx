import { CheckIcon } from "@heroicons/react/24/outline";
import CtaButton from "../ui/cta-button";

export default function Dna() {
  const divElements = [];
  const paragraphs = [
    "Ullamco commodo elit cupidatat amet esse dolor.",
    "Magna cillum nisi minim ipsum ex labore.",
    "Non sint enim eiusmod elit dolore proident nisi anim.",
    "Laborum laborum minim ipsum cillum.",
    "Excepteur laborum qui sit aliquip.",
  ];

  for (let i = 0; i < 5; i++) {
    divElements.push(
      <div key={i}>
        <div
          className="flex flex-row gap-4 items-center
        md:gap-5"
        >
          <div className="bg-yellow-400 dark:bg-yellow-500 rounded-sm shadow-md">
            <CheckIcon
              className="size-6 text-slate-50 dark:text-slate-900 shrink-0
            rotate-6"
            ></CheckIcon>
          </div>

          <p
            className="text-slate-900 dark:text-slate-50 text-xl
          md:text-lg"
          >
            {paragraphs[i]}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        id="DNA"
        className="px-5 bg-slate-100 dark:bg-neutral-900 min-h-[calc(100svh-3rem)] max-h-max
        md:px-20 md:h-44
        xl:py-12"
      >
        <main
          className="flex flex-col items-center justify-center h-full pb-10
        md:flex-row md:gap-10 md:justify-evenly md:pb-0"
        >
          {/* Left Panel / Top Panel */}
          <div
            className="flex flex-col gap-10 py-10 items-center
          md:basis-5/12 md:gap-2
          xl:items-start xl:basis-4/12"
          >
            <h1
              className="text-slate-950 dark:text-slate-50 text-3xl font-bold font-conduit
            md:text-xl"
            >
              Mollit ea
            </h1>
            <div
              className="flex flex-col gap-5
            md:justify-start md:gap-4"
            >
              <h2
                className="text-slate-950 dark:text-slate-50 text-2xl font-bold font-conduit
              md:text-lg"
              >
                Est enim cillum cupidatat ut cupidatat dolor
              </h2>
              <div className="flex flex-col gap-4 pb-5">{divElements}</div>
            </div>
            <div
              className="flex flex-col gap-5 items-center
            md:items-start md:gap-2"
            >
              <p
                className="text-slate-800 dark:text-slate-300 text-xl text-justify
              md:text-sm"
              >
                Occaecat amet esse sit do officia deserunt laboris veniam
                eiusmod ipsum. Anim exercitation nisi nostrud ut aute. Occaecat
                consequat eu eiusmod consequat laborum laboris ullamco nulla.
              </p>
              <CtaButton
                text="Dolor laborum cillum magna"
                href=""
                type="button"
              ></CtaButton>
            </div>
          </div>

          {/* Right Panel / Bottom Panel */}
          <div
            className="flex flex-col gap-10 py-10 items-center
          md:basis-5/12 md:gap-2
          xl:items-start xl:basis-4/12"
          >
            <h1
              className="text-slate-950 dark:text-slate-50 text-3xl font-bold font-conduit
            md:text-xl"
            >
              Mollit ea
            </h1>
            <div
              className="flex flex-col gap-5
            md:justify-start md:gap-4"
            >
              <h2
                className="text-slate-950 dark:text-slate-50 text-2xl font-bold font-conduit
              md:text-lg"
              >
                Est enim cillum cupidatat ut cupidatat dolor
              </h2>
              <div className="flex flex-col gap-4 pb-5">{divElements}</div>
            </div>
            <div
              className="flex flex-col gap-5 items-center
            md:items-start md:gap-2"
            >
              <p
                className="text-slate-800 dark:text-slate-300 text-xl text-justify
              md:text-sm"
              >
                Occaecat amet esse sit do officia deserunt laboris veniam
                eiusmod ipsum. Anim exercitation nisi nostrud ut aute. Occaecat
                consequat eu eiusmod consequat laborum laboris ullamco nulla.
              </p>
              <CtaButton
                text="Dolor laborum cillum magna"
                href=""
                type="button"
              ></CtaButton>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
