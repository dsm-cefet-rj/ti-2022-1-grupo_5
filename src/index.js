import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import criarEsfiha from './features/personalizada-salgada';
import ingredientesEsfihaSlice from './features/ingredientes-recheioSlice';
import esfihasReducer from './features/esfihas';
import pedidoReducer from './features/pedido'
import ingredientesSlice from "./features/ingredientesSlice";



const store = configureStore({
  reducer: {
      criarEsfiha: criarEsfiha,
      ingredientesRecheio: ingredientesEsfihaSlice,
      esfihas: esfihasReducer,
      pedido: pedidoReducer,
      ingredient: ingredientesSlice,

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