import React from 'react';
import { Title } from '../../styles';
import UserHeaderNav from './UserHeaderNav';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;
`;

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <HeaderStyled>
      <Title>{title}</Title>
      <UserHeaderNav />
    </HeaderStyled>
  );
};

export default UserHeader;
