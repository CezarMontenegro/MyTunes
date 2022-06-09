import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import { Card, Main, LoadingBox } from '../styles/profile';
import Loading from '../components/Loading';

function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchUser() {
    setLoading(true);
    const result = await getUser();
    setUser(result);
    setLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <body data-testid="page-profile">
      <Header page="profile" />
      <Main>
        { loading
          ? (
            <LoadingBox>
              <Loading />
            </LoadingBox>)
          : (
            <Card>
              <div id="div-img">
                <img src={ user.image } alt={ user.name } data-testid="profile-image" />
                <Link to="/profile/edit" id="link">Editar perfil</Link>
              </div>
              <div>
                <h4>Nome</h4>
                <p>{user.name}</p>
                <h4>E-mail</h4>
                <p>{user.email}</p>
                <h4>Description</h4>
                <p>{user.description}</p>
              </div>
            </Card>)}
      </Main>
    </body>
  );
}

export default Profile;
