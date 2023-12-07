import Artigo from "./Artigo";

import styled from "styled-components";

/* Importando cursos.js */
import cursos from "../api/cursos";
import { useState } from "react";

function Conteudo() {
  const [categoria, setCategoria] = useState(null);

  const aplicarFiltro = (event) => {
    // capturamos (após o clique) o texto escrito em cada botão
    const categoriaEscolhida = event.currentTarget.innerText;

    // E em seguida passamos este texto para o state de categoria
    setCategoria(categoriaEscolhida);
  };
  const cursosFiltrados = cursos.filter((curso) => {
    return curso.categoria === categoria || categoria === null;
  });

  const limparFiltro = (curso) => {
    setCategoria(null);
  };

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus atque
        odit tenetur. Veritatis architecto dolorem voluptatem, porro optio
        repudiandae odit a! Nihil nam laudantium rem facere, distinctio ratione
        quas possimus fugit soluta harum, alias repellat?
      </p>

      <div className="filtros">
        <p>
          <b>Filtrar por: </b>
          <button onClick={aplicarFiltro}>Front-end</button>
          <button onClick={aplicarFiltro}>Back-end</button>
          <button onClick={aplicarFiltro}>Design</button>
          <button onClick={aplicarFiltro}>Mobile</button>
          <button onClick={aplicarFiltro}>Gastronomia</button>
          {categoria && (
            <button onClick={limparFiltro}>🧹 Limpar filtro</button>
          )}
        </p>
        {categoria && (
          <p>
            {" "}
            Você escolheu: | <b> {categoria} </b>{" "}
          </p>
        )}
      </div>

      <div className="artigos">
        {cursosFiltrados.map((curso) => (
          <Artigo
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

  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }
  .filtros-button {
    margin: 0.5rem;
    font-size: 1.1rem;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & article {
        width: 45%;
      }
    }
  }
`;

export default Conteudo;
