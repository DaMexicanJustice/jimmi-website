import { Check } from "lucide-react";
import CtaButton from "../ui/cta-button";
import Slogans from "../ui/slogans";
import ContactForm from "../ui/contact-form";

export default function Dna() {
  const divElements = [];
  const headlines = [
    "Faglig bredde",
    "Relationsbaseret tilgang",
    "Tydelige rammer og kommunikation",
    "Tværfagligt arbejde",
    // "Inspirende miljø",
    "Døgnet rundt",
  ];
  const paragraphs = [
    "Med erfaring fra socialt arbejde, politi, SSP, pædagogisk arbejde og Bandexit-programmet er vi specialister i at håndtere mange typer sager.",
    "Relationer er kernen i vores arbejde. Vi opbygger tillid og bruger denne til at skabe varig forandring.",
    "Vi arbejder struktureret, sætter klare rammer og sikrer tydelig kommunikation, så alle involverede ved, hvad der forventes.",
    "Vi samarbejder med skoler, misbrugscentre, Kriminalforsorgen og andre relevante aktører for at give helhedsorienteret støtte.",
    // "Vores kontor i Kødbyen er beliggende i et unikt kontorfællesskab, der giver både unge og voksne borgere mulighed for at møde nye typer mennesker og blive inspireret i et motiverende miljø fyldt med iværksættere og innovative virksomheder.",
    "Vi er tilgængelige 24/7 og arbejder fleksibelt på forskellige tidspunkter af ugen, så vi kan tilpasse vores indsats efter borgerens behov. Uanset om der er brug for støtte i dagtimerne, om aftenen eller i weekenden, er vi til stede.",
  ];

  for (let i = 0; i < paragraphs.length; i++) {
    divElements.push(
      <div key={i}>
        <div className="flex flex-row gap-4 items-start">
          <div className="bg-yellow-400 dark:bg-yellow-500 rounded-sm mt-1 shadow-md">
            <Check className="size-6 text-slate-50 dark:text-slate-900 shrink-0" />
          </div>

          <div>
            <h2 className="text-slate-900 dark:text-slate-50 text-xl font-conduitbold uppercase">
              {headlines[i]}
            </h2>
            <p className="text-slate-900 dark:text-slate-50">{paragraphs[i]}</p>
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
        lg:px-16 lg:py-8"
      >
        <main
          className="flex flex-col
          lg:flex-row lg:justify-between lg:items-center"
        >
          {/* Left Panel / Top Panel */}
          <div
            className="flex flex-col items-center gap-6
            md:px-32
            lg:basis-7/12 lg:px-0
            2xl:basis-8/12"
          >
            <div
              className="flex flex-col gap-4
            lg:justify-start lg:gap-1"
            >
              <div
                className="flex flex-col gap-4 pb-5
              lg:gap-3"
              >
                {divElements}
              </div>
            </div>
          </div>

          <div
            className="flex flex-col items-center gap-10
          md:px-32
          lg:basis-4/12 lg:px-0
          2xl:basis-3/12"
          >
            <ContactForm useSliderAnimation={true} />
          </div>

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
