import styled from 'styled-components';
import { AnimationLeft } from '../../styles';

export const UlStyled = styled.ul`
  ${AnimationLeft};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr 1fr;
  }
`;
