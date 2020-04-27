const initialState = {
    list: []
    
}


export const playlists = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PLAYLISTS':
            return {...state, list: action.payload.list}
            default:
                return state
    }
}



export default playlists;
