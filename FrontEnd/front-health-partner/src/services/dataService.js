export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`http://localhost:8001/api/${endpoint}`, {
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
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const fetchLastValue = async (endpoint) => {
  const data = await fetchData(endpoint);
  return data ? data[data.length - 1] : null;
};
