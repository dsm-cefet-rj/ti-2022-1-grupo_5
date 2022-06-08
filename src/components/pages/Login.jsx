import React, { useState } from  "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

import "./lan.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
<<<<<<< HEAD
        <div class="grid-container">
           <div class="grid-item">
          <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
          <Link to='/' className="Login">Login</Link>
        </Button>     
        </div>
        <div class="grid-item">
          <Button block="true" size="lg" type="submit">
           <Link to='/Register' className="Login">Criar Conta</Link>
        </Button></div>
        </div>
          
    </Form>
=======
        <Button block="true" size="lg" type="submit " disabled={!validateForm()}>
        <Link to='/' className="btn">Login</Link>
        </Button>
      </Form>
>>>>>>> dba5ca05e64f59858cac79a17810a7e68b3dc4b8
    </div>
  );
}
