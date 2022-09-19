import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/theme";
import { Button } from ".";

describe("Button", () => {
  it("should handle click", () => {
    const buttonText = "click here";
    const handleOnClick = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <Button onClick={handleOnClick}>{buttonText}</Button>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: buttonText }));

    expect(handleOnClick).toBeCalledTimes(1);
  });
});
