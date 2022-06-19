import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { aumentarQtd, dimunuirQtd, excluirItem } from "../../features/pedido"

export default function CardPedido({index}) {
    
    const pedido = useSelector(state => state.pedido);
    const dispatch = useDispatch();

    function excluir() {
        dispatch(excluirItem(index));
        toast.error(`Esfiha ${pedido.itens[index].nome} excluída!`, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return(
    <section className="card m-4">
        <img src={pedido.itens[index].img} className="card-img-top card__img" alt="..."/>
        <section className="card-body d-flex flex-column">
            <h5 className="card-title">{pedido.itens[index].nome}</h5>
            <p>R$ {pedido.itens[index].valor}</p> 
            <section className="d-flex justify-content-between flex-grow-1 pedido__qtd">
                <article className="d-flex align-self-end">
                    <input type="button" className="botao" value="-" onClick={()=> dispatch(dimunuirQtd(index))}/>
                    <input type="number" name="" id="" value={pedido.itens[index].qtd} min="0" onClick={()=>{}}/>
                    <input type="button" className="botao" value="+" onClick={() => dispatch(aumentarQtd(index))}/>
                </article>
                <span className="botao align-self-end" onClick={excluir}><i className="bi bi-trash3 pedido__qtd__lixo"></i></span>
            </section>
        </section>
    </section>
    );
}