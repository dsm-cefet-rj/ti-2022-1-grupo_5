import React, { useContext } from "react";
import { PedidoContext } from "../pages/App";

export default function CardPedido({index}) {
    const pedido = useContext(PedidoContext);

    return(
    <section className="card m-4">
        <img src={pedido[index].img} className="card-img-top card__img" alt="..."/>
        <section className="card-body d-flex flex-column">
            <h5 className="card-title">{pedido[index].nome}</h5>
            <p>R$ {pedido[index].valor}</p>
            <section className="d-flex justify-content-between pedido__qtd">
                <article className="d-flex">
                    <input type="button" className="botao" value="-" onChange={()=>{}}/>
                    <input type="number" name="" id="" value={pedido[index].qtd} min="0" onChange={()=>{}}/>
                    <input type="button" className="botao" value="+" onChange={()=>{}}/>
                </article>
                <button className="botao"><i className="bi bi-trash3 pedido__qtd__lixo"></i></button>
            </section>
        </section>
    </section>
    );
}