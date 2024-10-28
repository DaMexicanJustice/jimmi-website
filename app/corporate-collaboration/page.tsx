"use client"; // This is a client component
import { MapPin, Coffee, Share2 } from "lucide-react";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import Image from "next/image";
import CtaButton from "../ui/cta-button";
import Link from "next/link";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CorporateCollaboration() {
  const imageRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    const image = imageRef.current;

    if (image) {
      // Set initial opacity to 0
      gsap.set(image, { opacity: 0 });

      // Create the animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: "top 90%", // Animation starts when the top of the image reaches the bottom of the viewport
          end: "bottom 40%", // Animation ends when the bottom of the image reaches the top of the viewport
          scrub: true, // Allows the animation to progress based on scroll position
          markers: false, // Set to true for debugging
        },
      });

      // Animate opacity from 0 to 1
      tl.to(image, { opacity: 1, duration: 1 });

      // Clean up function
      return () => {
        tl.kill(); // Kill the animation timeline
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTriggers
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar useScrollBehavior={false} />
      <section
        id="virksomhedssamarbejde"
        className="p-5 mt-16 bg-slate-100 dark:bg-neutral-900
        sm:px-32
        lg:px-16"
      >
        <main className="w-full">
          <div className="flex flex-col justify-center lg:flex-row gap-8">
            <div className="lg:w-8/12 p-4 sm:p-6 bg-slate-50 shadow-xl font-conduit">
              <h1 className="text-2xl sm:text-3xl font-conduitbold text-slate-900 mb-4 sm:mb-6">
                ALLE HAR BRUG FOR NOGET AT STÅ OP TIL
              </h1>

              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-slate-800">
                Mentorplan søger flere virksomheder, der vil hjælpe socialt
                udsatte borgere tilbage på arbejdsmarkedet.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center font-conduitbold">
                  <MapPin className="mr-2 text-yellow-500" />
                  VI SØGER VIRKSOMHEDER I KØBENHAVNSOMRÅDET
                </h2>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["København", "Storkøbenhavn", "Nordsjælland", "Amager"].map(
                    (area, index) => (
                      <li
                        key={index}
                        className="bg-stone-200 px-3 py-2 rounded-full text-center text-sm sm:text-base"
                      >
                        {area}
                      </li>
                    )
                  )}
                </ul>
                <p className="mt-4 text-gray-600 italic text-sm sm:text-base">
                  Alt inden for ca. 40 km fra Rådhuspladsen.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 text-base sm:text-lg">
                <p>
                  Hos Mentorplan har vi allerede gode samarbejder med flere
                  virksomheder. Nu søger vi endnu flere, da vi har borgere, som
                  har brug for at komme ind på arbejds-markedet HER OG NU.
                </p>
                <p>
                  Vi siger tingene, som de er. Ved første møde afstemmer vi
                  forventninger og taler åbent om de udfordringer, borgeren har
                  haft. Åbenhed skaber de bedste forløb og sikrer gensidig
                  forståelse og respekt.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-conduitbold uppercase text-slate-700 mb-3 sm:mb-4">
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
                      <li
                        key={index}
                        className="flex items-start text-sm sm:text-base"
                      >
                        <span className="mr-2">{challenge.split(" ")[0]}</span>
                        <span>{challenge.split(" ").slice(1).join(" ")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-conduitbold uppercase text-slate-700 mb-3 sm:mb-4">
                    Hvad din virksomhed får ud af samarbejdet:
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {[
                      "Engagerede og loyale medarbejdere, der værdsætter deres nye chance.",
                      "Muligheden for at gøre en forskel ved at hjælpe socialt udsatte borgere.",
                      "Støtte og samarbejde efter behov. Vi tilpasser vores indsats, så I altid har den nødvendige opbakning. Vi er i dialog, når det giver mening, og holder fysiske møder efter behov for at sikre, at forløbet forløber som planlagt.",
                    ].map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm sm:text-base"
                      >
                        <span className="mr-2 text-orange-500">▪</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-400 p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-conduitbold uppercase text-slate-900 mb-3 sm:mb-4">
                  📸 Samarbejdspartnere
                </h3>
                <p className="text-sm sm:text-base">
                  På billedet ses jeg sammen med nogle af de virksomheder, vi
                  har eller stadig samarbejder med. Hos Mentorplan mener vi, at
                  tæt samarbejde skaber de bedste resultater.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-conduitbold uppercase text-slate-900 mb-3 sm:mb-4 flex items-center">
                  <Coffee className="mr-2 text-yellow-500" />
                  Kontakt os
                </h3>
                <p className="mb-4 text-sm sm:text-base">
                  Kontakt Mentorplan i dag for at aftale et møde. Vi byder gerne
                  på en kop kaffe ☕ på vores kontor i Kødbyen, eller vi kommer
                  ud til jer.
                </p>
                <CtaButton type="button" text="Kontakt Os" href="/contact" />
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <Link
                  href="https://www.linkedin.com/posts/jimmililjehult_dengodehistoriementorplan-activity-7231740621256876033-wDza?utm_source=share&utm_medium=member_desktop"
                  className="inline-flex items-center text-slate-700 hover:text-slate-500 hover:underline text-sm sm:text-base"
                >
                  <Share2 className="mr-2" />
                  Del gerne dette opslag i jeres netværk, så vi kan nå ud til
                  endnu flere virksomheder
                </Link>
              </div>
            </div>
            <div className="lg:w-3/12 mt-6 lg:mt-0 self-end">
              <Image
                ref={imageRef}
                alt="virksomhedssamarbejde"
                src="/images/virksomheder.jpg"
                width={400}
                height={400}
                className="w-full h-auto shadow-xl"
              />
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}
