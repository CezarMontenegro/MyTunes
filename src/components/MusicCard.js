import React from 'react';
import PropTypes from 'prop-types';
import SongBox from '../styles/musicCard';

function MusicCard(props) {
  const { song, handleCheckbox, favorites } = props;

  return (
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
          onChange={ (event) => handleCheckbox(song, event) }
        />
      </label>
    </SongBox>
  );
}

MusicCard.propTypes = {
  song: PropTypes.arrayOf.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf.isRequired,
};

export default MusicCard;
