import { createContext, React, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Recomendacoes from './components/pages/Recomendacoes';
import EsfihasSalgadas from './components/pages/EsfihasSalgadas';
import EsfihasDoces from './components/pages/EsfihasDoces';
import Pedido from './components/pages/Pedido';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import CriarEsfiha from './components/pages/Criar-esfiha';
import { getEsfihas } from './features/esfihas';
import Register from './components/pages/Register';
//import Profile from './components/pages/Profile';

export const PedidoContext = createContext();

export default function App() {

    function menuCollapse() {
        document.querySelector('.bi-x-lg').click();
    }

    const itensPedido = useSelector(state => state.pedido.itens);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEsfihas());
    }, [dispatch]);

    return(
        <BrowserRouter>
            <header>
                <nav className="navbar container-fluid navbar-light px-4 py-2">
                    <section className="menu__section">
                        <i className="bi bi-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"></i>
                        <Link to='/'><span> <img src={'img/logo.png'} className="menu__logo rounded" alt="logo Esfiháiéié"/></span></Link>
                    </section>

                    <section className="menu__section">
                        <Link to='/Login' className="position-relative">
                        <span>Login </span>
                        <i className="bi bi-person"></i>
                        </Link>
                        <Link to='/pedido' className="position-relative">
                            <i className="bi bi-cart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{(itensPedido.length === 0) ? '' : itensPedido.reduce((pre, cur) => pre + cur.qtd,0)}</span>
                        </Link>
                    </section>

                    <section className="offcanvas offcanvas-start menu__canvas px-2" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <section className="offcanvas-header">
                            <i className="bi bi-x-lg" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                        </section>

                        <section className="offcanvas-body">
                            <ul className="menu__lista">
                                <li className="menu__item"><Link to='/Login' onClick={menuCollapse}>Login</Link></li>
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
                <Route path='/Login' element={<Login/>}/>
                <Route path='/esfihas-salgadas' element={<EsfihasSalgadas/>}/>
                <Route path='/esfihas-doces' element={<EsfihasDoces/>}/>
                <Route path='/criar-esfiha' element={<CriarEsfiha/>}/>
                <Route path='/pedido' element={<Pedido/>}/>
                <Route path='*' element={<NotFound/>}/>
                <Route path='/Register' element={<Register/>}/>
                {/*<Route path='/Profile' element={<Profile/>}/>*/}
            </Routes>
        </BrowserRouter>
    );

}