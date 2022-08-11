import { StyledApp, StyledHeader } from "styles/AppStyles";
import { CEPSearch } from "./components/CEPSearch";

function App() {
  return (
    <StyledApp>
      <StyledHeader>
        <h1>Busca Via CEP</h1>
      </StyledHeader>
      <main>
        <CEPSearch />
      </main>
    </StyledApp>
  );
}

export default App;
