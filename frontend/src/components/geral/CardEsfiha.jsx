import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { adicionarItem } from "../../features/pedido";
import notificacao from "../../features/utils/notificacao";

export function CardEsfiha({esfihas, index}) {
    const dispatch = useDispatch();
    const usuario = localStorage.usuario;

    function comprar() {
        if(usuario) {
            dispatch(adicionarItem(esfihas[index]));
            notificacao(true, `Esfiha ${esfihas[index].nome} adicionada!`);
        }
        else {
            notificacao(false, 'Necessário login')
        }
    }
    
    return(
        <section className="card m-4">
            <img src={esfihas[index].img} className="card-img-top card__img" alt="..."/>
            <section className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{esfihas[index].nome}</h5>
                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, neque. </p>
                {/* se a esfiha for do tipo personalizada, mostra o botão de criar esfiha*/}
                {esfihas[index].tipo === 'Personalizada' ? <Link to='/criar-esfiha' className="botao card__btn align-self-center"><i className="bi bi-pencil-square botao__icon"></i>Criar</Link> 
                    : <span className="botao card__btn align-self-center" onClick={comprar}><i className="bi bi-cart-plus-fill botao__icon"></i>Comprar</span>}
            </section>
        </section>
    );
}