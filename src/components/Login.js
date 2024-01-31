import React, { useState } from 'react';
import './Login.css';
import logoEmpresa from './empresa.jpg';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula una petición de inicio de sesión
    setTimeout(() => {
      if (username === 'user' && password === 'abcd') {
        localStorage.setItem('userToken', 'tu-token-de-autenticacion');
        onLoginSuccess(); 
      } else {
        alert('Usuario o Contraseña incorrecta'); 
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      <img src={logoEmpresa} alt="Logo de la Empresa" className="logo-empresa" />
      <h2>Agenda de Actividades</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isLoading}>Iniciar Sesión</button>
        {isLoading && <div className="loading-spinner"></div>}
      </form>
    </div>
  );
}

export default Login;

