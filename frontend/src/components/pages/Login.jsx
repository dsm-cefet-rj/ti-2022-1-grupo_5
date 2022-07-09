import React from  "react";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import "./lan.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/useAuth"
import axios from "axios";
import { useDispatch } from "react-redux";
import { logarUsuario } from "../../features/usuario";


export default function Login() {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required(),
    senha: yup.string().min(6, "Necessário no mínimo 6 dígitos").required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
  });

  function submitForm(data) {
    dispatch(logarUsuario(data));
    navigate('/');
  }


  return (
    <main className="container pedido py-5">
      <h2>Login</h2>
      
      <form className="pedido__form col">
        <section className="pedido__form-section">

          <section className="row mx-5">
            <div className="form-floating col-lg-12 p-2 my-2">
              <input type="email" className = "form-control" name="email" id="email" placeholder= " " {...register('email')} />
              <label htmlFor="email">Email</label>
              <p className="erro">{errors.email?.message}</p>
            </div>

            <div className="form-floating col-lg-12 p-2 my-2">
              <input type="password" className = "form-control" name="senha" id="senha" placeholder= " " {...register('senha')} />
              <label htmlFor="senha">Senha</label>
              <p className="erro">{errors.senha?.message}</p>
            </div>
          </section>

        </section>

        <section className="pedido__form-section flex-row">
            <span className="botao botao--confirmar" onClick={handleSubmit(submitForm)}>Entrar</span>
            <Link to="/cadastro" className="dcontent">
              <span className="botao botao--criar">Criar Conta</span>
            </Link>
        </section>

        <section className="pedido__form-section flex-row">
        </section>

      </form>
    </main>
    
  );
}