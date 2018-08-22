import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Board from "./Board";

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={Board} />
    </React.Fragment>
  </BrowserRouter>
);
