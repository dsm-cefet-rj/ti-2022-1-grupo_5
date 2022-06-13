import React, { useLayoutEffect } from "react";

function Toast() {

    useLayoutEffect(() => {        
        setTimeout(() => {
            document.querySelector('.torrada').classList.add('torrada--none');
        }, 3000);
    }, []);

    return(
        <section className="torrada">
            <p>Adicionado ao carrinho</p>
        </section>
    );
}

export default Toast;