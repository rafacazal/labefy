import React from 'react';
import styled from 'styled-components';


export const HeadPlaylists = styled.h2`
font-size: 18px;
color: #d4d4d4;
margin-bottom: 10px;
text-align: center;
font-family: Arial, Helvetica, sans-serif;
`

export function PlaylistsName(props){
    return (

        <HeadPlaylists>{props.name}</HeadPlaylists>
    )
}