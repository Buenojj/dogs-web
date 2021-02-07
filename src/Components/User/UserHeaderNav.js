import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;

    svg > * {
      fill: #fb1;
    }
  }
`;

const HeaderNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
      background: white;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    }
  }
`;

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <HeaderNav>
      <StyledLink to="/conta" end>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </StyledLink>
      <StyledLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && 'Estatísticas'}
      </StyledLink>
      <StyledLink to="/conta/postar">
        <AdicionarFoto />
        {mobile && 'Adicionar Foto'}
      </StyledLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </HeaderNav>
  );
};

export default UserHeaderNav;
