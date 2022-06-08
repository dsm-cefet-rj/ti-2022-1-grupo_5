import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/pages/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import criarEsfiha from './features/personalizada-salgada';
import ingredientesEsfihaSlice from './features/ingredientes-recheioSlice';
const store = configureStore({
  reducer: {
      criarEsfiha: criarEsfiha,
      ingredientesRecheio: ingredientesEsfihaSlice
    },
  });

const root = ReactDOM.createRoot(document.querySelector('.root'));
  

root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>  
  </StrictMode>
);