import Artigo from "./Artigo";

import styled from "styled-components";

/* Importando cursos.js */
import cursos from "../api/cursos";

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

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      & article {
        width: 48%;
        margin: 1%;
      }
    }
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

      <div className="artigos">
        {cursos.map((curso) => (
          <Artigo
            categoria={curso.categoria}
            titulo={curso.titulo}
            preco={curso.preco}
          />
        ))}
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
