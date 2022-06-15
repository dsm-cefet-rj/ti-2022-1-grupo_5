import React, { useState } from  "react";
import { Link } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import Button from "react-bootstrap/Button";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import "./lan.css"
import { useDispatch } from "react-redux";
import { cadastrarUsuario } from "../../features/usuario";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }




  const formik = useFormik({
    
    initialValues: {
      email: '',
      senha: '',
    },
    onSubmit: function (values) {
      const usuario = values;
      dispatch(cadastrarUsuario(usuario));
    },

    validationSchema: Yup.object({
      email: Yup.string()
              .email("Email invalido")
              .required(),
      senha: Yup.string()
            .min(6, " necessário no mínimo 6 dígitos")
            .required("campo obrigatorio"),
    
  })})

  

  return (
    
                <main className="container pedido py-5">
                <h2>Login</h2>
                <form  className="col">
                <form className="pedido__form" onSubmit={formik.handleSubmit}>

                    <section className="pedido__form-section">

                        <section className="row mx-5">
                                <div className="form-floating col-lg-12 col-sm-6 p-2 my-2">
                                  <input type="email" className = "form-control" name="email" id="email" placeholder= " "
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                  {formik.touched.email}
                                    <label htmlFor="email">Email:</label>
                                    <p className="erro">{formik.errors.email}</p>
                                </div>

                                <div className="form-floating col-lg-12 col-sm-6 p-2 my-2">
                                <input type="senha" className = "form-control" name="senha" id="senha" placeholder= " "
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.senha} />
                                  {formik.touched.senha}
                                    <label htmlFor="email">Senha:</label>
                                    <p className="erro">{formik.errors.senha}</p>
                                </div>
                        </section>
            

                    </section>
                    <div class="grid-container">
          <div class="grid-item">
          <Button block="true" size="lg" type="submit" >
          <Link to='/' text-align = "center" className="Login">Login</Link>
          </Button>
            
          <div class="grid-item">
          <Button block="true" size="lg" type="submit">
           <Link to='/Register'  text-align = "center"className="Login">Criar Conta</Link>
        </Button></div></div></div>
                    <section className="pedido__form-section flex-row">
                        
                    </section>
                </form>
</form>
            </main>
  );
}