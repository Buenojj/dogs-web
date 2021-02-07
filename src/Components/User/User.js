import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SectionContainer } from '../../styles';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  return (
    <SectionContainer>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </SectionContainer>
  );
};

export default User;
