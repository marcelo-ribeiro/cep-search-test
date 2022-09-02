import "styled-components";

interface IPalette {
  main: string;
  shade: string;
  tint: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    background: string;
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
