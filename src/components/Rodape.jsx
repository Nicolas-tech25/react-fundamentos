function Rodape() {
  const exemploEstilos = {
    backgroundColor: "lightblue",
    padding: "2%",
    color: "darkorange",
    border: "solid 4px #f00",
  };

  return (
    <footer style={exemploEstilos}>
      <h2 className={{ textaling: "center" }}>Rodapé da aplicação</h2>
      <p className="destaque-texto centralizar">Fundamentos de react</p>
      <p>
        experimentando <b className="sombra">classes</b>
      </p>
    </footer>
  );
}

export default Rodape;
