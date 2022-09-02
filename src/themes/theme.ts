import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  fontFamily: "sans-serif",
  background: "#fff",
  borderRadius: "0.25rem",
  palette: {
    common: {
      black: "#222831",
      white: "#fff",
    },
    primary: {
      main: "hsl(150 50% 50%)",
      shade: "hsl(150 40% 50%)",
      tint: "hsl(150 60% 50%)",
      contrastText: "#fff",
    },
    secondary: {
      main: "hsl(220 60% 50%)",
      shade: "hsl(220 60% 40%)",
      tint: "hsl(220 60% 60%)",
      contrastText: "#fff",
    },
  },
};
