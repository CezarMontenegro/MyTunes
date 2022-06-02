import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    position: absolute;
    font-weight: bolder;
    font-size: 60px;
    top: 20%;
  }
`;

const LoginBox = styled.div`
  height: 20vh;
  width: 50vw;
  background-color: white;
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: -1px 1px 3px 3px silver;

  input {
    width: 70%;
  }

  button {
    width: 72%;
    background-color: blue;
    font-weight: bolder;
    color: white;
    box-shadow: -1px 1px 1px 2px silver;
  }
`;

function Login() {
  return (
    <Container data-testid="page-login">
      <h1>MyTunes</h1>
      <LoginBox>
        <input
          type="text"
          placeholder="Nome"
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </LoginBox>
    </Container>
  );
}

export default Login;
