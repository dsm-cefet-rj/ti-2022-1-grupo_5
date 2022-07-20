import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import criarEsfiha from './features/criar-esfiha';
import ingredientesEsfihaSlice from './features/ingredientes-recheioSlice';
import esfihasReducer from './features/esfihas';
import pedidoReducer from './features/pedido';
import usuarioReducer from './features/usuario';
import ingredientesSlice from "./features/ingredientesSlice";
import axios from 'axios';
import notificacao from './features/utils/notificacao';

axios.defaults.baseURL = 'http://localhost:5000/';

axios.interceptors.response.use((res) => res, (error) =>
  notificacao(false, error.response.data.msg)
);

const store = configureStore({
  reducer: {
      usuario: usuarioReducer,
      criarEsfiha: criarEsfiha,
      ingredientesRecheio: ingredientesEsfihaSlice,
      esfihas: esfihasReducer,
      pedido: pedidoReducer,
      ingrediente: ingredientesSlice,
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