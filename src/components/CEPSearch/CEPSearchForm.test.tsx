import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { CEP_API_URL } from "utils/fetchCEP";
import CEPSearchForm from "./CEPSearchForm";
import { fakeAddress, server } from "./testServer";

describe("CEPSearchForm", () => {
  it("should disable button and active loading on submit", async () => {
    render(<CEPSearchForm />);

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      }),
      { target: { value: fakeAddress.cep } }
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
    await waitFor(() => {
      expect(button).toHaveTextContent("Carregando...");
    });
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
    await waitFor(() => {
      expect(button).toHaveTextContent("Buscar");
    });
  });

  it("should submit without validation errors", async () => {
    const mockSuccess = jest.fn();

    render(<CEPSearchForm onSuccess={mockSuccess} />);

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      }),
      { target: { value: fakeAddress.cep } }
    );

    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(mockSuccess).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(mockSuccess).toHaveBeenCalledWith(fakeAddress);
    });
  });

  it("should submit with validation errors", async () => {
    server.use(
      rest.get(`${CEP_API_URL}/*`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const mockError = jest.fn();
    const cep = "12345678";

    render(<CEPSearchForm onError={mockError} />);

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /digite o cep/i,
      }),
      { target: { value: cep } }
    );

    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(mockError).toHaveBeenCalled();
    });
  });

  it("should show the validity", async () => {
    render(<CEPSearchForm />);
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(
        screen.getByRole("textbox", {
          name: /digite o cep/i,
        })
      ).toBeInvalid();
    });
  });
});