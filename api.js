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

export const saveBitacora = async (bitacoraData) => {
  try {
    const res = await fetch(API, {
      method: 'POST',
      headers: { Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify(bitacoraData),
    });
  return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to save bitacora');
  }
};

export const deleteBitacora = async (bitacora_id) => {
    console.log('Eliminar bitacora con id: ', bitacora_id);
    const res = await fetch(`${API}/${bitacora_id}`, {
      method: 'DELETE',
    });
    return await res.json();
};
