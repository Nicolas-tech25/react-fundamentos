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

function Artigo(props) {
  return (
    <StyledArtigo>
      <p className="centralizar">
        <img src={props.imagem} alt="" />
      </p>

      <h3>
        <span>{props.icones}</span>
        {props.titulo}
      </h3>
      <p>{props.descricao}</p>
      <time>{props.data}</time>
    </StyledArtigo>
  );
}

export default Artigo;
