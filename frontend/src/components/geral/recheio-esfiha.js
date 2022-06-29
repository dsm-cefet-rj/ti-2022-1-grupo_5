import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setRecheios } from "../../features/ingredientes-recheioSlice";
import { getIngredientes} from "../../features/ingredientesSlice";

import "./ingrediente.css";

/* 
Componente: Recheio
Descrição:  Componente que renderiza a esfiha personalizada
*/
const Recheio = (props) => {
        const dispatch = useDispatch();
        
        const ingredientesBD = useSelector(state => state.ingrediente);

        const [id] = useState(props.id);
        const max_ingredientes = props.max_ingredientes
                ? props.max_ingredientes
                : 5;
        
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

        useEffect(() => {
                dispatch(getIngredientes());
        }, [ingredientes, dispatch]);

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
                                                                        style={{fontFamily: "Roboto-bold",
                                                                                fontSize: "17px",
                                                                                textAlign: "center",
                                                                        }}
                                                                >
                                                                        {ingrediente.nome}
                                                                </p>
                                                                <img
                                                                        src={ingrediente.img}
                                                                        alt="ingrediente"
                                                                        style={{
                                                                                width: "90px",
                                                                                borderRadius: "10px",
                                                                                height: "90px",
                                                                                marginBottom: "6px",

                                                                        }}
                                                                />
                                                                <br />
                                                                <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        style={{
                                                                                width: "30px",
                                                                                height: "30px",
                                                                                boxShadow: "inset 0 0 5px grey",
                                                                        }}
                                                                        value={ingrediente.id.toString()}
                                                                        id={ingrediente.id.toString()}
                                                                        onChange={handleCheckbox}
                                                                />
                                                                <p 
                                                                        style={{textAlign: "center",
                                                                                marginTop: "5px",
                                                                                fontSize: "17px",
                                                                                fontFamily: "Roboto-bold",
                                                                        }}
                                                                >R$ {ingrediente.valor.toFixed(2)}</p>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </div>
                </>
        );
};

export default Recheio;
