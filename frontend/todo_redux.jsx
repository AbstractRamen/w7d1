import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import App from './app';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <App />, root
  );
});

const store = configureStore;
window.store = store;
