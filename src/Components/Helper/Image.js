import React from 'react';
import { ImageSkeleton, ImageWrapper, ImageStyled } from './Image.styled';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  // 🔂 A função handleLoad é responsável por setar a opacidade da imagem como 1 quando ela for 100% carregada, enquanto ela é carregada, o skeleton de animação fica na frente!
  const handleLoad = function ({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <ImageWrapper>
      {skeleton && <ImageSkeleton></ImageSkeleton>}
      <ImageStyled onLoad={handleLoad} alt={alt} {...props}></ImageStyled>
    </ImageWrapper>
  );
};

export default Image;
