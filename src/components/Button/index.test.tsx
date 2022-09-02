import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/theme";
import { Button } from ".";

describe("Button", () => {
  it("should handle click", () => {
    const buttonText = "click here";
    const testOnClick = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <Button onClick={testOnClick}>{buttonText}</Button>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: buttonText }));

    expect(testOnClick).toBeCalledTimes(1);
  });
});
