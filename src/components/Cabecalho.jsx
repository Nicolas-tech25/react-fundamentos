import Menu from "./Menu";

/* Impoetação do módulo CSS como um objeto chamando estilos  */
import style from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        Olá <span className={style.sombra}>React!</span> 🎈
      </h1>

      <Menu />
      <hr />
    </header>
    /* Comentário no meio de JS é normal ficar entre { nesta situação} */
  );
}

export default Cabecalho;
