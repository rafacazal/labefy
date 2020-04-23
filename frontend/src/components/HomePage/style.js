import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import logo from '../../assets/logo.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: black;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;

`
export const Head = styled.h2`
 font-size: 30px;
 color: white;
 font-family: Arial, Helvetica, sans-serif;
`

export const LogoImg = styled.img`
  width: 250px;
  position: absolute;
  top: 5%;
  left: 5%;
`




export function HomePageStyle(props) {

  return (
    <Container>
        <LogoImg src={logo} alt="Labefy"  />

        <Head> EAE negah</Head>
    </Container>
  )

}

