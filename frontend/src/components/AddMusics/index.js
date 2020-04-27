import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { AddMusicStyle } from './style';


export default function AddMusic() {

  const initialState = {
    musicName: '',
    artName: '',
    url: ''
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
    setForm(initialState)

  };

  return (
    <>
      <AddMusicStyle
        musicName={form.musicName}
        artName={form.artName}
        url={form.url}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
} 