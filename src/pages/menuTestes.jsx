import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function MenuTestes() {
  return (
    <div>
      <header className="navbar second-navbar">
        <div className="header-inner-content">
          <h1 className="logo">
            Menu<span id="blablabla"> Testes</span>
          </h1>

          <nav>
            <ul>
              <li><NavLink to="teste0" className="link-teste">Teste 0</NavLink></li>
              <li><NavLink to="teste1" className="link-teste">Teste 1</NavLink></li>
              <li><NavLink to="teste2" className="link-teste">Teste 2</NavLink></li>
              <li><NavLink to="teste3" className="link-teste">Teste 3</NavLink></li>
              <li><NavLink to="teste4" className="link-teste">Teste 4</NavLink></li>
              <li><NavLink to="teste5" className="link-teste">Teste 5</NavLink></li>
              <li><NavLink to="teste6" className="link-teste">Teste 6</NavLink></li>
              <li><NavLink to="teste7" className="link-teste">Teste 7</NavLink></li>
              <li><NavLink to="teste8" className="link-teste">Teste 8</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default MenuTestes;