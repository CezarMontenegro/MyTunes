import React from 'react';
import Header from '../components/Header';

function Favorites() {
  return (
    <div data-testid="page-favorites">
      <Header page="favorites" />
      <p>Eu sou Favorites</p>
    </div>
  );
}

export default Favorites;
