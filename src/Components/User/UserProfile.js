import React from 'react';
import { useParams } from 'react-router-dom';
import { MainSectionContainer, Title } from '../../styles';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <MainSectionContainer>
      <Head title={user} />
      <Title>{user}</Title>
      <Feed user={user} />
    </MainSectionContainer>
  );
};

export default UserProfile;
