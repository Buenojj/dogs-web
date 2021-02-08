import React from 'react';
import { MainSectionContainer } from '../styles';
import Feed from './Feed/Feed';
import Loading from './Helper/Loading';

const Home = () => {
  return (
    <MainSectionContainer>
      <Feed />
    </MainSectionContainer>
  );
};

export default Home;
