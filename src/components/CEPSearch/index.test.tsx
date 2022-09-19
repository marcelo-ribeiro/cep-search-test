import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("should render only form", () => {
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

    userEvent.type(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      }),
      fakeAddress.cep
    );

    userEvent.click(screen.getByRole("button"));

    expect(await screen.findByText(fakeAddress.cep)).toBeInTheDocument();
    expect(await screen.findByText(fakeAddress.street)).toBeInTheDocument();
    expect(await screen.findByText(fakeAddress.city)).toBeInTheDocument();
    expect(await screen.findByText(fakeAddress.state)).toBeInTheDocument();
  });

  it("should render error", async () => {
    setup();

    server.use(
      rest.get(`${CEP_API_URL}/*`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    userEvent.type(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      }),
      "12345678"
    );

    userEvent.click(screen.getByRole("button"));

    expect(await screen.findByText("CEP não encontrado")).toBeInTheDocument();
  });
});
