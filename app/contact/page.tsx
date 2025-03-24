"use client"; // This is a client component
import ContactForm from "../ui/contact-form";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        className="p-5 mt-12 bg-slate-100 dark:bg-neutral-900 overflow-x-hidden
        text-slate-900 dark:text-slate-50
        sm:px-32 
        lg:px-16"
      >
        <main
          className="flex flex-col gap-6 h-full justify-between items-center cursor-default py-5
          lg:flex-row"
        >
          <div
            className="flex flex-col gap-6
                lg:gap-4 lg:basis-6/12"
          >
            <h1 className="uppercase font-conduitbold text-4xl">
              Kontakt information
            </h1>
            <div className="flex flex-row gap-2">
              <UserCircleIcon className="size-4 lg:size-6 "></UserCircleIcon>
              <p className="text-lg uppercase">Mentorplan</p>
            </div>
            <div className="flex flex-row gap-2">
              <MapPinIcon className="size-4 lg:size-6 "></MapPinIcon>
              <p className="text-lg">Flæsketorvet 68, 1, 1711 København</p>
            </div>
            <div className="flex flex-row gap-2">
              <PhoneIcon className="size-4 lg:size-6 "></PhoneIcon>
              <p className="text-lg">
                Telefon: <a href="tel:+4542955969">+45 42955969</a>
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <EnvelopeIcon className="size-4 lg:size-6"></EnvelopeIcon>
              <p className="text-lg">
                Sikkermail:{" "}
                <a href="mailto:jl@mentorplan.dk" className="m-1 text-lg">
                  jl@mentorplan.dk
                </a>
              </p>
            </div>
            <p className="text-lg">
              For at besøge vores kontor i Kødbyen på Soho kan du tage toget til
              enten Dybbølsbro Station eller Hovedbanegården. Fra begge
              stationer er der en kort gåtur til Kødbyen. Der er gratis
              parkering foran kontoret mellem kl. 8 og 17, med en times
              parkering på P-skiven.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.2844839745385!2d12.559370999999999!3d55.666653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525373da1d5b59%3A0x8bc8cd4d0c582aa4!2sSOHO!5e0!3m2!1sen!2sdk!4v1720696588850!5m2!1sen!2sdk"
              width="512"
              height="512"
              className="border-0 w-full"
              loading="lazy"
            ></iframe>
          </div>
          <div
            className="w-full image-right slider shadow-lg
            lg:basis-6/12 lg:mb-0
            xl:basis-4/12"
          >
            <ContactForm useSliderAnimation={false} />
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
