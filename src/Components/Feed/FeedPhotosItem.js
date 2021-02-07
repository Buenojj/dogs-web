import React from 'react';
import { LiStyled } from './FeedPhotosItem.styled';

const FeedPhotosItem = ({ photo }) => {
  return (
    <LiStyled>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </LiStyled>
  );
};

export default FeedPhotosItem;
