import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Container from "./components/container";
import Contato from "./pages/contato";
import Home from "./pages/home";
import Produtos from "./pages/produtos";

/* Importação de recursos/componentes */
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Produtos} path="/produtos" />
            <Route Component={Contato} path="/contato" />
          </Routes>
        </Container>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
