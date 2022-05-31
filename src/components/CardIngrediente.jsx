import React, { useContext } from "react";
import { IngredienteContext } from "../pages/App";

export function CardIngrediente({ingredientes, index}) {
    const {pedido, setPedido} = useContext(IngredienteContext);

    function adicionarIngredientePedido() {
        const pedidoCopia = [...pedido];
        const itensIdDiff = pedidoCopia.every(item => item.nome !== ingredientes[index].nome);
        if (itensIdDiff) {
            pedidoCopia.push(ingredientes[index]);
            pedidoCopia[pedidoCopia.length-1].qtd = 1;
            setPedido(pedidoCopia);
        } else {
            alert('Ingrediente já adicionado a esfiha no pedido');
        }
    } 
    
    return(
        <section className="card m-4">
            <img src={ingredientes[index].img} className="card-img-top card__img" alt="..."/>
            <section className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{ingredientes[index].nome}</h5>
                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, neque. </p>
                <span className="botao card__btn align-self-center" onClick={adicionarIngredientePedido}><i className="bi bi-cart-plus botao__icon"></i>Colocar</span>
            </section>
        </section>
    );
}


