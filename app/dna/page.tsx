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
          <CheckCircleIcon className="size-10 text-blue-700 shrink-0"></CheckCircleIcon>
          <p
            className="text-slate-900 text-lg
          md:text-3xl"
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
        className="px-5 min-h-[calc(100svh-6rem)] bg-slate-300
        md:px-20 md:h-[calc(100svh-11rem)]"
      >
        <main
          className="flex flex-col h-full items-center justify-center
        md:flex-row md:gap-10"
        >
          {/* Left Panel / Top Panel */}
          <div
            className="flex flex-col gap-10 py-10 items-center
          md:basis-6/12 md:gap-16"
          >
            <h1
              className="text-slate-900 text-5xl font-bold font-conduit
            md:text-6xl"
            >
              Mollit ea
            </h1>
            <div
              className="flex flex-col gap-5
            md:justify-start md:gap-10"
            >
              <h2
                className="text-slate-800 text-4xl font-bold text-center font-conduit
              md:text-5xl"
              >
                Est enim cillum cupidatat ut cupidatat dolor
              </h2>
              <div className="flex flex-col gap-2">{divElements}</div>
            </div>
            <div
              className="flex flex-col gap-5 items-center
            md:items-start md:gap-10"
            >
              <p
                className="text-slate-700 text-xl text-justify
              md:text-3xl"
              >
                Occaecat amet esse sit do officia deserunt laboris veniam
                eiusmod ipsum. Anim exercitation nisi nostrud ut aute. Occaecat
                consequat eu eiusmod consequat laborum laboris ullamco nulla.
              </p>
              <ThemeProvider theme={theme}>
                <Button
                  className="p-5 uppercase font-bold text-xl bg-yellow-500
                  md:text-3xl"
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
          md:basis-6/12 md:gap-10"
          >
            <a
              className="no-underline text-4xl text-blue-500 font-bold font-conduit
              md:text-5xl"
              href="tel:+4542955969"
            >
              Ring: +4542955969
            </a>
            <h2
              className="text-3xl text-black font-semibold font-conduit
            md:text-4xl"
            >
              Anim et duis ad eu ut.
            </h2>
            <p
              className="text-slate-700 text-xl text-justify w-11/12
            md:text-3xl"
            >
              Elit amet veniam anim esse sint do pariatur nisi. Et quis officia
              ea do irure consequat sit cillum.
            </p>
            <form className="flex flex-col gap-3 w-11/12">
              <TextField
                id="standard-basic"
                label="Dit fulde navn"
                variant="standard"
                InputLabelProps={{
                  style: {
                    fontSize: "1.5rem",
                    lineHeight: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "1.75rem",
                    lineHeight: "1",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Firma navn"
                variant="standard"
                InputLabelProps={{
                  style: {
                    fontSize: "1.5rem",
                    lineHeight: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "1.75rem",
                    lineHeight: "1",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Din e-mail"
                variant="standard"
                type="email"
                InputLabelProps={{
                  style: {
                    fontSize: "1.5rem",
                    lineHeight: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "1.75rem",
                    lineHeight: "1",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Telefonnummer"
                variant="standard"
                type="tel"
                InputLabelProps={{
                  style: {
                    fontSize: "1.5rem",
                    lineHeight: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "1.75rem",
                    lineHeight: "1",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Besked"
                variant="standard"
                multiline
                rows={4}
                InputLabelProps={{
                  style: {
                    fontSize: "1.5rem",
                    lineHeight: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "1.75rem",
                    lineHeight: "1",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <ThemeProvider theme={theme}>
                <Button
                  className="p-5 uppercase font-bold text-xl bg-yellow-500"
                  variant="contained"
                  color="ochre"
                >
                  Send Besked
                </Button>
              </ThemeProvider>
            </form>
            <p
              className="text-slate-700 text-base font-semibold
            md:text-2xl"
            >
              Jobansøgninger sendes til:{" "}
              <span className="text-yellow-700">kontakt@mentorplan.dk</span>
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
