import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { defaultTheme } from "themes/theme";
import { CEPSearch } from "./components/CEPSearch";
import { StyledApp, StyledHeader, StyledMain } from "./styles/AppStyles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <StyledApp>
        <StyledHeader>
          <h1>Busca CEP</h1>
        </StyledHeader>
        <StyledMain>
          <CEPSearch />
        </StyledMain>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
