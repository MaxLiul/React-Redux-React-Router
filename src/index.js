import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {  BrowserRouter } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
const store = configureStore();

render(
  <Provider store = {store}>
    <BrowserRouter>
      { routes }
    </BrowserRouter>
  </Provider>,
document.getElementById('root')
);
