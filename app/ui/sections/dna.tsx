import { Check } from "lucide-react";
import ContactForm from "../contact-form";

const VALUES = [
  {
    title: "Faglig bredde",
    text: "Med erfaring fra socialt arbejde, politi, SSP, pædagogisk arbejde og Bandexit-programmet er vi specialister i at håndtere mange typer sager.",
  },
  {
    title: "Relationsbaseret tilgang",
    text: "Relationer er kernen i vores arbejde. Vi opbygger tillid og bruger denne til at skabe varig forandring.",
  },
  {
    title: "Tydelige rammer og kommunikation",
    text: "Vi arbejder struktureret, sætter klare rammer og sikrer tydelig kommunikation, så alle involverede ved, hvad der forventes.",
  },
  {
    title: "Tværfagligt arbejde",
    text: "Vi samarbejder med skoler, misbrugscentre, Kriminalforsorgen og andre relevante aktører for at give helhedsorienteret støtte.",
  },
  {
    title: "Døgnet rundt",
    text: "Vi er tilgængelige 24/7 og arbejder fleksibelt på forskellige tidspunkter af ugen, så vi kan tilpasse vores indsats efter borgerens behov. Uanset om der er brug for støtte i dagtimerne, om aftenen eller i weekenden, er vi til stede.",
  },
];

export default function Dna() {
  return (
    <section
      id="DNA"
      aria-labelledby="dna-heading"
      className="bg-slate-50 dark:bg-neutral-900 overflow-x-hidden"
    >
      <h2 id="dna-heading" className="sr-only">
        Det kendetegner Mentorplan
      </h2>
      <div className="container-page section-y split lg:justify-between lg:items-center">
        <ul className="flex flex-col gap-6 lg:gap-8 lg:basis-7/12 2xl:basis-8/12">
          {VALUES.map((v) => (
            <li key={v.title} className="flex flex-row gap-4 items-start">
              <span className="bg-yellow-400 rounded-sm mt-1 shadow-md">
                <Check className="size-6 text-slate-50 dark:text-slate-900 shrink-0" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-slate-900 dark:text-slate-50 text-xl font-conduitbold uppercase">{v.title}</h3>
                <p className="text-slate-900 dark:text-slate-50">{v.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center lg:basis-5/12 xl:basis-4/12">
          <ContactForm slideIn />
        </div>
      </div>
    </section>
  );
}
