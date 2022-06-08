import React from "react";
import { useSelector } from "react-redux";
import { CardEsfiha } from '../geral/CardEsfiha'

export default function EsfihasSalgadas() {
    
    const esfihasSalgadas = useSelector(state => state.esfihas.salgadas);

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