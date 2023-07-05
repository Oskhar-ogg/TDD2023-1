const API = 'http://10.0.2.2:3000/bitacora';

export const getBitacora = async () => {
  try {
    const res = await fetch(API);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch bitacora');
  }
};

export const saveBitacora = async (nuevabitacora) => {
  try {
    const res = await fetch(API, {
      method: 'POST',
      headers: {
        Accept: 'application/json', "Content-Type": 'application/json'},
      body: JSON.stringify(nuevabitacora),
    });
  return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to save bitacora');
  }
};
