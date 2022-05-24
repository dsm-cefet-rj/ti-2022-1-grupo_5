import React, { useContext } from "react";
import { PedidoContext } from "../pages/App";

export default function CardPedido({index}) {
    const {pedido, setPedido} = useContext(PedidoContext);

    function aumentarQtd() {
        setPedido(pedido[index].qtd + 1);
    }

    function diminuirQtd() {
        setPedido(pedido[index].qtd - 1);
    }

    return(
    <section className="card m-4">
        <img src={pedido[index].img} className="card-img-top card__img" alt="..."/>
        <section className="card-body d-flex flex-column">
            <h5 className="card-title">{pedido[index].nome}</h5>
            <p>R$ {pedido[index].valor}</p>
            <section className="d-flex justify-content-between pedido__qtd">
                <article className="d-flex">
                    <input type="button" className="botao" value="-" onClick={diminuirQtd}/>
                    <input type="number" name="" id="" value={pedido[index].qtd} min="0" onClick={()=>{}}/>
                    <input type="button" className="botao" value="+" onClick={aumentarQtd}/>
                </article>
                <button className="botao"><i className="bi bi-trash3 pedido__qtd__lixo"></i></button>
            </section>
        </section>
    </section>
    );
}