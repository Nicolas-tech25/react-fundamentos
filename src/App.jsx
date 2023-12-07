import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Container from "./components/container";
import Contato from "./pages/contato";
import Home from "./pages/home";
import Produtos from "./pages/produtos";

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Home />
        <Produtos />
        <Contato />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
