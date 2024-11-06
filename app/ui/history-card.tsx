"use client";
// React
import { motion } from "framer-motion";
import { Coffee, Users, Briefcase, MapPin, ArrowRight } from "lucide-react";

export default function HistoryCard() {
  return (
    <div className="py-12">
      <main className="flex flex-col gap-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left flex flex-col gap-6"
        >
          <h1 className="text-3xl font-conduitbold uppercase text-slate-900 dark:text-slate-50">
            Velkommen til Mentorplan
          </h1>
          <p className="text-xl text-slate-900 dark:text-slate-50">
            Siden 2016 har vi brændt for at gøre en forskel – med sociale og
            beskæftigelsesrettede indsatser, der støtter unge, voksne og
            familier i at skabe varige, positive forandringer i deres liv.
          </p>
        </motion.section>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-conduitbold uppercase text-slate-900 dark:text-slate-50 ">
                  Tværfaglig tilgang
                </h2>
                <p className="text-slate-900 dark:text-slate-50">
                  Med baggrund i politi, socialrådgivning og pædagogisk arbejde
                  møder vi mennesker, hvor de er, og hjælper dem videre mod
                  deres mål. Vores forskellige perspektiver og værktøjer styrker
                  vores arbejde med at skræddersy løsninger.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Briefcase className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-conduitbold uppercase  text-slate-900 dark:text-slate-50 ">
                  Levende kontorfællesskab
                </h2>
                <p className="text-slate-900 dark:text-slate-50">
                  Vi holder til i Kødbyen, hvor den gode energi og inspirerende
                  atmosfære giver et ekstra løft til borgerne. Miljøet smitter
                  positivt af og gør en forskel for dem, vi arbejder med.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <Coffee className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-conduitbold uppercase text-slate-900 dark:text-slate-50 ">
                  Kom på besøg
                </h2>
                <p className="text-slate-900 dark:text-slate-50">
                  Er du sagsbehandler, samarbejdspartner eller bare nysgerrig?
                  Du er mere end velkommen til at kigge forbi til en kop kaffe
                  og en snak om, hvem vi er, og hvordan vi arbejder.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-conduitbold uppercase text-slate-900 dark:text-slate-50 ">
                  Kontakt
                </h2>
                <p className="text-slate-900 dark:text-slate-50">
                  Vi glæder os til at byde dig velkommen hos Mentorplan! Læs
                  mere om vores indsatser, metoder og dygtige konsulenter her på
                  hjemmesiden.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
