import { CheckIcon } from "@heroicons/react/24/outline";
import CtaButton from "../ui/cta-button";
import Slogans from "../ui/slogans";

export default function Dna() {
  const divElements = [];
  const headlines = [
    "Faglig bredde",
    "Relationsbaseret tilgang",
    "Tydelige rammer og kommunikation",
    "Tværfagligt arbejde",
    "Inspirende miljø",
  ];
  const paragraphs = [
    "Med erfaring fra socialt arbejde, politi, SSP, pædagogisk arbejde og Bandexit-programmet er vi specialister i at håndtere mange typer sager.",
    "Magna cillum nisi minim ipsum ex labore.",
    "Non sint enim eiusmod elit dolore proident nisi anim.",
    "Laborum laborum minim ipsum cillum.",
    "Excepteur laborum qui sit aliquip.",
  ];

  for (let i = 0; i < 5; i++) {
    divElements.push(
      <div key={i}>
        <div className="flex flex-row gap-4 items-center">
          <div className="bg-yellow-400 dark:bg-yellow-500 rounded-sm shadow-md">
            <CheckIcon
              className="size-6 text-slate-50 dark:text-slate-900 shrink-0
            rotate-6"
            ></CheckIcon>
          </div>

          <div>
            <h2
              className="text-slate-900 dark:text-slate-50 text-xl font-conduitbold
          lg:text-lg"
            >
              {headlines[i]}
            </h2>
            <p
              className="text-slate-900 dark:text-slate-50 text-xl
          lg:text-lg"
            >
              {paragraphs[i]}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        id="DNA"
        className="p-5 bg-slate-50 dark:bg-neutral-900
        sm:px-32
        lg:px-16 lg:py-8 lg:h-[calc(100svh+3rem)]"
      >
        <h1
          className="text-slate-950 dark:text-slate-50 text-3xl font-conduitbold text-center font-conduitbold uppercase 
            lg:text-4xl"
        >
          360° Om Borgeren
        </h1>
        <main
          className="flex flex-col
          lg:flex-row lg:justify-between lg:items-center"
        >
          {/* Left Panel / Top Panel */}
          <div
            className="flex flex-col items-center gap-10
            md:px-32
            lg:basis-5/12 lg:px-0"
          >
            <div
              className="flex flex-col gap-4
            lg:justify-start lg:gap-1"
            >
              <h2
                className="text-slate-950 dark:text-slate-50 text-2xl font-conduitbold
              lg:text-lg"
              >
                Mentorplan omfatter bl.a:
              </h2>
              <div
                className="flex flex-col gap-4 pb-5
              lg:gap-3"
              >
                {divElements}
              </div>
            </div>
            <p
              className="text-slate-800 dark:text-slate-300 text-xl w-5/5
              lg:text-sm lg:w-4/5"
            >
              Specialisterfaring, tillidsopbygning, klar kommunikation,
              tværfagligt samarbejde og et inspirerende, innovativt miljø.
              Skaber varig forandring gennem helhedsorienteret `360` støtte.
            </p>
            <CtaButton
              text="Kontakt Os"
              href="/contact"
              type="button"
              height={5}
              width={10}
            ></CtaButton>
          </div>

          <Slogans />

          {/* Right Panel / Bottom Panel */}
          {/* <div
            className="flex flex-col gap-10 py-10 items-center p-5
          lg:basis-5/12 lg:gap-2
          xl:items-start"
          >
            <h1
              className="text-slate-950 dark:text-slate-50 text-3xl font-conduitbold
            lg:text-xl"
            >
              Mollit ea
            </h1>
            <div
              className="flex flex-col gap-5
            lg:justify-start lg:gap-4"
            >
              <h2
                className="text-slate-950 dark:text-slate-50 text-2xl font-conduitbold
              lg:text-lg"
              >
                Est enim cillum cupidatat ut cupidatat dolor
              </h2>
              <div className="flex flex-col gap-4 pb-5">{divElements}</div>
            </div>
            <div
              className="flex flex-col gap-5 items-center
            lg:items-start lg:gap-2"
            >
              <p
                className="text-slate-800 dark:text-slate-300 text-xl text-justify
              lg:text-sm"
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
          </div> */}
        </main>
      </section>
    </>
  );
}
