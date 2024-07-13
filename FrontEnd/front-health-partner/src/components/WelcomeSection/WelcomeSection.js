import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do React Router
import './WelcomeSection.css';

function WelcomeSection() {
  return (
    <div className="container pt-lg-2 mt-5 text-light welcome-section">
      <div className="mt-3 text-center">
        <h1>Bem-vindo ao Saúde Mais</h1>
      </div>
      <div className="pt-lg-5 p-4 text-center">
        <h4>Aqui você terá acesso aos dados monitorados pelo seu SmartWatch e a relatórios sobre sua saúde!</h4>
      </div>
      <div className="pt-lg-2 p-2 m-2 text-center">
        <div className="m-lg-2">
          <button type="button" className="btn btn-light fs-6 fw-bold mb-2">
            <Link to="/Perfil" className="nav-link active text-dark fw-bold">Clique aqui para começar</Link>
          </button>
        </div>
        <div className="m-lg-2">
          <button type="button" className="btn btn-light fs-6 fw-bold mb-2">
            <Link to="/Sobre" className="nav-link active text-dark fw-bold">Clique aqui para saber mais</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;


