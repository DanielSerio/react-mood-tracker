import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './components/containers/AppContainer';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
