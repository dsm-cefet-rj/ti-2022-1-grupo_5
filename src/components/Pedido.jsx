import React from "react";
import frangoCatupiry from '../img/esfiha-frango-catupiry.png';
import chocolateConfete from '../img/esfiha-chocolate-confete.png';

export default function Pedido() {
    // eslint-disable-next-line no-restricted-globals
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <main className="container pedido py-4">
            <h2>Pedido</h2>

            <form className="pedido__form">

                <section className="pedido__form-section">
                    <section className="menu-esfihas my-2">
                        <section className="d-flex justify-content-around flex-wrap">    
                            <section className="card shadow-lg m-4">
                                <img src={frangoCatupiry} className="card-img-top card__img" alt="..."/>
                                <section className="card-body d-flex flex-column">
                                    <h5 className="card-title">Frango com catupiry</h5>
                                    <p>R$5,00</p>
                                    <section className="d-flex justify-content-between pedido__qtd">
                                        <article className="d-flex">
                                            <input type="button" className="botao" value="-"/>
                                            <input type="number" name="" id="" value="3" min="0"/>
                                            <input type="button" className="botao" value="+"/>
                                        </article>
                                        <button className="botao"><i className="bi bi-trash3 pedido__qtd__lixo"></i></button>
                                    </section>
                                </section>
                            </section>
        
                            <section className="card shadow-lg m-4">
                                <img src={chocolateConfete} className="card-img-top card__img" alt="..."/>
                                <section className="card-body d-flex flex-column">
                                    <h5 className="card-title">Chocolate com confete</h5>
                                    <p>R$6,00</p>
                                    <section className="d-flex justify-content-between pedido__qtd">
                                        <article className="d-flex">
                                            <input type="button" className="botao" value="-"/>
                                            <input type="number" name="" id="" value="1" min="0"/>
                                            <input type="button" className="botao" value="+"/>
                                        </article>
                                        <button className="botao"><i className="bi bi-trash3 pedido__qtd__lixo"></i></button>
                                    </section>
                                </section>
                            </section>
                            
                        </section>
                    </section>

                    <section className="pedido__frete d-flex mx-5">
                        <div className="form-floating mb-3">
                            <input type="text" inputMode="number" className="form-control form-control-sm cep" id="cep" placeholder="_____-___"/>
                            <label htmlFor="cep">CEP</label>
                        </div>
                    </section>
        

                </section>

                <section className="pedido__form-section">
                    <h3>Resumo</h3>
        
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Un.</th>
                                <th>Qtd</th>
                                <th>Total</th>
                            </tr>
                        </thead>
        
                        <tbody>
                            <tr>
                                <td>Frango com catupiry</td>
                                <td>R$5,00</td>
                                <td>3</td>
                                <td>R$15,00</td>
                            </tr>
                            <tr>
                                <td>Chocolate com confete</td>
                                <td>R$6,00</td>
                                <td>1</td>
                                <td>R$6,00</td>
                            </tr>
                        </tbody>
        
                        <tfoot>
                            <tr>
                                <td><strong>Subtotal</strong></td>
                                <td>-</td>
                                <td>-</td>
                                <td>R$21,00</td>
                            </tr>
                        </tfoot>
        
                    </table>

                    <table>
                        <thead>
                            <tr>
                                <th>Frete</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Meier</td>
                                <td>R$5,00</td>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td>R$26,00</td>
                            </tr>
                        </tbody>
                    </table>

                </section>
                
                <button type="submit" className="botao"><i className="bi bi-bag-check-fill botao__icon"></i>Finalizar pedido</button>
            </form>

        </main>
    );
}