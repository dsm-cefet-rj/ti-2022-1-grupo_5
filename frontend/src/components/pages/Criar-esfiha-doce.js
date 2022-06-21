import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Recheio from "../geral/recheio-esfiha";
import { useDispatch, useSelector } from "react-redux";
import { ingredientes as ingredientesBD } from "../data";
import { selectRecheios } from "../../features/ingredientes-recheioSlice";
import { adicionarItem as addCarrinho } from "../../features/pedido";

const CriarEsfiha = () => {
        // Dispatch do Redux
        const dispatch = useDispatch();

        // Variáveis que controlam estados do componente.
        const [precoTotal, setPrecoTotal] = useState(0);
        const [erro, setErro] = useState("");
        const ingredientes = useSelector(selectRecheios);
        const recheioEsfiha = useState([1]);

        const getNomeEsfihaFromIngredientes = (ingredientes) => {
                let nome = "Esfiha";

                // Achatar metades, remover duplicados, e remover molho da lista
                const flatIngredientes = [...new Set(ingredientes.flat())].filter(
                (id) => id !== 12
                );

                const prefixos = ["de", "com", "e"];

                for (let i = 0; i < 3; i++) {
                if (flatIngredientes.length <= 0) break;
                const idIngrediente = sortear(flatIngredientes);
                const nomeIngrediente = getNomeIngredienteFromId(idIngrediente);
                const prefixo = prefixos[Math.min(i, prefixos.length - 1)];

                nome += " " + prefixo + " " + nomeIngrediente;
                }
                return nome;
        };

        const getNomeIngredienteFromId = (id) => {
                let ingrediente = ingredientesBD.find((ingrediente) => parseInt(ingrediente.id) === parseInt(id));
                return ingrediente.nome;
        };

        const sortear = (arr) => {
                const item = arr[Math.floor(Math.random() * arr.length)];
                arr.splice(arr.indexOf(item), 1);
                return item;
            };
    
    
        // função que adiciona a pizza customizada ao carrinho
        const adicionarItem = () => {
                if (erro !== "") {
                        document.getElementById(`erro_message`).scrollIntoView({
                            behavior: "auto",
                            block: "center",
                        });
                        document.getElementById(`erro_message`).animate(
                            {
                                color: "yellow",
                                textShadow: "50px 50px 50px red",
                            },
                            1000
                        );
                        return;
                } else {
                        const generate_id = () => {
                                // Generate a id based on the ingredientes
                                return crypto.randomUUID();
                        };
                        atualizarPreco();

                        // Gerar objeto da pizza customizada
                        let esfiha = {
                                id: generate_id(),
                                        //Math.random()
                                        //        .toString(36)
                                        //        .substring(2, 15) +
                                        //Math.random()
                                        //        .toString(36)
                                        //        .substring(2, 15),
                                nome: getNomeEsfihaFromIngredientes(ingredientes),
                                valor: precoTotal,
                                quantidade: 1,
                                Recheios: ingredientes,
                                descricao: "Ingredientes: " + ingredientes.flat().join(", "),
                        };
                        // Adicionar a pizza customizada ao carrinho
                        dispatch(addCarrinho(esfiha));
                        console.log(esfiha);
                        // Redirecionar para a página de carrinho
                        //createBrowserHistory().push("/carrinho");
                };        
                
        };

        const atualizarPreco = () => {
                let preco = 6;
        
                ingredientes.flat().forEach((id) => {
                    let ingredienteObj = ingredientesBD.find((i) => {
                        return i.id === parseInt(id);
                    });
                    preco += ingredienteObj.valor;
                });
        
                setPrecoTotal(preco);
        };

        useEffect(() => {
                if (erro) {
                        setErro("");
                }
                else {
                        atualizarPreco();
                }
        }, [ingredientes, erro]);

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
                                        
                                        <div className="row" style={{ textAlign: "center" }}>
                                                <h4
                                                        style={{
                                                                color: "white",
                                                                textShadow: "1px 1px 4px black",
                                                        }}
                                                >
                                                        Escolha até 6 ingredientes
                                                </h4>
                                        </div>
                                        {[...Array(recheioEsfiha).keys()].map((index) => (
                                        <Recheio max_ingredientes={6} key={index} id={index} />
                                        ))}
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
                                                <h3>
                                                        {"R$: " + precoTotal.toFixed(2)}
                                                </h3>
                                        </div>
                                </div>
                        </form>
                        <div 
                                className="section-btn"
                                style={{
                                        textAlign: "center",
                                        marginInline: "auto",
                                        width: "80%",
                                        marginBottom: "1rem",
                                }}
                        >
                                <span 
                                        className="botao card__btn align-self-center" 
                                        style={{
                                                marginBottom: "0.5rem",
                                        }}
                                        onClick={adicionarItem}
                                >
                                        <i className="bi bi-cart-plus-fill botao__icon"></i>
                                        Comprar
                                </span>
                
                                <Link to="/" className="btn btn-danger">
                                        Cancelar
                                </Link>
                        </div>
                </>
        );
};

export default CriarEsfiha;