import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from './GlobalStyles'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  rootElement
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
