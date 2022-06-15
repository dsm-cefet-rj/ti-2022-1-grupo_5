import React, { useState } from  "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./lan.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  

  const formik = useFormik({
    
    initialValues: {
      nome: '',
      email: '',
      cep: '',
    },
    onSubmit: function (values) {
      alert(`Voce esta registrado! 
      Nome: ${values.name}.
      Email: ${values.email}.  
      Cep: ${values.cep} `);
    },

    validationSchema: Yup.object({
      name: Yup.string()
              .label('Full Name')
              .matches(/^[A-Za-z ]*$/, 'Insira um nome Válido')
      .max(40)
              .required(),
      email: Yup.string()
              .email('Email invalido')
              .required(),
      cep: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(8, 'Deve conter 8 dígitos')
      .max(8, 'Deve conter 8 dígitos')
            .required(),
      age: Yup.number()
            .min(18, 'Precisa ser maior de 18 anos.')
            .max(99, "Idade não permitida")
            .required()
    
  })})

  

  return (
    <main className="container pedido py-5">
                <h2>Cadastro</h2>
                <form  className="col">
                <form className="pedido__form" onSubmit={formik.handleSubmit}>

                    <section className="pedido__form-section">

                        <section className="row mx-5">
                                <div className="form-floating col-lg-12 col-sm-6 p-2 my-2">
                                  <input type="name" className = "form-control" name="name" id="name" placeholder= " "
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                                  {formik.touched.name}
                                    <label htmlFor="Nome">Nome Completo:</label>
                                    <span>{formik.errors.name}</span>
                                    <p className="erro"></p>
                                </div>

                                <div className="form-floating col-lg-12 col-sm-6 p-2 my-2">
                                  <input type="email" className = "form-control" name="email" id="email" placeholder= " "
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                  {formik.touched.email}
                                    <label htmlFor="email">Email:</label>
                                    <span>{formik.errors.email}</span>
                                    <p className="erro"></p>
                                </div>

                                <div className="form-floating col-lg-12 col-sm-6 p-2 my-2">
                                  <input type="cep" className = "form-control" name="cep" id="cep" placeholder= " "
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cep} />
                                  {formik.touched.name}
                                    <label htmlFor="CEP">CEP:</label>
                                    <span>{formik.errors.cep}</span>
                                    <p className="erro"></p>
                                </div>
                        </section>
            

                    </section>
                    
                    <section className="pedido__form-section flex-row">
                    <Button className='grid-item' text-align = "center" type='submit'>Criar Conta</Button>
                    </section>
                </form>
</form>
            </main>
  );
}