import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Sistema from './components/Sistema';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoginSuccess = () => {
    setLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 2000); 
  };

  if (loading) {
    return <div className="loading-screen">Cargando...</div>; // Pantalla de carga
  }

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Sistema />
      )}
    </div>
  );
}

export default App;

