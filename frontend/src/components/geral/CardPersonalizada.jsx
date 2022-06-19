//Não iremos utilizar por enquanto
import React from "react";

export function CardPersonalizada({ingredientes, index}) {
    
    return(
        <section className="card m-4">
            <img src={ingredientes[index].img} className="card-img-top card__img" alt="..."/>
            <section className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{ingredientes.nome}</h5>
                <p className="card-text">Crie a sua esfiha personaliza e deixe ela do seu jeito!</p>
                <input
                    className="form-check-input"
                    type="checkbox"
                    style={{
                            width: "30px",
                            height: "30px",
                    }}
                    //value={esfihas.id.toString()}
                    //id={esfihas.id.toString()}
                    //onChange={handleCheckbox}
                />
            </section>
        </section>
    );
}
