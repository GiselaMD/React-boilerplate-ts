import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/themes';
import GlobalStyle from './styles/global';
import Router from './Router';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
