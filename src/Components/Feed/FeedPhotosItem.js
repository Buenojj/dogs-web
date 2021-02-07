import React from 'react';
import { LiStyled } from './FeedPhotosItem.styled';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = function () {
    setModalPhoto(photo);
  };

  return (
    <LiStyled onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </LiStyled>
  );
};

export default FeedPhotosItem;
