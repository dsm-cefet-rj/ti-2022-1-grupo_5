import React from "react";
import { useState } from "react";
import { ingredientes as ingredientesBD } from "../data";
import { setRecheios } from "../../features/ingredientes-recheioSlice";
import { useDispatch } from "react-redux";
import "./ingrediente.css";

/* 
Componente: Metade
Descrição:  Componente que renderiza a metade de um pizza personalizada
*/
const Recheio = (props) => {
        const dispatch = useDispatch();

        // Variáveis que controlam se a metade esta ative e quanta recheio existem.
        const [id] = useState(props.id);
        const max_ingredientes = props.max_ingredientes
                ? props.max_ingredientes
                : 6;        
        // Variáveis que controlam os ingredientes selecionados.
        const [ingredientes, setIngredientes] = useState([]);

        // Função que adiciona um ingrediente ao array de ingredientes quando o checkbox esta marcado.
        const handleCheckbox = (e) => {
                let payload = {
                        ingredientes: [],
                        id: id,
                };
                // Se o checkbox estiver marcado, e o numero de ingredientes selecionados for menor que o máximo, adiciona o ingrediente.
                if (e.target.checked && ingredientes.length <= max_ingredientes) {
                        setIngredientes([...ingredientes, e.target.value]);
                        payload.ingredientes = [...ingredientes, e.target.value];
                }
                // Se o checkbox estiver desmarcado, remove o ingrediente.
                else if (!e.target.checked) {
                        setIngredientes(
                                ingredientes.filter(
                                        (ingrediente) =>
                                                ingrediente !== e.target.value
                                )
                        );
                        payload.ingredientes = ingredientes.filter(
                                (ingrediente) => ingrediente !== e.target.value
                        );
                } else {
                        e.target.checked = false;
                        return;
                }
                dispatch(setRecheios(payload));
        };

        // Renderiza o componente.
        return (
                <>
                        <div className="row section" style={{ marginBottom: "15px", marginTop: "30px" }}>
                                <div className="col">
                                
                                        <div className="scrollmenu">
                                                {ingredientesBD.map((ingrediente) => (
                                                <div className="ingrediente" key={ingrediente.id}>
                                                        <p
                                                        className="form-check-label"
                                                        htmlFor={ingrediente.id.toString()}
                                                        >
                                                        {ingrediente.nome}
                                                        </p>
                                                        <img
                                                        src={ingrediente.img}
                                                        alt="Esfiha"
                                                        style={{
                                                                width: "90px",
                                                                borderRadius: "10px",

                                                        }}
                                                        />
                                                        <br />
                                                        <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        style={{
                                                                width: "30px",
                                                                height: "30px",
                                                        }}
                                                        value={ingrediente.id.toString()}
                                                        id={ingrediente.id.toString()}
                                                        onChange={handleCheckbox}
                                                        />
                                                        <p>R$ {ingrediente.valor.toFixed(2)}</p>
                                                </div>
                                                ))}
                                        </div>
                                </div>
                        </div>
                </>
        );
}; 

export default Recheio;
