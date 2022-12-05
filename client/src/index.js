import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/public-sans';
import { CssVarsProvider, StyledEngineProvider } from '@mui/joy/styles';
import teamTheme from './theme';
import { AppProvider } from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider theme={teamTheme}>
          <App />
        </CssVarsProvider>
      </StyledEngineProvider>
    </AppProvider>
  </React.StrictMode>
);
