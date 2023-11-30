import Artigo from "./Artigo";

function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo da aplicação</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          atque odit tenetur. Veritatis architecto dolorem voluptatem, porro
          optio repudiandae odit a! Nihil nam laudantium rem facere, distinctio
          ratione quas possimus fugit soluta harum, alias repellat?
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
}

export default Conteudo;
