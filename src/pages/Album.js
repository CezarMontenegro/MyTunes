import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState([]);

  async function fetchMusic() {
    const result = await getMusics(id);
    setAlbum(result);
  }

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <body data-testid="page-album">
      <Header page="search" />
      <main>
        { album.length
        && (
          <div>
            <div>
              <img
                src={ album[0].artworkUrl100 }
                alt={ album[0].collectionName }
              />
              <h4 data-testid="album-name">{ album[0].collectionName }</h4>
              <h5 data-testid="artist-name">{ album[0].artistName }</h5>
            </div>
            <div>
              <MusicCard album={ album } />
            </div>
          </div>)}
      </main>
    </body>
  );
}

export default Album;
