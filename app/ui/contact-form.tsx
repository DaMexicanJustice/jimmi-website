"use client"; // This is a client component
import TextField from "@mui/material/TextField";
import CtaButton from "./cta-button";

const ContactForm = () => {
  const sendEmail = (event: any) => {
    event.preventDefault();
    fetch("/api/contact", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log("Data: " + data.message))
      .catch((error) => console.log("Error: " + error));
  };

  return (
    <>
      <div
        id="contact-form"
        className="flex flex-col items-center bg-slate-50 gap-1 dark:bg-slate-200 py-8 rounded
          border-0 border-t-4 border-solid border-t-yellow-400 shadow-md shadow-slate-950/50 order-3
          md:basis-7/12 md:mb-0
          xl:basis-4/12"
      >
        <h3
          className="text-3xl font-conduit text-slate-950 font-bold hidden
            md:block"
        >
          +45 4295 5969
        </h3>
        <a
          href="tel:+4542955969"
          className="text-xl font-conduit text-slate-950 font-bold 
            md:hidden md:text-3xl"
        >
          +45 4295 5969
        </a>
        <h2
          className="text-lg text-slate-700 font-semibold font-conduit
            md:text-lg md:text-3xl"
        >
          Ring eller udfyld formularen
        </h2>
        <p
          className="text-slate-500 text-base text-center w-11/12
            md:text-base md:w-9/12"
        >
          Har du spørgsmål? Kontakt os i dag. Vi besvarer alle hverdage indenfor
          24 timer
        </p>
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-4 w-11/12
            md:gap-4 md:w-9/12"
        >
          <TextField
            id="form-name"
            name="fullname"
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
      </div>
    </>
  );
};

export default ContactForm;
