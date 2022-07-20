import React from  "react";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import "./lan.css";
import { useDispatch } from "react-redux";
import { cadastrarUsuario } from "../../features/usuario";
import { useForm } from "react-hook-form";
import axios from "axios";

yup.setLocale({
  mixed: {
      required: 'Campo obrigatório'
  }
});


export default function Cadastro() {

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
      nome: yup.string().matches(/^[A-Za-z ]*$/, 'Insira um nome válido').required(),
      idade: yup.number().typeError('Campo obrigatório').min(18, 'Precisa ser maior de 18 anos').max(120, "Idade não permitida").required(),
      email: yup.string().email('E-mail inválido').required(),
      senha: yup.string().min(6, "Necessário no mínimo 6 dígitos").required(),
      confirmaSenha: yup.string().oneOf([yup.ref('senha'), null], "As senhas precisam ser iguais").required(),
      cep: yup.string().matches(/\d/, 'Campo obrigatório').matches(/^2\d{7}$/, 'CEP precisa ser do RJ').required(),
      municipio: yup.string().required(),
      bairro: yup.string().required(),
      endereco: yup.string().required(),
      numero: yup.string().matches(/\d+/, 'Campo obrigatório').required(),
      complemento: yup.string()
  });

  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
  });

  function submitForm(data) {
    const usuario = data;
    dispatch(cadastrarUsuario(usuario));
  }

  return (
    <main className="container pedido py-5">
      <h2>Cadastro</h2>
      
      <form className="pedido__form col">
        <section className="pedido__form-section">

          <section className="row mx-5">
            <h5>Dados Pessoais</h5>

            <div className="form-floating col-lg-8 p-2 my-2">
              <input type="text" className = "form-control" name="nome" id="nome" placeholder= " " {...register('nome')} />
              <label htmlFor="nome">Nome</label>
              <p className="erro">{errors.nome?.message}</p>
            </div>

            <div className="form-floating col-lg-4 p-2 my-2">
              <input type="number" className = "form-control" name="idade" id="idade" placeholder= " " {...register('idade')} />
              <label htmlFor="idade">Idade</label>
              <p className="erro">{errors.idade?.message}</p>
            </div>

            <div className="form-floating col-lg-6 p-2 my-2">
              <input type="email" className = "form-control" name="email" id="email" placeholder= " " {...register('email')} />
              <label htmlFor="email">Email</label>
              <p className="erro">{errors.email?.message}</p>
            </div>

            <div className="form-floating col-lg-3 p-2 my-2">
              <input type="password" className = "form-control" name="senha" id="senha" placeholder= " " {...register('senha')} />
              <label htmlFor="senha">Senha</label>
              <p className="erro">{errors.senha?.message}</p>
            </div>

            <div className="form-floating col-lg-3 p-2 my-2">
              <input type="password" className = "form-control" name="confirmaSenha" id="confirmaSenha" placeholder= " " {...register('confirmaSenha')} />
              <label htmlFor="confirmaSenha">Confirmar Senha</label>
              <p className="erro">{errors.confirmaSenha?.message}</p>
            </div>

            <h5>Endereço</h5>
            <div className="form-floating col-lg-3 p-2 my-2">
              <input type="text" inputMode="number" maxLength={8} className = "form-control" name="cep" id="cep" placeholder= " " onInput={preencherEndereco} {...register('cep')} />
              <label htmlFor="cep">CEP</label>
              <p className="erro">{errors.cep?.message}</p>
            </div>

            <div className="form-floating col-lg-5 p-2 my-2">
              <input type="text" className = "form-control" name="municipio" id="municipio" placeholder= " " {...register('municipio')} />
              <label htmlFor="municipio">Município</label>
              <p className="erro">{errors.municipio?.message}</p>
            </div>

            <div className="form-floating col-lg-4 p-2 my-2">
              <input type="text" className = "form-control" name="bairro" id="bairro" placeholder= " " {...register('bairro')} />
              <label htmlFor="bairro">Bairro</label>
              <p className="erro">{errors.bairro?.message}</p>
            </div>

            <div className="form-floating col-lg-6 p-2 my-2">
              <input type="text" className = "form-control" name="endereco" id="endereco" placeholder= " " {...register('endereco')} />
              <label htmlFor="endereco">Endereço</label>
              <p className="erro">{errors.endereco?.message}</p>
            </div>

            <div className="form-floating col-lg-2 p-2 my-2">
              <input type="number" className = "form-control" name="numero" id="numero" placeholder= " " {...register('numero')} />
              <label htmlFor="numero">Nº</label>
              <p className="erro">{errors.numero?.message}</p>
            </div>

            <div className="form-floating col-lg-4 p-2 my-2">
              <input type="text" className = "form-control" name="complemento" id="complemento" placeholder= " " {...register('complemento')} />
              <label htmlFor="complemento">Complemento</label>
              <p className="erro">{errors.complemento?.message}</p>
            </div>
          </section>

        </section>

        <section className="pedido__form-section flex-row">
            <span className="botao botao--confirmar" onClick={handleSubmit(submitForm)}>Enviar</span>
        </section>

        <section className="pedido__form-section flex-row">
        </section>

      </form>
    </main>
  );
}