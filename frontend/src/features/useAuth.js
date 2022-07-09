import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin() {
    const { token, nome, _id } = await axios.post('/auth/login');
    localStorage.setItem('nome', nome);
    localStorage.setItem('id', _id);
    localStorage.setItem('token', JSON.stringify(token));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setAuthenticated(true);
    navigate('/');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    axios.defaults.headers.common["Authorization"] = undefined;
    navigate('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}