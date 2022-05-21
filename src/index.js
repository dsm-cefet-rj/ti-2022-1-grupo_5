import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(
  <StrictMode>
    <App/>  
  </StrictMode>
);