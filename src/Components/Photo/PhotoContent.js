import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../styles';
import PhotoComments from './PhotoComments';
import {
  PhotoContentStyled,
  PhotoContentImg,
  PhotoContentDetails,
  PhotoContentViews,
  PhotoContentAttributes,
  PhotoContentAuthor,
} from './PhotoContent.styled';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <PhotoContentStyled>
      <PhotoContentImg>
        <img src={photo.src} alt={photo.title} />
      </PhotoContentImg>
      <PhotoContentDetails>
        <div>
          <PhotoContentAuthor>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <PhotoContentViews>{photo.acessos}</PhotoContentViews>
          </PhotoContentAuthor>
          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <PhotoContentAttributes>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade === 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
            </li>
          </PhotoContentAttributes>
        </div>
      </PhotoContentDetails>
      <PhotoComments id={photo.id} comments={comments} />
    </PhotoContentStyled>
  );
};

export default PhotoContent;
