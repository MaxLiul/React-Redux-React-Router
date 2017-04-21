import 'babel-polyfill';
import React from 'react';
import App from 'containers/App';
import Home from 'components/Home';
import Admin from 'components/Admin';
import Genre from 'components/Genre';
import List from 'components/List';
import Release from 'components/Release';
import Login from 'components/Login';

import {  Route,  BrowserRouter } from 'react-router-dom';
console.log(`localStorageRoutes ${window.localStorage.getItem('rr_login')}`);
function checkLogin(nextState, replace) {
  alert('1');
  console.log(arguments);
  const login = window.localStorage.getItem('rr_login');

  if (login !== 'admin') {
    replace('/');
  }
}
export const routes = (
  <BrowserRouter>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} onEnter={checkLogin} />
      <Route path='/login' component={Login} />
      <Route path='/genre' component={Genre} />
      <Route path='/:genre/:release' component={Release} />
      <Route  path='/list' component={List} />
    </App>
  </BrowserRouter>
);
