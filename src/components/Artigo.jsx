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

function Artigo() {
  return (
    <StyledArtigo>
      <h3>Artigo 1</h3>
      <p>Conteúdo do artigo 1....</p>
    </StyledArtigo>
  );
}

export default Artigo;
