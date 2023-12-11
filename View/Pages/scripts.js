var token = 'ya29.a0AfB_byCeai0_B55bihSxX4dYJf04zB2M_qqERzmk9wqIdTZuB42KF5xKWUFZDySo0D0H5Dw9L3cO00ySOh6MS0Es-PHKu_Y47YKdQbtFk4WEodr-0AypSIzGagS_zx-JL0YBS85gwhFi95SGT7e0BlY5wefiLryXopK_aCgYKAbkSARMSFQHGX2MiyRCNzHMCfyZ-9xmHV_c_Kg0171';
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('DadosSmart.html')) {
        const verificarButtoncardio = document.getElementById('botaocard');
        verificarButtoncardio.addEventListener('click', async () => {
            try {
                const accessToken = token; // Substitua pelo seu token OAuth

                const response = await fetch('http://localhost:8001/bpm', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                const bpmData = await response.json();
                const bpmArray = Array.isArray(bpmData) ? bpmData : [bpmData];
                console.log(bpmArray[6]);

                // Assuming you have an element with the ID 'frequenciacardica' to display the heart rate
                const heartRateElement = document.getElementById('frequenciacardica');

                // Update the HTML with the heart rate data
                if (bpmArray.length > 0) {
                    const averageHeartRate = bpmArray.reduce((acc, val) => acc + val, 0) / bpmArray.length;
                    heartRateElement.textContent = `${bpmArray[6].toFixed(0)} bpm`;
                } else {
                    heartRateElement.textContent = 'Sem dados disponíveis.';
                }
            } catch (error) {
                console.error('Erro ao buscar a frequência cardíaca:', error);
            }
        });
        const verificarButtonPassos = document.getElementById('botaopassos');
        verificarButtonPassos.addEventListener('click', async () => {
            try {
                const accessToken = token; // Substitua pelo seu token OAuth

                const response = await fetch('http://localhost:8001/steps2', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                const stepsData = await response.json();
                const stepsArray = Array.isArray(stepsData) ? stepsData : [stepsData];
                console.log(stepsArray[0]);

                // Assuming you have an element with the ID 'passos' to display the steps count
                const stepsElement = document.getElementById('passos');

                // Update the HTML with the steps count data
                if (stepsArray.length > 0) {
                    stepsElement.textContent = `${stepsArray[5]}`;
                } else {
                    stepsElement.textContent = 'Sem dados disponíveis.';
                }
            } catch (error) {
                console.error('Erro ao buscar a contagem de passos:', error);
            }
        });
        const verificarButtonDistancia = document.getElementById('botaodist');
        verificarButtonDistancia.addEventListener('click', async () => {
            try {
                const accessToken = token; // Substitua pelo seu token OAuth

                const response = await fetch('http://localhost:8001/distance', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                const distanceData = await response.json();
                const distanceArray = Array.isArray(distanceData) ? distanceData : [distanceData];
                console.log(distanceArray[6]);

                // Assuming you have an element with the ID 'distancia' to display the distance
                const distanceElement = document.getElementById('distancia');

                // Update the HTML with the distance data converted to kilometers
                if (distanceArray.length > 0) {
                    const totalDistanceMeters = distanceArray[5];
                    const totalDistanceKm = totalDistanceMeters / 1000; // Conversion from meters to kilometers
                    distanceElement.textContent = `${totalDistanceKm.toFixed(2)} km`;
                } else {
                    distanceElement.textContent = 'Sem dados disponíveis.';
                }
            } catch (error) {
                console.error('Erro ao buscar a distância percorrida:', error);
            }
        });
        const verificarButtonCalorias = document.getElementById('botaocal');
        verificarButtonCalorias.addEventListener('click', async () => {
            try {
                const accessToken = token; // Substitua pelo seu token OAuth

                const response = await fetch('http://localhost:8001/calories', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                const caloriesData = await response.json();
                const caloriesArray = Array.isArray(caloriesData) ? caloriesData : [caloriesData];
                console.log(caloriesArray[0]);

                // Assuming you have an element with the ID 'calorias' to display the burned calories
                const caloriesElement = document.getElementById('calorias');

                // Update the HTML with the burned calories data
                if (caloriesArray.length > 0) {
                    const totalCalories = caloriesArray.reduce((acc, val) => acc + val, 0);
                    caloriesElement.textContent = `${caloriesArray[5].toFixed(0)}`;
                } else {
                    caloriesElement.textContent = 'Sem dados disponíveis.';
                }
            } catch (error) {
                console.error('Erro ao buscar as calorias gastas:', error);
            }
        });
    }
    if (window.location.pathname.endsWith('Relatorio.html')) {
        const updateReport = async () => {
            try {
                const accessToken = token; // Substitua pelo seu token OAuth

                // Fetch para obter os dados da frequência cardíaca
                const responseFC = await fetch('http://localhost:8001/bpm', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                const heartRateData = await responseFC.json();
                document.getElementById('FCrelatorio').textContent = heartRateData[6]; // Atualiza o elemento HTML com o valor da frequência cardíaca

                // Fetch para obter os dados da quantidade de passos
                const responsePassos = await fetch('http://localhost:8001/steps2', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                const stepsData = await responsePassos.json();
                document.getElementById('passosrelatorio').textContent = stepsData[5]; // Atualiza o elemento HTML com o valor da quantidade de passos

                // Fetch para obter os dados da distância percorrida
                const responseDist = await fetch('http://localhost:8001/distance', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                const distanceData = await responseDist.json();
                const distanceKm = distanceData[5] / 1000; // Convertendo de metros para quilômetros
                document.getElementById('distrelatorio').textContent = distanceKm.toFixed(2); // Atualiza o elemento HTML com o valor da distância percorrida

                // Fetch para obter os dados das calorias gastas
                const responseCal = await fetch('http://localhost:8001/calories', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                const caloriesData = await responseCal.json();
                document.getElementById('calrelatorio').textContent = caloriesData[5].toFixed(0); // Atualiza o elemento HTML com o valor das calorias gastas
            } catch (error) {
                console.error('Erro ao buscar os dados do relatório:', error);
            }
        };

        // Chama a função para atualizar o relatório quando a página é carregada
        updateReport();


    }
    if (window.location.pathname.endsWith('Relatorioprofissional.html')) {
        const updateReport = async () => {
            try {
                const accessToken = token; // Substitua pelo seu token OAuth

                // Fetch para obter os dados da frequência cardíaca
                const responseFC = await fetch('http://localhost:8001/bpm', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                const heartRateData = await responseFC.json();
                document.getElementById('FCprofissional').textContent = heartRateData[6] + " bpm"; // Atualiza o elemento HTML com o valor da frequência cardíaca

                // Fetch para obter os dados da quantidade de passos
                const responsePassos = await fetch('http://localhost:8001/steps2', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                const stepsData = await responsePassos.json();
                document.getElementById('Passosprofissional').textContent = stepsData[5]; // Atualiza o elemento HTML com o valor da quantidade de passos

                // Fetch para obter os dados da distância percorrida
                const responseDist = await fetch('http://localhost:8001/distance', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                const distanceData = await responseDist.json();
                const distanceKm = distanceData[5] / 1000; // Convertendo de metros para quilômetros
                document.getElementById('Distprofissional').textContent = distanceKm.toFixed(2) + " KM"; // Atualiza o elemento HTML com o valor da distância percorrida

                // Fetch para obter os dados das calorias gastas
                const responseCal = await fetch('http://localhost:8001/calories', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                const caloriesData = await responseCal.json();
                document.getElementById('Caloriasprofissional').textContent = caloriesData[5].toFixed(0) + " kcal"; // Atualiza o elemento HTML com o valor das calorias gastas
            } catch (error) {
                console.error('Erro ao buscar os dados do relatório:', error);
            }
        };

        // Chama a função para atualizar o relatório quando a página é carregada
        updateReport();



    }

});



