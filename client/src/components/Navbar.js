// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Navbar.css';
import logo from './img/logo_napsify.png'; 
function Navbar() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="/sobre-nosotros" className="nav-link">
          Sobre Nosotros
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="nav-link">
              Perfil
            </Link>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="logout-button"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <button onClick={loginWithRedirect} className="login-button">
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;