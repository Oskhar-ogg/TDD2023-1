<<<<<<< Updated upstream
const API = 'http://146.83.198.35:1386/bitacora';
const API2 = 'http://146.83.198.35:1386/agenda';

export const getBitacora = async () => {
  try {
    const res = await fetch(API);
=======

const API_URL = "http://34.0.52.250:3000";

export const getBitacora = async () => {
  try {
    const res = await fetch(`${API_URL}/bitacora`);
>>>>>>> Stashed changes
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch bitacora');
  }
};


export const getBitacoras = async (bitacora_id) => {
  try {
<<<<<<< Updated upstream
    const res = await fetch(`${API}/${bitacora_id}`);
=======
    const res = await fetch(`${API_URL}/bitacora/${bitacora_id}`);
>>>>>>> Stashed changes
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch bitacora with id: ${bitacora_id}`);
  }
};

export const saveBitacora = async (bitacoraData) => {
  try {
<<<<<<< Updated upstream
    const res = await fetch(API, {
=======
    const res = await fetch(`${API_URL}/bitacora`, {
>>>>>>> Stashed changes
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(bitacoraData),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to save bitacora');
  }
};

export const deleteBitacora = async (bitacora_id) => {
  try {
    console.log('Eliminar bitacora con id:', bitacora_id);
<<<<<<< Updated upstream
    const res = await fetch(`${API}/${bitacora_id}`, {
=======
    const res = await fetch(`${API_URL}/bitacora/${bitacora_id}`, {
>>>>>>> Stashed changes
      method: 'DELETE',
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to delete bitacora with id: ${bitacora_id}`);
  }
};

export const MontoBitacora = async () => {
  try {
    const res = await fetch(`${API_URL}/total`); // Cambio en la URL
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch total bitacora amount'); // Actualiza el mensaje de error
  }
};

export const MontoMesBitacora = async () => {
  try {
    const res = await fetch(`${API_URL}/mes`); // Cambio en la URL
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch monthly bitacora amount'); // Actualiza el mensaje de error
  }
};



export const updateBitacora = async (bitacora_id, bitacoraData) => {
  try {
    const res = await fetch(`${API_URL}/${bitacora_id}`, {
      method: 'PUT',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(bitacoraData),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to update bitacora with id: ${bitacora_id}`);
  }
};

export const getAgenda = async () => {
  try {
<<<<<<< Updated upstream
    const res = await fetch(API2);
=======
    const res = await fetch(`${API_URL}/agenda`);
>>>>>>> Stashed changes
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch agenda');
  }
};

export const getAgendas = async (agenda_id) => {
  try {
<<<<<<< Updated upstream
    const res = await fetch(`${API2}/${agenda_id}`);
=======
    const res = await fetch(`${API_URL}/agenda/${agenda_id}`);
>>>>>>> Stashed changes
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch agenda with id: ${agenda_id}`);
  }
};

export const saveAgenda = async (agendaData) => {
  try {
<<<<<<< Updated upstream
    const res = await fetch(API2, {
=======
    const res = await fetch(`${API_URL}/agenda`, {
>>>>>>> Stashed changes
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(agendaData),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to save agenda');
  }
};

export const deleteAgenda = async (agenda_id) => {
  try {
    console.log('Eliminar agenda con id:', agenda_id);
<<<<<<< Updated upstream
    const res = await fetch(`${API2}/${agenda_id}`, {
=======
    const res = await fetch(`${API_URL}/agenda/${agenda_id}`, {
>>>>>>> Stashed changes
      method: 'DELETE',
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to delete agenda with id: ${agenda_id}`);
  }
};
<<<<<<< Updated upstream
=======

export const getClienteHistoricoCaldera = async (cliente_id) => {
  try {
    const res = await fetch(`${API_URL}/mantenciones/caldera?cliente_id=${cliente_id}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch historico mantenciones caldera cliente');
  }
};

export const getClienteHistoricoCalefont = async (cliente_id) => {
  try {
    const res = await fetch(`${API_URL}/mantenciones/calefont?cliente_id=${cliente_id}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch historico mantenciones calefont cliente');
  }
};


export const saveMantencionesCaldera = async (mantencionesCalderaData) => {
  try {
    const res = await fetch(`${API_URL}/mantenciones/caldera`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(mantencionesCalderaData),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to save mantenciones caldera');
  }
}

export const saveMantencionesCalefont = async (mantencionesCalefontData) => {
  try {
    const res = await fetch(`${API_URL}/mantenciones/calefont`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(mantencionesCalefontData),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to save mantenciones calefont');
  }
}

export const getClientes = async () => {
  try {
    const res = await fetch(`${API_URL}/clientes`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch clientes');
  }
}

export const saveCliente = async (clienteData) => {
  try {
    const res = await fetch(`${API_URL}/clientes`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(clienteData),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to save cliente');
  }
}



export const getMantencionesCaldera = async () => {
  try {
    const res = await fetch(`${API_URL}/mantenciones/caldera`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch mantenciones caldera');
  }
}

export const getMantencionesCalefont = async () => {
  try {
    const res = await fetch(`${API_URL}/mantenciones/calefont`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch mantenciones calefont');
  }
}


>>>>>>> Stashed changes
