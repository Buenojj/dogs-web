import React from 'react';
import { MainSectionContainer } from '../styles';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <MainSectionContainer>
      <Head title="Home" description="Rede social para cachorros!" />
      <Feed />
    </MainSectionContainer>
  );
};

export default Home;
