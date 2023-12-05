import Artigo from "./Artigo";

import styled from "styled-components";

/* Importando os assets de imagem */
import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

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
      justify-content: space-between;

      & article {
        width: 32%;
      }
    }
  }
`;

function Conteudo() {
  const Lancamento = ["01-01-2023", "15-02-2022", "20-03-2022"];

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
        <Artigo
          imagem={imagem1}
          icones="👺"
          titulo="Senhor dos Aneis"
          data={Lancamento[0]}
          descricao="Livro criado por tolkien"
        >
          <h4>Volumes</h4>
          <ul>
            <li>A sociedade do anel</li>
            <li>As duas torres</li>
            <li>O retorno</li>
          </ul>
        </Artigo>
        <Artigo
          imagem={imagem2}
          icones="🤴🏾"
          titulo="Game of Trhones"
          descricao="Aventura maluca com gente morrendo"
          data={Lancamento[1]}
        >
          <h4>Defuntos do livro</h4>
          <ol>
            <li>Aquele cara Stark</li>
            <li>Outra pessoa...</li>
            <li>Mais uma pessoa importante</li>
          </ol>
        </Artigo>
        <Artigo
          imagem={imagem3}
          icones="👩🏾‍💻"
          titulo="Html 5"
          descricao="Fonte de estudos para Front-end"
          data={Lancamento[2]}
        >
          <section>
            <h4>Assuntos</h4>
            <details>
              <summary>Estrutura</summary>
              <p>HTML 5 para estruturar e etc.</p>
            </details>
            <details>
              <summary>Estilização</summary>
              <p>Css3 para formatar e etc...</p>
            </details>
          </section>
        </Artigo>
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
