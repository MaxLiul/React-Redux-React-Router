import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {  BrowserRouter, Router } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

const store = configureStore();

render(
  <Provider store = {store}>
    <Router history = {BrowserRouter} routes = {routes}/>
  </Provider>,
document.getElementById('root')
);
