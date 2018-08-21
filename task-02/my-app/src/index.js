import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const container = document.querySelector('#root');

ReactDOM.render(<App /> , container);

// <App /> === new App