import Menu from "./Menu";
import { useState } from "react";
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
    background-color: #ffffb2;
    border: none;
    height: 4px;
    margin: auto;
  }
`;

function Cabecalho() {
  /* Usando gerenciamento de states 
  Aqui definimos a chamada de uma função especial do react: 'use state'. Estas ee outras funções INICIADAS COM O PREFIXO 'USE'  que são conhecidas como React HOOkS 
  
  No caso do useState , usando desestruturação, criamos uma variável que representa o valor do state*/
  const [titulo, setTitulo] = useState("Olá React! 🎃");

  const mudarTitulo = () => {
    setTitulo("Salvee | Kage na voz 🦖");
  };
  return (
    <header>
      <StyledCabecalho>
        <h1 onClick={mudarTitulo}>{titulo}</h1>
        <hr />
        <Menu />
      </StyledCabecalho>
    </header>
    /* Comentário no meio de JS é normal ficar entre { nesta situação} */
  );
}

export default Cabecalho;
