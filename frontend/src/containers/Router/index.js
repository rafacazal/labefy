import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from '../../components/HomePage';
import ListenPlaylist from '../../components/Playlists';

export const routes = {
  root: "/",
  playlists: "/listen"
};


export default function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.playlists} component={ListenPlaylist}/>
      </Switch>
    </ConnectedRouter>
  );
}
