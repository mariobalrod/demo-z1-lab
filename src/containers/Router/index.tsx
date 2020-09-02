import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home"> </Route>
        <Route path="/login"> </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
