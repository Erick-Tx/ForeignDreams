import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const LoginHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <LoginPageContainer>
      <LoginHeading>Inicio de sesión</LoginHeading>
      <p>Inicia sesión para acceder a tu cuenta.</p>
      <LoginButton onClick={() => loginWithRedirect()}>Iniciar sesión</LoginButton>
    </LoginPageContainer>
  );
}

export default LoginPage;
