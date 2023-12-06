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
  /* Função que será chamada a partir do evento acionado por um elemento */
  const exemplo2 = () => {
    alert("Exemplo2");
  };
  const exemplo3 = (valor) => {
    alert("Exemplo3" + valor);
  };

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>
      <button onClick={exemplo2}>Exemplo 2</button>

      <br />

      <button onClick={() => exemplo3("Estou com o pai")}>
        Exemplo 3(Acionando o evento / função através do conteudo [pai])
      </button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus atque
        odit tenetur. Veritatis architecto dolorem voluptatem, porro optio
        repudiandae odit a! Nihil nam laudantium rem facere, distinctio ratione
        quas possimus fugit soluta harum, alias repellat?
      </p>

      <div className="artigos">
        {cursos.map((curso) => (
          <Artigo
            /* é necessário criar uma prop para passar a chamada/refêrencia da função do componente pai */
            //handleClick={}
            aoClicar={() => {
              exemplo3(curso.categoria);
            }}
            key={curso.id}
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
