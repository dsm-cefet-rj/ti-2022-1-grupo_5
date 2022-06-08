import React, { useContext } from "react";
import { PedidoContext } from "./App";
import { CardEsfiha } from '../CardEsfiha'

export default function EsfihasSalgadas() {
    // eslint-disable-next-line no-restricted-globals
    // scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    // });

    const {esfihasSalgadas} = useContext(PedidoContext);
    
    return(
        <main className="container py-4">
            <section className="menu-esfihas my-5">
                <h2 className="menu-esfihas__titulo">Esfihas Salgadas</h2>
                <section className="d-flex justify-content-around flex-wrap">
                   {esfihasSalgadas.map((esfiha, index) => <CardEsfiha esfihas={esfihasSalgadas} index={index} key={index}/>)} 
                </section>
            </section>
        
        </main>
    );
}