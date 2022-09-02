import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/global";
import { defaultTheme } from "../src/themes/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
