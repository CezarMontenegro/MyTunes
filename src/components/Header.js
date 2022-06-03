import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import Container from '../styles/header';

function Header({ page }) {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);

  async function getUserName() {
    setLoading(true);
    const userName = await getUser();
    setUser(userName.name);
    setLoading(false);
  }

  useEffect(() => {
    getUserName();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <Container data-testid="header-component">
      <div id="div-user">
        <span>MyTunes</span>
        <span data-testid="header-user-name" id="span-user">{ user }</span>
      </div>
      <div id="div-links">
        <Link
          to="/search"
          data-testid="link-to-search"
          // eslint-disable-next-line sonarjs/no-duplicate-string
          className={ page === 'search' ? 'actual-link' : 'links' }
        >
          Search
        </Link>

        <Link
          to="/favorites"
          data-testid="link-to-favorites"
          className={ page === 'favorites' ? 'actual-link' : 'links' }
        >
          Favorites
        </Link>

        <Link
          to="/profile"
          data-testid="link-to-profile"
          className={ page === 'profile' ? 'actual-link' : 'links' }
        >
          Profile
        </Link>
      </div>
    </Container>
  );
}

export default Header;
