import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { Container, Main, LoadingBox } from '../styles/login';

function ProfileEdit() {
  const minNameLength = 3;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [autentification, setAutentification] = useState(false);

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleImage(event) {
    setImage(event.target.value);
  }

  function handleDescription(event) {
    setDescription(event.target.value);
  }

  async function handleClick() {
    setLoading(true);
    await createUser({ name, email, image, description });
    setLoading(false);
    setAutentification(true);
  }

  if (autentification) {
    return (
      <Redirect to="/profile" />
    );
  }

  return (
    <body data-testid="page-login">
      <Header page="profile" />
      {loading
        ? (
          <LoadingBox>
            <Loading />
          </LoadingBox>)
        : (
          <Container>
            <Main>
              <div>
                <h6>Username</h6>
                <input
                  name="name"
                  id="name"
                  type="text"
                  data-testid="login-name-input"
                  onChange={ handleName }
                />
              </div>
              <div>
                <h6>E-mail</h6>
                <input
                  name="email"
                  type="email"
                  data-testid="login-email-input"
                  onChange={ handleEmail }
                />
              </div>
              <div>
                <h6>Photo</h6>
                <input
                  name="image"
                  type="text"
                  data-testid="login-image-input"
                  onChange={ handleImage }
                />
              </div>
              <div id="div-description">
                <h6>Description</h6>
                <textarea
                  name="description"
                  data-testid="login-text-area"
                  maxLength="200"
                  onChange={ handleDescription }
                />
              </div>
              <button
                type="button"
                data-testid="login-submit-button"
                disabled={ name.length < minNameLength }
                onClick={ handleClick }
              >
                Enter
              </button>
            </Main>
          </Container>)}
    </body>
  );
}

export default ProfileEdit;
