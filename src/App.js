import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Board from "./Board";

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/:id" component={Board} />
        <Redirect exact from="/" to="/0" />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
