import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";
import ListenPlaylist from "../components/ListenPlaylist";


const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'


export const createPlaylist = (playlistName) => async (dispatch) => {
    const token =  process.env.TOKEN;

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    const playlistInformation = {
        playlistName,
    }

    try {
        await axios.post(`${baseURL}/playlists/createPlaylist`, playlistInformation, axiosConfig );

        dispatch(ListenPlaylist);
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar criar sua playlist")
    }
}