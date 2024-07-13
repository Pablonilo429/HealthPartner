import React from 'react';
import './Profile.css'; // Importe o arquivo CSS para estilização

function Profile() {
  return (
    <div id="profile-container" className="container pt-lg-2 mt-5 text-light">
      <div className="row mb-1">
        <h2 className="text-lg-center">Qual seu objetivo?</h2>
      </div>
      <div className="row">
        <div className="col">
          <div className="card mt-lg-2">
            <img
              src="/img/card1.jpg"
              className="card-img-top"
              alt="Uma idosa e uma jovem sentadas no parque sorrindo"
            />
            <div className="card-body text-center">
              <p className="card-text fw-bold">Ver os dados do meu smartwatch de maneira fácil e descomplicada!</p>
              <div className="text-center mb-1 p-2 mb-lg-4">
                   {/* Mudar para usar o Link ou router */}
                <a href="DadosSmart.html" className="btn btn-dark fw-bold fs-6">
                  Clique aqui para selecionar esta opção
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-lg-2">
            <img
              src="/img/card2.jpg"
              className="card-img-top"
              alt="Estetoscopio e teclado"
            />
            <div className="card-body text-center">
              <p className="card-text fw-bold">Sou profissional da saúde e busco informações sobre o meu paciente</p>
              <div className="text-center mb-1 p-2 mb-lg-4">
                {/* Mudar para usar o Link ou router */}
                <a href="Relatorioprofissional.html" className="btn btn-dark fw-bold fs-6">
                  Clique aqui para selecionar esta opção
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
