import React from 'react';
import './PlayButton.css';

const PlayButton = (props) => {
  return (
    <button
      className={
        props.stateButton === 'activate'
          ? 'playButton activePlayButton'
          : 'playButton desactivePlaybutton'
      }
      type="button"
    >
      Play
    </button>
  );
};

export default PlayButton;
