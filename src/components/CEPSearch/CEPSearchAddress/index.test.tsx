import { render, screen } from "@testing-library/react";
import { CEPSearchAddress } from ".";

describe("CEPSearchAddress", () => {
  it("should render", () => {
    const address = {
      cep: "41820021",
      street: "Rua dos Bobos",
      city: "Cidade Legal",
      state: "SP",
    };

    const { container } = render(<CEPSearchAddress address={address} />);

    expect(container).toBeDefined();
    expect(screen.getByText(address.cep)).toBeInTheDocument();
    expect(screen.getByText(address.street)).toBeInTheDocument();
    expect(screen.getByText(address.city)).toBeInTheDocument();
    expect(screen.getByText(address.state)).toBeInTheDocument();
  });
});
