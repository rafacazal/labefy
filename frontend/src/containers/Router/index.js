import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from '../../components/HomePage';

export const routes = {
  root: "/",
};


export default function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}
