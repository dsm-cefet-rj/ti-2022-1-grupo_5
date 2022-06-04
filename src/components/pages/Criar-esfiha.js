import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Recheio from "../geral/recheio-esfiha";
import { getRecheios } from "../../features/ingredientes-recheioSlice";
import { useDispatch } from "react-redux";

const CriarEsfiha = () => {
    // Dispatch do Redux
    const dispatch = useDispatch();

    // Variáveis que controlam estados do componente.
    const [precoTotal, setPrecoTotal] = useState(0);
    const [erro, setErro] = useState("");
    const [ingredientes, setIngredientes] = useState([]);

    // função que adiciona a pizza customizada ao carrinho
    const adicionarAoCarrinho = () => {
            
    // Gerar objeto da pizza customizada
    let esfiha = {
            id: 1,
                    //Math.random()
                    //        .toString(36)
                    //        .substring(2, 15) +
                    //Math.random()
                    //        .toString(36)
                    //        .substring(2, 15),
            ingredientes: ingredientes,
            recheio: getRecheios(),
            preco: precoTotal,
    };
    // Adicionar a pizza customizada ao carrinho
    dispatch(adicionarAoCarrinho(esfiha));
    console.log(esfiha);
    // Redirecionar para a página de carrinho
    //createBrowserHistory().push("/carrinho");
            
    };

    useEffect(() => {
            if (erro) {
                    setErro("");
            }
             else {
                    let preco = 0;
                    for (let i = 0; i < ingredientes.length; i++) {}
                    setPrecoTotal(preco);
            }
    },[erro, ingredientes.length]);

    // Renderiza a página de criação de pizza.
    return (
            <>
                    {/*<MenuNav Atual="criar-pizza" />*/}
                    <form>
                            <div className="container">
                                    <div className="row">
                                            <h1 className="text-center">
                                                    Monte sua Esfiha
                                            </h1>
                                    </div>
                                    <div className="row">
                                            <h5
                                                    className="text-center"
                                                    style={{
                                                            color: "red",
                                                            textShadow: "0px 0px 10px black",
                                                    }}
                                            >
                                                    {erro}
                                            </h5>
                                    </div>
                                
                                    <div
                                            className="row"
                                            style={{ textAlign: "center" }}
                                    >
                                            <h3 id="INGREDIENTES">
                                                    Ingredientes
                                            </h3>
                                            <h4
                                                    style={{
                                                            color: "white",

                                                            textShadow: "1px 1px 4px black",
                                                    }}
                                            >
                                                    Escolha até 6 ingredientes
                                            </h4>
                                    </div>
                                    <Recheio
                                            max_ingredientes={6}
                                            key="1"
                                            id={1}
                                            active={true}
                                    />
                            </div>
                            <hr />
                            <div className="row">
                                    <div
                                            className="col-md-12"
                                            style={{
                                                    textAlign: "right",
                                                    marginBottom: "20px",
                                            }}
                                    >
                                            <h3>Preço total:</h3>
                                    </div>
                            </div>
                    </form>
                    <div className="row" style={{ textAlign: "center" }}>
                            <Link
                                    to="/menu"
                                    style={{ margin: " 0 5px" }}
                                    className="btn btn-lg btn-danger mb-5"
                            >
                                    Cancelar
                            </Link>

                            <button
                                    className="btn btn-lg btn-primary mb-5"
                                    onClick={() => adicionarAoCarrinho()}
                            >
                                    Adicionar ao carrinho
                            </button>
                    </div>
            </>
    );
};

export default CriarEsfiha;