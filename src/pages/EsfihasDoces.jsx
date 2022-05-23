import React from "react";
import { Link } from "react-router-dom";

export default function EsfihasDoces() {
    // eslint-disable-next-line no-restricted-globals
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return(
        <main className="container py-4">
        <section className="menu-esfihas my-5">
            <h2 className="menu-esfihas__titulo">Esfihas Doces</h2>
            <section className="d-flex justify-content-around flex-wrap">    
                <section className="card m-4">
                    <img src={'img/esfiha-chocolate-confete.png'} className="card-img-top card__img" alt="..."/>
                    <section className="card-body d-flex flex-column">
                        <h5 className="card-title text-center">Chocolate com confete</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                        <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                    </section>
                </section>

                <section className="card m-4">
                    <img src={'img/esfiha-brigadeiro.png'} className="card-img-top card__img" alt="..."/>
                    <section className="card-body d-flex flex-column">
                        <h5 className="card-title text-center">Brigadeiro</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                        <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                    </section>
                </section>
                <section className="card m-4">
                    <img src={'img/esfiha-banana.png'} className="card-img-top card__img" alt="..."/>
                    <section className="card-body d-flex flex-column">
                        <h5 className="card-title text-center">Banana</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                        <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                    </section>
                </section>
                <section className="card m-4">
                    <img src={'img/esfiha-chocolate-branco.png'} className="card-img-top card__img" alt="..."/>
                    <section className="card-body d-flex flex-column">
                        <h5 className="card-title text-center">Chocolate branco</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                        <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                    </section>
                </section>
                <section className="card m-4">
                    <img src={'img/esfiha-morango.png'} className="card-img-top card__img" alt="..."/>
                    <section className="card-body d-flex flex-column">
                        <h5 className="card-title text-center">Morango</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                        <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                    </section>
                </section>
                <section className="card m-4">
                    <img src={'img/esfiha-doce-leite.png'} className="card-img-top card__img" alt="..."/>
                    <section className="card-body d-flex flex-column">
                        <h5 className="card-title text-center">Doce de leite</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                        <Link to='/pedido' className="botao align-self-center"><i className="bi bi-cart-plus botao__icon"></i>Comprar</Link>
                    </section>
                </section>
                
            </section>
        </section>
        
        </main>
    );
}