import React from "react";
import '/src/css/main.css';

function Recomendacoes() {
    return (

        <main>
        <section class="menu-esfihas my-5">
                <h2 class="menu-esfihas__titulo">Esfihas Salgadas</h2>
                <section class="d-flex justify-content-around flex-wrap">    
                    <section class="card shadow-lg m-4">
                        <img src="./img/esfiha-frango-catupiry.png" class="card-img-top card__img" alt="..." ></img>
                        <section class="card-body">
                            <h5 class="card-title">Frango com catupiry</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                        </section>
                    </section>

                    <section class="card shadow-lg m-4">
                        <img src="./img/esfiha-frango-catupiry.png" class="card-img-top card__img" alt="..." ></img>
                        <section class="card-body">
                            <h5 class="card-title">Frango com catupiry</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                        </section>
                    </section>
                    
                </section>
    
                <a href="./esfihas-salgadas.html" class="btn shadow menu-esfihas__ver-mais">Ver mais</a>

            </section>

            <section class="menu-esfihas my-5">
                <h2 class="menu-esfihas__titulo">Esfihas Doces</h2>
                <section class="d-flex justify-content-around flex-wrap">    
                    <section class="card shadow-lg m-4">
                        <img src="./img/esfiha-chocolate-confete.png" class="card-img-top card__img" alt="..." ></img>
                        <section class="card-body">
                            <h5 class="card-title">Chocolate com confete</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                        </section>
                    </section>

                    <section class="card shadow-lg m-4">
                        <img src="./img/esfiha-chocolate-confete.png" class="card-img-top card__img" alt="..."></img>
                        <section class="card-body">
                            <h5 class="card-title">Chocolate com confete</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                        </section>
                    </section>
                    
                </section>
    
                <a href="./esfihas-doces.html" class="btn shadow menu-esfihas__ver-mais">Ver mais</a>

            </section>
            </main>
                
    );
}

export default Recomendacoes;