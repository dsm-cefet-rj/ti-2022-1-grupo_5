import React, { useContext } from "react";
import { PedidoContext } from "../pages/App";

export function CardEsfiha({esfihas, index}) {
    const {pedido, setPedido} = useContext(PedidoContext);

    function adicionarItemPedido() {
        const pedidoCopia = [...pedido];
        const itensIdDiff = pedidoCopia.every(item => item.id !== esfihas[index].id);
        if (itensIdDiff) {
            pedidoCopia.push(esfihas[index]);
            pedidoCopia[pedidoCopia.length-1].qtd = 1;
            setPedido(pedidoCopia);
        } else {
            alert('Esfiha já adicionada ao pedido');
        }
    }
    
    return(
        <section className="card m-4">
            <img src={esfihas[index].img} className="card-img-top card__img" alt="..."/>
            <section className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{esfihas[index].nome}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui in ultricies dolor velit nunc.</p>
                <span className="botao card__btn align-self-center" onClick={adicionarItemPedido}><i className="bi bi-cart-plus botao__icon"></i>Comprar</span>
            </section>
        </section>
    );
}