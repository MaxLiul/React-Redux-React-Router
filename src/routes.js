import 'babel-polyfill';
import React from 'react';
import App from 'containers/App';
import Home from 'components/Home';
import Admin from 'components/Admin';
import Genre from 'components/Genre';
import List from 'components/List';
import Release from 'components/Release';
import LoginPage from 'containers/LoginPage';
import NotFound from 'components/NotFound';

import { Route,  Switch } from 'react-router-dom';

export const routes = (
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />
      <Route path='/login' component={LoginPage} />
      <Route path='/genre/:genre' component = {Genre} />
      <Route path='/genre/:genre/:release' component={Release} />
      <Route  path='/list' component={List} />
      <Route component = {NotFound}/>
    </Switch>
  </App>
);
