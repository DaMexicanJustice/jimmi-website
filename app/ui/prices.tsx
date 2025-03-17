import ListItem from "@mui/material/ListItem";
import { Check } from "lucide-react";

export default function Prices() {
    return (
        <div
            className="flex flex-col gap-6 items-center 
           lg:w-12/12 lg:items-start"
        >
            <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold
                  xl:text-4xl"
            >
                PAKKER OG PRISER
            </h2>
            <p className="text-slate-900 dark:text-slate-100">
                Vi tilbyder fleksible forløb, hvor prisen afhænger af antallet af
                møder med borgeren og typen af forløb. Mødefrekvensen kan variere
                fra én gang om ugen til flere gange om ugen, alt efter behov. I
                intensive forløb kan der være flere konsulenter tilknyttet samme
                borger for at sikre optimal støtte.
            </p>
            <div>
                <h3
                    className="uppercase text-slate-900 dark:text-slate-100 text-xl font-conduitbold
                  xl:text-2xl"
                >
                    Inkluderet i prisen
                </h3>
                <ul className="space-y-2 mt-4 text-slate-900 dark:text-slate-50">
                    <ListItem>
                        Transport og udgifter til aktiviteter som træning og saunagus.
                    </ListItem>
                    <ListItem>Forplejning til møder med borger.</ListItem>
                    <ListItem>
                        Statusmøder i Kødbyen eller i kommunen – alt efter hvad der
                        passer bedst for sagsbehandleren.
                    </ListItem>
                    <ListItem>
                        Tilgængelighed 24/7 for både borgere, sagsbehandlere og
                        samarbejdspartnere – vi er altid klar til at støtte, rådgive
                        og hjælpe, uanset tidspunktet.
                    </ListItem>
                    <ListItem>
                        Fleksibilitet i mødetidspunkter – vi bestræber os på at holde
                        møder i hverdagen mellem kl. 8 og 16, men kan efter behov
                        afholde møder om aftenen og i weekenden.
                    </ListItem>
                </ul>
            </div>
        </div>
    )

    function ListItem({ children }: { children: React.ReactNode }) {
        return (
            <li className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>{children}</span>
            </li>
        );
    }
}