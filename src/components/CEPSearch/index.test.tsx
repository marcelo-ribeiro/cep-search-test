import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/theme";
import { CEP_API_URL } from "utils/fetchCEP";
import { CEPSearch } from ".";
import { fakeAddress, server } from "./testServer";

describe("CEPSearch", () => {
  const setup = () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <CEPSearch />
      </ThemeProvider>
    );
  };

  it("should render only form", async () => {
    setup();
    expect(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      })
    ).toBeInTheDocument();
    expect(screen.queryByText("CEP")).not.toBeInTheDocument();
    expect(screen.queryByText("CEP não encontrado")).not.toBeInTheDocument();
  });

  it("should render cep address on form submit", async () => {
    setup();

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      }),
      {
        target: { value: fakeAddress.cep },
      }
    );

    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.getByText(fakeAddress.cep)).toBeInTheDocument();
    });
  });

  it("should render error on form submit", async () => {
    setup();

    server.use(
      rest.get(`${CEP_API_URL}/*`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      }),
      {
        target: { value: "12345678" },
      }
    );

    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.getByText("CEP não encontrado")).toBeInTheDocument();
    });
  });
});
