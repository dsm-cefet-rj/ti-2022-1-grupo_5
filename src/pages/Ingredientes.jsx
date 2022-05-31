import React, { useContext } from "react";
import { IngredienteContext } from "./App";
import { CardIngrediente } from '../components/CardIngrediente'

export default function Ingredientes() {
    

    const {ingredientes} = useContext(IngredienteContext);
    
    return(
        <main className="container py-4">
            <section className="menu-esfihas my-5">
                <h2 className="menu-esfihas__titulo">Ingredientes</h2>
                <section className="d-flex justify-content-around flex-wrap">
                   {ingredientes.map((ingrediente, index) => <CardIngrediente ingredientes={ingredientes} index={index} key={index}/>)} 
                </section>
            </section>
        
        </main>
    );
}