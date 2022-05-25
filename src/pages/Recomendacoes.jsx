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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, sit adipiscing sed aliquet pharetra commodo curabitur eget. Fames faucibus tincidunt pellentesque eu. Semper non ipsum amet id purus. Feugiat viverra nibh nisl libero mattis. Vitae sed ultrices volutpat tempus. Pretium gravida donec in pharetra vel sit et volutpat. Volutpat iaculis sit elit at viverra quis leo.</p>

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