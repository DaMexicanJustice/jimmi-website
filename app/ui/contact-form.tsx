"use client";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { gsap, useGSAP } from "../lib/gsap";
import { SITE } from "../lib/site";

// Web3Forms public access key (safe to expose; it only allows submitting to the configured inbox)
const WEB3FORMS_KEY = "82f48998-eb77-44d4-973e-61bb16756382";
const REQUIRED = ["name", "email", "phone", "message"] as const;

type ContactFormProps = {
  /** Slide the form in from the right when it scrolls into view. */
  slideIn?: boolean;
};

const inputClass =
  "w-full bg-transparent border-0 border-b border-slate-500 py-1 text-lg text-black outline-none " +
  "focus:border-b-2 focus:border-orange-500 transition-colors";
const labelClass = "block text-base text-black";

export default function ContactForm({ slideIn = false }: ContactFormProps) {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  useGSAP(
    () => {
      if (!slideIn) return;
      gsap.fromTo(
        ref.current,
        { x: 2000 },
        {
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { dependencies: [slideIn] }
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Honeypot: real users never fill this hidden field
    if (formData.get("botcheck")) return;

    const missing = REQUIRED.filter((f) => !String(formData.get(f) ?? "").trim());
    if (missing.length) {
      toast.error("Mail blev ikke afsendt. Udfyld alle felter");
      return;
    }

    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "Ny besked fra mentorplan.dk");
    formData.append("from_name", SITE.name);

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || res.statusText);
      formRef.current?.reset();
      toast.success("Din besked er afsendt!");
    } catch {
      toast.error("Din besked kunne ikke afsendes. Ring eller skriv direkte til os.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={ref}
      id="contact-form"
      className="flex flex-col w-full items-center gap-1 py-8 rounded bg-slate-50 dark:bg-slate-200
      border-0 border-t-4 border-solid border-t-yellow-400 shadow-md shadow-slate-950/50"
    >
      <a href={SITE.phone.href} className="text-xl font-conduit text-slate-950 font-bold lg:text-3xl">
        {SITE.phone.display}
      </a>
      <h2 className="text-lg text-slate-700 font-semibold font-conduit lg:text-3xl">Ring eller udfyld formularen</h2>
      <p className="text-slate-500 text-base text-center w-11/12 lg:text-base lg:w-9/12">
        Har du spørgsmål? Kontakt os i dag. Vi besvarer alle henvendelser inden for 24 timer på hverdage.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 w-11/12 lg:w-9/12">
        <div>
          <label htmlFor="form-name" className={labelClass}>Dit fulde navn *</label>
          <input id="form-name" name="name" type="text" autoComplete="name" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-4 xl:flex-row xl:gap-5">
          <div className="xl:basis-8/12">
            <label htmlFor="form-email" className={labelClass}>Din e-mail *</label>
            <input id="form-email" name="email" type="email" autoComplete="email" required className={inputClass} />
          </div>
          <div className="xl:basis-4/12">
            <label htmlFor="form-phone" className={labelClass}>Telefon *</label>
            <input
              id="form-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              pattern="[0-9 +]{8,15}"
              maxLength={15}
              required
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="form-message" className={labelClass}>Besked *</label>
          <textarea
            id="form-message"
            name="message"
            rows={4}
            required
            className="w-full bg-transparent border border-slate-400 rounded p-3 text-lg text-black outline-none focus:border-2 focus:border-orange-500"
          />
        </div>
        {/* Honeypot (Web3Forms convention) */}
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
        <button
          type="submit"
          disabled={loading}
          className="self-center w-fit py-4 px-8 uppercase font-conduitbold text-sm bg-yellow-400 rounded-xs
          hover:shadow-lg hover:shadow-yellow-300/50 hover:-translate-y-1 active:translate-y-0 active:shadow-md
          disabled:opacity-60 disabled:cursor-wait transition-all duration-300 ease-in-out lg:text-base"
        >
          {loading ? "Sender…" : "Send besked"}
        </button>
      </form>
    </div>
  );
}
