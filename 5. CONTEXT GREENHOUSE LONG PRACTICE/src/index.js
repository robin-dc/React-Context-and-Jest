import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ThemeProvider from './context/ThemeContext';
import ClimateProvider from './context/ClimateContext';

function Root() {
  return (
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ClimateProvider>
      <Root />
    </ClimateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
