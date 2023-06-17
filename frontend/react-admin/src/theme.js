import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// ! Color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#d4d4d4",
          200: "#a8a8a8",
          300: "#7d7d7d",
          400: "#515151",
          500: "#262626",
          600: "#1e1e1e",
          700: "#171717",
          800: "#0f0f0f",
          900: "#080808",
        },

        grey: {
          100: "#d5d7dc",
          200: "#abafb9",
          300: "#818796",
          400: "#575f73",
          500: "#2d3750",
          600: "#242c40",
          700: "#1b2130",
          800: "#121620",
          900: "#090b10",
        },

        redAccent: {
          100: "#f2cccc",
          200: "#e69999",
          300: "#d96666",
          400: "#cd3333",
          500: "#c00000",
          600: "#9a0000",
          700: "#730000",
          800: "#4d0000",
          900: "#260000",
        },

        blueAccent: {
          100: "#ccd2df",
          200: "#99a6bf",
          300: "#6679a0",
          400: "#334d80",
          500: "#002060",
          600: "#001a4d",
          700: "#00133a",
          800: "#000d26",
          900: "#000613",
        },

        greenAccent: {
          100: "#ccefdc",
          200: "#99dfb9",
          300: "#66d096",
          400: "#33c073",
          500: "#00b050",
          600: "#008d40",
          700: "#006a30",
          800: "#004620",
          900: "#002310",
        },

        orangeAccent: {
          100: "#fbe5d6",
          200: "#f8cbad",
          300: "#f4b183",
          400: "#f1975a",
          500: "#ed7d31",
          600: "#be6427",
          700: "#8e4b1d",
          800: "#5f3214",
          900: "#2f190a",
        },
      }
    : {
        primary: {
          100: "#fcfcfc",
          200: "#fafafa",
          300: "#f7f7f7",
          400: "#f5f5f5",
          500: "#f2f2f2",
          600: "#c2c2c2",
          700: "#919191",
          800: "#616161",
          900: "#303030",
        },

        grey: {
          100: "#323232",
          200: "#656565",
          300: "#979797",
          400: "#cacaca",
          500: "#fcfcfc",
          600: "#fdfdfd",
          700: "#fdfdfd",
          800: "#fefefe",
          900: "#fefefe",
        },

        redAccent: {
          100: "#260000",
          200: "#4d0000",
          300: "#730000",
          400: "#9a0000",
          500: "#c00000",
          600: "#cd3333",
          700: "#d96666",
          800: "#e69999",
          900: "#f2cccc",
        },

        blueAccent: {
          100: "#000613",
          200: "#000d26",
          300: "#00133a",
          400: "#001a4d",
          500: "#002060",
          600: "#334d80",
          700: "#6679a0",
          800: "#99a6bf",
          900: "#ccd2df",
        },

        greenAccent: {
          100: "#002310",
          200: "#004620",
          300: "#006a30",
          400: "#008d40",
          500: "#00b050",
          600: "#33c073",
          700: "#66d096",
          800: "#99dfb9",
          900: "#ccefdc",
        },

        orangeAccent: {
          100: "#2f190a",
          200: "#5f3214",
          300: "#8e4b1d",
          400: "#be6427",
          500: "#ed7d31",
          600: "#f1975a",
          700: "#f4b183",
          800: "#f8cbad",
          900: "#fbe5d6",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.grey[500],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },

    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
