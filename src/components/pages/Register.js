import React, { useState } from  "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./lan.css";
import { Link } from 'react-router-dom';




export default function Register() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [endereço, setEndereco] = useState("")
  const [cep, setCep] = useState("")
  const [complemento, setComplemento] = useState("")

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="Nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            autoFocus
            type="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="cep">
          <Form.Label>CEP: </Form.Label>
          <Form.Control
            autoFocus
            type="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="endereço">
          <Form.Label>Endereço: </Form.Label>
          <Form.Control
            autoFocus
            type="endereço"
            value={endereço}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="complemento">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control
            autoFocus
            type="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Senha: </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div class="grid-container">
           <div class="grid-item">
          <Button block="true" size="lg" type="submit">
          <Link to='/Login' className="Login">Já possuo conta</Link>
        </Button>     
        </div>
        <div class="grid-item">
          <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
           <Link to='/Register' className="Login">Criar Conta</Link>
        </Button></div>
        </div>
          
    </Form>
    </div>
  );
}