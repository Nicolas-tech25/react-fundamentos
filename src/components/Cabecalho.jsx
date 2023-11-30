import Menu from "./Menu";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        Olá <span className="sombra">React!</span> 🎈
      </h1>

      <Menu />
      <hr />
    </header>
    /* Comentário no meio de JS é normal ficar entre { nesta situação} */
  );
}

export default Cabecalho;
