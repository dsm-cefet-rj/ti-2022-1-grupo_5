import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { aumentarQtd, dimunuirQtd, excluirItem } from "../features/pedido"

export default function CardPedido({index}) {
    
    const pedido = useSelector(state => state.pedido);
    const dispatch = useDispatch();

    return(
    <section className="card m-4">
        <img src={pedido[index].img} className="card-img-top card__img" alt="..."/>
        <section className="card-body d-flex flex-column">
            <h5 className="card-title">{pedido[index].nome}</h5>
            <p>R$ {pedido[index].valor}</p> 
            <section className="d-flex justify-content-between pedido__qtd">
                <article className="d-flex">
                    <input type="button" className="botao" value="-" onClick={()=> dispatch(dimunuirQtd(index))}/>
                    <input type="number" name="" id="" value={pedido[index].qtd} min="0" onClick={()=>{}}/>
                    <input type="button" className="botao" value="+" onClick={() => dispatch(aumentarQtd(index))}/>
                </article>
                <span className="botao" onClick={() => dispatch(excluirItem(index))}><i className="bi bi-trash3 pedido__qtd__lixo"></i></span>
            </section>
        </section>
    </section>
    );
}