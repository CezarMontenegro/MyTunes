import React from 'react';
import Header from '../components/Header';

function Profile() {
  return (
    <div data-testid="page-profile">
      <Header page="profile" />
      <p>Eu sou Profile</p>
    </div>
  );
}

export default Profile;
