import React, { useState } from "react";
import styled from "styled-components";

function Artigo(props) {
  const [cor, setCor] = useState("#b9e0f4");

  const mudarCor = () => {
    setCor(cor === "#b9e0f4" ? "#ffffb2" : "#b9e0f4");
  };

  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <StyledArtigo onClick={mudarCor} style={{ backgroundColor: cor }}>
      <h3>
        <b>{props.categoria} </b>
      </h3>
      <p>
        <b>Curso: </b>
        {props.titulo}
      </p>
      <p>
        <b>Preço:</b> {formatarPreco(props.preco)}
      </p>
    </StyledArtigo>
  );
}

const StyledArtigo = styled.article`
  background-color: lavender;
  padding: 1rem;
  margin: 0.5rem 0;

  h3 {
    color: purple;
    border-bottom: 1px solid;
  }

  p {
    font-size: 1.1rem;
  }

  .centralizar {
    text-align: center;
  }
`;

export default Artigo;
