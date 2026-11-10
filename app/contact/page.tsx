import type { Metadata } from "next";
import { Mail, MapPin, Phone, UserCircle } from "lucide-react";
import ContactForm from "../ui/contact-form";
import { pageMetadata } from "../lib/metadata";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt",
  description:
    "Kontakt Mentorplan på telefon, sikkermail eller via kontaktformularen. Besøg os i SOHO, Flæsketorvet 68 i Kødbyen, København V.",
  path: "/contact/",
});

const iconClass = "size-4 lg:size-6 shrink-0 mt-1";

export default function Contact() {
  const { address, phone, email } = SITE;

  return (
    <main className="mt-16 bg-slate-100 dark:bg-neutral-900 overflow-x-hidden text-slate-900 dark:text-slate-50">
      <div className="container-page section-y split justify-between items-center cursor-default">
        <div className="text-block lg:basis-6/12">
          <h1 className="uppercase font-conduitbold text-4xl">Kontaktinformation</h1>
          <address className="not-italic flex flex-col gap-4 text-lg">
            <span className="flex flex-row gap-2">
              <UserCircle className={iconClass} aria-hidden="true" />
              <span className="uppercase">{SITE.name}</span>
            </span>
            <span className="flex flex-row gap-2">
              <MapPin className={iconClass} aria-hidden="true" />
              <a href={address.mapsUrl} target="_blank" rel="noopener noreferrer">
                {address.street}, {address.postalCode} {address.city} ({address.building})
              </a>
            </span>
            <span className="flex flex-row gap-2">
              <Phone className={iconClass} aria-hidden="true" />
              <span>
                Telefon: <a href={phone.href}>{phone.display}</a>
              </span>
            </span>
            <span className="flex flex-row gap-2">
              <Mail className={iconClass} aria-hidden="true" />
              <span>
                Sikkermail: <a href={`mailto:${email}`}>{email}</a>
              </span>
            </span>
          </address>
          <p className="text-lg">
            For at besøge vores kontor i Kødbyen på SOHO kan du tage toget til enten Dybbølsbro Station eller
            Hovedbanegården. Fra begge stationer er der en kort gåtur til Kødbyen. Der er gratis parkering foran
            kontoret mellem kl. 8 og 17, med en times parkering på P-skiven.
          </p>
          <iframe
            src={address.mapsEmbedUrl}
            title="Kort over Mentorplans kontor i SOHO, Kødbyen"
            width="512"
            height="512"
            className="border-0 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="w-full shadow-lg lg:basis-6/12 xl:basis-4/12">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
