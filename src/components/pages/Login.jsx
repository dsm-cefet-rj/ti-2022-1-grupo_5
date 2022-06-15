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
      email: '',
      senha: '',
    },
    onSubmit: function (values) {
      alert(`Voce entrou na sua conta! 
      Nome: ${values.email}.
      senha: ${values.senha}. 
      } `);
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
    <div className="Loginform">
      <form onSubmit={formik.handleSubmit} className="loginForm">
      <h1 className='Loginform' >Login</h1>
        <div className='Loginfrom'>
          <label for="email">Email:&nbsp;&nbsp; &nbsp;</label>
          <input type="email" name="email" id="email"
            className={`block w-full rounded border py-1 px-2${formik.touched.email && formik.errors.email}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {formik.touched.email && formik.errors.email && (
            <span className='text-red-400'>{formik.errors.email}</span>
          )}
        </div>
        
        <div className='Login'>
          <label for="senha">Senha:&nbsp;&nbsp;</label>
          <input type="string" name="senha" id="senha"
            className={`block w-full rounded border py-1 px-2${formik.touched.senha && formik.errors.senha ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.senha} />
          {formik.touched.senha && formik.errors.senha && (
            <span className='text-red-400'>{formik.errors.senha}</span>
          )}
        </div>
        <div class="grid-container">
          <div class="grid-item">
          <Button block="true" size="lg" type="submit" >
          <Link to='/' text-align = "center" className="Login">Login</Link>
          </Button>
            
          <div class="grid-item">
          <Button block="true" size="lg" type="submit">
           <Link to='/Register'  text-align = "center"className="Login">Criar Conta</Link>
        </Button></div></div></div>
      </form>
    </div>
  );
}