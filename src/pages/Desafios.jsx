import React from 'react';
import './Desafio.css';
import { Outlet, NavLink } from 'react-router-dom';

function Desafios() {
  return (
    <div>
      <header className="navbar second-navbar">
        <div className="header-inner-content">
          <h1 className="logo">
            Menu<span id="blablabla"> Desafios</span>
          </h1>

          <nav>
            <ul>
              <li>
                <NavLink to="desafio1" className="link-desafios">
                  sobre React
                </NavLink>
              </li>

              <li>
                <NavLink to="desafio2" className="link-desafios">
                  Perfil com Foto
                </NavLink>
              </li>

              <li>
                <NavLink to="desafio3" className="link-desafios">
                  Criandor de Artigo
                </NavLink>
              </li>

              <li>
                <NavLink to="desafio4" className="link-desafios">
                  Calculadora
                </NavLink>
              </li>

              <li>
                <NavLink to="desafio5" className="link-desafios">
                  Cliker do Rica Games
                </NavLink>
              </li>

              <li>
                <NavLink to="desafio6" className="link-desafios">
                  App De Namoro heheh
                </NavLink>
              </li>

              <li>
                <NavLink to="desafio7" className="link-desafios">
                  Desafio 7
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default Desafios;
