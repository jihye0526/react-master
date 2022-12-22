import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode> ROUTER 5 버전을 사용하면 StrictMode를 사용했을 때 페이지가 넘어가지 않음
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  // </React.StrictMode>
);