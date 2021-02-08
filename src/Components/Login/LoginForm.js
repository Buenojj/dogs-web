import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import { UserContext } from '../../UserContext';
import {
  Title,
  Subtitle,
  FormStyled,
  AnimatedSection,
  LinkBtnStyled,
} from '../../styles';
import styled from 'styled-components';

const PerdeuLink = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;
  &:after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;

const CadastroDiv = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  p {
    margin: 2rem 0;
  }
`;

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <AnimatedSection>
      <Title>Login</Title>
      <FormStyled marginBottom={2} action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos'} />
      </FormStyled>
      <PerdeuLink to="/login/perdeu">Perdeu a Senha?</PerdeuLink>
      <CadastroDiv>
        <Subtitle>Cadastre-se</Subtitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <LinkBtnStyled to="/login/criar">Cadastro</LinkBtnStyled>
      </CadastroDiv>
    </AnimatedSection>
  );
};

export default LoginForm;
