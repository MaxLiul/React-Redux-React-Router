import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import Home from './components/Home';
import Admin from './components/Admin';
import Genre from './components/Genre';
import {  Route,  BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />
      <Route path='/genre' component={Genre} />
    </App>
  </BrowserRouter>,
document.getElementById('root')
);
