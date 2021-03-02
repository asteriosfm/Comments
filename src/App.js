import { createGlobalStyle } from 'styled-components';

import PageLayout from './compoents/PageLayout';
import Main from './Pages/Main';


export default () => {
  return <>
    <PageLayout
      size={"xl"}
      bg={"#ffffff"}
      content={<Main/>}
    />
    <GlobalStyle/>
  </>
};

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */
    font-size-adjust: 100%;
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: Roboto;
  }
  #__root {
    display: flex;
    height: 100%;
  }
`;
