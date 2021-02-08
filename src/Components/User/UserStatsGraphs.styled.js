import styled, { keyframes } from 'styled-components';

const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const GraphStyled = styled.section`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
  }
`;

export const GraphInfos = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  display: grid;
  align-items: center;
`;

export const GraphTotal = styled(GraphInfos)`
  grid-column: 1/3;
  padding: 2rem;
  font-size: 2rem;

  @media (max-width: 40rem) {
    grid-column: 1;
  }
`;
