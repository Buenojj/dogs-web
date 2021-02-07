import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionContainer = styled.section`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const Subtitle = styled.h2`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;
  &:after {
    content: '';
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

const SharedBtnStyle = css`
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

export const ButtonStyled = styled.button`
  ${SharedBtnStyle};
`;

export const LinkBtnStyled = styled(Link)`
  ${SharedBtnStyle};
`;

export const NavStyle = styled.nav`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const FormStyled = styled.form`
  margin-bottom: ${(props) => `${props.marginBottom}rem`};
`;

const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const AnimatedSection = styled.section`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;
`;
