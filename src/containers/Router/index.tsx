import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Main/Home';
import Login from '../Guest/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
