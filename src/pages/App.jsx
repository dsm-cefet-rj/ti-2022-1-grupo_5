import { createContext, React, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Recomendacoes from './Recomendacoes';
import EsfihasSalgadas from './EsfihasSalgadas';
import EsfihasDoces from './EsfihasDoces';
import Pedido from './Pedido';
import NotFound from './NotFound';

export const PedidoContext = createContext();

export default function App() {

    const [pedido, setPedido] = useState([
        // {
        //     nome: 'Frango com catupiry',
        //     img: 'img/esfiha-frango-catupiry.png',
        //     valor: 5.0,
        //     qtd: 1
        // },
        // {
        //     nome: 'Carne',
        //     img: 'img/esfiha-carne.png',
        //     valor: 4.0,
        //     qtd: 4
        // },
        // {
        //     nome: 'Chocolate branco',
        //     img: 'img/esfiha-chocolate-branco.png',
        //     valor: 6.0,
        //     qtd: 2
        // },
        // {
        //     nome: 'Chocolate com confete',
        //     img: 'img/esfiha-chocolate-confete.png',
        //     valor: 6.0,
        //     qtd: 3
        // }
    ]);

    const esfihas = [
        {
            id: 1,
            tipo: 'Salgada',
            nome: '3 Queijos',
            img: 'img/esfiha-3-queijos.png',
            valor: 5.0
        },
        {
            id: 2,
            tipo: 'Salgada',
            nome: 'Atum',
            img: 'img/esfiha-atum.png',
            valor: 4.0
        },
        {
            id: 3,
            tipo: 'Salgada',
            nome: 'Bacon',
            img: 'img/esfiha-bacon.png',
            valor: 5.0
        },
        {
            id: 4,
            tipo: 'Salgada',
            nome: 'Carne',
            img: 'img/esfiha-carne.png',
            valor: 4.0
        },
        {
            id: 5,
            tipo: 'Salgada',
            nome: 'Frango com catupiry',
            img: 'img/esfiha-frango-catupiry.png',
            valor: 5.0
        },
        {
            id: 6,
            tipo: 'Salgada',
            nome: 'Manjericão',
            img: 'img/esfiha-manjericão.png',
            valor: 4.0
        },
        {
            id: 7,
            tipo: 'Doce',
            nome: 'Banana',
            img: 'img/esfiha-banana.png',
            valor: 6.0
        },
        {
            id: 8,
            tipo: 'Doce',
            nome: 'Brigadeiro',
            img: 'img/esfiha-brigadeiro.png',
            valor: 6.0
        },
        {
            id: 9,
            tipo: 'Doce',
            nome: 'Chocolate branco',
            img: 'img/esfiha-chocolate-branco.png',
            valor: 6.0
        },
        {
            id: 10,
            tipo: 'Doce',
            nome: 'Chocolate com confete',
            img: 'img/esfiha-chocolate-confete.png',
            valor: 6.0
        },
        {
            id: 11,
            tipo: 'Doce',
            nome: 'Doce de Leite',
            img: 'img/esfiha-doce-leite.png',
            valor: 6.0
        },
        {
            id: 12,
            tipo: 'Doce',
            nome: 'Morango',
            img: 'img/esfiha-morango.png',
            valor: 6.0
        },
    ];

    const esfihasSalgadas = esfihas.filter(esfiha => esfiha.tipo === 'Salgada');
    const esfihasDoce = esfihas.filter(esfiha => esfiha.tipo === 'Doce');

    function menuCollapse() {
        document.querySelector('.bi-x-lg').click();
    }

    return(
    <PedidoContext.Provider value={{pedido, setPedido, esfihasSalgadas, esfihasDoce}}>
        <BrowserRouter>
            <header>
                <nav className="navbar container-fluid navbar-light px-4 py-2">
                    <section className="menu__section">
                        <i className="bi bi-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"></i>
                        <Link to='/'><span> <img src={'img/logo.png'} className="menu__logo rounded" alt="logo Esfiháiéié"/></span></Link>
                    </section>

                    <section className="menu__section">
                        <span>Login </span>
                        <i className="bi bi-person"></i>
                        <Link to='/pedido' className="position-relative">
                            <i className="bi bi-cart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{(pedido.length === 0)? '' : pedido.length}</span>
                        </Link>
                    </section>

                    <section className="offcanvas offcanvas-start menu__canvas px-2" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <section className="offcanvas-header">
                            <i className="bi bi-x-lg" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                        </section>

                        <section className="offcanvas-body">
                            <ul className="menu__lista">
                                <li className="menu__item"><Link to="/" onClick={menuCollapse}>Login</Link></li>
                                <li className="menu__item"><Link to='/esfihas-salgadas' onClick={menuCollapse}>Esfihas Salgadas</Link></li>
                                <li className="menu__item"><Link to='/esfihas-doces' onClick={menuCollapse}>Esfihas Doces</Link></li>
                                <li className="menu__item"><Link to='/pedido' onClick={menuCollapse}>Pedido</Link></li>
                            </ul>
                        </section>
                    </section>
                </nav>

            </header>

            <Routes>
                <Route path='/' element={<Recomendacoes/>}/>
                <Route path='/esfihas-salgadas' element={<EsfihasSalgadas/>}/>
                <Route path='/esfihas-doces' element={<EsfihasDoces/>}/>
                <Route path='/pedido' element={<Pedido/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </PedidoContext.Provider>
    );
}