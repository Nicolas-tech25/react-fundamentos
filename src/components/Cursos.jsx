import Artigo from "./Artigo";

import styled from "styled-components";

/* Importando cursos.js */
import cursos from "../api/cursos";
import { useState } from "react";

function Cursos() {
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

  /* guardando a quantidade de cursos filtrados */
  const quantidade = cursosFiltrados.length;

  return (
    <StyledCursos>
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
          <button onClick={aplicarFiltro}>Música</button>
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

        {quantidade === 0 && (
          <p style={{ color: "red", textAlign: "center" }}>
            Não há cursos nesta categoria
          </p>
        )}
      </div>

      <p>
        Quantidade de cursos: <b>{quantidade}</b>
      </p>

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
    </StyledCursos>
  );
}

const StyledCursos = styled.main`
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

export default Cursos;
