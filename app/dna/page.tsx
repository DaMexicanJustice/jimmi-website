"use client"; // This is a client component
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

export default function Dna() {
  return (
    <>
      <section
        id="DNA"
        className="bg-slate-50 dark:bg-slate-950 bg-contact min-h-[calc(50svh+6rem)]
        md:h-44"
      >
        <main
          className="flex flex-col items-center justify-center h-full pb-10 backdrop-brightness-50 px-5
        md:flex-row md:gap-10 md:justify-between md:pb-0 md:px-32"
        >
          {/* Left Panel / Top Panel */}
          <div
            className="flex flex-col gap-10 py-10 items-center
          md:basis-4/12 md:gap-1
          xl:items-start xl:basis-5/12"
          >
            <h2
              className="text-lg font-conduit font-bold text-slate-50 uppercase
            md:text-3xl"
            >
              Vil du indgå et samarbejde?
            </h2>
            <h3
              className="text-3xl font-conduit text-slate-50 font-bold hidden
            md:block"
            >
              +45 4295 5969
            </h3>
            <a
              href="tel:+4542955969"
              className="text-xl font-conduit text-slate-50 font-bold 
            md:hidden md:text-3xl"
            >
              +45 4295 5969
            </a>
          </div>

          {/* Right panel / Bottom Panel */}
          <div
            id="contact-form"
            className="flex flex-col items-center gap-5 bg-slate-50 dark:bg-slate-200 p-5
          border-0 border-t-4 border-solid border-t-yellow-400 shadow-xl shadow-slate-950/50
          md:basis-7/12 md:gap-1 md:mb-0
          xl:basis-4/12"
          >
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
        </main>
      </section>
    </>
  );
}
