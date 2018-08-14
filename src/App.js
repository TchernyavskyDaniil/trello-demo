import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Board from "./Board";
import Nav from "./Nav";

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Nav />
      <Route exact path="/" component={Board} />
    </React.Fragment>
  </BrowserRouter>
);
