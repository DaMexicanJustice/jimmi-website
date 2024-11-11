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
  height?: number;
  width?: number;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  href,
  type,
  height = 4,
  width = 8,
}) => {
  return (
    <>
      <ThemeProvider theme={yellowTheme}>
        <Button
          className={`py-${height} px-${width} uppercase font-conduitbold text-sm bg-yellow-400 rounded-xs
                  lg:text-base`}
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
