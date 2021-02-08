import React from 'react';
import Image from '../Helper/Image';
import { LiStyled } from './FeedPhotosItem.styled';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = function () {
    setModalPhoto(photo);
  };

  return (
    <LiStyled onClick={handleClick}>
      <Image alt={photo.title} src={photo.src}></Image>
      <span>{photo.acessos}</span>
    </LiStyled>
  );
};

export default FeedPhotosItem;
