import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: #ffffffe4;
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
  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <StyledArtigo>
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
