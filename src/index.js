import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from 'containers/App';
import Home from 'components/Home';
import Admin from 'components/Admin';
import Genre from 'components/Genre';
import List from 'components/List';
import {  Route,  BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />
      <Route path='/genre' component={Genre} />
      <Route path='/list' component={List} />
    </App>
  </BrowserRouter>,
document.getElementById('root')
);
