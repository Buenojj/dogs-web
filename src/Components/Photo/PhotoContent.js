import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../styles';
import { UserContext } from '../../UserContext';
import Image from '../Helper/Image';
import PhotoComments from './PhotoComments';
import {
  PhotoContentStyled,
  PhotoContentImg,
  PhotoContentDetails,
  PhotoContentViews,
  PhotoContentAttributes,
  PhotoContentAuthor,
} from './PhotoContent.styled';
import PhotoDelete from './PhotoDelete';

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <PhotoContentStyled>
      <PhotoContentImg>
        <Image alt={photo.title} src={photo.src}></Image>
      </PhotoContentImg>
      <PhotoContentDetails>
        <div>
          <PhotoContentAuthor>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
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
