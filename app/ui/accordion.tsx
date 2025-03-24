"use client"

import type React from "react"
import { useState, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left bg-yellow-400"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-conduitbold text-2xl xl:text-4xl uppercase text-slate-900">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-slate-900" />
        ) : (
          <ChevronDown className="h-6 w-6 text-slate-900" />
        )}
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0" }}
      >
        <div className="px-6 pb-4">{children}</div>
      </div>
    </div>
  )
}

export function Accordion() {
  return (
    <div className="w-full">
      <AccordionItem title="Hurtigt i job">
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-5">Målgruppe</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Forløbet henvender sig til borgere med få udfordringer, der er motiverede, mødestabile og klar til
          hurtigt at komme i arbejde.<br></br>
          Pletter på straffeattesten er ikke en hindring, så længe der er åben dialog.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Sådan arbejder vi</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>Vi fokuserer på en hurtig overgang til arbejdsmarkedet, uden fokus på relationsopbygning eller
            parallelindsatser.</li>
          <li>Professionelt CV og ansøgninger: Borgeren får hjælp til at udarbejde et professionelt CV og
            relevante ansøgninger.</li>
          <li>
            Netværk og kontakt: Vi aktiverer vores netværk, men kan også opsøge nye virksomheder for at
            finde relevante jobmuligheder.
          </li>
        </ul>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Vejen mod job</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Hurtige resultater: Vi arbejder for at få borgeren til én eller flere jobsamtaler inden for maksimalt
          fire uger. <br></br>

          Fokus på handling og progression: Målet er at skabe en effektiv og målrettet indsats.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Fastholdelse i job</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Hvis der opstår behov for støtte i ansættelsen, kan vi tilbyde et fastholdelsesforløb. Du kan finde
          oplysninger om det i vores fastholdelsesbeskrivelse.
        </p>
      </AccordionItem>

      <AccordionItem title="HÅNDHOLDT STØTTE TIL BORGERE LÆNGERE VÆK FRA ARBEJDSMARKEDET">
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-5">Målgruppe</h3>
        <p className="text-slate-900 dark:text-slate-50">Forløbet er til borgere, der befinder sig længere væk fra arbejdsmarkedet og har brug for en
          håndholdt og fleksibel indsats, der tager højde for deres individuelle situation.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-5">Målgruppen kan omfatte:</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>
            Borgere med psykiske udfordringer, der påvirker deres hverdag og mulighed for beskæftigelse.
          </li>
          <li>
            Borgere med en misbrugshistorik eller som aktuelt er i misbrugsbehandling.
          </li>
          <li>
            Borgere med en plettet straffeattest, tidligere kriminalitet eller som har afsonet fængselsstraf.
          </li>
          <li>
            Borgere, der har været en del af en bandegruppering eller haft tætte relationer til et kriminelt miljø.
          </li>
          <li>
            Borgere, der har haft eller stadig har en udreagerende adfærd.
          </li>
          <li>
            Borgere, der har været isolerede i længere tid eller har et begrænset netværk.
          </li>
          <li>
            Borgere med udfordringer i forhold til mødestabilitet, motivation eller daglig struktur.
          </li>
          <li>
            Borgere med fysiske skånehensyn, som kræver særlig tilpasning i forløbet.
          </li>
        </ul>

        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Sådan arbejder vi</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Vores indsats bygger på en 360-graders tilgang, hvor vi arbejder helhedsorienteret og støtter
          borgerne i at få skabt stabilitet i deres liv. Vi afdækker barrierer og arbejder målrettet med de
          udfordringer, der står i vejen for, at borgerne kan tage næste skridt mod beskæftigelse. <br></br> <br></br>

          Forløbet tilpasses individuelt og kan variere i intensitet fra ét møde om ugen til flere møder
          ugentligt, afhængigt af borgerens behov og progression.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Vi er tilgængelige 24/7</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Vi sikrer løbende støtte og vejledning, også hvis der opstår akutte behov uden for møderne.
          Borgerne kan altid få fat på os telefonisk, når der er brug for det.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Vores indsats omfatter blandt andet:</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>
            Relationsarbejde – Vi skaber en tillidsfuld relation til borgeren, der danner grundlag for udvikling
            og progression.
          </li>
          <li>
            Motiverende samtaler – Vi arbejder med at styrke borgerens motivation og tro på egne evner.
          </li>
          <li>
            Stabilitet og struktur – Vi hjælper med at skabe faste rammer i borgerens hverdag og styrke
            mødestabiliteten.
          </li>
          <li>
            Støtte i parallelindsatser – Vi samarbejder med misbrugscentre, psykiatrien, Kriminalforsorgen
            m.m. for at sikre en helhedsorienteret indsats.
          </li>
          <li>
            Social eksponering og mentalt overskud – Vi anvender aktiviteter som walk and talks, saunagus
            og fysisk træning for at øge trivsel og overskud.
          </li>
          <li>
            Base i Kødbyen – Møderne afholdes som udgangspunkt på vores kontor i Kødbyen, hvor borgerne
            eksponeres for et professionelt miljø og får mulighed for at spejle sig i mennesker med tilknytning
            til arbejdsmarkedet. Hvis det er nødvendigt og aftalt med sagsbehandleren, kan møderne i opstarten
            afholdes i borgerens nærmiljø. Udgangspunktet er dog altid, at borgeren på sigt skal komme ind i
            Kødbyen for at komme væk fra de vante rammer.
          </li>
          <li>
            Vejen mod job – Når borgeren er klar, arbejder vi målrettet på at få dem ud i en
            virksomhedspraktik. Praktikken starter ofte med få timer ugentligt og øges gradvist, afhængigt af
            borgerens situation. Vi arbejder ud fra en JobFirst-tilgang, hvor beskæftigelse og parallelindsatser
            kan kombineres, så borgeren får den nødvendige støtte undervejs.
          </li>
        </ul>

        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Hvad bliver resultatet?</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Forløbet har fokus på at skabe progression, udvikling og stabilitet, så borgeren kan tage næste skridt
          mod beskæftigelse. Varigheden af forløbet varierer afhængigt af borgerens behov, men vi arbejder
          hele tiden målrettet på, at borgeren kommer tættere på arbejdsmarkedet.
        </p>
      </AccordionItem>

      <AccordionItem title="VURDERING AF ARBEJDSEVNE">
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-5">Målgruppe</h3>
        <p className="text-slate-900 dark:text-slate-5">
          Forløbet henvender sig til borgere, der har brug for en grundig vurdering af deres arbejdsevne. Det
          kan være borgere, der skal afklares i forhold til fleksjob, førtidspension eller ordinært arbejde på
          nedsat tid.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-5">Arbejdsmetoder</h3>
        <p className="text-slate-900 dark:text-slate-5">
          Mange af de arbejdsmetoder, vi anvender i vores forløb, <span className="font-bold">Håndholdt støtte til borgere længere væk fra arbejdsmarkedet</span>
          , går også igen her.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Sådan arbejder vi</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>
            Vi vurderer borgernes ressourcer, udfordringer og ønsker og afdækker, hvor de står i forhold til
            arbejdsmarkedet. Forløbet er en kombination af &quot;Hurtigt i job&quot; og &quot;Målrettet støtte,&quot; afhængigt af borgerens
            situation:

          </li>
          <li>
            Få udfordringer: Borgeren kan hurtigt komme ud på en arbejdsplads i praktik eller lønnede timer, afhængigt
            af hvor de er i deres proces. Praktikkens varighed afstemmes løbende med sagsbehandler.
          </li>
          <li>
            Flere udfordringer: Vi arbejder med de barrierer, der fylder, og støtter borgerne i at håndtere dem. Det
            kan indebære støtte i eksisterende parallelindsatser eller opstart af nye.
          </li>
          <li>
            Vi tilbyder aktiviteter som fysisk træning og saunagus, der styrker borgernes fysiske og psykiske velvære.
            Samtidig fungerer møder i Kødbyen som eksponeringsforløb, hvor borgerne kan træne sociale færdigheder,
            opbygge selvtillid og tro på egne evner. Dette er særligt relevant for borgere, der oplever angst, har svært
            ved at forlade hjemmet, eller har andre udfordringer, som kræver en gradvis tilgang til arbejdsmarkedet.
          </li>
        </ul>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Fokus</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Forløbet har som fokus at skabe en realistisk og individuel vurdering af borgerens arbejdsevne. Der
          tages højde for eventuelle skånehensyn, behov for hjælpemidler og andre forhold, der kan påvirke
          borgerens arbejdsmuligheder.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Resultat</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Forløbet afsluttes med en arbejdsevnebeskrivelse, som kan bruges som dokumentation på
          rehabiliteringsmødet.
        </p>
      </AccordionItem>

      <AccordionItem title="FASTHOLDELSESFORLØB">
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-5">Målgruppe</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>
            Borgere, der via samarbejde med Mentorplan er kommet i job eller uddannelse, men som vurderes
            at have behov for ekstra støtte i en overgangsperiode for at sikre fastholdelse og minimere risikoen
            for tilbagefald.
          </li>
        </ul>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Hvad vi gør</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>Fleksibel sparring og rådgivning</li>
          <li>Telefonisk kontakt og fysiske møder på arbejdspladsen efter behov</li>
          <li>Mulighed for at genoptage en mere intensiv indsats, hvis nødvendigt</li>
          <li>Forløbet varer typisk mellem 4-12 uger</li>
        </ul>

        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Fokus</h3>
        <p className="text-slate-900 dark:text-slate-50">
          At sikre, at borgeren fastholdes i job eller uddannelse gennem en tryg overgang, hvor tilbagefald
          minimeres.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Resultat</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Borgeren opnår en stabil og selvstændig hverdag uden behov for yderligere støtte.
        </p>
      </AccordionItem>
    </div>
  )
}

