import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Main/Home';
import Login from '../Guest/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
