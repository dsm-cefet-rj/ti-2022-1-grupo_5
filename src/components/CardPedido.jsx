import React, { useContext } from "react";
import { PedidoContext } from "./pages/App";

export default function CardPedido({index}) {
    const {pedido, setPedido} = useContext(PedidoContext);

    function aumentarQtd() {
        const pedidoCopia = [...pedido];
        pedidoCopia[index].qtd++;
        setPedido(pedidoCopia);
    }

    function diminuirQtd() {
        const pedidoCopia = [...pedido];
        pedidoCopia[index].qtd--;
        setPedido(pedidoCopia);
        if(pedido[index].qtd === 0) excluirItem();
    }

    function excluirItem() {
        const pedidoCopia = [...pedido];
        pedidoCopia.splice(index,1);
        setPedido(pedidoCopia);
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
                <span className="botao" onClick={excluirItem}><i className="bi bi-trash3 pedido__qtd__lixo"></i></span>
            </section>
        </section>
    </section>
    );
}