
import axios from 'axios';
const api='http://localhost:3001/pessoas';

export const listar = async()=> (await axios.get(api)).data;
export const buscar = async(id)=> (await axios.get(`${api}/${id}`)).data;
export const criar = async(dados)=> (await axios.post(api,dados)).data;
export const atualizar = async(id,dados)=> (await axios.put(`${api}/${id}`,dados)).data;
export const excluir = async(id)=> axios.delete(`${api}/${id}`);
