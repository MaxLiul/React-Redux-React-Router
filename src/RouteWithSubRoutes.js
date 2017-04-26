import { Route } from 'react-router-dom';
import React from 'react';
console.log(RouteWithSubRoutes);
export default function  RouteWithSubRoutes(route) {
  return (
    <div>
      <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>)}
      />
    </div>
  );
}
