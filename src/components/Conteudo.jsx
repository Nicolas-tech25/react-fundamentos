import Artigo from "./Artigo";
import { WiAlien } from "react-icons/wi";

function Conteudo() {
  return (
    <main>
      <section>
        <h2>
          Conteúdo da aplicação <WiAlien />
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          atque odit tenetur. Veritatis architecto dolorem voluptatem, porro
          optio repudiandae odit a! Nihil nam laudantium rem facere, distinctio
          ratione quas possimus fugit soluta harum, alias repellat?
        </p>

        <Artigo />
        <Artigo />
        <Artigo />

        <hr />

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KY_uWm0qjmU?si=TKgdqc0BebIIqXe-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </main>
  );
}

export default Conteudo;
