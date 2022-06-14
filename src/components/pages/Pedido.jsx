/* eslint-disable no-restricted-globals */
import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelarPedido, realizarPedido } from "../../features/pedido";
import CardPedido from "../geral/CardPedido";
import ResumoPedido from "../ResumoPedido";

export default function Pedido() {
    const dispatch = useDispatch();
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

    if (pedido.itens.length !== 0) {
        return (
            <main className="container pedido py-5">
                <h2>Pedido</h2>

                <form className="pedido__form">

                    <section className="pedido__form-section">

                        <section className="menu-esfihas my-2">
                            <section className="d-flex justify-content-around flex-wrap"> 
                                {pedido.itens.map((item, index) => <CardPedido index={index} key={index}/>)}                                    
                            </section>
                        </section>

                        <h4>Entrega</h4>
                        <section className="row mx-5">
                                <div className="form-floating col-lg-2 col-sm-3 col-xs-12 p-2 my-2">
                                    <input type="text" inputMode="number" maxLength={8} ref={cep} className="form-control" id="cep" onInput={preencherCep} placeholder=" "/>
                                    <label htmlFor="cep">CEP</label>
                                </div>

                                <div className="form-floating col-lg-2 col-sm-4 col-xs-12 p-2 my-2">
                                    <input type="text" className="form-control" id="municipio" placeholder=" "/>
                                    <label htmlFor="municipio">Município</label>
                                </div>

                                <div className="form-floating col-lg-4 col-sm-5 col-xs-12 p-2 my-2">
                                    <input type="text" className="form-control form-control-mb" id="endereco" placeholder=" "/>
                                    <label htmlFor="endereco">Endereço</label>
                                </div>

                                <div className="form-floating col-lg-1 col-sm-2 col-xs-12 p-2 my-2">
                                    <input type="number" className="form-control" id="numero" placeholder=" "/>
                                    <label htmlFor="numero">Nº</label>
                                </div>

                                <div className="form-floating col-lg-3 col-sm-10 col-xs-12 p-2 my-2">
                                    <input type="text" className="form-control" id="complemento" placeholder=" "/>
                                    <label htmlFor="complemento">Complemento</label>
                                </div>
                        </section>
            

                    </section>

                    <section className="pedido__form-section">
                        <h4>Forma de Pagamento</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="pagamento" id="pix"/>
                            <label className="form-check-label" for="pix">
                                <p>Pix</p>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="pagamento" id="cartao"/>
                            <label className="form-check-label" for="cartao">
                                <p>Cartão</p>
                            </label>
                        </div>
                    </section>

                    <section className="pedido__form-section">
                        <h4>Resumo</h4>
            
                        <ResumoPedido/>

                    </section>
                    
                    <section className="pedido__form-section flex-row">
                        <span className="botao botao--confirmar" onClick={()=>{dispatch(realizarPedido())}}>Finalizar</span>
                        <span className="botao botao--cancelar" onClick={()=>{dispatch(cancelarPedido())}}>Cancelar</span>
                    </section>
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