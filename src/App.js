import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Board from "./Board";
import { getProfiles } from "./actions/profilesActions";
import { getLists } from "./actions/listsActions";

const App = props => {
  const { profiles, getProfilesAction, getListsActions, lists } = props;
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route
            path="/:id"
            render={renderProps => (
              <Board
                id={renderProps.match.params.id}
                profiles={profiles}
                lists={lists}
                getLists={getListsActions}
                getProfiles={getProfilesAction}
              />
            )}
          />
          <Redirect exact from="/" to="/0" />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

const mapStateToProps = store => ({
  profiles: store.profiles.profiles,
  lists: store.lists.lists
});

const mapDispatchToProps = dispatch => ({
  getProfilesAction: () => dispatch(getProfiles()),
  getListsActions: id => dispatch(getLists(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
