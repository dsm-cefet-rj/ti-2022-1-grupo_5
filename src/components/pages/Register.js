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
      age: '',
    },
    onSubmit: function (values) {
      alert(`Voce esta registrado! 
      Nome: ${values.name}.
      Email: ${values.email}. 
      Idade: ${values.age} 
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
    <div className="Loginform">
      <form onSubmit={formik.handleSubmit} className="loginform">
      <h1 className='Loginform'>Cadastro</h1>
        <div className='Login'>
          <label for="name">Nome Completo: &nbsp;&nbsp;</label>
          <input type="text" name="name" id="name" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {formik.touched.name && formik.errors.name && (
            <span className='text-red-400'>{formik.errors.name}</span>
          )}
        </div>
        <div className='Login'>
          <label for="email">Email:&nbsp;&nbsp; </label>
          <input type="email" name="email" id="email"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {formik.touched.email && formik.errors.email && (
            <span className='text-red-400'>{formik.errors.email}</span>
          )}
        </div>
        <div className='Login'>
          <label for="cep">CEP:&nbsp;&nbsp;</label>
          <input type="number" name="cep" id="cep"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.cep && formik.errors.cep ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cep} />
          {formik.touched.cep && formik.errors.cep && (
            <span className='text-red-400'>{formik.errors.cep}</span>
          )}
        </div>
        
        <div className='Login'>
          <label for="age">Idade: &nbsp;&nbsp;</label>
          <input type="number" name="age" id="age"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.age && formik.errors.age}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age} />
          {formik.touched.age && formik.errors.age && (
            <span className='text-red-400'>{formik.errors.age}</span>
          )}
        </div>
      
          <Button className='grid-item' text-align = "center" type='submit'>Criar Conta</Button>
       
      </form>
    </div>
  );
}