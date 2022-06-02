import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

function Header() {
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
    <header data-testid="header-component">
      <Link to="/search" data-testid="link-to-search">Search</Link>
      <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
      <Link to="/profile" data-testid="link-to-profile">Profile</Link>
      <span data-testid="header-user-name">{ user }</span>
    </header>
  );
}

export default Header;
