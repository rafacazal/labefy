import React, { useState} from 'react';
import { ListenPlaylistStyle } from './style';


export default function ListenPlaylist(props) {

  return(
    <>
       <ListenPlaylistStyle> <p>{props.playlistName}</p>
       </ListenPlaylistStyle>
    </>
  );
} 