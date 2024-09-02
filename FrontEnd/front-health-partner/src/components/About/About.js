import React from 'react';
import './About.css';

function About() {
  return (
    <div id="profile-container" className="container pt-lg-2 mt-5 text-light">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">O Saúde Mais</h2>
          <div className="about-description">
            <ul className="about-list">
              <li className="about-item">
                <h3 className="about-item-title">Nosso objetivo</h3>
                <p className="about-item-text">
                  Fornecer os dados monitorados pelo seu Smartwatch de forma
                  simples e descomplicada.
                </p>
              </li>
              <li className="about-item">
                <h3 className="about-item-title">
                  Interface para profissionais da saúde
                </h3>
                <p className="about-item-text">
                  Acesso diferenciado aos dados do Smartwatch dos seus pacientes
                  para profissionais da saúde.
                </p>
              </li>
              <li className="about-item">
                <h3 className="about-item-title">
                  Dados de monitoramento detalhados
                </h3>
                <p className="about-item-text">
                  Visualize informações sobre frequência cardíaca, passos,
                  calorias e distância percorrida.
                </p>
              </li>
              <li className="about-item">
                <h3 className="about-item-title">
                  Relatórios completos de saúde
                </h3>
                <p className="about-item-text">
                  Acesse relatórios detalhados sobre sua saúde ou a de seus
                  pacientes para tomadas de decisões informadas.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
