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

      <Artigo
        imagem={imagem1}
        icones="👺"
        titulo="Senhor dos Aneis"
        descricao="Livro criado por tolkien"
        data={Lancamento[0]}
      />
      <Artigo
        imagem={imagem2}
        icones="🤴🏾"
        titulo="Game of Trhones"
        descricao="Aventura maluca com gente morrendo"
        data={Lancamento[1]}
      />
      <Artigo
        imagem={imagem3}
        icones="👩🏾‍💻"
        titulo="Html 5"
        descricao="Fonte de estudos para Front-end"
        data={Lancamento[2]}
      />
    </StyledConteudo>
  );
}

export default Conteudo;
