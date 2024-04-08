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
        className="px-5 min-h-[calc(100svh-6rem)] bg-slate-50 dark:bg-slate-950
        md:px-20"
      >
        <main
          className="flex flex-col h-full gap-8 md:gap-5 py-8
        md:flex-row md:flex-wrap md:justify-center md:gap-14"
        >
          <div
            className="flex flex-col gap-5 justify-between items-center pb-5 bg-slate-100 shadow-xl shadow-slate-500/50 dark:shadow-none
          md:basis-2/5 md:grow
          xl:basis-3/12 xl:grow-0"
          >
            <div
              className="w-full
            xl:overflow-hidden xl:h-44"
            >
              <Image
                src="/images/430x370-dark-grey.png"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="w-full object-cover"
              />
            </div>

            <h1 className="text-slate-700 font-bold text-3xl font-conduit px-5">
              Ydelse 1
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
                className="p-2 uppercase font-bold text-xl bg-yellow-500
                  md:text-3xl
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
          md:basis-2/5 md:grow
          xl:basis-3/12 xl:grow-0"
          >
            <div className="overflow-hidden h-44">
              <Image
                src="/images/430x370-dark-grey.png"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="w-full object-cover"
              />
            </div>
            <h1 className="text-slate-700 font-bold text-3xl font-conduit px-5">
              Ydelse 2
            </h1>
            <p
              className="text-black text-center px-5
            md:text-lg"
            >
              Sint cupidatat deserunt eiusmod duis minim eu sit adipisicing ad
              velit.
            </p>
            <ThemeProvider theme={yellowTheme}>
              <Button
                className="p-2 uppercase font-bold text-xl bg-yellow-500
                  md:text-3xl
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
          md:basis-2/5 md:grow
          xl:basis-3/12 xl:grow-0"
          >
            <div className="overflow-hidden h-44">
              <Image
                src="/images/430x370-dark-grey.png"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="w-full object-cover"
              />
            </div>
            <h1 className="text-slate-700 font-bold text-3xl font-conduit px-5">
              Ydelse 3{" "}
            </h1>
            <p
              className="text-black text-center px-5
            md:text-lg"
            >
              Do cillum in dolore est. Deserunt culpa officia eiusmod commodo
              velit.
            </p>
            <ThemeProvider theme={yellowTheme}>
              <Button
                className="p-2 uppercase font-bold text-xl bg-yellow-500
                  md:text-3xl
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
          md:basis-2/5 md:grow
          xl:basis-3/12 xl:grow-0 "
          >
            <div className="overflow-hidden h-44">
              <Image
                src="/images/430x370-dark-grey.png"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="w-full object-cover"
              />
            </div>
            <h1 className="text-slate-700 font-bold text-3xl px-5 font-conduit">
              Ydelse 4
            </h1>
            <p
              className="text-black text-center px-5
            md:text-lg"
            >
              Aliquip sunt amet dolor magna irure pariatur sit pariatur. Magna
              adipisicing minim nostrud enim non.
            </p>
            <ThemeProvider theme={yellowTheme}>
              <Button
                className="p-2 uppercase font-bold text-xl bg-yellow-500
                  md:text-3xl
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
          md:basis-6/12
          xl:basis-3/12 xl:grow-0"
          >
            <div className="overflow-hidden h-44">
              <Image
                src="/images/430x370-dark-grey.png"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="w-full object-cover"
              />
            </div>
            <h1 className="text-slate-700 font-bold text-3xl font-conduit px-5">
              Ydelse 5
            </h1>
            <p
              className="text-black text-center px-5
            md:text-lg"
            >
              Magna adipisicing minim nostrud enim non. Sunt qui culpa proident
              id eiusmod Lorem fugiat non exercitation esse fugiat commodo in
              magna.
            </p>
            <ThemeProvider theme={yellowTheme}>
              <Button
                className="p-2 uppercase font-bold text-xl bg-yellow-500
                  md:text-3xl
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
