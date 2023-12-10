var token = 'ya29.a0AfB_byC99-YafE-vTmoUr3tZbCPieG86Cr6thaqg1Pglttr835r83k1YtrGSqZbBo0wE8NCuriclyPhpJ8jH1OErRQPO9Sp8ftti3D46gfdxKmglK8XArho3PWkisvnqK4-plXWn1-Ko2JHu8pvJK30nfFIIQCKCeQSgaCgYKATYSARMSFQHGX2MiXCeCZC7pvpi41C04qQVreg0171';
document.addEventListener('DOMContentLoaded', () => {
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
            console.log(bpmArray[0]);

            // Assuming you have an element with the ID 'frequenciacardica' to display the heart rate
            const heartRateElement = document.getElementById('frequenciacardica');

            // Update the HTML with the heart rate data
            if (bpmArray.length > 0) {
                const averageHeartRate = bpmArray.reduce((acc, val) => acc + val, 0) / bpmArray.length;
                heartRateElement.textContent = `${bpmArray[0].toFixed(0)} bpm`;
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
            const accessToken = 'seu_token_aqui'; // Substitua pelo seu token OAuth

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
});



