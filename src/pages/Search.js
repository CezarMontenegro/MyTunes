import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import { Container, SearchBox, AlbunsBox, LoadingBox } from '../styles/search';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [artist, setArtist] = useState('');
  const [artistAlbuns, setArtistAlbuns] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  async function handleClick() {
    setLoading(true);
    const result = await searchAlbumsAPI(inputValue);
    setArtist(inputValue);
    setInputValue('');
    setArtistAlbuns(result);
    setLoading(false);
  }

  return (
    <div data-testid="page-search">
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
        {
          loading
            ? (
              <LoadingBox>
                <Loading />
              </LoadingBox>
            )
            : (
              <AlbunsBox>
                
              </AlbunsBox>
            )
        }
      </Container>
    </div>
  );
}

export default Search;

<div>
                  {artist && <h1>{`Resultado de álbuns de: ${artist}`}</h1>}
                </div>
                <div>
                  {
                    artistAlbuns.length === 0
                      ? <h1>Nenhum álbum foi encontrado</h1>
                      : (artistAlbuns.map((album) => (
                        <Link
                          to={ `/album/${album.collectionId}` }
                          key={ album.collectionId }
                          data-testid={ `link-to-album-${album.collectionId}` }
                        >
                          <div>
                            <img
                              src={ album.artworkUrl100 }
                              alt={ album.collectionName }
                            />
                            <h5>{album.collectionName}</h5>
                            <h6>{album.artistName}</h6>
                          </div>
                        </Link>
                      )))
                  }
                </div>
