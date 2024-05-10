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
            className="size-10 text-yellow-400 shrink-0
            md:size-8
            xl:size-6"
          ></CheckCircleIcon>
          <p
            className="text-slate-900 dark:text-slate-50 text-lg
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
        className="px-5 bg-slate-50 dark:bg-slate-900 min-h-[calc(100svh-3rem)] 
        md:px-20 md:h-44
        xl:py-12"
      >
        <main
          className="flex flex-col items-center justify-center h-full pb-10
        md:flex-row md:gap-10 md:justify-evenly md:pb-0"
        >
          {/* Left Panel / Top Panel */}
          <div
            className="flex flex-col gap-10 py-10 items-center
          md:basis-5/12 md:gap-1
          xl:items-start xl:basis-4/12"
          >
            <h1
              className="text-slate-950 dark:text-slate-50 text-5xl font-bold font-conduit
            md:text-xl"
            >
              Mollit ea
            </h1>
            <div
              className="flex flex-col gap-5
            md:justify-start md:gap-1"
            >
              <h2
                className="text-slate-950 dark:text-slate-50 text-4xl font-bold font-conduit
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
                className="text-slate-800 dark:text-slate-300 text-xl text-justify
              md:text-sm"
              >
                Occaecat amet esse sit do officia deserunt laboris veniam
                eiusmod ipsum. Anim exercitation nisi nostrud ut aute. Occaecat
                consequat eu eiusmod consequat laborum laboris ullamco nulla.
              </p>
              <ThemeProvider theme={yellowTheme}>
                <Button
                  className="p-2 uppercase font-bold text-xl bg-yellow-400
                  md:text-3xl
                  lg:text-sm"
                  variant="contained"
                  color="ochre"
                >
                  Cillum veniam in ea dolore
                </Button>
              </ThemeProvider>
            </div>
          </div>

          {/* Right Panel / Bottom Panel */}
          <div
            className="flex flex-col gap-10 py-10 items-center
          md:basis-5/12 md:gap-1
          xl:items-start xl:basis-4/12"
          >
            <h1
              className="text-slate-950 dark:text-slate-50 text-5xl font-bold font-conduit
            md:text-xl"
            >
              Mollit ea
            </h1>
            <div
              className="flex flex-col gap-5
            md:justify-start md:gap-1"
            >
              <h2
                className="text-slate-950 dark:text-slate-50 text-4xl font-bold font-conduit
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
                className="text-slate-800 dark:text-slate-300 text-xl text-justify
              md:text-sm"
              >
                Occaecat amet esse sit do officia deserunt laboris veniam
                eiusmod ipsum. Anim exercitation nisi nostrud ut aute. Occaecat
                consequat eu eiusmod consequat laborum laboris ullamco nulla.
              </p>
              <ThemeProvider theme={yellowTheme}>
                <Button
                  className="p-2 uppercase font-bold text-xl bg-yellow-400
                  md:text-3xl
                  lg:text-sm"
                  variant="contained"
                  color="ochre"
                >
                  Cillum veniam in ea dolore
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
