import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  &.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;

    svg > * {
      fill: #fb1;
    }
  }
`;

export const HeaderNavMobile = styled.nav`
  display: block;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  transform: ${(props) => (props.active ? 'initial' : 'translateX(-10px)')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: 0.3s;
  z-index: ${(props) => (props.active ? '' : '100')};
  pointer-events: ${(props) => (props.active ? 'initial' : 'none')};

  a,
  button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;
    &:hover svg > * {
      fill: #fb1;
    }
  }

  button {
    border-bottom: none;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export const HeaderNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
      background: white;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    }
  }
`;

const HamburgerButton = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  padding: 0px;
  &:hover,
  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }
`;

export const MobileButton = styled(HamburgerButton)`
  &:after {
    content: '';
    display: block;
    width: ${(props) => (props.active ? '4px' : '1.2rem')};
    height: ${(props) => (props.active ? '4px' : '2px')};
    background: currentColor;
    border-radius: 2px;
    box-shadow: ${(props) =>
      props.active
        ? '0 8px currentColor, 0 -8px currentColor'
        : '0 6px currentColor, 0 -6px currentColor'};
    transform: ${(props) => (props.active ? 'rotate(90deg)' : '')};
    transition: 0.2s;
  }
`;
