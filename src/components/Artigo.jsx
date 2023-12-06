import React, { useState } from "react";
import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: ${(props) => props.bgColor || "#ffffffe4"};
  padding: 1rem;
  margin: 0.5rem 0;

  h3 {
    border-bottom: 2px solid #3498db;
    color: #3498db;
  }

  p {
    font-size: 1.1rem;
  }
`;

function Artigo({ titulo, categoria, preco }) {
  const [fundo, setNovoFundo] = useState("#ffffffe4");

  const mudarFundo = () => {
    setNovoFundo((novaCor) =>
      novaCor === "#ffffffe4" ? "lightyellow" : "#ffffffe4"
    );
  };

  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <StyledArtigo bgColor={fundo} onClick={mudarFundo}>
      <h3>
        <b>{categoria} </b>
      </h3>
      <p>
        <b>Curso: </b>
        {titulo}
      </p>
      <p>
        <b>Preço:</b> {formatarPreco(preco)}
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
