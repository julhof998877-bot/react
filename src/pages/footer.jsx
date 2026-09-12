import React from 'react';
import './footer.css';
import { NavLink, Outlet } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner-content">
        <h3 className="logo">
          Site Feito Por<span> Julho F Silva</span>
        </h3>

        <ul className="footer-links">
          <img
            src="https://media.tenor.com/pq_ijZHQMQYAAAAe/heheheha-clash-royale-kietkool.png"
            alt="Logo" width="200"
          />
          {/* Removi a 'div navbar' que criava o bug da caixa e deixei os links diretos */}
          <li>
            <NavLink to="/" className="link-inicio">Inicio</NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    </footer>
  );
}

export default Footer;