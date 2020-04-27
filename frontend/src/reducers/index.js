import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import playlists from './playlist'; 

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    playlists
  });
