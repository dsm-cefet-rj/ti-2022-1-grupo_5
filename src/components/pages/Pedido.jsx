/* eslint-disable no-restricted-globals */
import axios from "axios";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardPedido from "../geral/CardPedido";
import ResumoPedido from "../ResumoPedido";

export default function Pedido() {
    const pedido = useSelector(state => state.pedido);
    const [/*codIbge,*/ setCodIbge] = useState(null);
    const cepRegex = /^[0-9]{8}$/g;
    const cep = useRef(null);

    async function preencherCep() {
        if (cepRegex.test(cep.current.value)) {
            const endereco = (await axios.get(`https://viacep.com.br/ws/${cep.current.value}/json`)).data;
            console.log(endereco.bairro);
            setCodIbge(endereco.ibge);
        }
    }

    // function realizarPedido() {
    //     if (cepRegex.test(cep.current.value) && codIbge.slice(0,2) === '33') {
    //         console.log(pedido);
    //         setPedido([]);
    //         alert('Pedido realizado!');
    //     } else {
    //         alert('É preciso inserir um CEP que seja do RJ');
    //     }
    // }

    if (pedido.length !== 0) {
        return (
            <main className="container pedido py-5">
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
                                <input type="text" inputMode="number" maxLength={8} ref={cep} className="form-control form-control-sm cep" id="cep" placeholder="_____-___" onInput={preencherCep}/>
                                <label htmlFor="cep">CEP</label>
                            </div>
                        </section>
            

                    </section>

                    <section className="pedido__form-section">
                        <h3>Resumo</h3>
            
                        <ResumoPedido/>

                    </section>
                    
                    <span className="botao" onClick={()=>{}}><i className="bi bi-bag-check-fill botao__icon"></i>Finalizar pedido</span>
                </form>

            </main>
        );
    } else {
        return (
            <main className="container d-flex align-items-center justify-content-center p-5">
                <h1>Seu carrinho de compras está vazio</h1>
            </main>
        );
    }
}