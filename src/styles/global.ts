import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    max-width: 30rem;
    margin: 0 auto;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #000;
    color: #fffb;
  }

  h1 {
    font-size: 2.5rem;
  }
`;
