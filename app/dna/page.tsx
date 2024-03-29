"use client"; // This is a client component
import { CheckCircleIcon } from "@heroicons/react/24/outline";
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

const theme = createTheme({
  palette: {
    ochre: {
      main: "#eab308",
      light: "#facc15",
      dark: "#ca8a04",
      contrastText: "#242105",
    },
  },
});

export default function Dna() {
  const divElements = [];
  const paragraphs = [
    "Ullamco commodo elit cupidatat amet esse dolor.",
    "Magna cillum nisi minim ipsum ex labore.",
    "Non sint enim eiusmod elit dolore proident nisi anim.",
    "Laborum laborum minim ipsum cillum.",
    "Excepteur laborum qui sit aliquip.",
  ];

  for (let i = 0; i < 5; i++) {
    divElements.push(
      <div key={i}>
        <div
          className="flex flex-row gap-1 items-center
        md:gap-5"
        >
          <CheckCircleIcon
            className="size-10 text-blue-700 shrink-0
            md:size-8
            xl:size-6"
          ></CheckCircleIcon>
          <p
            className="text-slate-900 text-lg
          md:text-base"
          >
            {paragraphs[i]}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        id="DNA"
        className="px-5 bg-slate-300 min-h-[calc(100svh-6rem)] 
        md:px-20 md:h-44"
      >
        <main
          className="flex flex-col items-center justify-center h-full
        md:flex-row md:gap-10 md:justify-between"
        >
          {/* Left Panel / Top Panel */}
          <div
            className="flex flex-col gap-10 py-10 items-center
          md:basis-5/12 md:gap-1
          xl:items-start xl:basis-5/12"
          >
            <h1
              className="text-slate-900 text-5xl font-bold font-conduit
            md:text-xl"
            >
              Mollit ea
            </h1>
            <div
              className="flex flex-col gap-5
            md:justify-start md:gap-1"
            >
              <h2
                className="text-slate-800 text-4xl font-bold font-conduit
              md:text-lg"
              >
                Est enim cillum cupidatat ut cupidatat dolor
              </h2>
              <div className="flex flex-col gap-2 pb-5">{divElements}</div>
            </div>
            <div
              className="flex flex-col gap-5 items-center
            md:items-start md:gap-2"
            >
              <p
                className="text-slate-700 text-xl text-justify
              md:text-sm"
              >
                Occaecat amet esse sit do officia deserunt laboris veniam
                eiusmod ipsum. Anim exercitation nisi nostrud ut aute. Occaecat
                consequat eu eiusmod consequat laborum laboris ullamco nulla.
              </p>
              <ThemeProvider theme={theme}>
                <Button
                  className="p-5 uppercase font-bold text-xl bg-yellow-500
                  md:text-sm md:p-2"
                  variant="contained"
                  color="ochre"
                >
                  Quis veniam anim nulla
                </Button>
              </ThemeProvider>
            </div>
          </div>

          {/* Right panel / Bottom Panel */}
          <div
            className="flex flex-col items-center gap-5 bg-slate-100 p-5 mb-10 
          border-0 border-t-4 border-solid border-t-yellow-500 shadow-xl shadow-slate-500/50
          md:basis-7/12 md:gap-1
          xl:basis-5/12"
          >
            <a
              className="no-underline text-4xl text-blue-500 font-bold font-conduit
              md:text-xl"
              href="tel:+4542955969"
            >
              Ring: +4542955969
            </a>
            <h2
              className="text-3xl text-black font-semibold font-conduit
            md:text-lg"
            >
              Eller udfyld formularen
            </h2>
            <p
              className="text-slate-700 text-xl text-justify w-11/12
            md:text-base md:w-9/12"
            >
              Elit amet veniam anim esse sint do pariatur nisi. Et quis officia
              ea do irure consequat sit cillum.
            </p>
            <form
              className="flex flex-col gap-3 w-11/12
            md:gap-1 md:w-9/12"
            >
              <TextField
                id="form-name"
                label="Dit fulde navn"
                variant="standard"
                InputLabelProps={{
                  style: {
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
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
                InputLabelProps={{
                  style: {
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
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
                  className="basis-8/12"
                  InputLabelProps={{
                    style: {
                      fontSize: "1rem",
                      lineHeight: "1.5rem",
                    },
                  }}
                  InputProps={{
                    sx: {
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
                  className="basis-4/12"
                  InputLabelProps={{
                    style: {
                      fontSize: "1rem",
                      lineHeight: "1.5rem",
                    },
                  }}
                  InputProps={{
                    sx: {
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
                multiline
                rows={3}
                InputLabelProps={{
                  style: {
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <ThemeProvider theme={theme}>
                <Button
                  className="p-4 uppercase font-bold text-lg bg-yellow-500
                  md:p-2 md:text-sm md:w-6/12 md:m-auto md:my-5"
                  variant="contained"
                  color="ochre"
                >
                  Send Besked
                </Button>
              </ThemeProvider>
            </form>
            <p
              className="text-slate-700 text-base font-semibold
            md:text-base"
            >
              Jobansøgninger sendes til:{" "}
              <span className="text-blue-500">kontakt@mentorplan.dk</span>
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
