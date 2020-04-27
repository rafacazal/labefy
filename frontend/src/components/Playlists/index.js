import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListenPlaylistStyle } from './style';
import { fetchAllPlaylists } from '../../actions/playlist'
import AuthorMusic from '../AuthorMusic';
import {PlaylistsName} from '../PlaylistsName';


export default function Playlists(props) {

  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(fetchAllPlaylists());
  }, [dispatch]);


  return (
    <>

      <ListenPlaylistStyle>

        {playlists.map((playlist) =>
          <PlaylistsName key={playlist.id} name={playlist.name} />)}

      </ListenPlaylistStyle>
    </>
  );
} 
