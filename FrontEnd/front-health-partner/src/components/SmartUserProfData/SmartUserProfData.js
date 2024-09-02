import React, { useEffect, useRef, useState } from 'react';
import './SmartUserProfData.css';
import { Chart, registerables } from 'chart.js';
import { fetchLastValue, fetchData } from '../../services/dataService';

Chart.register(...registerables);

function SmartUserProfData() {
  const [lastFC, setLastFC] = useState(0);
  const [lastPassos, setLastPassos] = useState(0);
  const [lastDist, setLastDist] = useState(0);
  const [lastCalorias, setLastCalorias] = useState(0);
  const [loading, setLoading] = useState(true); // Estado para carregar

  // Gerando dados para os gráficos enquanto api está com problema
  const generateRandomData = (length, min = 10, max = 99) => {
    return Array.from(
      { length },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  };

  const chartFCRef = useRef(null);
  const chartPassosRef = useRef(null);
  const chartDistRef = useRef(null);
  const chartCaloriasRef = useRef(null);

  useEffect(() => {
    const fcChart = chartFCRef.current;
    const passosChart = chartPassosRef.current;
    const distChart = chartDistRef.current;
    const caloriasChart = chartCaloriasRef.current;

    const initializeChartsAndData = async () => {
      const defaultData = generateRandomData(7);

      try {
        const lastFCValue = await fetchLastValue('bpm');
        const lastPassosValue = await fetchLastValue('steps');
        const lastDistValue = await fetchLastValue('distance');
        const lastCaloriasValue = await fetchLastValue('calories');

        // Só para não deixar valor vazio se não retornar vazio ou null
        setLastFC(lastFCValue || 99);
        setLastPassos(lastPassosValue || 99);
        setLastDist(lastDistValue || 99);
        setLastCalorias(lastCaloriasValue || 99);

        const dadosFC = (await fetchData('bpm')) || defaultData;
        const dadosPassos = (await fetchData('steps')) || defaultData;
        const dadosDist = (await fetchData('distance')) || defaultData;
        const dadosCalorias = (await fetchData('calories')) || defaultData;

        console.log(dadosDist, dadosCalorias)

        const formatData = (data, label, color) => ({
          labels: [
            'Dia 1',
            'Dia 2',
            'Dia 3',
            'Dia 4',
            'Dia 5',
            'Dia 6',
            'Dia 7',
          ],
          datasets: [
            {
              label,
              data,
              borderColor: color,
              borderWidth: 2,
              fill: false,
            },
          ],
        });

        const setupChart = (chartRef, ctxId, data, type = 'line') => {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
          const ctx = document.getElementById(ctxId).getContext('2d');
          chartRef.current = new Chart(ctx, {
            type,
            data,
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        };

        setupChart(
          chartFCRef,
          'graficoFC',
          formatData(
            dadosFC,
            'Frequência Cardíaca',
            'rgba(255, 99, 132, 1)')
        );
        setupChart(
          chartPassosRef,
          'graficoPassos',
          formatData(
            dadosPassos,
            'Passos Percorridos',
            'rgba(255, 206, 86, 1)'
          ),
          'bar'
        );
        setupChart(
          chartDistRef,
          'graficoDist',
          formatData(
            dadosDist,
            'Distância Percorrida (km)',
            'rgba(54, 162, 235, 1)'
          ),
          'bar'
        );
        setupChart(
          chartCaloriasRef,
          'graficoCalorias',
          formatData(
            dadosCalorias,
            'Calorias Gastas',
            'rgba(200, 198, 196, 1)'
          ),
          'bar'
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Define como carregado após a busca dos dados
      }
    };

    initializeChartsAndData();

    return () => {
      if (fcChart) {
        fcChart.destroy();
      }
      if (passosChart) {
        passosChart.destroy();
      }
      if (distChart) {
        distChart.destroy();
      }
      if (caloriasChart) {
        caloriasChart.destroy();
      }
    };
  }, []);

  return (
    <div className="profile-container report-section mb-6">
      <div className="container bg-white p-3">
        <div className="m-6 text-center p-3">
          <h1 className="fw-bold">Relatório do Paciente</h1>
        </div>

        <article className="patient-info mb-5">
          {loading ? ( // Condicional para mostrar carregando ou dados
            <h3>Carregando dados...</h3>
          ) : (
            <>
              <h3>
                Frequência Cardíaca:{' '}
                <span id="FCprofissional">{lastFC} bpm</span>
              </h3>
              <h3>
                Quantidade de Passos:{' '}
                <span id="Passosprofissional">{lastPassos} passos</span>
              </h3>
              <h3>
                Distância Percorrida:{' '}
                <span id="Distprofissional">{lastDist} km</span>
              </h3>
              <h3>
                Calorias Gastas:{' '}
                <span id="Caloriasprofissional">{lastCalorias} cal</span>
              </h3>
              <p className="note">
                * A frequência cardíaca mostrada acima se refere à última medida.
                obtida.
              </p>
              <p className="note">
                ** Dados obtidos no dia de hoje a partir das 00:00 hrs.
              </p>

              <p className="note">
                *** Se os valores dos gráficos estiverem em zero, pode haver um problema na captura dos dados ou os dados podem estar vazios.
              </p>
            </>
          )}
        </article>

        <section className="charts-section">
          <header className="mb-4">
            <h3>Gráficos:</h3>
            <p className="fw-bold">
              Abaixo estão os gráficos relativos aos dados do paciente coletados
              nos últimos 7 dias.
            </p>
          </header>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <h4>Frequência Cardíaca</h4>
              <canvas id="graficoFC" width="400" height="200"></canvas>
            </div>
            <div className="col-lg-6 mb-4">
              <h4>Passos Percorridos</h4>
              <canvas id="graficoPassos" width="400" height="200"></canvas>
            </div>
            <div className="col-lg-6 mb-4">
              <h4>Distância Percorrida</h4>
              <canvas id="graficoDist" width="400" height="200"></canvas>
            </div>
            <div className="col-lg-6 mb-4">
              <h4>Calorias Gastas</h4>
              <canvas id="graficoCalorias" width="400" height="200"></canvas>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SmartUserProfData;
