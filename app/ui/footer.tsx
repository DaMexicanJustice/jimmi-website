import { Linkedin } from "lucide-react";
import Logo from "./logo";
import ScrollTopButton from "./scroll-top-button";
import { SITE } from "../lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const { address, phone, email, cvr } = SITE;

  return (
    <footer id="footer" className="text-white bg-navy-950">
      <div
        className="container-page flex flex-col items-center gap-10 py-10
        lg:flex-row lg:justify-between lg:items-stretch lg:py-16 lg:min-h-[50svh]"
      >
        <div className="flex flex-row justify-between items-center w-full lg:flex-col lg:items-start lg:w-auto lg:basis-2/12">
          <Logo className="fill-white bg-gradient-mentor" />
          <p className="text-xs uppercase font-conduitbold">
            &copy; {year} {SITE.name}
          </p>
        </div>

        <address className="not-italic flex flex-col justify-center gap-1 text-center text-lg lg:text-xl lg:basis-8/12">
          <a href={address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-8">
            {address.street}, {address.postalCode} {address.city}
            <br />
            <span className="text-yellow-400 font-conduitbold">{address.building}</span>
          </a>
          <span>
            Telefon: <a href={phone.href} className="text-yellow-400">{phone.display}</a>
            <span className="hidden lg:inline"> | </span>
            <br className="lg:hidden" />
            Sikkermail: <a href={`mailto:${email}`} className="text-yellow-400">{email}</a>
          </span>
          <span className="text-base text-slate-400">CVR: {cvr}</span>
        </address>

        <div className="flex flex-row gap-5 lg:flex-col lg:justify-between lg:items-end lg:basis-2/12">
          <ScrollTopButton />
          <a href={SITE.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="Mentorplan på LinkedIn">
            <Linkedin className="size-12" />
          </a>
        </div>
      </div>
    </footer>
  );
}
