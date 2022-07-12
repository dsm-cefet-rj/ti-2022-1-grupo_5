import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelarPedido, realizarPedido } from "../../features/pedido";
import CardPedido from "../geral/CardPedido";
import ResumoPedido from "../ResumoPedido";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

yup.setLocale({
    mixed: {
        required: 'Campo obrigatório'
    }
});


export default function Pedido() {

    const pedido = useSelector(state => state.pedido);
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if(!(usuario?.nome)) navigate('/login');
        const cep = document.querySelector('form')?.cep;
        const municipio = document.querySelector('form')?.municipio;
        const bairro = document.querySelector('form')?.bairro;
        const endereco = document.querySelector('form')?.endereco;
        const numero = document.querySelector('form')?.numero;
        const complemento = document.querySelector('form')?.complemento;
        if(pedido.itens.length !== 0) {
            cep.value = usuario.cep;
            municipio.value = usuario.municipio;
            bairro.value = usuario.bairro;
            endereco.value = usuario.endereco;
            numero.value = usuario.numero;
            complemento.value = usuario.complemento;
            cep.focus();
            municipio.focus();
            bairro.focus();
            endereco.focus();
            numero.focus();
            complemento.focus();
        }
    });

    async function preencherEndereco() {
        const cep = document.querySelector('form')['cep'];
        const municipio = document.querySelector('form')['municipio'];
        const bairro = document.querySelector('form')['bairro'];
        const endereco = document.querySelector('form')['endereco'];
        if (cep.value.length === 8) {
            const localizacao = await (await axios.get(`https://viacep.com.br/ws/${cep.value}/json`)).data;
            const erro = localizacao.hasOwnProperty('erro');
            municipio.value = (erro) ? "" : localizacao.localidade;
            bairro.value = (erro) ? "" : localizacao.bairro;
            endereco.value = (erro) ? "" : localizacao.logradouro;
            municipio.focus();
            bairro.focus();
            endereco.focus();
        } else {
            municipio.value = "";
            bairro.value = "";
            endereco.value = "";
        }
    }

    const schema = yup.object().shape({
        data: yup.string().default(function () {
            return new Date().toISOString().split('T')[0];
        }),
        cep: yup.string().matches(/\d/, 'Campo obrigatório').matches(/^2\d{7}$/, 'CEP precisa ser do RJ').required(),
        municipio: yup.string().required(),
        bairro: yup.string().required(),
        endereco: yup.string().required(),
        numero: yup.string().matches(/\d+/, 'Campo obrigatório').required(),
        complemento: yup.string(),
        pagamento: yup.string().required()
    });

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function submitForm(data) {
        const pedidoForm = {...pedido};
        pedidoForm.info = data;
        pedidoForm.info.frete = 5;
        pedidoForm.info.total = pedidoForm.itens.map(item => item.qtd * item.valor ).reduce((valorAnterior, valorAtual) => 
                                valorAnterior + valorAtual 
                            ,pedidoForm.info.frete);
        pedidoForm.info.idUsuario = usuario.id;
        dispatch(realizarPedido(pedidoForm));
    }

    if(!(usuario?.nome)) {
        return (
            <main className="container d-flex align-items-center justify-content-center p-5">
                <h1>Você precisa estar logado.</h1>
            </main>
        );
    } else if (pedido.itens.length !== 0) {
        return (
            <main className="container pedido py-5">
                <h2>Pedido</h2>

                <form className="pedido__form">

                    <section className="pedido__form-section">

                        <section className="menu-esfihas my-2">
                            <section className="d-flex justify-content-around flex-wrap"> 
                                {pedido.itens.map((item, index) => <CardPedido index={index} key={index}/>)}                                    
                            </section>
                        </section>

                        <h4>Entrega</h4>
                        <section className="row mx-5">
                                <div className="form-floating col-lg-3 col-sm-6 p-2 my-2">
                                    <input type="text" inputMode="number" maxLength={8} className="form-control" id="cep" placeholder=" " onInput={preencherEndereco} {...register('cep')}/>
                                    <label htmlFor="cep">CEP</label>
                                    <p className="erro">{errors?.cep?.message}</p>
                                </div>

                                <div className="form-floating col-lg-5 col-sm-6 p-2 my-2">
                                    <input type="text" className="form-control" id="municipio" placeholder=" " {...register('municipio')}/>
                                    <label htmlFor="municipio">Município</label>
                                    <p className="erro">{errors?.municipio?.message}</p>
                                </div>

                                <div className="form-floating col-lg-4 col-sm-6 p-2 my-2">
                                    <input type="text" className="form-control" id="bairro" placeholder=" " {...register('bairro')}/>
                                    <label htmlFor="bairro">Bairro</label>
                                    <p className="erro">{errors?.bairro?.message}</p>
                                </div>

                                <div className="form-floating col-lg-6 col-sm-6 p-2 my-2">
                                    <input type="text" className="form-control form-control-mb" id="endereco" placeholder=" " {...register('endereco')}/>
                                    <label htmlFor="endereco">Endereço</label>
                                    <p className="erro">{errors?.endereco?.message}</p>
                                </div>

                                <div className="form-floating col-lg-2 col-sm-6 p-2 my-2">
                                    <input type="number" className="form-control" id="numero" placeholder=" " {...register('numero')}/>
                                    <label htmlFor="numero">Nº</label>
                                    <p className="erro">{errors?.numero?.message}</p>
                                </div>

                                <div className="form-floating col-lg-4 col-sm-6 p-2 my-2">
                                    <input type="text" className="form-control" id="complemento" placeholder=" " {...register('complemento')}/>
                                    <label htmlFor="complemento">Complemento</label>
                                    <p className="erro">{errors?.complemento?.message}</p>
                                </div>
                        </section>
            

                    </section>

                    <section className="pedido__form-section">
                        <h4>Forma de Pagamento</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="pagamento" id="pix" value="pix" {...register('pagamento')}/>
                            <label className="form-check-label" htmlFor="pix">
                                <p>Pix</p>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="pagamento" id="cartao" value="cartao" {...register('pagamento')}/>
                            <label className="form-check-label" htmlFor="cartao">
                                <p>Cartão</p>
                            </label>
                        </div>
                        <p className="erro">{errors?.pagamento?.message}</p>
                    </section>

                    <section className="pedido__form-section">
                        <h4>Resumo</h4>
            
                        <ResumoPedido/>

                    </section>
                    
                    <section className="pedido__form-section flex-row">
                        <span className="botao botao--confirmar" onClick={handleSubmit(submitForm)}>Finalizar</span>
                        <span className="botao botao--cancelar" onClick={()=>{dispatch(cancelarPedido())}}>Cancelar</span>
                    </section>
                </form>

            </main>
        );
    } else {
        return (
            <main className="container d-flex align-items-center justify-content-center p-5">
                <h1>Seu carrinho de compras está vazio</h1>
            </main>
        );
    }
}