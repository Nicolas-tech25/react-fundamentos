import Menu from "./Menu";

/* Impprtação da lib STYLED  */
import styled from "styled-components";

const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: pink;
    border: none;
    height: 4px;
    margin: auto;
  }
`;

function Cabecalho() {
  return (
    <header>
      <StyledCabecalho>
        <h1>Olá React! 🎈</h1>
        <hr />
        <Menu />
      </StyledCabecalho>
    </header>
    /* Comentário no meio de JS é normal ficar entre { nesta situação} */
  );
}

export default Cabecalho;
