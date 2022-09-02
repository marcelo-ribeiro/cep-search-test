import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --hue: 220;
    --saturation: 50%;
    --body-background: hsl(var(--hue), var(--saturation), 90%);
    --body-color: hsl(var(--hue), var(--saturation), 20%);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --body-background: hsl(var(--hue), var(--saturation), 15%);
      --body-color: hsl(var(--hue), var(--saturation), 90%);
    }
  }

  html {
    font: ${(props) => `16px/1.5 ${props.theme.fontFamily}`};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 30rem;
    margin: 0 auto;
    color: var(--body-color);
    background: ${(props) => props.theme.palette.common.black};
  }

  h1 {
    font-size: 2.5rem;
  }
`;
