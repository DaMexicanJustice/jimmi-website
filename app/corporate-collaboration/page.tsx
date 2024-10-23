import { MapPin, Coffee, Share2 } from "lucide-react";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import Image from "next/image";
import CtaButton from "../ui/cta-button";

export default function Component() {
  return (
    <>
      <Navbar useScrollBehavior={false} />
      <section
        id="virksomhedssamarbejde"
        className="bg-slate-100 dark:bg-neutral-900 p-5
        sm:px-32
        lg:px-16"
      >
        <main className="flex flex-col h-full gap-8 py-8 mt-12">
          <div className="flex flex-row gap-8">
            <div className="max-w-4xl p-6 bg-gradient-to-br from-slate-50 to-slate-100  shadow-lg font-conduit">
              <h1 className="text-3xl font-conduitbold text-slate-900 mb-6">
                🌅 ALLE HAR BRUG FOR NOGET AT STÅ OP TIL
              </h1>

              <p className="text-xl mb-8 text-slate-800">
                Mentorplan søger flere virksomheder, der vil hjælpe socialt
                udsatte borgere tilbage på arbejdsmarkedet.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center font-conduitbold">
                  <MapPin className="mr-2 text-yellow-500" />
                  VI SØGER VIRKSOMHEDER I KØBENHAVNSOMRÅDET
                </h2>
                <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
                  {[
                    "🏙️ København",
                    "🌆 Storkøbenhavn",
                    "🌳 Nordsjælland",
                    "🌊 Amager",
                  ].map((area, index) => (
                    <li
                      key={index}
                      className="bg-yellow-100 px-3 py-2 rounded-full text-center"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-600 italic">
                  Alt inden for ca. 40 km fra Rådhuspladsen.
                </p>
              </div>

              <div className="space-y-6 mb-8 text-lg">
                <p>
                  Hos Mentorplan har vi allerede gode samarbejder med flere
                  virksomheder. Nu søger vi endnu flere, da vi har borgere, som
                  har brug for at komme ind på arbejds-markedet HER OG NU.
                </p>
                <p>
                  Vi siger tingene, som de er. Ved første møde afstemmer vi
                  forventninger og taler åbent om de udfordringer, borgeren har
                  haft. Åbenhed skaber de bedste forløb og sikrer gensidig
                  forståelse og respekt 🤝.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-4">
                    Tidligere udfordringer kan være:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "😓 Stress eller udbrændthed",
                      "🧠 Psykiske eller fysiske helbredsproblemer",
                      "🏠 Sociale udfordringer",
                      "🚔 Tidligere kriminel adfærd",
                      "📄 Plettet straffeattest",
                      "🍃 Misbrug",
                      "❓ Andre forhold, der har gjort det svært at komme tilbage på arbejdsmarkedet",
                    ].map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">{challenge.split(" ")[0]}</span>
                        <span>{challenge.split(" ").slice(1).join(" ")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-4">
                    Hvad din virksomhed får ud af samarbejdet:
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Engagerede og loyale medarbejdere, der værdsætter deres nye chance.",
                      "Muligheden for at gøre en forskel ved at hjælpe socialt udsatte borgere.",
                      "Støtte og samarbejde efter behov. Vi tilpasser vores indsats, så I altid har den nødvendige opbakning. Vi er i dialog, når det giver mening, og holder fysiske møder efter behov for at sikre, at forløbet forløber som planlagt.",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-orange-500">▪</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-orange-200 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-yellow    -800 mb-4">
                  📸 Samarbejdspartnere
                </h3>
                <p>
                  På billedet ses jeg sammen med nogle af de virksomheder, vi
                  har eller stadig samarbejder med. Hos Mentorplan mener vi, at
                  tæt samarbejde skaber de bedste resultater.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Coffee className="mr-2 text-orange-500" />
                  Kontakt os
                </h3>
                <p className="mb-4">
                  Kontakt Mentorplan i dag for at aftale et møde. Vi byder gerne
                  på en kop kaffe ☕ på vores kontor i Kødbyen, eller vi kommer
                  ud til jer.
                </p>
                <CtaButton type="button" text="Kontakt Os" href="/contact" />
              </div>

              <div className="mt-8 text-center">
                <button className="inline-flex items-center text-slate-700 hover:text-slate-500 hover:underline">
                  <Share2 className="mr-2" />
                  Del gerne dette opslag i jeres netværk, så vi kan nå ud til
                  endnu flere virksomheder🙏
                </button>
              </div>
            </div>
            <Image
              className="w-full cover shadow-lg"
              width={400}
              height={400}
              src={"/images/virksomheder.jpg"}
              alt="virksomhedssamarbejde"
            />
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
