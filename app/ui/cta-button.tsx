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

interface CtaButtonProps {
  text: string;
  href: string;
  type: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ text, href, type }) => {
  return (
    <>
      <ThemeProvider theme={yellowTheme}>
        <Button
          className="py-2 px-4 uppercase font-bold text-sm bg-yellow-400
                  md:text-base
                  lg:text-xs"
          variant="contained"
          color="ochre"
          href={href}
          type={type}
        >
          {text}
        </Button>
      </ThemeProvider>
    </>
  );
};

export default CtaButton;
