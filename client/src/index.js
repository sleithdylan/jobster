import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/public-sans';
import { CssVarsProvider, StyledEngineProvider } from '@mui/joy/styles';
import teamTheme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider disableTransitionOnChange theme={teamTheme}>
        <App />
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
