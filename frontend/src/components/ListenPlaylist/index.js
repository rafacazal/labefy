import React from 'react';
import { ListenPlaylistStyle } from './style';
import fetchAllPlaylists from '../../actions/playlist'


export default function ListenPlaylist(props) {
     
  const dispatch = useDispatch();


  return(
    <>
       <ListenPlaylistStyle> 
         dispatch(fetchAllPlaylists())
       </ListenPlaylistStyle>
    </>
  );
} 


const mapStateToProps = state => {
    return {
      list: state.playlists.list
    }  
};