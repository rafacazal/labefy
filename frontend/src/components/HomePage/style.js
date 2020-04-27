import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

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

export function HomePageStyle(props) {

  return (
    <Container>
        {props.children}
    </Container>
  )

}

