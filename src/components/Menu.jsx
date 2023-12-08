import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </StyledMenu>
  );
}

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
  .active {
    background-color: white;
    color: black;
  }
`;

export default Menu;
