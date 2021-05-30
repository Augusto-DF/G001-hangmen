import React from 'react';
import img from '../../assets/unknown-icon.svg';
import './UnknownLetterCard.css';

const UnknownLetterCard = (props) => {
  const [showLetter, setShowLetter] = React.useState(props.situation);
  return (
    <div
      className={showLetter === 'hide' ? 'mini-card unknown' : 'mini-card show'}
    >
      {showLetter === 'hide' ? (
        <img src={img} alt="" />
      ) : (
        <h1>{props.letter}</h1>
      )}
    </div>
  );
};

export default UnknownLetterCard;
