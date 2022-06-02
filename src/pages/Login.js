import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

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
  const minNameLength = 3;
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [autentification, setAutentification] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  async function handleClick() {
    setLoading(true);
    await createUser({ name });
    setLoading(false);
    setAutentification(true);
  }

  if (autentification) {
    return (
      <Redirect to="/search" />
    );
  }

  return (
    <Container data-testid="page-login">
      {loading ? <Loading /> : <h1>MyTunes</h1>}
      <LoginBox>
        <input
          type="text"
          placeholder="Nome"
          data-testid="login-name-input"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ name.length < minNameLength }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </LoginBox>
    </Container>
  );
}

export default Login;
