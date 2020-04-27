import React from 'react';
import { HomePageStyle } from './style';
import CreatePlaylist from '../CreatePlaylist';
import AddMusic from '../AddMusics';
import ListenPlaylist from '../ListenPlaylist';
import Header from "../Header";


export default function HomePage() {

  return (
    <>
        <Header>
 
        </Header>

      <HomePageStyle>
        <CreatePlaylist />
        <AddMusic/>
        <ListenPlaylist/>
      </HomePageStyle>
    </>
  );
}
