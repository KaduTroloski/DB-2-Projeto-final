import axios from "axios";

const getPeople = async () => {
  const response = await axios.get('http://localhost:3000/pessoas');
  if (response.status !== 200) {
    throw new Error(`Erro buscando pessoas: ${response.statusText}`);
  }
  return response.data;
}

const createPerson = async (person) => {
  const response = await axios.post('http://localhost:3000/pessoas', person);
  if (response.status !== 201) {
    throw new Error(`Erro ao criar pessoa: ${response.statusText}`);
  }
  return response.data;
}

const editPerson = async (id) => {
  const response = await axios.put(`http://localhost:3000/pessoas/${id}`);
  if (response.status !== 204) {
    throw new Error(`Erro ao editar pessoa ${id}: ${response.statusText}`);
  }
  return response.data;
}

const deletePerson = async (id) => {
  const response = await axios.delete(`http://localhost:3000/pessoas/${id}`);
  if (response.status !== 204) {
    throw new Error(`Erro ao deletar pessoa ${id}: ${response.statusText}`);
  }
  return response.data;
}
