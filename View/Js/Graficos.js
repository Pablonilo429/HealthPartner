
// Dados de exemplo (substitua com seus próprios dados)
const dadosFC = {
    labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'],
    datasets: [
        {
            label: 'Frequência Cardíaca',
            data: [80, 85, 88, 82, 90, 87, 92],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false
        }
    ]
};

const dadosPassos = {
    labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'],
    datasets: [
        {
            label: 'Passos Percorridos',
            data: [10000, 11000, 9500, 12000, 10500, 11200, 11500],
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            fill: false
        }
    ]
};

const dadosDist = {
    labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'],
    datasets: [
        {
            label: 'Distância Percorrida (km)',
            data: [5, 6, 4, 7, 5.5, 6.2, 6.8],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false
        }
    ]
};

const dadosCalorias = {
    labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'],
    datasets: [
        {
            label: 'Calorias Gastas',
            data: [300, 320, 280, 350, 310, 330, 340],
            borderColor: 'rgba(200, 198, 196, 1)',
            borderWidth: 2,
            fill: false
        }
    ]
};

// Configuração do gráfico
const configFC = {
    type: 'line',
    data: dadosFC,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const configPassos = {
    type: 'line',
    data: dadosPassos,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const configDist = {
    type: 'line',
    data: dadosDist,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const configCalorias = {
    type: 'line',
    data: dadosCalorias,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};




