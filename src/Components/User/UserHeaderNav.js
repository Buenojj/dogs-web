import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import {
  StyledLink,
  HeaderNav,
  HeaderNavMobile,
  MobileButton,
} from './UserHeadNav.styled';
import useMedia from '../../Hooks/useMedia';
import { NavLink, useLocation } from 'react-router-dom';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [active, setActive] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setActive(false);
    setMobileMenu(false);
  }, [pathname]);

  const handleClick = function () {
    setActive(!active);
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      {mobile ? (
        <>
          <MobileButton
            active={active}
            aria-label="Menu"
            onClick={handleClick}
          ></MobileButton>
          <HeaderNavMobile active={active}>
            <NavLink to="/conta" end>
              <MinhasFotos />
              Minhas Fotos
            </NavLink>
            <NavLink to="/conta/estatisticas">
              <Estatisticas />
              Estatísticas
            </NavLink>
            <NavLink to="/conta/postar">
              <AdicionarFoto />
              Adicionar Foto
            </NavLink>
            <button onClick={userLogout}>
              <Sair />
              Sair
            </button>
          </HeaderNavMobile>
        </>
      ) : (
        <HeaderNav>
          <StyledLink to="/conta" end>
            <MinhasFotos />
          </StyledLink>
          <StyledLink to="/conta/estatisticas">
            <Estatisticas />
          </StyledLink>
          <StyledLink to="/conta/postar">
            <AdicionarFoto />
          </StyledLink>
          <button onClick={userLogout}>
            <Sair />
          </button>
        </HeaderNav>
      )}
    </>
  );
};

export default UserHeaderNav;
