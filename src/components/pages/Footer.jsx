import React from "react";

function Footer(){
    return(
        <footer>
            <section className="row rodape">
                <section className="col-6 d-flex py-4 flex-column align-items-center justify-content-around rounded">
                    <img src={''} className="rodape__img" alt="Logo do Esfiháiéié"/>
                </section>

                <section className="col-6 d-flex py-4 flex-column align-items-center justify-content-around rodape__contato">
                    <h2>Contato</h2>
                    <p className="rodape__contato-endereco">Av. Maracanã, 229, Pavilhão 1 <br/> Maracanã – Rio de Janeiro/RJ <br/></p>
                    <p className="rodape__contato-endereco">CEP: 20271-110</p>
                </section>

                <section className="col-md-12 d-flex flex-column align-items-center justify-content-around">
                    <small>©2022 Delivery de Esfihas</small>
                </section>

            </section>

        </footer>
    );
}
export default Footer;