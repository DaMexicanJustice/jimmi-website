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
        <span className="font-conduitbold text-2xl xl:text-4xl uppercase text-slate-900 dark:text-slate-50">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-slate-900 dark:text-slate-50" />
        ) : (
          <ChevronDown className="h-6 w-6 text-slate-900 dark:text-slate-50" />
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
          Borgere med få udfordringer, der er motiverede, mødestabile og klar til hurtigt at komme i arbejde.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Hvad vi gør</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>CV og jobansøgning: Professionelt CV og målrettede ansøgninger.</li>
          <li>Afdækning af interesser: Borgerens interesser og ønskede jobs afdækkes.</li>
          <li>
            Virksomhedsnetværk: Brug af vores netværk eller opsøgning af nye virksomheder. Pletter på straffeattesten er
            ikke en barriere, så længe der er åben dialog.
          </li>
        </ul>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Fokus</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Ikke på relationer eller parallelindsatser, men udelukkende på en hurtig overgang til arbejdsmarkedet.
          Borgeren mærker progression og handling fra start.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Resultat</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Borgeren kommer til én eller flere jobsamtaler inden for maksimalt fire uger.
        </p>
      </AccordionItem>

      <AccordionItem title="MÅLRETTET STØTTE TIL BORGERE LÆNGERE VÆK FRA ARBEJDSMARKEDET">
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-5">Målgruppe</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>
            Kriminalitetsbaggrund: Borgere med en baggrund i kriminalitet eller banderelationer, der har siddet i
            fængsel i kortere eller længere perioder.
          </li>
          <li>
            Udreagerende adfærd: Har svært ved at omgås andre, kort lunte og vanskeligheder med at forstå sociale
            normer.
          </li>
          <li>
            Misbrugsproblemer: Borgere med et aktivt misbrug af stoffer eller alkohol, som endnu ikke er behandlet.
          </li>
          <li>
            Psykiske udfordringer: Psykiske vanskeligheder, der gør det svært at fungere på arbejdsmarkedet eller i
            sociale sammenhænge.
          </li>
          <li>
            Social isolation: Har været isoleret, mangler et netværk og har svært ved at komme ud blandt mennesker.
          </li>
        </ul>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Hvad vi gør</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>
            Afklaring af udfordringer: Vi afdækker de barrierer, der står i vejen for borgerens udvikling, som misbrug,
            psykiske problemer eller sociale udfordringer.
          </li>
          <li>
            Parallelle indsatser: Vi hjælper med at etablere parallelle indsatser som misbrugsbehandling, psykologhjælp
            eller gældsrådgivning, eller samarbejder med nuværende parallelle indsatser.
          </li>
          <li>
            Socialisering og mødestabilitet: Vi træner borgerne i at møde op til aftaler, bryde isolation og opbygge
            sociale færdigheder gennem praktiske øvelser og struktureret støtte.
          </li>
          <li>
            Psykisk og fysisk træning: Vi tilbyder aktiviteter som walk-and-talks, saunagus og fysisk træning, der
            bidrager til borgerens mentale og fysiske velvære.
          </li>
        </ul>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Fokus</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Vi arbejder med borgernes specifikke udfordringer gennem parallelle indsatser og socialisering. Vi træner
          deres evne til at være mødestabile og opbygger sociale færdigheder, mens vi gradvist forbereder dem til
          arbejdsmarkedet eller uddannelse.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Resultat</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Borgerne kommer tættere på arbejdsmarkedet i et tempo, de kan følge. Hele processen sker i tæt samarbejde med
          sagsbehandlerne for at sikre, at borgeren udvikler sig uden at blive presset.
        </p>
      </AccordionItem>

      <AccordionItem title="ARBEJDSEVNEAFKLARINGSFORLØB">
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-5">Målgruppe</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>
            Borgere på sygedagpenge, i jobafklaringsforløb eller ressourceforløb, der har behov for en afklaring af
            deres arbejdsevne med henblik på fleksjob, førtidspension eller tilbagevenden til fuldtidsarbejde.
          </li>
        </ul>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Hvad vi gør</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>
            Vi vurderer borgernes ressourcer, udfordringer og ønsker og afdækker, hvor de står i forhold til
            arbejdsmarkedet. Forløbet er en kombination af &quot;Hurtigt i job&quot; og &quot;Målrettet støtte,&quot; afhængigt af borgerens
            situation:

          </li>
          <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
            <li>
              Få udfordringer: Borgeren kan hurtigt komme ud på en arbejdsplads i praktik eller lønnede timer, afhængigt
              af hvor de er i deres proces. Praktikkens varighed afstemmes løbende med sagsbehandler.
            </li>
            <li>
              Flere udfordringer: Vi arbejder med de barrierer, der fylder, og støtter borgerne i at håndtere dem. Det
              kan indebære støtte i eksisterende parallelindsatser eller opstart af nye.
            </li>
          </ul>
          <li>
            Vi tilbyder aktiviteter som fysisk træning og saunagus, der styrker borgernes fysiske og psykiske velvære.
            Samtidig fungerer møder i Kødbyen som eksponeringsforløb, hvor borgerne kan træne sociale færdigheder,
            opbygge selvtillid og tro på egne evner. Dette er særligt relevant for borgere, der oplever angst, har svært
            ved at forlade hjemmet, eller har andre udfordringer, som kræver en gradvis tilgang til arbejdsmarkedet.
          </li>
        </ul>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Fokus</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Hvordan borgeren har det, afgør tempoet i forløbet og tidspunktet for, hvornår de kan komme ud på en
          arbejdsplads. Forløbet tilpasses borgerens behov og ressourcer med fokus på at støtte dem på vej mod
          arbejdsmarkedet.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Resultat</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Vi udarbejder en arbejdsevnebeskrivelse, som er en afsluttende rapport, der kan bruges på rehabiliteringsmødet
          i forbindelse med en afklaring.
        </p>
      </AccordionItem>

      <AccordionItem title="FASTHOLDELSESFORLØB">
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-5">Målgruppe</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>
            Borgere, der er kommet i job eller uddannelse, men som mangler et netværk eller ressourcepersoner at trække
            på. Forløbet er til dem, der har brug for støtte i en overgangsperiode for at minimere risikoen for
            tilbagefald.
          </li>
        </ul>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Hvad vi gør</h3>
        <ul className="list-disc pl-6 text-slate-900 dark:text-slate-50">
          <li>
            Mentoren fortsætter som støtte i en nedjusteret indsats for at sikre, at borgeren har en kendt og
            tillidsfuld kontaktperson ved behov. Indsatsen inkluderer:
          </li>
          <li>Telefonisk kontakt og rådgivning efter behov.</li>
          <li>Fysiske møder i konkrete situationer.</li>
          <li>Tilgængelighed for sparring ved opståede udfordringer.</li>
          <li>Mulighed for at opjustere indsatsen, hvis der er behov.</li>
        </ul>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Fokus</h3>
        <p className="text-slate-900 dark:text-slate-50">
          At sikre, at borgeren fastholdes i job eller uddannelse gennem en tryg overgang, hvor tilbagefald undgås.
        </p>
        <h3 className="font-bold text-lg xl:text-xl uppercase text-slate-900 dark:text-slate-50 mt-4">Resultat</h3>
        <p className="text-slate-900 dark:text-slate-50">
          Borgeren opnår en stabil og selvstændig hverdag uden behov for yderligere støtte.
        </p>
      </AccordionItem>
    </div>
  )
}

