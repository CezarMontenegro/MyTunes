import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import { Container, SearchBox, AlbunsBox, LoadingBox, EmptyBox } from '../styles/search';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [artist, setArtist] = useState('');
  const [artistAlbuns, setArtistAlbuns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstSearch, setFirstSearch] = useState(false);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  async function handleClick() {
    setLoading(true);
    setFirstSearch(true);
    const result = await searchAlbumsAPI(inputValue);
    setArtist(inputValue);
    setInputValue('');
    setArtistAlbuns(result);
    setLoading(false);
  }

  function conditionRender() {
    if (loading) {
      return (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      );
    }
    if (firstSearch && !artistAlbuns.length) {
      return <EmptyBox>Nenhum álbum foi encontrado</EmptyBox>;
    }
    if (firstSearch && artistAlbuns.length) {
      return (
        <AlbunsBox>
          <h3>{`Resultado de álbuns de: ${artist}`}</h3>
          <div id="div-albuns">
            { artistAlbuns.map((album) => (
              <Link
                to={ `/album/${album.collectionId}` }
                key={ album.collectionId }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                <div id="div-cards">
                  <img
                    src={ album.artworkUrl100 }
                    alt={ album.collectionName }
                  />
                  <h4>{album.collectionName}</h4>
                  <h5>{album.artistName}</h5>
                </div>
              </Link>
            ))}
          </div>
        </AlbunsBox>
      );
    }
  }

  return (
    <body data-testid="page-search">
      <Header page="search" />
      <Container>
        <SearchBox id="search-div">
          <input
            name="search-artist-input"
            type="text"
            data-testid="search-artist-input"
            placeholder="Nome do Artista"
            value={ inputValue }
            onChange={ handleChange }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ inputValue.length < 2 }
            onClick={ handleClick }
          >
            Pesquisar
          </button>
        </SearchBox>
        { conditionRender() }
      </Container>
    </body>
  );
}

export default Search;
