import 'babel-polyfill';
import React from 'react';
import App from 'containers/App';
import Home from 'components/Home';
import Admin from 'components/Admin';
import Genre from 'components/Genre';
import List from 'components/List';
import Release from 'components/Release';

import {  Route,  BrowserRouter, Redirect } from 'react-router-dom';
console.log(Redirect);
export const routes = (
  <BrowserRouter>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />
      <Route path='/:genre' component={Genre} />
      <Route path='/:genre/:release' component={Release} />
      <Route  path='/list' component={List} />
    </App>
  </BrowserRouter>
);
