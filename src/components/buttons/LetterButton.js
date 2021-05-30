import React, { useState, useEffect } from 'react';
import './LetterButton.css';

const LetterButton = ({ content, answer }) => {
  const [buttonState, setButtonState] = React.useState(answer);

  function changeState(event) {
    event.preventDefault();

    if (buttonState === 'default') {
      setButtonState('right');
    }
  }

  return (
    <button
      type="button"
      className={'letter ' + buttonState}
      onClick={changeState}
    >
      {content}
    </button>
  );
};

export default LetterButton;
