import React from 'react';
import styled from 'styled-components';
import 'normalize.css';


export const SectionForm = styled.div`
  margin-left: 80px;
  margin-bottom: 80px;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 39%;
  max-width: 600px; 
  max-height: 200px;
  text-align: center;
`

export const Form = styled.form`
  border: 1px solid #6b6b6b;
  border-radius: 5px;

  input {
        height: 30px;
        border: none;
        border-bottom: 1px solid #6b6b6b;
        padding: 0 10px;
        background: none;
        outline: none;
        width: 90%;
        color: #696969;
        font: 400 17px Roboto, sans-serif;
     }

    button{
        width: 60%;
        height: 40px;
        background: #ff602f;
        border: none;
        border-radius: 8px;
        color: #ffff;
        font-weight: 600;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        font-family: Roboto, sans-serif;
        line-height: 40px;
        justify-content: center;
        transition: filter 0.2s;
        &:hover {
            filter: opacity(80%);
        }
}
`

export const Head = styled.h2`
 font-size: 20px;
 color: #d4d4d4;
 margin-bottom: 10px;
 text-align: center;
 font-family: Arial, Helvetica, sans-serif;
`



export function CreatePlaylistStyle(props) {

    return (

        <SectionForm>
            <Form onSubmit={props.onSubmit}>
                <Head>Crie sua playlist </Head>
                <input
                    name='playlistName'
                    type="text"
                    onChange={props.onChange}
                    value={props.playlistName}
                    placeholder='nome da playlist'
                />
                <button type="submit">criar</button>
            </Form>
        </SectionForm>


    )

}

