import React from 'react';
import { useParams } from 'react-router-dom';
import { MainSectionContainer, Title } from '../../styles';
import Feed from '../Feed/Feed';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <MainSectionContainer>
      <Title>{user}</Title>
      <Feed user={user} />
    </MainSectionContainer>
  );
};

export default UserProfile;
