import Image from "next/image"
import CtaButton from "../ui/cta-button"
import employmentPic from "/public/images/beskæftigelsesindsatser.jpg"
import youthPic from "/public/images/ungeindsatser.jpg"
import socialPic from "/public/images/udsatte_services.jpg"
import virksomhedssamarbejde from "/public/images/virksomhedssamarbejde.jpg"

export default function Services() {
  return (
    <>
      <section
        id="Services"
        className="p-5 bg-slate-200 dark:bg-neutral-800 rounded-[3rem]
  sm:p-8
  lg:p-16"
      >
        <main
          className="grid gap-6 py-8 h-full
  grid-cols-1
  md:grid-cols-2
  xl:grid-cols-4"
        >
          <div
            className="flex flex-col w-full w-full relative gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none
            "
          >
            <Image
              src={employmentPic || "/placeholder.svg"}
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
            <CtaButton text="Læs Mere" href="/service-employment" type="button" height={3} width={6}></CtaButton>
            {/* Overlay */}
            <div
              className="flex flex-col gap-4 hidden pb-5 justify-end items-center absolute w-full h-full
                backdrop-brightness-[0.25] opacity-0 hover:opacity-100 transition-opacity
                duration-300 border-0 border-yellow-500
                md:flex md:gap-8 lg:gap-12"
            >
              <p
                className="text-slate-50 text-center px-5 overflow-hidden text-ellipsis line-clamp-4
                  lg:text-sm lg:line-clamp-6"
              >
                Mentorplan tilbyder individuelle beskæftigelsesforløb med fokus på at hjælpe borgere tilbage på
                arbejdsmarkedet. Vores 360-graders metode sikrer en omfattende vurdering af borgerens situation for at
                skabe det bedste match.
              </p>
              <CtaButton text="Læs Mere" href="/service-employment" type="button" height={3} width={6}></CtaButton>
            </div>
          </div>

          <div
            className="flex flex-col w-full relative gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none 
            "
          >
            <Image
              src={youthPic || "/placeholder.svg"}
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
            <CtaButton text="Læs Mere" href="/service-youth" type="button" height={3} width={6}></CtaButton>

            <div
              className="flex flex-col gap-4 hidden pb-5 justify-end items-center absolute w-full h-full
                backdrop-brightness-[0.25] opacity-0 hover:opacity-100 transition-opacity
                duration-300 border-0 border-yellow-500
                md:flex md:gap-8 lg:gap-12"
            >
              <p
                className="text-slate-50 text-center px-5 overflow-hidden text-ellipsis line-clamp-4
                  lg:text-sm lg:line-clamp-6"
              >
                Mentorplan tilbyder ungeindsatser rettet mod unge op til 23 år, der har brug for hjælp til at skabe
                stabilitet og retning i deres liv. Vores team består af erfarne fagfolk, der arbejder med relationer,
                fritidsjob, beskæftigelse og kriminalitetsforebyggelse.
              </p>
              <CtaButton text="Læs Mere" href="/service-youth" type="button" height={3} width={6}></CtaButton>
            </div>
          </div>

          <div
            className="flex flex-col w-full relative gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none 
            "
          >
            <Image
              src={socialPic || "/placeholder.svg"}
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h2
              className="text-slate-700 font-bold text-lg font-conduit px-5 uppercase
              2xl:text-base"
            >
              Social indsats under § 85
            </h2>
            <CtaButton text="Læs Mere" href="/service-social" type="button" height={3} width={6}></CtaButton>
            {/* Overlay */}
            <div
              className="flex flex-col gap-4 hidden pb-5 justify-end items-center absolute w-full h-full
                backdrop-brightness-[0.25] opacity-0 hover:opacity-100 transition-opacity
                duration-300 border-0 border-yellow-500
                md:flex md:gap-8 lg:gap-12"
            >
              <p
                className="text-slate-50 text-center px-5 overflow-hidden text-ellipsis line-clamp-4
                  lg:text-sm lg:line-clamp-6"
              >
                Mentorplan tilbyder bostøtte i henhold til Servicelovens § 85, der hjælper voksne med psykiske, fysiske
                eller sociale udfordringer. Vi tilbyder 24/7 fleksibel helhedsorienteret støtte, herunder ADL-træning,
                udendørsaktiviteter og tværfagligt samarbejde for at sikre skræddersyet assistance. Vores mål er
                vedvarende positiv forandring gennem meningsfulde relationer og aktiviteter.
              </p>
              <CtaButton text="Læs Mere" href="/service-social" type="button" height={3} width={6}></CtaButton>
            </div>
          </div>

          <div
            className="flex flex-col w-full relative gap-5 justify-between items-center pb-5 bg-slate-50 shadow-md shadow-slate-500/50 dark:shadow-none 
            "
          >
            <Image
              src={virksomhedssamarbejde || "/placeholder.svg"}
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
            <CtaButton text="Læs Mere" href="/corporate-collaboration" type="button" height={3} width={6}></CtaButton>
            {/* Overlay */}
            <div
              className="flex flex-col gap-4 hidden pb-5 justify-end items-center absolute w-full h-full
                backdrop-brightness-[0.25] opacity-0 hover:opacity-100 transition-opacity
                duration-300 border-0 border-yellow-500
                md:flex md:gap-8 lg:gap-12"
            >
              <p
                className="text-slate-50 text-center px-5 overflow-hidden text-ellipsis line-clamp-4
                  lg:text-sm lg:line-clamp-6"
              >
                Mentorplan søger virksomheder i Københavnsområdet til at hjælpe socialt udsatte borgere tilbage på
                arbejdsmarkedet. Vi tilbyder åbent samarbejde og støtte til virksomheder, der ønsker at gøre en forskel.
                Kontakt Mentorplan for at aftale et møde og diskutere mulighederne.
              </p>
              <CtaButton text="Læs Mere" href="/corporate-collaboration" type="button" height={3} width={6}></CtaButton>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

