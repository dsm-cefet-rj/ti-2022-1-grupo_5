import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Header(){

    return(
        <>
            <header>
                <nav className="navbar container-fluid navbar-light px-4 py-2">
                    <section className="menu__section">
                        <i className="bi bi-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"></i>
                        <Link to='/'><span> <img src={''} className="menu__logo rounded" alt="logo Esfiháiéié"/></span></Link>
                    </section>

                    <section className="menu__section">
                        <span>Login </span>
                        <i className="bi bi-person"></i>
                        <Link to='/pedido' className="position-relative">
                            <i className="bi bi-cart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
                        </Link>
                    </section>

                    <section className="offcanvas offcanvas-start menu__canvas px-2" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <section className="offcanvas-header">
                            <i className="bi bi-x-lg" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                        </section>

                        <section className="offcanvas-body">
                            <ul className="menu__lista">
                                <li className="menu__item"><Link to="/Login" onClick={e => {document.querySelector('.bi-x-lg').click()}}>Login</Link></li>
                                <li className="menu__item"><Link to='/esfihas-salgadas' onClick={e => {document.querySelector('.bi-x-lg').click()}}>Esfihas Salgadas</Link></li>
                                <li className="menu__item"><Link to='/esfihas-doces' onClick={e => {document.querySelector('.bi-x-lg').click()}}>Esfihas Doces</Link></li>
                                <li className="menu__item"><Link to='/pedido' onClick={e => {document.querySelector('.bi-x-lg').click()}}>Pedido</Link></li>
                                <li className="menu__item"><Link to='/ingredientes' onClick={e => {document.querySelector('.bi-x-lg').click()}}>Ingredientes</Link></li>
                            </ul>
                        </section>
                    </section>
                </nav>

            </header>

            <Outlet/>
        </>
    );
}

export default Header;