import React, { useState } from "react";
import { Link } from "react-router-dom";

function Recomendacoes() {

    return (
        <main className="container py-5 px-4">
            <h1>Delivery de Esfihas</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, sit adipiscing sed aliquet pharetra commodo curabitur eget. Fames faucibus tincidunt pellentesque eu. Semper non ipsum amet id purus. Feugiat viverra nibh nisl libero mattis. Vitae sed ultrices volutpat tempus. Pretium gravida donec in pharetra vel sit et volutpat. Volutpat iaculis sit elit at viverra quis leo.</p>

            <section className="menu-esfihas my-5">
                    <h2 className="menu-esfihas__titulo">Esfihas Salgadas</h2>
                    <section className="d-flex justify-content-around flex-wrap">    
                        <section className="card m-4">
                            <img src={'img/esfiha-chocolate-confete.png'} className="card-img-top card__img" alt="..." ></img>
                            <section className="card-body">
                                <h5 className="card-title text-center">Frango com catupiry</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            </section>
                        </section>

                        <section className="card m-4">
                            <img src={'img/esfiha-carne.png'} className="card-img-top card__img" alt="..." ></img>
                            <section className="card-body">
                                <h5 className="card-title text-center">Carne</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            </section>
                        </section>
                        
                    </section>
        
                    <Link to='/esfihas-salgadas' className="btn menu-esfihas__ver-mais">Ver mais</Link>

                </section>

                <section className="menu-esfihas my-5">
                    <h2 className="menu-esfihas__titulo">Esfihas Doces</h2>
                    <section className="d-flex justify-content-around flex-wrap">    
                        <section className="card m-4">
                            <img src={'img/esfiha-chocolate-confete.png'} className="card-img-top card__img" alt="..." ></img>
                            <section className="card-body">
                                <h5 className="card-title text-center">Chocolate com confete</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            </section>
                        </section>

                        <section className="card m-4">
                            <img src={'img/esfiha-morango.png'} className="card-img-top card__img" alt="..."></img>
                            <section className="card-body">
                                <h5 className="card-title text-center">Morango</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            </section>
                        </section>
                        
                    </section>
        
                    <Link to='/esfihas-doces' className="btn menu-esfihas__ver-mais">Ver mais</Link>

                </section>
            </main>
                
    );
}

export default Recomendacoes;