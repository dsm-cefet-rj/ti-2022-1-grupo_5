//Não iremos utilizar por enquanto
import React, { useContext } from "react";
import { PedidoContext } from "../../App";
import { Link } from "react-router-dom";

export function CardPersonalizada({personalizadas, index}) {
const {pedido, setPedido} = useContext(PedidoContext);
    function adicionarIngredientePedido() {
    const pedidoCopia = [...pedido];
        const itensIdDiff = pedidoCopia.every(item => item.nome !== personalizadas[index].nome);
        if (itensIdDiff) {
            pedidoCopia.push(personalizadas[index]);
            pedidoCopia[pedidoCopia.length-1].qtd = 1;
            setPedido(pedidoCopia);
        } else {
            alert('Ingrediente já adicionado a esfiha no pedido');
        }
    }
    
    return(
        <section className="card m-4">
            <img src="personalizadas-salgada" className="card-img-top card__img" alt="..."/>
            <section className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{personalizadas.nome}</h5>
                <p className="card-text">Crie a sua esfiha personaliza e deixe ela do seu jeito!</p>
                <span className="botao card__btn align-self-center" onClick={adicionarIngredientePedido}><i className="bi bi-cart-plus-fill botao__icon"></i>Criar</span>
                <Link to='/criar-esfihas' className="botao card__btn align-self-center"><i className="bi bi-pencil-square botao__icon"></i>Criar</Link>
            </section>
        </section>
    );
}
