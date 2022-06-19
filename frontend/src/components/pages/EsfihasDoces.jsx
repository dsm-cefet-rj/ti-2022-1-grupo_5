import React from "react";
import { useSelector } from "react-redux";
import { CardEsfiha } from '../geral/CardEsfiha'

export default function EsfihasDoces() {

    const esfihasDoce = useSelector(state => state.esfihas.doce);

    return (
        <main className="container py-4">
            <section className="menu-esfihas my-5">
                <h2 className="menu-esfihas__titulo">Esfihas Doces</h2>
                <section className="d-flex justify-content-around flex-wrap">
                    {esfihasDoce.map((esfiha, index) => <CardEsfiha esfihas={esfihasDoce} index={index} key={index} />)}
                </section>
            </section>

        </main>
    );
}