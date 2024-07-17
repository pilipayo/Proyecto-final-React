import React from 'react';
import logo from './img/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container-header">
        <img src={logo} width="100px" height="100px" alt="logo" />

        <div className="menu">
          <nav className="navbar">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobremi">Sobre mi</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;