import React, { useEffect, useState } from 'react';
import './SmartUserData.css';
import { fetchLastValue } from '../../services/dataService';

function SmartUserData() {
  const [lastFC, setLastFC] = useState(null);
  const [lastPassos, setLastPassos] = useState(null);
  const [lastDist, setLastDist] = useState(null);
  const [lastCalorias, setLastCalorias] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fc = await fetchLastValue('bpm');
        const passos = await fetchLastValue('steps');
        const dist = await fetchLastValue('distance');
        const calorias = await fetchLastValue('calories');

        setLastFC(fc || 99);
        setLastPassos(passos || 99);
        setLastDist(dist || 99);
        setLastCalorias(calorias || 99);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="profile-container" className="container pt-lg-4 mt-5 text-dark">
      <div className="row mb-3 mt-2">
        <h2 className="text-center text-white">Confira o Seu Relatório</h2>
      </div>
      <div className="row mb-3 mt-2">
        <div className="col-md-6 mb-4">
          <div className="report-section one">
            <h3 className="report-title">Frequência Cardíaca</h3>
            <ul className="report-list">
              <li>
                Sua frequência cardíaca medida foi de{' '}
                <strong>{lastFC} bpm</strong>.
              </li>
              <li className="report-note">
                Se você estiver em repouso, a frequência cardíaca ideal varia
                entre 50 a 100 bpm.
              </li>
              <li>
                Durante exercícios físicos, é possível que sua frequência
                cardíaca aumente acima de 100 bpm. Você pode calcular sua
                frequência cardíaca máxima fazendo o seguinte cálculo: 220 -
                Idade = BPM máximo.
              </li>
              <li>Para maiores informações, consulte seu médico.</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="report-section one">
            <h3 className="report-title">Quantidade de Passos</h3>
            <ul className="report-list">
              <li>
                Sua quantidade de passos hoje foi de{' '}
                <strong>{lastPassos}</strong> e está abaixo da quantidade ideal.
              </li>
              <li>
                Segundo a Organização Mundial da Saúde (OMS), a quantidade de
                passos ideal é de 10.000 passos por dia. Estudos indicam que
                atingir essa meta pode contribuir significativamente para a
                manutenção de um estilo de vida saudável, ajudando a reduzir o
                risco de doenças cardíacas, diabetes tipo 2 e alguns tipos de
                câncer.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="report-section">
            <h3 className="report-title">Distância Percorrida</h3>
            <ul className="report-list">
              <li>
                A distância que você percorreu hoje foi de{' '}
                <strong>{lastDist} km</strong>.
              </li>
              <li>
                A distância percorrida ideal depende dos seus objetivos em
                relação a seus exercícios diários. Para mais informações,
                consulte um profissional de Educação Física.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="report-section">
            <h3 className="report-title">Calorias Gastas</h3>
            <ul className="report-list">
              <li>
                Você gastou <strong>{lastCalorias} cal</strong> hoje.
              </li>
              <li>
                A quantidade de calorias gastas ideal depende de cada indivíduo
                e de suas metas. Verifique mais informações com seu
                nutricionista.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-white">
          * A frequência cardíaca mostrada acima se refere à última medida
          obtida.
        </p>
      </div>
    </div>
  );
}

export default SmartUserData;
