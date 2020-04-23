import React from 'react';
import styled from 'styled-components';
import 'normalize.css';


export const Head = styled.h2`
 font-size: 30px;
 color: white;
 font-family: Arial, Helvetica, sans-serif;
`


export const SectionForm = styled.div`
  margin-left: 100px;
  margin-bottom: 80px;
  width: 100%;
  max-width: 300px; 
  max-height: 200px;
  border: 1px solid whitesmoke;
`

export const Form = styled.form`
  border: 1px solid whitesmoke;

  input {
        height: 30px;
        border-radius: 4px;
        margin-bottom: 5px;
        border: 1px solid rgba(230,230,230, 1);
        padding: 0 10px;
        background: #F0F0F0F5;
        outline: none;
        width: 92%;
        color: #696969;
        font: 400 17px Roboto, sans-serif;
     }

    button{
        width: 100%;
        height: 60px;
        background: #ff602f;
        border: none;
        border-radius: 8px;
        color: #ffff;
        font-weight: 600;
        margin-top: 16px;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        font-family: Roboto, sans-serif;
        line-height: 60px;
        justify-content: center;
        transition: filter 0.2s;
        &:hover {
            filter: opacity(80%);
        }
}
`


export function CreatePlaylistStyle(props) {

    return (

        <SectionForm> 
            <Form>
                <Head>Crie sua playlist aqui </Head>
                <input/>
            </Form>
         </SectionForm>

            

    )

}

