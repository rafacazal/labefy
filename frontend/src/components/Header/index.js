import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import logo from '../../assets/logo.png';


export const HeaderContainer = styled.div`
width: 100%;
background-color: black;
display: flex;
flex-direction: row;
height: fit-content;
border-bottom: 1px solid grey;
align-content: space-between;
`

export const LogoImg = styled.img`
  width: 250px;
  margin: 2vw 2vw 2vw 5vw;
`


export default function Header(props) {

    return (
        <HeaderContainer>

            <LogoImg src={logo} alt="Labefy" />
        </HeaderContainer>
    )

}


