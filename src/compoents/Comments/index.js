import { useState } from "react";
import styled, { css } from 'styled-components';

import AddComment from './AddComment';


export default ({commentsMode, setCommentsMode}) => {
  const [comments, setComments] = useState([]);

  return <>
    {!commentsMode && comments.length > 0 && comments.length === 1 ?
      <p>Have&nbsp;{comments.length}&nbsp;comment</p>
    :
      comments.length >= 1 && !commentsMode && <p>Have&nbsp;{comments.length}&nbsp;comments</p>
    }
    {comments && comments.map(comment => {
      return <Container commentsMode={commentsMode}>
        <Circle/>
        <Comment>
          <span style={{whiteSpace: "pre-wrap"}}>{comment.comment}</span>
        </Comment>
      </Container>
    })}
    {commentsMode && <AddComment props={{comments, setComments, setCommentsMode}}/>}
  </>
};

const Container = styled.div`
  flex-directon: row;
  align-items: center;
  margin-bottom: 20px;
  ${({commentsMode}) => commentsMode ?
    css`
    display: flex;
    `
  :
    css`
    display: none;
    `
  }
`;

const Comment = styled.div`
  width: calc(100% - 100px);
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 20px;
  font-size: 20px;
  flex-direction: row;
  overflow-x: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 1);
  margin-right: 20px;
`;
