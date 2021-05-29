import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import App from './App';
import PlayButton from './components/buttons/PlayButton';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <PlayButton stateButton="activate" />
  </React.StrictMode>,

  document.getElementById('root'),
);
