import { useState } from 'react';
import styled from 'styled-components';
import {
  Paper,
  Container,
  Divider,
  Button,
  lighten
} from '@material-ui/core';

import Comments from '../Comments';


export default ({characters}) => {

  return (
    <Container
      style={{maxWidth: "750px", marginTop: "50px", marginBottom: "50px"}}
      elevation={5}
      component={Paper}
    >
      {characters.map( (character, index) => {
        let [commentsMode, setCommentsMode] = useState(false);
        return <>
        
          <UserSection key={index}>
            <b>Name:</b>&nbsp;{character.name}
            &nbsp;<b>Birth year:</b>&nbsp;{character.birth_year}

            <Button
            style={{position: "absolute", right: 0, top: 0}}
            variant="outlined"
            onClick={ () => setCommentsMode(!commentsMode)}
            >
              Show / Hide Comments
            </Button>
          </UserSection>

          <Comments commentsMode={commentsMode} setCommentsMode={setCommentsMode} />

          <Divider style={{marginTop: "20px"}}/>
        </>
      })}
    </Container>
  );
};

const UserSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  min-height: 70px;
  background-color: #ffffff;
  width: 100%;
  margin: 30px 0px;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  position: relative;
`;
