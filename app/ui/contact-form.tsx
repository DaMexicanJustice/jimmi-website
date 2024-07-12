"use client"; // This is a client component
import TextField from "@mui/material/TextField";
import CtaButton from "./cta-button";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./spinner";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ContactFormProps {
  useSliderAnimation: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ useSliderAnimation }) => {
  const useSlider = useSliderAnimation ? "image-right" : "";

  useGSAP(() => {
    gsap.to(".slider", {
      scrollTrigger: {
        trigger: ".slider",
        start: "top 80%",
        end: "top top",
        toggleActions: "play reverse play reverse",
      },
      x: 0,
      duration: 1,
    });
  });

  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const sendEmail = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setLoading(true);
    fetch("/api/contact", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        formRef.current?.reset();
        toast.success("Din besked er afsendt!");
        setLoading(false);
        console.log("Data: " + data);
      })
      .catch((error) => {
        console.log("Error: " + error);
        setLoading(false);
        toast.error("Din besked kunne ikke afsendes");
      });
  };

  return (
    <>
      <div
        id="contact-form"
        className={`flex flex-col w-full items-center bg-slate-50 gap-1 dark:bg-slate-200 py-8 rounded slider ${useSlider}
          border-0 border-t-4 border-solid border-t-yellow-400 shadow-md shadow-slate-950/50 order-3`}
      >
        <h3
          className="text-3xl font-conduit text-slate-950 font-bold hidden
            lg:block"
        >
          +45 4295 5969
        </h3>
        <a
          href="tel:+4542955969"
          className="text-xl font-conduit text-slate-950 font-bold 
            lg:hidden lg:text-3xl"
        >
          +45 4295 5969
        </a>
        <h2
          className="text-lg text-slate-700 font-semibold font-conduit
            lg:text-lg lg:text-3xl"
        >
          Ring eller udfyld formularen
        </h2>
        <p
          className="text-slate-500 text-base text-center w-11/12
            lg:text-base lg:w-9/12"
        >
          Har du spørgsmål? Kontakt os i dag. Vi besvarer alle hverdage indenfor
          24 timer
        </p>
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="flex flex-col gap-4 w-11/12
            lg:gap-4 lg:w-9/12"
        >
          <TextField
            id="form-name"
            name="name"
            label="Dit fulde navn"
            variant="standard"
            color="warning"
            InputLabelProps={{
              style: {
                color: "#000000",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              },
            }}
            InputProps={{
              sx: {
                color: "#000000",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
              },
            }}
          />
          {/* 
          <TextField
            id="form-company-name"
            label="Firma navn"
            variant="standard"
            className="hidden"
            color="warning"
            InputLabelProps={{
              style: {
                color: "#000000",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              },
            }}
            InputProps={{
              sx: {
                color: "#000000",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
              },
            }}
          /> */}
          <div
            className="flex flex-col
              xl:flex-row xl:gap-5"
          >
            <TextField
              id="form-email"
              name="email"
              label="Din e-mail"
              variant="standard"
              type="email"
              color="warning"
              className="basis-8/12"
              InputLabelProps={{
                style: {
                  color: "#000000",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                },
              }}
              InputProps={{
                sx: {
                  color: "#000000",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                },
              }}
            />
            <TextField
              id="form-phone-number"
              name="phone"
              label="Telefon"
              variant="standard"
              type="tel"
              color="warning"
              className="basis-4/12"
              InputLabelProps={{
                style: {
                  color: "#000000",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                },
              }}
              InputProps={{
                sx: {
                  color: "#000000",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                },
              }}
            />
          </div>
          <TextField
            id="form-message"
            name="message"
            label="Besked"
            variant="outlined"
            color="warning"
            multiline
            minRows={3}
            maxRows={9}
            InputLabelProps={{
              style: {
                color: "#000000",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              },
            }}
            InputProps={{
              sx: {
                color: "#000000",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
              },
            }}
          />
          <CtaButton text="Send Besked" href="" type="submit"></CtaButton>
        </form>
        {loading ? <Spinner /> : <p></p>}
      </div>
    </>
  );
};

export default ContactForm;
