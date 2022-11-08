import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/theme";
import { CEP_API_URL } from "utils/fetchCEP";
import { CEPSearchForm } from ".";
import { fakeAddress, server } from "../testServer";

describe("CEPSearchForm", () => {
  it("should to disable button and active loading on submit", async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <CEPSearchForm />
      </ThemeProvider>
    );

    userEvent.type(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      }),
      fakeAddress.cep
    );

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(button).toBeDisabled();
    await waitFor(() => expect(button).toHaveTextContent("Carregando..."));
    await waitFor(() => expect(button).not.toBeDisabled());
    await waitFor(() => expect(button).toHaveTextContent("Buscar"));
  });

  it("should submit with success", async () => {
    const handleSuccess = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <CEPSearchForm onSuccess={handleSuccess} />
      </ThemeProvider>
    );

    userEvent.type(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      }),
      fakeAddress.cep
    );

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(handleSuccess).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(handleSuccess).toHaveBeenCalledWith(fakeAddress);
    });
  });

  it("should submit with validation errors", async () => {
    server.use(
      rest.get(`${CEP_API_URL}/*`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const handleError = jest.fn();
    const cep = "12345678";

    render(
      <ThemeProvider theme={defaultTheme}>
        <CEPSearchForm onError={handleError} />
      </ThemeProvider>
    );

    userEvent.type(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      }),
      cep
    );

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(handleError).toHaveBeenCalled();
    });
  });

  it("should be invalid when no validate", async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <CEPSearchForm />
      </ThemeProvider>
    );

    const textBox = screen.getByRole("textbox", {
      name: /digite o cep/i,
    });

    userEvent.click(screen.getByRole("button"));

    expect(textBox).toBeInvalid();

    userEvent.type(textBox, "1234");

    await waitFor(() => {
      expect(textBox).toBeInvalid();
    });
  });
});
