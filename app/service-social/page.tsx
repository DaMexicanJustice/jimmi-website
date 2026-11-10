import type { Metadata } from "next";
import Image from "next/image";
import SlideIn from "../ui/slide-in";
import ScrollFadeinList from "../ui/scroll-fadein-list";
import Prices from "../ui/prices";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Social indsats under § 85 - bostøtte",
  description:
    "Bostøtte efter Servicelovens § 85 til voksne med psykiske, fysiske eller sociale udfordringer. ADL-træning, aktiviteter, tværfagligt samarbejde og støtte 24/7.",
  path: "/service-social/",
});

const bulletItems = [
  {
    title: "Relation og støtte",
    content:
      "Vi bygger en tæt relation til borgerne og støtter dem gennem både store og små udfordringer.",
  },
  {
    title: "Aktiviteter med mening",
    content:
      "Vi opfordrer borgerne til at deltage i meningsfulde aktiviteter udenfor hjemmet, når det er muligt, for at styrke deres sociale netværk og forbedre deres livskvalitet. Det giver borgerne mulighed for at opleve nye perspektiver og bryde med isolation.",
  },
];

const listItems = [
  {
    title: "ADL-træning (Almindelig Daglig Levevis)",
    content:
      "Vi støtter borgerne i at håndtere basale dagligdagsopgaver som oprydning, madlavning, budgettering og e-Boks, så de kan skabe en mere struktureret og selvstændig tilværelse i egen bolig.",
  },
  {
    title: "Kontorfællesskab i Kødbyen",
    content:
      "Vi inviterer borgerne til vores kontor i Kødbyen, hvor de kan få en kop kaffe, opleve et inspirerende miljø og møde nye mennesker. Dette giver dem mulighed for at komme ud af deres hjem og opleve noget andet.",
  },
  {
    title: "Walk & Talks",
    content:
      "Vi kombinerer samtale med gåture, enten i borgerens nærområde eller i Kødbyen, hvor vores kontor ligger. Kødbyen er et hyggeligt område, der giver mulighed for at opleve et andet miljø og samtidig få en uformel snak.",
  },
  {
    title: "Træning i SATS",
    content:
      "Vi tilbyder træningsforløb, hvor borgerne kan træne sammen med deres støttekontaktperson og styrke både deres fysiske og mentale sundhed.",
  },
  {
    title: "Sauna-gus",
    content:
      "Efter træning tilbyder vi sauna-gus for at fremme afslapning og mental balance.",
  },

  {
    title: "Aktiviteter udenfor hjemmet",
    content:
      "For de borgere, der har mulighed for det, tilbyder vi aktiviteter, der hjælper dem med at bryde isolation og skabe sociale relationer:",
  },
];
const listItemsTwo = [
  {
    title: "Samarbejde med eksisterende indsatser",
    content:
      "Vi koordinerer vores støtte med borgerens nuværende forløb, som f.eks. misbrugsbehandling, psykiatrisk behandling eller andre indsatser, for at skabe en sammenhængende indsats. Vi deltager også i møder med kommunen og andre relevante aktører for at sikre, at der er fælles retning i borgerens forløb.",
  },
  {
    title: "Café Exit",
    content:
      "Café Exit er et fællesskab for tidligere indsatte, der tilbyder madklubber, kultureftermiddage og psykologsamtaler. Indsatsen fokuserer på at hjælpe borgere med at skabe et nyt netværk, bryde med gamle miljøer og opbygge en stabil hverdag. Mentorplan etablerer kontakten til Café Exit og deltager gerne i de første møder, indtil borgeren er tryg ved selv at deltage.",
  },
  {
    title: "Retshjælpen",
    content:
      "Retshjælpen tilbyder gratis juridisk rådgivning med fokus på spørgsmål som boligforhold, kontrakter og sociale rettigheder. De hjælper med at skabe klarhed og finde løsninger på komplekse juridiske udfordringer. Mentorplan sikrer kontakten til Retshjælpen og støtter borgeren ved at deltage i nødvendige møder.",
  },
  {
    title: "Gadejuristen",
    content:
      "Gadejuristen yder juridisk bistand til socialt udsatte med fokus på gældsrådgivning og boligproblemer. De arbejder fleksibelt og er kendt for deres opsøgende tilgang. Mentorplan opretter kontakten til Gadejuristen og deltager i møderne efter behov, indtil borgeren selv kan varetage kontakten.",
  },
];

export default function ServiceSocial() {
  return (
    <section
      id="service-social"
      className="mt-16 overflow-x-hidden bg-slate-50 dark:bg-neutral-900"
    >
        <main className="container-page section-y stack">
          <div className="text-block">
            <h1 className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center lg:self-start lg:text-4xl">
              Social indsats under § 85
            </h1>
            <p className="text-slate-900 dark:text-slate-50">
              Hos Mentorplan tilbyder vi bostøtte i henhold til Servicelovens §
              85, hvor vi hjælper voksne borgere med psykiske, fysiske eller
              sociale udfordringer med at skabe stabilitet og struktur i deres
              hverdag. Vores indsats er ikke blot praktisk hjælp, men en
              helhedsorienteret støtte, der skaber muligheder for personlig
              udvikling og sociale relationer.
            </p>
          </div>

          <div
            className="split justify-between items-center"
          >
            <div className="text-block lg:basis-7/12 2xl:basis-6/12">
              <h2 className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold lg:text-4xl lg:text-left">
                Vores baggrund
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Mentorplans team består af erfarne fagfolk inden for socialt
                arbejde, pædagogisk arbejde og politi. Vi arbejder med en bred
                vifte af socialt udsatte borgere, der kan have psykiske
                udfordringer, sociale vanskeligheder eller en kriminel baggrund.
                Uanset om borgeren har brug for støtte på grund af mentale
                udfordringer eller sociale problemer, har vi erfaring med at
                hjælpe dem gennem deres individuelle livssituation.
              </p>
              <p className="text-slate-900 dark:text-slate-50">
                For de borgere, der har levet et liv med kriminalitet eller
                været en del af et bandemiljø, trækker vi på vores særlige
                erfaring fra politiarbejde og bande-exitprogrammer. Denne
                erfaring gør os i stand til at hjælpe dem med at bryde med det
                kriminelle miljø og skabe et stabilt liv uden kriminalitet.
                Vores indsats er dog ikke begrænset til denne gruppe – vi
                tilpasser vores støtte til den enkelte borgers behov, uanset
                baggrund.
              </p>
            </div>
            <SlideIn className="lg:basis-5/12 2xl:basis-6/12 overflow-hidden">
              <Image
                src="/images/specialister.jpg"
                width={430}
                height={370}
                alt="Mentorplans erfarne fagfolk inden for socialt arbejde, pædagogik og politi"
                className="object-cover w-full"
              />
            </SlideIn>
          </div>

          <div
            className="split justify-between items-center"
          >
            <div
              className="text-block items-center lg:items-start lg:basis-7/12 2xl:basis-6/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold lg:text-4xl"
              >
                Vores tilgang
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Hos Mentorplan møder vi borgerne med respekt, åbenhed og
                ordentlighed. Vi tror på, at en stærk relation er nøglen til at
                skabe varige forandringer i borgerens liv. Vi arbejder tæt
                sammen med borgeren og sikrer, at de føler sig set og hørt –
                både i hjemmet og når det kommer til deres livsforløb. Vores
                tilgang er at tilbyde en helhedsorienteret indsats, der hjælper
                borgerne med at få struktur i hverdagen, samtidig med at de får
                mulighed for at deltage i sociale aktiviteter, der kan give dem
                en større livskvalitet.
              </p>
              <ScrollFadeinList
                useBackground={false}
                items={bulletItems}
                textAlign={"text-left"}
                textColor="text-slate-900 dark:text-slate-50"
              />
            </div>
            <SlideIn className="lg:basis-5/12 2xl:basis-6/12 overflow-hidden">
              <Image
                src="/images/udsatte.jpg"
                width={430}
                height={370}
                alt="Helhedsorienteret støtte til socialt udsatte borgere"
                className="w-full object-cover"
              />
            </SlideIn>
          </div>

          <div
            className="text-block justify-between items-center lg:items-start"
          >
            <div
              className="text-block justify-between lg:w-6/12"
            >
              <h2 className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold lg:text-4xl lg:text-left lg:basis-8/12">
                Hvad tilbyder vi
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Mentorplan tilbyder en kombination af praktisk støtte og
                aktiviteter, der gør det muligt for borgerne at udvikle sig
                socialt og personligt. Vores indsats er skræddersyet til den
                enkelte borgers behov, så vi sikrer, at de får præcis den
                støtte, de har brug for.
              </p>
              <p className="text-slate-900 dark:text-slate-50">
                Vi er tilgængelige 24/7 og arbejder fleksibelt på forskellige
                tidspunkter af ugen, så vi kan tilpasse vores indsats efter
                borgerens behov. Uanset om der er brug for støtte i dagtimerne,
                om aftenen eller i weekenden, er vi til stede.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2 bg-yellow-400 py-5 px-10 shadow-lg lg:p-10 2xl:p-14">
              {listItems.map((item, index) => (
                <div key={index}>
                  <div className="flex h-full">
                    <ScrollFadeinList
                      useBackground={true}
                      items={[item]}
                      textAlign={"text-left"}
                      textColor="text-slate-900"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="text-block justify-between items-center lg:items-start"
          >
            <div
              className="text-block justify-between lg:w-6/12"
            >
              <h2 className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold lg:text-4xl lg:text-left lg:basis-8/12">
                Tværfagligt samarbejde
              </h2>
              <p className="text-slate-900 dark:text-slate-50">
                Vi arbejder tæt sammen med relevante aktører for at sikre, at
                borgerne får den bedst mulige støtte. Vores tværfaglige
                samarbejde involverer både eksisterende og nye indsatser, der
                kan hjælpe borgeren bedst muligt:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-1 bg-yellow-400 py-5 px-10 shadow-lg lg:p-10 2xl:p-14">
              {listItemsTwo.map((item, index) => (
                <div key={index}>
                  <div className="flex h-full">
                    <ScrollFadeinList
                      useBackground={true}
                      items={[item]}
                      textAlign={"text-left"}
                      textColor="text-slate-900"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Prices />
        </main>
      </section>
  );
}
