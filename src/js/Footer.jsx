import React from "react";
import '/src/css/main.css';

function Footer(){
    return(
        <footer>
            <section class="row rodape">
                <section class="col-6 d-flex py-4 flex-column align-items-center justify-content-around rounded">
                    <img src="./img/logo.jpg" class="rodape__img" alt="Logo do Esfiháiéié"></img>
                </section>

                <section class="col-6 d-flex py-4 flex-column align-items-center justify-content-around rodape__contato">
                    <h2>Contato</h2>
                    <p class="rodape__contato-endereco">Av. Maracanã, 229, Pavilhão 1 <br> Maracanã – Rio de Janeiro/RJ </br></p>
                    <p class="rodape__contato-endereco">CEP: 20271-110</p>
                </section>

                <section class="col-md-12 d-flex flex-column align-items-center justify-content-around">
                    <small>©2022 Delivery de Esfihas</small>
                </section>

            </section>

        </footer>
    );
}
export default Footer;