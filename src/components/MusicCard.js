import React from 'react';
import SongBox from '../styles/musicCard';

function MusicCard(props) {
  const { album, handleCheckbox, favorites } = props;

  return (
    album.slice(1).map((song) => (
      <SongBox key={ song.trackId } htmlFor={ song.trackId }>
        <div>{ song.trackName }</div>
        <audio
          id={ song.trackId }
          data-testid="audio-component"
          src={ song.previewUrl }
          controls
        >
          <track kind="captions" />
          <code>audio</code>
        </audio>
        <label htmlFor="input-favorites">
          <input
            id="input-favorites"
            type="checkbox"
            data-testid={ `checkbox-music-${song.trackId}` }
            checked={ favorites.some((music) => music.trackId === song.trackId) }
            onChange={ () => handleCheckbox(song) }
          />
        </label>
      </SongBox>
    ))
  );
}

export default MusicCard;
