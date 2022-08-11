import { fireEvent, render, screen } from "@testing-library/react";
import { AppInput } from "./";

describe("AppInput", () => {
  it("should render the component.", () => {
    render(<AppInput />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });

  it("should be able to type.", () => {
    render(<AppInput />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("");
    expect(input).toHaveAttribute("type", "text");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("should render a initial value.", () => {
    render(<AppInput defaultValue="test" />);
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });

  it("should render the label onto the screen.", () => {
    render(<AppInput label="First name" id="firstName" />);
    expect(screen.getByText(/first name/i)).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /first name/i })
    ).toBeInTheDocument();
  });
});
