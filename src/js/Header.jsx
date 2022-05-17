import React from "react";
import '/src/css/main.css';

function Header(){
    return(
        <nav class="navbar container-fluid shadow navbar-light py-2">
                <section class="menu__section">
                    <i class="bi bi-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"></i>
                    <a href="./index.html"><span> <img src="img/logo3.jpg" class="rounded" alt="logo Esfiháiéié"></img></span></a>
                </section>

                <section class="menu__section">
                    <span>Login </span>
                    <i class="bi bi-person"></i>
                    <a href="./pedido.html" class="position-relative">
                        <i class="bi bi-cart"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
                    </a>
                </section>

                <section class="offcanvas offcanvas-start menu__canvas" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <section class="offcanvas-header">
                        <i class="bi bi-x-lg" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                    </section>

                    <section class="offcanvas-body">
                        <ul class="menu__lista">
                            <li class="menu__item"><a href="#">Login</a></li>
                            <li class="menu__item"><a href="./esfihas-salgadas.html">Esfihas Salgadas</a></li>
                            <li class="menu__item"><a href="./esfihas-doces.html">Esfihas Doces</a></li>
                            <li class="menu__item"><a href="./pedido.html">Pedido</a></li>
                        </ul>
                    </section>
                </section>
            </nav>
    );
}

export default Header;