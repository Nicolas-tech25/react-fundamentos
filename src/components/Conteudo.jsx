import Artigo from "./Artigo";

import styled from "styled-components";

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }
`;

function Conteudo() {
  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus atque
        odit tenetur. Veritatis architecto dolorem voluptatem, porro optio
        repudiandae odit a! Nihil nam laudantium rem facere, distinctio ratione
        quas possimus fugit soluta harum, alias repellat?
      </p>

      <Artigo />
      <Artigo />
      <Artigo />
    </StyledConteudo>
  );
}

export default Conteudo;
