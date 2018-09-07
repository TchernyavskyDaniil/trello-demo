import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Board from "./Board";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route
          path="/:id"
          render={renderProps => <Board id={renderProps.match.params.id} />}
        />
        <Redirect exact from="/" to="/0" />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
