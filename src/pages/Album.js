import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import { PlayerBox, AlbumBox, SongsBox, LoadingBox } from '../styles/album';

function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  async function fetchMusic() {
    const result = await getMusics(id);
    setAlbum(result);
  }

  async function fetchFavorites() {
    const result = await getFavoriteSongs();
    setFavorites(result);
  }

  useEffect(() => {
    fetchMusic();
    fetchFavorites();
  }, [favorites]);

  async function addingSong(song) {
    await addSong({
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
  }

  async function removingSong(song) {
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
  }

  async function handleCheckbox(song, event) {
    setLoading(true);
    if (event.target.checked) {
      await addingSong(song);
    } else {
      await removingSong(song);
    }
    setLoading(false);
  }

  return (
    <body data-testid="page-album">
      <Header page="search" />
      {(album.length && !loading)
        ? (
          <PlayerBox>
            <AlbumBox>
              <img
                src={ album[0].artworkUrl100 }
                alt={ album[0].collectionName }
              />
              <h4 data-testid="album-name">{ album[0].collectionName }</h4>
              <h5 data-testid="artist-name">{ album[0].artistName }</h5>
            </AlbumBox>
            <SongsBox>
              {album.slice(1).map((song) => (<MusicCard
                key={ song.trackId }
                song={ song }
                handleCheckbox={ handleCheckbox }
                favorites={ favorites }
              />))}
            </SongsBox>
          </PlayerBox>)
        : (
          <LoadingBox>
            <Loading />
          </LoadingBox>)}
    </body>
  );
}

export default Album;
