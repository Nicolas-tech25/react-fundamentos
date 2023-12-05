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
  .centralizar {
    text-align: center;
  }
`;

function Artigo({ imagem, icones, titulo, descricao, data, children }) {
  return (
    <StyledArtigo>
      <p className="centralizar">
        <img src={imagem} alt="" />
      </p>

      <h3 className="centralizar">
        <span>{icones}</span>
        {titulo}
      </h3>

      <p>{descricao}</p>

      <p>
        <b>Lançamento: </b>
        <time>{data}</time>
      </p>

      {children}
    </StyledArtigo>
  );
}

export default Artigo;
