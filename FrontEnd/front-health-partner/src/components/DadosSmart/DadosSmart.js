// src/components/DadosSmart.js
import React, { useState } from 'react';
import './DadosSmart.css'; // Importe o arquivo CSS para estilização
import { NavLink } from 'react-router-dom';
import { fetchLastValue } from '../../services/dataService'; // Certifique-se de que o caminho está correto
import SmartDataCard from '../SmartDataCard/SmartDataCard'; // Importe o novo componente

function DadosSmart() {
  const [lastFC, setLastFC] = useState(null);
  const [lastPassos, setLastPassos] = useState(null);
  const [lastDist, setLastDist] = useState(null);
  const [lastCalorias, setLastCalorias] = useState(null);

  const handleVerify = async (type) => {
    let value;
    switch (type) {
      case 'bpm':
        value = await fetchLastValue('bpm');
        setLastFC(value || 99);
        break;
      case 'steps':
        value = await fetchLastValue('steps');
        setLastPassos(value || 99);
        break;
      case 'distance':
        value = await fetchLastValue('distance');
        setLastDist(value || 99);
        break;
      case 'calories':
        value = await fetchLastValue('calories');
        setLastCalorias(value || 99);
        break;
      default:
        break;
    }
  };

  return (
    <div id="profile-container" className="container pt-lg-2 mt-5 text-light">
      <div className="row mb-4 mt-2">
        <h2 className="text-center">
          Veja abaixo os dados monitorados pelo seu smartwatch
        </h2>
      </div>
      <div className="row">
        <SmartDataCard
          iconClass="fa-heart"
          title="Frequência Cardíaca (bpm)"
          value={lastFC}
          unit="bpm"
          onVerify={() => handleVerify('bpm')}
        />
        <SmartDataCard
          iconClass="fa-person-walking"
          title="Quantidade de passos (passos)"
          value={lastPassos}
          unit="passos"
          onVerify={() => handleVerify('steps')}
        />
        <SmartDataCard
          iconClass="fa-arrows-turn-to-dots"
          title="Distância percorrida (km)"
          value={lastDist}
          unit="km"
          onVerify={() => handleVerify('distance')}
        />
        <SmartDataCard
          iconClass="fa-chart-simple"
          title="Calorias gastas no dia (cal)"
          value={lastCalorias}
          unit="cal"
          onVerify={() => handleVerify('calories')}
        />
      </div>
      <div className="text-center">
        <button
          type="button"
          className="buttonRel  btn btn-dark btn-lg text-dark fw-bold smartuser-report-btn"
        >
          <NavLink to="/Relatorio" className="nav-link">
            Ver Relatório
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default DadosSmart;
