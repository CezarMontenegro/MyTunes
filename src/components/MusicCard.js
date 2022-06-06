import React from 'react';

function MusicCard(props) {
  const { album } = props;

  return (
    album.slice(1).map((song) => (
      <label key={ song.trackId } htmlFor={ song.trackId }>
        { song.trackName }
        <audio
          id={ song.trackId }
          data-testid="audio-component"
          src={ song.previewUrl }
          controls
        >
          <track kind="captions" />
          <code>audio</code>
        </audio>
      </label>
    ))
  );
}

export default MusicCard;
