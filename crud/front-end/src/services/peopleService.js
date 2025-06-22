import axios from "axios";

const baseURL = 'http://localhost:3001/';

export const getPeople = async () => {
  const response = await axios.get(baseURL + 'pessoas');
  if (response.status !== 200) {
    throw new Error(`Erro buscando pessoas: ${response.statusText}`);
  }
  return response.data
}

export const createPerson = async (data) => {
  const response = await axios.post(baseURL + 'pessoas', data);
  if (response.status !== 201) {
    throw new Error(`Erro ao criar pessoa: ${response.statusText}`);
  }
  return response.data;
}

export const editPerson = async (id, data) => {
  const response = await axios.put(baseURL + `pessoas/${id}`, data);
  if (response.status !== 204) {
    throw new Error(`Erro ao editar pessoa ${id}: ${response.statusText}`);
  }
  return response.data;
}

export const deletePerson = async (id) => {
  const response = await axios.delete(baseURL + `pessoas/${id}`);
  if (response.status !== 204) {
    throw new Error(`Erro ao deletar pessoa ${id}: ${response.statusText}`);
  }
  return response.data;
}
