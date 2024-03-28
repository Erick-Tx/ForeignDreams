import React from 'react';
import styled from 'styled-components';
import {FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ff6b35, #ff5c8d);
`;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 800px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Section = styled.div`
  padding: 40px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LeftSection = styled(Section)``;

const RightSection = styled(Section)`
  background-color: #ff5c8d;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 107%;
  padding: 10px;
  background-color: #ff6b35;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SmallButton = styled.button`
  padding: 5px 10px;
  background-color: #fff;
  color: #ff6b35;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  margin-right: 5px; // Reducir el margen derecho

  &:last-child {
    margin-right: 0; // Eliminar el margen derecho del último botón
  }

  &.facebook {
    background-color: #3b5998;
    color: white;
  }

  &.google {
    background-color: #db4437;
    color: white;
  }

  &.twitter {
    background-color: #1da1f2;
    color: white;
  }
`;

const SocialIcon = styled.span`
  margin-right: 0;
`;

const LoginForm = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSection>
          <Title>Bienvenido a NAPSIFY</Title>
          <p>Por favor inicia con tu cuenta</p>
          <Input placeholder="Email" />
          <Input placeholder="Contraseña" type="password" />
          <Button>INICIAR</Button>
          <p>¿Olvidate tu contraseña?</p>
          <p>¿Aun no tienes cuenta?</p>
          <SmallButton><b>CREAR AHORA</b></SmallButton>
          <div>
            <p>O registrate con:</p>
            <SocialButtonsContainer>
              <SocialButton className="facebook">
                <SocialIcon>
                  <FaFacebook />
                </SocialIcon>
              </SocialButton>
              <SocialButton className="google">
                <SocialIcon>
                  <FaGoogle />
                </SocialIcon>
              </SocialButton>
              <SocialButton className="twitter">
                <SocialIcon>
                  <FaTwitter />
                </SocialIcon>
              </SocialButton>
            </SocialButtonsContainer>
          </div>
        </LeftSection>
        <RightSection>
          <Title>Somos más que una plataforma web</Title>
          <p>
          Somos <b>Napsify</b>, tu aliado en la búsqueda del descanso ideal. Transformamos el descanso en energía para tu vida, combinando tecnología e innovación para ofrecerte experiencias únicas.</p> <p><b>¡Bienvenido a donde el bienestar inspira creatividad!</b></p>
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;