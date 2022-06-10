import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import HeaderBox from '../styles/header';

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
    <HeaderBox data-testid="header-component">
      <header id="header-user">
        <Link to="/search" id="link">
          My
          <p>T</p>
          unes
        </Link>
        <span data-testid="header-user-name" id="span-user">{ user }</span>
      </header>
      <nav id="nav-links">
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
      </nav>
    </HeaderBox>
  );
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Header;
