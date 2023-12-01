import styled from "styled-components";

const StyledMenu = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;

    /* & referencia ao seletor pai (a) */
    &:hover {
      background-color: #ffffb2;
      color: black;
    }
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <a href="">Home</a>
      <a href="">Produtos</a>
      <a href="">Contato</a>
    </StyledMenu>
  );
}
export default Menu;
