export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`http://localhost:8001/api/fitness/${endpoint}`, {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${accessToken}`, // Inclua o token 
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return extractIntVals(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const fetchLastValue = async (endpoint) => {
  const data = await fetchData(endpoint);
  return data ? data[data.length - 1] : null;
};

const extractIntVals = (data) => {
  if (!data || !data.bucket || !Array.isArray(data.bucket)) {
    console.warn('Data is not in expected format:', data);
    return [];
  }

  return data.bucket
    .map(item => item.dataset ? item.dataset[0] : null) // Acessa o primeiro item do array dataset
    .filter(dataset => dataset) // Remove nulls
    .map(dataset => dataset.point ? dataset.point[0] : null) // Acessa o primeiro item do array point
    .filter(point => point) // Remove nulls
    .map(point => point.value ? point.value[0] : { intVal: 0 }) // Acessa o primeiro item do array value, define intVal como 0 se vazio
    .map(value => value.intVal !== undefined ? value.intVal : 0); // Extrai intVal ou define como 0 se não definido
};
