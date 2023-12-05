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
  return (
    <StyledArtigo>
      <h3>
        <b>{categoria} </b>
      </h3>
      <p>
        <b>Curso: {titulo} </b>
      </p>
      <p>
        <b>Preço: {preco}</b>
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
