import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { MdPlayCircleOutline } from 'react-icons/md';


const Author = styled.p`
  margin-left: 3vw;
  display: inline-flex;
  font-size: 15px;
  color: #d4d4d4;
  padding: 2px;
`


export const Head = styled.h2`
 font-size: 18px;
 color: #d4d4d4;
 margin-bottom: 10px;
 text-align: center;
 font-family: Arial, Helvetica, sans-serif;
`


export function AuthorMusic(props) {


    return (

        <Author>
            <MdPlayCircleOutline size={20} color="#FA7D02" />
                {props.name}{props.artist}
            <MdDelete size={20} color="white" />

        </Author>

    )
}