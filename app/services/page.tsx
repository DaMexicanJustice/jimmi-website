"use client"; // This is a client component
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

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

const orangeTheme = createTheme({
  palette: {
    ochre: {
      main: "#f97316",
      light: "#ff9933",
      dark: "#EA580C",
      contrastText: "#242105",
    },
  },
});

const indigoTheme = createTheme({
  palette: {
    ochre: {
      main: "#6366F1",
      light: "818CF8",
      dark: "#4F46E5",
      contrastText: "#242105",
    },
  },
});

export default function Services() {
  return (
    <>
      <section
        id="Services"
        className="px-5 min-h-[calc(100svh-6rem)] bg-slate-100 dark:bg-slate-900
        md:px-32"
      >
        <main
          className="flex flex-col h-full gap-8 py-8
        md:flex-row md:flex-wrap md:justify-between
        xl:flex-nowrap"
        >
          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-100 shadow-xl shadow-slate-500/50 dark:shadow-none
          md:basis-5/12 md:grow
          xl:basis-3/12 xl:grow-0"
          >
            <Image
              src="/images/beskæftigelsesindsatser.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h1 className="text-slate-700 font-bold text-2xl font-conduit px-5">
              Beskæftigelsesindsatser
            </h1>
            <p
              className="text-black text-center px-5
            md:text-lg"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <ThemeProvider theme={yellowTheme}>
              <Button
                className="p-2 uppercase font-bold text-sm bg-yellow-400
                  md:text-base
                  lg:text-sm"
                variant="contained"
                color="ochre"
              >
                Læs Mere
              </Button>
            </ThemeProvider>
          </div>

          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-100 shadow-xl shadow-slate-500/50 dark:shadow-none
          md:basis-5/12 md:grow
          xl:basis-3/12 xl:grow-0"
          >
            <Image
              src="/images/ungeindsatser.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h1 className="text-slate-700 font-bold text-2xl font-conduit px-5">
              Ungeindsatser
            </h1>
            <p
              className="text-black text-center px-5
            md:text-lg"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <ThemeProvider theme={yellowTheme}>
              <Button
                className="p-2 uppercase font-bold text-sm bg-yellow-400
                  md:text-base
                  lg:text-sm"
                variant="contained"
                color="ochre"
              >
                Læs Mere
              </Button>
            </ThemeProvider>
          </div>

          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-100 shadow-xl shadow-slate-500/50 dark:shadow-none
          md:basis-5/12 md:grow
          xl:basis-3/12 xl:grow-0"
          >
            <Image
              src="/images/430x370.png"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h1 className="text-slate-700 font-bold text-2xl font-conduit px-5">
              Ydelse 3{" "}
            </h1>
            <p
              className="text-black text-center px-5
            md:text-lg"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <ThemeProvider theme={yellowTheme}>
              <Button
                className="p-2 uppercase font-bold text-sm bg-yellow-400
                  md:text-base
                  lg:text-sm"
                variant="contained"
                color="ochre"
              >
                Læs Mere
              </Button>
            </ThemeProvider>
          </div>

          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-100 shadow-xl shadow-slate-500/50 dark:shadow-none
          md:basis-5/12 md:grow
          xl:basis-3/12 xl:grow-0 "
          >
            <Image
              src="/images/430x370.png"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="w-full object-cover"
            />
            <h1 className="text-slate-700 font-bold text-2xl px-5 font-conduit">
              Ydelse 4
            </h1>
            <p
              className="text-black text-center px-5
            md:text-lg"
            >
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <ThemeProvider theme={yellowTheme}>
              <Button
                className="p-2 uppercase font-bold text-sm bg-yellow-400
                  md:text-base
                  lg:text-sm"
                variant="contained"
                color="ochre"
              >
                Læs Mere
              </Button>
            </ThemeProvider>
          </div>
        </main>
      </section>
    </>
  );
}
