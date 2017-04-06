import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
console.log(configureStore);
const store = configureStore();

console.log(store);
render(
  <Provider store={store}>
    <App />
  </Provider>,

document.getElementById('root'),
);
