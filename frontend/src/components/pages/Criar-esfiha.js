import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Recheio from "../geral/recheio-esfiha";
import { getIngredientes} from "../../features/ingredientesSlice";
import { selectRecheios } from "../../features/ingredientes-recheioSlice";
import { adicionarItem as addCarrinho } from "../../features/pedido";
import notificacao from "../../features/utils/notificacao";

const CriarEsfiha = () => {
        // Dispatch do Redux
        const dispatch = useDispatch();
        const usuario = localStorage.usuario;
        const navigate = useNavigate();
        const ingredientesBD = useSelector(state => state.ingrediente);

        // Variáveis que controlam estados do componente.
        const [precoTotal, setPrecoTotal] = useState(0);
        const [erro, setErro] = useState("");
        const ingredientes = useSelector(selectRecheios);
        const recheioEsfiha = useState([1]);


        const getNomeEsfihaFromIngredientes = (ingrediente) => {
                let nome = "Esfiha";

                // Remover duplicados, e remover molho da lista
                const flatIngredientes = [...new Set(ingrediente.flat())].filter(
                        (id) => id !== 1
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

        // função que adiciona a esfiha customizada ao carrinho
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
                                return crypto.randomUUID();
                        };

                        atualizarPreco();

                        // Gerar objeto da esfiha customizada
                        let esfiha = {
                                id: generate_id(),
                                img: "img/personalizadas-salgada.png",
                                nome: getNomeEsfihaFromIngredientes(ingredientes),
                                valor: precoTotal,
                                quantidade: 1,
                                Recheios: ingredientes,
                                descricao: "Ingredientes: " + ingredientes.flat().join(", "),
                        };
                        // Adicionar a esfiha customizada ao carrinho
                        if(usuario) {
                                dispatch(addCarrinho(esfiha));
                                notificacao(true, `${esfiha.nome} adicionada!`)
                        }
                        else{
                                notificacao(false, 'Necessário login')
                        }
                        // Redirecionar para a página de carrinho
                        navigate('/pedido');
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

        const [ingredientesCache, setIngredientesCache] = useState(false);

        useEffect(() => {
                if (!ingredientesCache) {
                        dispatch(getIngredientes());
                        setIngredientesCache(true);

                }
                if (erro) {
                        setErro("");
                }
                else {
                        atualizarPreco();
                }
        }, [ingredientes, erro, ingredientesBD, dispatch]);

        // Renderiza a página de criação de esfiha.
        return (
                <>
                        <form>
                                <div className="container">
                                        <div className="row">
                                                <h1 className="text-center" style={{ marginTop: "20px" }}>
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
                                                <Recheio max_ingredientes={5} key={index} id={index} />
                                        ))}
                                </div>
                                <hr />
                                <div className="row">
                                        <div
                                                className="col-md-12"
                                                style={{
                                                        textAlign: "center",
                                                        marginInline: "auto",
                                                }}
                                        >
                                                <h3
                                                style={{
                                                        marginBottom: "20px",
                                                }}>
                                                        {"Preço total: R$ " + precoTotal.toFixed(2)}
                                                </h3>
                                        </div>
                                </div>
                        </form>
                        <div
                                className="row section-btn"
                                style={{
                                        textAlign: "center",
                                        marginInline: "auto",
                                        width: "60%",
                                        maxWidth: "800px",
                                        marginBottom: "1rem",
                                }}
                        >
                                <span
                                        className="text-center botao card__btn align-self-center"
                                        style={{
                                        textAlign: "center",
                                        marginInline: "auto",
                                        width: "60%",
                                        maxWidth: "800px",
                                        marginBottom: "1rem",
                                        }}
                                        onClick={adicionarItem}
                                >
                                        <i className="text-center bi bi-cart-plus-fill botao__icon"></i>
                                        Comprar
                                </span>

                                <Link to="/" className="text-center btn btn-danger"
                                style={{
                                        textAlign: "center",
                                        marginInline: "auto",
                                        width: "60%",
                                        maxWidth: "800px",
                                        marginBottom: "1rem",
                                }}
                                >
                                        Cancelar
                                </Link>
                        </div>
                </>
        );
};

export default CriarEsfiha;
