import { fireEvent, render, screen } from "@testing-library/react";
import { AppButton } from ".";

describe("Button", () => {
  it("should handle click", () => {
    const buttonText = "click here";
    const testOnClick = jest.fn();

    render(<AppButton onClick={testOnClick}>{buttonText}</AppButton>);

    fireEvent.click(screen.getByRole("button", { name: buttonText }));

    expect(testOnClick).toBeCalledTimes(1);
  });
});
