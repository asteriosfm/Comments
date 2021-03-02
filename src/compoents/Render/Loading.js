import React from 'react';
import styled from 'styled-components'

import CircularProgress from '@material-ui/core/CircularProgress'


export default () => {
  return <Container>
    <CircularProgress color="secondary" />
  </Container>
};

const Container = styled.div`
  display:flex;
  flex:1;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;
