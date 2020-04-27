const initialState = {
    allPlaylists: [],
    selectedPlaylistId: ""
    
}


export const playlists = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ALL_POSTS':
            const list = action.payload.allPlaylists;
            return {...state, allPlaylists: list};
        case 'SET_SELECTED_POST_ID':
            const playlistId = action.payload.selectedPlaylistId;
            return {...state, selectedPlaylistId: playlistId};
    }
}



export default playlists;
