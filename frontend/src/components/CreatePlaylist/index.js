import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { CreatePlaylistStyle } from './style';
import { createPlaylist } from '../../actions/playlist';


export default function CreatePlaylist() {

  const initialState = {
    playlistName: ''
  }

  const [form, setForm] = useState(initialState)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const auxForm = { ...form };
    auxForm[event.target.name] = event.target.value;
    setForm(auxForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form)
    dispatch(createPlaylist(form.playlistName))
    setForm(initialState)
  };


  return (
    <>
      <CreatePlaylistStyle
        playlistName={form.playlistName}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
} 