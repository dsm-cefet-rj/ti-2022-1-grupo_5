import React, { useState } from "react";
import frangoCatupiry from '../img/esfiha-frango-catupiry.png';
import chocolateConfete from '../img/esfiha-chocolate-confete.png';
import { Link } from "react-router-dom";

function Recomendacoes() {

    return (
        <main className="container py-4">
            <h1>Delivery de Esfihas</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, sit adipiscing sed aliquet pharetra commodo curabitur eget. Fames faucibus tincidunt pellentesque eu. Semper non ipsum amet id purus. Feugiat viverra nibh nisl libero mattis. Vitae sed ultrices volutpat tempus. Pretium gravida donec in pharetra vel sit et volutpat. Volutpat iaculis sit elit at viverra quis leo.</p>

            <section className="menu-esfihas my-5">
                    <h2 className="menu-esfihas__titulo">Esfihas Salgadas</h2>
                    <section className="d-flex justify-content-around flex-wrap">    
                        <section className="card shadow-lg m-4">
                            <img src={frangoCatupiry} className="card-img-top card__img" alt="..." ></img>
                            <section className="card-body">
                                <h5 className="card-title">Frango com catupiry</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            </section>
                        </section>

                        <section className="card shadow-lg m-4">
                            <img src={frangoCatupiry} className="card-img-top card__img" alt="..." ></img>
                            <section className="card-body">
                                <h5 className="card-title">Frango com catupiry</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            </section>
                        </section>
                        
                    </section>
        
                    <Link to='/esfihas-salgadas' className="btn shadow menu-esfihas__ver-mais">Ver mais</Link>

                </section>

                <section className="menu-esfihas my-5">
                    <h2 className="menu-esfihas__titulo">Esfihas Doces</h2>
                    <section className="d-flex justify-content-around flex-wrap">    
                        <section className="card shadow-lg m-4">
                            <img src={chocolateConfete} className="card-img-top card__img" alt="..." ></img>
                            <section className="card-body">
                                <h5 className="card-title">Chocolate com confete</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            </section>
                        </section>

                        <section className="card shadow-lg m-4">
                            <img src={chocolateConfete} className="card-img-top card__img" alt="..."></img>
                            <section className="card-body">
                                <h5 className="card-title">Chocolate com confete</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            </section>
                        </section>
                        
                    </section>
        
                    <Link to='/esfihas-doces' className="btn shadow menu-esfihas__ver-mais">Ver mais</Link>

                </section>
            </main>
                
    );
}

export default Recomendacoes;