import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import { MdDelete } from 'react-icons/md';
import { MdPlayCircleOutline } from 'react-icons/md';


export const Container = styled.div`
  position: absolute;
  right: 10%;
  bottom: 31%;
  width: 100%;
  height: fit-content;
  max-width: 300px;
  text-align: center;
  border: 1px solid #FA7D02;
  border-radius: 5px;
`

const CardContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width: 100%;
  padding: 1vh;
  display: flex;
  align-items: justify;
  justify-content: justify;
`

export const Head = styled.h2`
 font-size: 20px;
 color: #d4d4d4;
 margin-bottom: 10px;
 text-align: center;
 font-family: Arial, Helvetica, sans-serif;
`

const AuthorMusic = styled.p`
  margin-left: 3vw;
  display: inline-flex;
  font-size: 15px;
  color: #d4d4d4;
  padding: 2px;
`


export function ListenPlaylistStyle(props) {

    return (

        <Container>

            <CardContainer>
                <Head>Ouça suas músicas</Head>
                
                <AuthorMusic>
                    
                    <MdPlayCircleOutline size={20} color="#FA7D02" />
                        Lady Gaga - Born this way 
                    <MdDelete size={20} color="white" />

                </AuthorMusic>
                <AuthorMusic>
                    
                    <MdPlayCircleOutline size={20} color="#FA7D02" />
                        Lady Gaga - Born this way 
                    <MdDelete size={20} color="white" />

                </AuthorMusic>

                    <AuthorMusic>
                    
                    <MdPlayCircleOutline size={20} color="#FA7D02" />
                        Lady Gaga - Born this way 
                    <MdDelete size={20} color="white" />

                </AuthorMusic>

                      <AuthorMusic>
                    
                    <MdPlayCircleOutline size={20} color="#FA7D02" />
                        Lady Gaga - Born this way 
                    <MdDelete size={20} color="white" />

                </AuthorMusic>
                
            </CardContainer>
        </Container>

    )

}

