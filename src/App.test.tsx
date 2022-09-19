import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/theme";
import App from "./App";

it("renders welcome message", () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  );

  expect(
    screen.getByRole("heading", {
      name: /busca cep/i,
    })
  ).toBeInTheDocument();
});
