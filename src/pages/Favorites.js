import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import { Main, LoadingBox } from '../styles/favorites';
import Loading from '../components/Loading';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchFavorites() {
    const result = await getFavoriteSongs();
    setFavorites(result);
  }

  useEffect(() => {
    fetchFavorites();
  }, [favorites]);

  async function handleCheckbox(song) {
    setLoading(true);
    await removeSong({
      artistId: song.artistId,
      artistName: song.artistName,
      artistViewUrl: song.artistViewUrl,
      artworkUrl30: song.artworkUrl30,
      artworkUrl60: song.artworkUrl60,
      artworkUrl100: song.artworkUrl100,
      collectionCensoredName: song.collectionCensoredName,
      collectionExplicitness: song.collectionExplicitness,
      collectionId: song.collectionId,
      collectionName: song.collectionName,
      collectionPrice: song.collectionPrice,
      collectionViewUrl: song.collectionViewUrl,
      currency: song.currency,
      discCount: song.discCount,
      discNumber: song.discNumber,
      isStreamable: song.isStreamable,
      kind: song.kind,
      previewUrl: song.previewUrl,
      primaryGenreName: song.primaryGenreName,
      releaseDate: song.releaseDate,
      trackCensoredName: song.trackCensoredName,
      trackCount: song.trackCount,
      trackExplicitness: song.trackExplicitness,
      trackId: song.trackId,
      trackName: song.trackName,
      trackNumber: song.trackNumber,
      trackPrice: song.trackPrice,
      trackTimeMillis: song.trackTimeMillis,
      trackViewUrl: song.trackViewUrl,
      wrapperType: song.wrapperType,
    });
    setLoading(false);
  }

  function renderCondition() {
    if (loading) {
      return (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      );
    }
    if (favorites.length && !loading) {
      return (
        <Main>
          <div id="main-div">
            <h3>Músicas Favoritas:</h3>
            <div>
              {favorites.map((song) => (
                <div key={ song.trackId } className="song-div">
                  <img src={ song.artworkUrl100 } alt={ song.artistName } />
                  <MusicCard
                    song={ song }
                    favorites={ favorites }
                    handleCheckbox={ () => handleCheckbox(song) }
                  />
                </div>))}
            </div>
          </div>
        </Main>);
    }
    if (!favorites.length && !loading) {
      return (
        <Main>
          <h1>You do not have favorites songs yet</h1>
        </Main>);
    }
  }

  return (
    <body data-testid="page-favorites">
      <Header page="favorites" />
      { renderCondition() }
    </body>
  );
}

export default Favorites;
