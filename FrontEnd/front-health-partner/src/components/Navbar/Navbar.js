import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="menu navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-light fw-bold">
          <img src="/img/logo.png" alt="Logo" width="50" height="50" /> Saúde
          Mais
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item ms-lg-2">
              <NavLink to="/" className="nav-link text-light fw-bold">
                Página Inicial
              </NavLink>
            </li>
            <li className="nav-item ms-lg-2">
              <NavLink
                to="/Relatorio"
                className="nav-link active text-light fw-bold"
              >
                Relatório
              </NavLink>
            </li>
            <li className="nav-item ms-lg-2">
              <NavLink
                to="/DadosSmart"
                className="nav-link active  text-light fw-bold"
              >
                Dados de monitoramento
              </NavLink>
            </li>
            <li className="nav-item ms-lg-2">
              <NavLink
                to="/Perfil"
                className="nav-link active text-light fw-bold"
              >
                Escolha seu perfil
              </NavLink>
            </li>
            <li className="nav-item ms-lg-2">
              <NavLink
                to="/Sobre"
                className="nav-link active text-light fw-bold"
              >
                Sobre
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
