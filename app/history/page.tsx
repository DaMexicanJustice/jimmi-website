"use client"; // This is a client component
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Augment the palette to include an ochre color
declare module "@mui/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}

const yellowTheme = createTheme({
  palette: {
    ochre: {
      main: "#FFD200",
      light: "#ffd71a",
      dark: "#6bd00",
      contrastText: "#000000",
    },
  },
});

export default function History() {
  return (
    <>
      <section
        id="History"
        className="px-5 bg-slate-100 dark:bg-slate-900 overflow-hidden
        md:px-32 md:py-40 md:h-[calc(100svh-6rem)]
        xl:py-0"
      >
        <main
          className="flex flex-col items-center justify-evenly gap-6 py-6 h-full
          xl:gap-10 xl:flex-row xl:justify-between xl:items-center xl:gap-1"
        >
          {/* <Image
            src="/images/Jimmi2.jpg"
            width={280}
            height={328}
            alt="Jimmi billed"
            className="drop-shadow-md
            xl:order-3 xl:w-full
            xl:basis-3/12"
          /> */}

          {/* Right panel / Bottom Panel */}
          <div
            id="contact-form"
            className="flex flex-col items-center gap-5 bg-slate-50 dark:bg-slate-200 p-5
          border-0 border-t-4 border-solid border-t-yellow-400 shadow-xl shadow-slate-950/50 order-3
          md:basis-7/12 md:gap-1 md:mb-0
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
              Har du spørgsmål – Kontakt os i dag. Vi besvarer alle hverdage
              indenfor 24 timer
            </p>
            <form
              className="flex flex-col gap-3 w-11/12
            md:gap-1 md:w-9/12"
            >
              <TextField
                id="form-name"
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
                    color: "#ffffff",
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />

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
                    color: "#ffffff",
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <div
                className="flex flex-col
              xl:flex-row xl:gap-5"
              >
                <TextField
                  id="form-email"
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
                      color: "#ffffff",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                      "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                    },
                  }}
                />
                <TextField
                  id="form-phone-number"
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
                label="Besked"
                variant="standard"
                color="warning"
                multiline
                rows={3}
                InputLabelProps={{
                  style: {
                    color: "#000000",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
                    color: "#ffffff",
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <ThemeProvider theme={yellowTheme}>
                <Button
                  className="p-2 uppercase font-bold text-xl bg-yellow-400
                  md:text-3xl
                  lg:text-sm"
                  variant="contained"
                  color="ochre"
                >
                  Send Besked
                </Button>
              </ThemeProvider>
            </form>
          </div>

          <div
            className="flex flex-col gap-10 items-center
          xl:items-start xl:justify-evenly
          xl:order-2 xl:basis-7/12"
          >
            <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-bold font-conduit
          xl:text-4xl"
            >
              Om Mentorplan
            </h1>
            <p className="text-slate-900 dark:text-slate-100 text-lg text-left leading-6">
              <span
                className="uppercase text-slate-900 dark:text-slate-100 text-lg font-bold font-conduit
          xl:text-xl"
              >
                Mentorplan
              </span>
              <br></br> Mentorplan blev etableret i 2016 med en kerneværdi: at
              hjælpe borgerne med at opnå vedvarende resultater og føre et
              meningsfuldt liv. Vi har altid været dedikeret til at tilpasse
              vores støtte og rådgivning til den enkelte borgers unikke behov.
              Når vi indleder et samarbejde med en borger, lægger vi særlig vægt
              på at opbygge en professionel relation, hvor der er ligeværdighed,
              respekt og tillid. <br></br>
              <br></br>
              <span
                className="uppercase text-slate-900 dark:text-slate-100 text-lg font-bold font-conduit
          xl:text-xl"
              >
                Beliggenhed
              </span>
              <br></br> Mentorplans kontor er beliggende i SOHO på Vesterbro i
              Kødbyen. SOHO er et kontorfællesskab med forskelligartede
              virksomheder, der sammen skaber et pulserende og inspirerende
              arbejdsfællesskab. I vores møde med borgeren er disse rammer med
              til at skabe en positiv og energisk atmosfære, som gør at borgeren
              kan blive inspireret til at tage skridtet mod beskæftigelse og
              personlig udvikling. Derfor arbejder vi hårdt på at skabe en
              atmosfære, der udstråler muligheder og positivitet. <br></br>
              <br></br>
              Læs mere om Jimmi Liljehult på LinkedIn.
            </p>
            <Link href="https://www.linkedin.com/in/jimmililjehult/">
              <FaLinkedin className="size-14 fill-blue-700 dark:fill-slate-100"></FaLinkedin>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}
