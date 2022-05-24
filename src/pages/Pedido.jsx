/* eslint-disable no-restricted-globals */
import React, { useContext } from "react";
import CardPedido from "../components/CardPedido";
import ResumoPedido from "../components/ResumoPedido";
import { PedidoContext } from "./App";

export default function Pedido() {
    const {pedido} = useContext(PedidoContext);

    return (
        <main className="container pedido py-4">
            <h2>Pedido</h2>

            <form className="pedido__form">

                <section className="pedido__form-section">
                    <section className="menu-esfihas my-2">
                        <section className="d-flex justify-content-around flex-wrap"> 
                            {pedido.map((item, index) => <CardPedido index={index}/>)}                                     
                        </section>
                    </section>

                    <section className="pedido__frete d-flex mx-5">
                        <div className="form-floating mb-3">
                            <input type="text" inputMode="number" className="form-control form-control-sm cep" id="cep" placeholder="_____-___" onChange={()=>{}}/>
                            <label htmlFor="cep">CEP</label>
                        </div>
                    </section>
        

                </section>

                <section className="pedido__form-section">
                    <h3>Resumo</h3>
        
                    <ResumoPedido/>

                </section>
                
                <button type="submit" className="botao"><i className="bi bi-bag-check-fill botao__icon"></i>Finalizar pedido</button>
            </form>

        </main>
    );
}