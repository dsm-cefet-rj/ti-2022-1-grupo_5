import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Recomendacoes from './components/Recomendacoes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import EsfihasSalgadas from './components/EsfihasSalgadas';
import EsfihasDoces from './components/EsfihasDoces';
import Pedido from './components/Pedido';

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Recomendacoes/>}/>
            <Route path='/esfihas-salgadas' element={<EsfihasSalgadas/>}/>
            <Route path='/esfihas-doces' element={<EsfihasDoces/>}/>
            <Route path='/pedido' element={<Pedido/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
);