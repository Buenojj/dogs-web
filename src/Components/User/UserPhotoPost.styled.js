import styled from 'styled-components';
import { AnimatedSection } from '../../styles';

export const PhotoSection = styled.section`
  ${AnimatedSection};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }

  #img {
    margin-bottom: 1rem;
  }
`;

export const PhotoPreview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;
  &:after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;
