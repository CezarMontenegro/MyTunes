import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import { Container, LoginBox, LoadingBox } from '../styles/login';

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
      <h1>MyTunes</h1>
      {loading
        ? (<LoadingBox><Loading /></LoadingBox>)
        : (
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
          </LoginBox>)}
    </Container>
  );
}

export default Login;
