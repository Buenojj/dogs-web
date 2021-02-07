import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import usuario from '../Assets/usuario.svg';
import { UserContext } from '../UserContext';
import { NavStyle } from '../styles';

const HeaderStyle = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;
`;

const HomeLink = styled(Link)`
  padding: 0.5rem 0;
`;

const LoginLink = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;
  &:after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${usuario}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <HeaderStyle>
      <NavStyle>
        <HomeLink to="/" aria-label="Dogs - Home">
          <Dogs />
        </HomeLink>
        {data ? (
          <LoginLink to="/conta">{data.nome}</LoginLink>
        ) : (
          <LoginLink to="/login">Login / Criar</LoginLink>
        )}
      </NavStyle>
    </HeaderStyle>
  );
};

export default Header;
