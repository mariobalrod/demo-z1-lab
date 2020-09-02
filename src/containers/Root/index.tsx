import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from '../Router';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/themes';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default Root;
