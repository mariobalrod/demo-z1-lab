import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Main/Home';
import Login from '../Guest/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          {' '}
          <Home />{' '}
        </Route>
        <Route path="/login">
          {' '}
          <Login />{' '}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
