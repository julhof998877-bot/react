import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function TrueMenu() {
  return (
    <header>
      <div className="navbar">
        <div className="header-inner-content">
          <h1 className="logo">
            Meu<span>Site</span>
          </h1>

          <nav>
            <ul className="menu">
              <li><NavLink to="modelo" className="menu-link link-modelo">Modelo</NavLink></li>
              <li><NavLink to="menuTestes" className="menu-link link-menu-testes">Testes</NavLink></li>
              <li><NavLink to="menuDesafios" className="menu-link link-desafios">Desafios</NavLink></li>
              <li><NavLink to="tcc" className="menu-link link-desafios">- Tcc -</NavLink></li>
              <li><NavLink to="/" className="menu-link link-inicio">Inicio</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </header>
  );
}

export default TrueMenu;