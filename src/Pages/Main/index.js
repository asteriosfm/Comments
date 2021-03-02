import { useState, useEffect } from 'react';
import styled from 'styled-components';

import List from '../../compoents/List'
import Loading from '../../compoents/Render/Loading'


const getData = async () => {
  const response = await fetch('https://swapi.dev/api/people/', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  })
  const data = await response.json();
  return data.results;
};


export default () => {
  const [characters, setCharacters] = useState(null);

  useEffect(
    async () => {
      setCharacters(await getData())
    }, []
  )

  return <Container>
    {characters ?
      <List characters={characters}/>
    :
      <Loading/>
    }
  </Container>
};

const Container = styled.div`
  margin: 0px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
