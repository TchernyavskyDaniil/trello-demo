import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Board from "./Board";
import { getLists } from "./actions/listsActions";

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

const mapStateToProps = store => ({
  lists: store.lists.lists
});

const mapDispatchToProps = dispatch => ({
  getListsActions: id => dispatch(getLists(id))
});

export default App;
