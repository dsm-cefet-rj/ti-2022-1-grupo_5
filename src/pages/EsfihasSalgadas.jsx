import React from "react";
import { Link } from "react-router-dom";

export default function EsfihasSalgadas() {
    // eslint-disable-next-line no-restricted-globals
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    return(
        <main className="container py-4">
            <section className="menu-esfihas my-5">
                <h2 className="menu-esfihas__titulo">Esfihas Salgadas</h2>
                <section className="d-flex justify-content-around flex-wrap">    
                    <section className="card m-4">
                        <img src={''} className="card-img-top card__img" alt="..."/>
                        <section className="card-body d-flex flex-column">
                            <h5 className="card-title">Frango com catupiry</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                        </section>
                    </section>

                    <section className="card m-4">
                        <img src={''} className="card-img-top card__img" alt="..."/>
                        <section className="card-body d-flex flex-column">
                            <h5 className="card-title">Frango com catupiry</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                        </section>
                    </section>
                    <section className="card m-4">
                        <img src={''} className="card-img-top card__img" alt="..."/>
                        <section className="card-body d-flex flex-column">
                            <h5 className="card-title">Frango com catupiry</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                        </section>
                    </section>
                    <section className="card m-4">
                        <img src={''} className="card-img-top card__img" alt="..."/>
                        <section className="card-body d-flex flex-column">
                            <h5 className="card-title">Frango com catupiry</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                        </section>
                    </section>
                    <section className="card m-4">
                        <img src={''} className="card-img-top card__img" alt="..."/>
                        <section className="card-body d-flex flex-column">
                            <h5 className="card-title">Frango com catupiry</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                        </section>
                    </section>
                    <section className="card m-4">
                        <img src={''} className="card-img-top card__img" alt="..."/>
                        <section className="card-body d-flex flex-column">
                            <h5 className="card-title">Frango com catupiry</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                            <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                        </section>
                    </section>
                    
                </section>
            </section>
        
        </main>
    );
}