import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
  margin-bottom: 1rem;
`;

const InputStyled = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.2s;
  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

const LabelStyled = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const Input = ({ label, type, name }) => {
  return (
    <DivWrapper>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <InputStyled type={type} id={name} name={name} />
      <Error>Error</Error>
    </DivWrapper>
  );
};

export default Input;
