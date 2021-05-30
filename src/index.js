import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import App from './App';
import UnknownLetterCard from './components/cards/UnknownLetterCard';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UnknownLetterCard situation="hide" letter="H" />
  </React.StrictMode>,

  document.getElementById('root'),
);
