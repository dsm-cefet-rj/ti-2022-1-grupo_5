import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PedidoContext } from "./App";
import { CardEsfiha } from '../components/CardEsfiha';

function Recomendacoes() {
    const {esfihasSalgadas, esfihasDoce} = useContext(PedidoContext);
    const recomendacaoSalgadas = esfihasSalgadas.filter((esfiha, index) => index < 2);
    const recomendacaoDoce = esfihasDoce.filter((esfiha, index) => index < 2);

    return (
        <main className="container py-5 px-4">
            <h1>Delivery de Esfihas</h1>
            <p>Somos uma empresa que possui uma variedade de esfihas abertas salgadas e doces a disposição dos nossos clientes para serem compradas de suas casas através do nosso site. Acesse "ver mais" logo abaixo das esfihas para ter acesso aos outros sabores.</p>

            <section className="menu-esfihas my-5">
                    <h2 className="menu-esfihas__titulo">Esfihas Salgadas</h2>
                    <section className="d-flex justify-content-around flex-wrap">    
                        {recomendacaoSalgadas.map((esfiha, index) => <CardEsfiha esfihas={recomendacaoSalgadas} index={index} key={index}/>)}
                    </section>
        
                    <Link to='/esfihas-salgadas' className="btn menu-esfihas__ver-mais">Ver mais</Link>

                </section>

                <section className="menu-esfihas my-5">
                    <h2 className="menu-esfihas__titulo">Esfihas Doces</h2>
                    <section className="d-flex justify-content-around flex-wrap">    
                        {recomendacaoDoce.map((esfiha, index) => <CardEsfiha esfihas={recomendacaoDoce} index={index} key={index}/>)}
                    </section>
        
                    <Link to='/esfihas-doces' className="btn menu-esfihas__ver-mais">Ver mais</Link>

                </section>
            </main>
                
    );
}

export default Recomendacoes;