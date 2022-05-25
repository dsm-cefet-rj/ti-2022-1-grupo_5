import React, { useContext } from "react";
import { PedidoContext } from "./App";
import { CardEsfiha } from '../components/CardEsfiha'

export default function EsfihasDoces() {
    // eslint-disable-next-line no-restricted-globals
    // scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    // });

    const {esfihasDoce} = useContext(PedidoContext);
    
    return(
        <main className="container py-4">
            <section className="menu-esfihas my-5">
                <h2 className="menu-esfihas__titulo">Esfihas Doces</h2>
                <section className="d-flex justify-content-around flex-wrap">
                   {esfihasDoce.map((esfiha, index) => <CardEsfiha esfihas={esfihasDoce} index={index} key={index}/>)} 
                </section>
            </section>
        
        </main>
    );
}